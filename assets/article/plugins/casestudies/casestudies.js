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
		const response = await fetch(
			`${this.opts.casestudies.url}/api/contents?page=1&contentType=${this.opts.insights.contentTypes.caseStudies}&status=published`
		);
		const dataJson = await response.json();
		const items = {};
		const selectOptions = { none: "-- NONE --" };

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
			items[single] = item;
			var singleName = dataJson[single].contentType.substring(
				0,
				dataJson[single].contentType.length - 1
			);
			selectOptions[
				single
			] = `${dataJson[single].fieldValues.name} - ${singleName}`;
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
		var instance = this._buildInstance(stack);

		if (instance) {
			this.app.block.add({ instance: instance });
			this.app.source.toggle();
			this.app.source.toggle();
		}
	},
	_buildInstance: function (stack, instance) {
		this.app.popup.close();

		var data = stack.getData();

		var item1 = data.item1;
		var item2 = data.item2;
		var item3 = data.item3;
		var items = [item1, item2, item3];
		var htmlStructure = ``;
		var htmlItems = ``;
		var number = 1;

		for (var item of items) {
			if (item !== "none") {
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
                              <h2 class="accordion-header" id="csh${number}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cs${number}"
                                        aria-expanded="false" aria-controls="cs${number}">
                                  Technological independence and strong partnerships
                                </button>
                              </h2>
                              <div id="cs${number}" class="accordion-collapse collapse" aria-labelledby="csh${number}" data-bs-parent="#csr${number}">
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
			number++;
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
