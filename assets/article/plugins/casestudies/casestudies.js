// Icon
ArticleEditor.iconCaseStudies = '<i class="fa fa-user"></i>';

// Plugin
ArticleEditor.add("plugin", "casestudies", {
	defaults: {
		url: window.location.origin,
		contentTypes: {
			caseStudies: "case-studies",
		},
	},
	translations: {
		en: {
			casestudies: {
				casestudies: "Case Studies",
				add: "Insert",
				cancel: "Cancel",
				label: "Choose the design you want to insert",
			},
			blocks: {
				casestudies: "Case Studies",
			},
		},
	},
	init: function () {
		this.elements = {};
	},
	start: async function () {

		const testPages = 5;
		const pageSize = 200;
		let items = {};
		let selectOptions = { none: "-- NONE --" };
		let itemPosition = 0;

		for (let i = 1; i <= testPages; i++) {
			let apiResponse = await fetch(
				`${this.opts.casestudies.url}/api/contents?page=${i}&contentType=${this.opts.insights.contentTypes.caseStudies}&status=published&pageSize=${pageSize}`
			);
			let json = await apiResponse.json();

			if (!json.length) {
				// if no data - no need to send more requests
				break;
			}

			const result = await this.getItemsData(json, itemPosition);

			items = {
				...items,
				...result[0],
			};
			selectOptions = {
				...selectOptions,
				...result[1],
			};
			itemPosition = result[2];

			console.log('casestudies...');
			console.log(json);
		}

		this.elements = {
			items,
			selectOptions,
		};

		this.app.addbar.add("casestudies", {
			title: "## blocks.casestudies ##",
			icon: ArticleEditor.iconCaseStudies,
			command: "casestudies.popup",
		});
	},
	getItemsData: async function (dataJson, itemPosition) {
		const newItems = {};
		const newSelectOptions = {};
		const isLocal = window.location.hostname === "127.0.0.1";

		for (const single in dataJson) {
			const item = {
				id: dataJson[single].id,
				title: dataJson[single].fieldValues.title,
				description: dataJson[single].fieldValues.preview_description_text,
				slug: dataJson[single].fieldValues.slug,
				photo:
					isLocal
						? "https://www.luxoft.com/upload/medialibrary/563/behavioral_archetypes.png"
						: dataJson[single].fieldValues.photo.url,
				contentType: dataJson[single].contentType,
				industry: dataJson[single].taxonomyValues.industries
					? dataJson[single].taxonomyValues.industries[
							Object.keys(dataJson[single].taxonomyValues.industries)[0]
					  ]
					: "",
			};

			newItems[itemPosition] = item;
			newSelectOptions[itemPosition] = `${dataJson[single].fieldValues.name}`;
			itemPosition++;
		}

		return [newItems, newSelectOptions, itemPosion];
	},
	popup: function () {
		var stack = this.app.popup.create("casestudies", {
			title: "## casestudies.casestudies ##",
			width: "400px",
			command: "addbar.popup",
			form: {
				item1: {
					type: "select",
					label: "Choose an item to insert",
					options: this.elements.selectOptions,
				},
				item2: {
					type: "select",
					label: "Choose an item to insert",
					options: this.elements.selectOptions,
				},
				item3: {
					type: "select",
					label: "Choose an item to insert",
					options: this.elements.selectOptions,
				},
			},
			footer: {
				insert: {
					title: "## casestudies.add ##",
					command: "casestudies.insert",
					type: "primary",
				},
				cancel: { title: "## casestudies.cancel ##", command: "popup.close" },
			},
		});

		stack.open({ focus: "casestudies" });
	},
	insert: function (stack) {
		this._buildInstance(stack);
	},
	_buildInstance: function (stack) {
		this.app.popup.close();

		var data = stack.getData();

		var item1 = data.item1;
		var item2 = data.item2;
		var item3 = data.item3;
		var items = [item1, item2, item3];
		var htmlStructure = ``;
		var htmlItems = ``;
		var id = Math.floor(Math.random() * 9999);

		for (var item of items) {
			if (item !== "none") {
				htmlItems += `<div class="html-code">
                          <img src="${this.elements.items[item].photo}" alt="">
                          <h4>${this.elements.items[item].title.en}</h4>
                          <p class="gray">${this.elements.items[item].description}</p>
                          <div class="btn-container">
                            <a class="btn btn-text btn-icon focus" href="/${this.elements.items[item].contentType}/${this.elements.items[item].slug}">
                              <div class="text-container">
                                  <div class="text">Next story</div>
                                  <div class="arr-offering">
                                      <i class="arr-small one"></i>
                                      <i class="arr-small two"></i>
                                      <i class="arr-small three"></i>
                                  </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        {% setcontent item = '${this.elements.items[item].contentType}/${this.elements.items[item].id}' %}
						{% set caseStudiesId = '${id}' %}
                        {% if item is not empty %}
                          {{ include('@theme/partials/_case_studies.twig') }}
                        {% endif %}`;
			}
		}

		htmlStructure = `<section class="container-case-studies container-xxl">
                        <h2>Case Studies</h2>
                        <div class="row" id="csr${id}">
                          ${htmlItems}
                        </div>
                      </section>`;

		this.app.editor.insertContent({
			html: htmlStructure,
		});
	},
});
