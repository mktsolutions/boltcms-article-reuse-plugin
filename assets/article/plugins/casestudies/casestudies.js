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
		const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
		var items = {};
		var selectOptions = { none: "-- NONE --" };
		var itemPosion = 0

		for await (const page of pages.map(page => fetch(`${this.opts.casestudies.url}/api/contents?page=${page}&contentType=${this.opts.insights.contentTypes.caseStudies}&status=published`))) {
            const dataJson = await page.json()

            if (Object.keys(dataJson).length > 0) {
                const result = await this.getItemsData(dataJson, itemPosion)
                items = {
                    ...items,
                    ...result[0]
                }
                selectOptions = {
                    ...selectOptions,
                    ...result[1]
                }
                itemPosion = result[2]

                continue
            } 
            
            break
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
	getItemsData: async function(dataJson, itemPosion) {
        const newItems = {}
        const newSelectOptions = {}

        for (const single in dataJson) {
			const item = {
				id: dataJson[single].id,
				title: dataJson[single].fieldValues.title,
				description: dataJson[single].fieldValues.preview_description_text,
				slug: dataJson[single].fieldValues.slug,
				photo:
					window.location.hostname === "127.0.0.1"
						? "https://www.luxoft.com/upload/medialibrary/563/behavioral_archetypes.png"
						: dataJson[single].fieldValues.photo.url,
				contentType: dataJson[single].contentType,
				industry: dataJson[single].taxonomyValues.industries
					? dataJson[single].taxonomyValues.industries[
							Object.keys(dataJson[single].taxonomyValues.industries)[0]
					  ]
					: "",
			};
			newItems[itemPosion] = item;
			newSelectOptions[itemPosion] = `${dataJson[single].fieldValues.name}`;
			itemPosion++
		}

        return [newItems, newSelectOptions, itemPosion]
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

		for (var item of items) {
			if (item !== "none") {
				var id = Math.floor(Math.random() * 9999);
				htmlItems += `<div class="col html-code">
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
                        <div class="twig-code">{% setcontent item = '${this.elements.items[item].contentType}/${this.elements.items[item].id}' %}</div>
                        {% if item is not empty %}
                          <div class="col twig-code">
                            <a href="/${this.elements.items[item].contentType}/{{ item.slug }}">
                              <div class="d-flex flex-sm-column">
                                <img src="{{ item.photo.url }}" alt="vector">
                                {% if item|taxonomies['industries'] is defined %}
                                  <p class="body-text-bold">
                                  {% for industry in item|taxonomies['industries'] %}
                                    {{ industry.name }}{% if not loop.last %}, {% endif %}
                                  {% endfor %}
                                  </p>
                                {% endif %}
                                <h4>{{ item.title }}</h4>
                                <p class="gray">{{ item.preview_description_text }}</p>
                                <button class="btn btn-text btn-icon focus" type="button">
                                      <div class="text-container">
                                          <div class="text">Next Story</div>
                                          <div class="arr-offering">
                                              <i class="arr-small one"></i>
                                              <i class="arr-small two"></i>
                                              <i class="arr-small three"></i>
                                          </div>
                                      </div>
                                </button>
                              </div>
                            </a>
                            <div class="accordion-item">
                              <img src="{{ item.photo.url }}" alt="vector">
                              <h2 class="accordion-header" id="csh${id}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cs${id}"
                                        aria-expanded="false" aria-controls="cs${id}">
                                  Technological independence and strong partnerships
                                </button>
                              </h2>
                              <div id="cs${id}" class="accordion-collapse collapse" aria-labelledby="csh${id}" data-bs-parent="#csr${id}">
                                {% if item|taxonomies['industries'] is defined %}
                                  <p class="body-text-bold">
                                  {% for industry in item|taxonomies['industries'] %}
                                    {{ industry.name }}{% if not loop.last %}, {% endif %}
                                  {% endfor %}
                                  </p>
                                {% endif %}
                                <h4>{{ item.title }}</h4>
                                <p class="gray">{{ item.preview_description_text }}</p>
                                <button class="btn btn-text btn-icon focus" type="button">
                                      <div class="text-container">
                                          <div class="text">Next Story</div>
                                          <div class="arr-offering">
                                              <i class="arr-small one"></i>
                                              <i class="arr-small two"></i>
                                              <i class="arr-small three"></i>
                                          </div>
                                      </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        {% endif %}`;
			}
		}

		htmlStructure = `<section class="container-case-studies container-xxl">
                        <h2>Case Studies</h2>
                        <div class="row">
                          ${htmlItems}
                        </div>
                      </section>`;

		this.app.editor.insertContent({
			html: htmlStructure,
		});
	},
});
