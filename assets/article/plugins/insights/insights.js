// Icon
ArticleEditor.iconInsights = '<i class="fa fa-user"></i>';

// Plugin
ArticleEditor.add("plugin", "insights", {
	defaults: {
		url: window.location.origin,
		contentTypes: {
			videos: "videos",
			blogs: "blog",
			caseStudies: "case-studies",
			pressReleases: "pr",
			whitepapers: "whitepapers",
		},
	},
	translations: {
		en: {
			insights: {
				insights: "Insights",
				add: "Insert",
				cancel: "Cancel",
				label: "Choose the design you want to use",
			},
			blocks: {
				insights: "Insights",
			},
		},
	},
	init: function () {
		this.elements = {};
	},
	start: async function () {
		const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
		var items = {};
		var selectOptions = { none: "-- NONE --" };
		var itemPosion = 0;

		for await (const page of pages.map((page) =>
			fetch(
				`${this.opts.insights.url}/api/contents?page=${page}&contentType%5B%5D=${this.opts.insights.contentTypes.videos}&contentType%5B%5D=${this.opts.insights.contentTypes.pressReleases}&contentType%5B%5D=${this.opts.insights.contentTypes.whitepapers}&contentType%5B%5D=${this.opts.insights.contentTypes.blogs}&contentType%5B%5D=${this.opts.insights.contentTypes.caseStudies}&status=published`
			)
		)) {
			const dataJson = await page.json();

			console.log(dataJson);

			if (Object.keys(dataJson).length > 0) {
				const result = await this.getItemsData(dataJson, itemPosion);
				items = {
					...items,
					...result[0],
				};
				selectOptions = {
					...selectOptions,
					...result[1],
				};
				itemPosion = result[2];

				continue;
			}

			break;
		}

		this.elements = {
			items,
			selectOptions,
		};

		this.app.addbar.add("insights", {
			title: "## blocks.insights ##",
			icon: ArticleEditor.iconInsights,
			command: "insights.popup",
		});
	},
	getItemsData: async function (dataJson, itemPosion) {
		const newItems = {};
		const newSelectOptions = {};

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
			var singleName =
				dataJson[single].contentType === "case-studies"
					? "case study"
					: dataJson[single].contentType === "blog"
					? dataJson[single].contentType
					: dataJson[single].contentType.substring(
							0,
							dataJson[single].contentType.length - 1
					  );
			newSelectOptions[
				itemPosion
			] = `${dataJson[single].fieldValues.name} - ${singleName}`;
			itemPosion++;
		}

		return [newItems, newSelectOptions, itemPosion];
	},
	popup: function () {
		var stack = this.app.popup.create("insights", {
			title: "## insights.insights ##",
			width: "400px",
			command: "addbar.popup",
			form: {
				version: {
					label: "## insights.label ##",
					type: "select",
					options: {
						simple: "Simple",
						fancy: "Fancy",
						mixed: "Mixed",
					},
				},
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
					title: "## insights.add ##",
					command: "insights.insert",
					type: "primary",
				},
				cancel: { title: "## insights.cancel ##", command: "popup.close" },
			},
		});

		stack.open({ focus: "insights" });
	},
	insert: function (stack) {
		this._buildInstance(stack);
	},
	_buildInstance: function (stack) {
		this.app.popup.close();

		var data = stack.getData();
		var insightsVersion = data.version;
		var item1 = data.item1;
		var item2 = data.item2;
		var item3 = data.item3;
		var items = [item1, item2, item3];
		var htmlStructure = ``;
		var htmlItems = ``;

		if (insightsVersion === "simple") {
			for (var item of items) {
				if (item !== "none") {
					htmlItems += `<div class="col html-code">
                          <img src="${this.elements.items[item].photo}" alt="">
                          <h4>${this.elements.items[item].title.en}</h4>
                          <p class="gray">${this.elements.items[item].description}</p>
                          <div class="btn-container">
                            <a class="btn btn-text btn-icon focus" href="/${this.elements.items[item].contentType}/${this.elements.items[item].slug}">
                              <div class="text-container">
                                  <div class="text">read more</div>
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
                          {{ include('@theme/partials/_featured_insights_simple.twig') }}
                        {% endif %}`;
				}
			}

			htmlStructure = `<section class="container-featured">
                        <div class="title">
                          <h2>Featured insights - simple</h2>
                        </div>
                        <div class="row">
                          ${htmlItems}
                        </div>
                      </section>`;
		} else if (insightsVersion === "fancy") {
			for (var item of items) {
				if (item !== "none") {
					console.log(this.elements.items[item]);
					htmlItems += `<div class="col html-code">
                          <img src="${this.elements.items[item].photo}" alt="">
                          <h4>${this.elements.items[item].industry}</h4>
                          <h2>${this.elements.items[item].title.en}</h2>
                          <p class="gray">${this.elements.items[item].description}</p>
                          <div class="btn-container">
                            <a class="btn btn-text btn-icon focus" href="/${this.elements.items[item].contentType}/${this.elements.items[item].slug}">
                              <div class="text-container">
                                  <div class="text">Next Story</div>
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
                          {{ include('@theme/partials/_featured_insights_fancy.twig') }}
                        {% endif %}`;
				}
			}

			htmlStructure = `<section class="featured container-xxl"><div class="container">
                            <div class="row">
                              <h2 class="featured__title">Featured insights - fancy</h2>
                            </div>
                            <div class="container-xxl js-stack-cards">
                              ${htmlItems}
                            </div>
                          </div></section>`;
		} else if (insightsVersion === "mixed") {
			for (var item of items) {
				if (item !== "none") {
					var singleName =
						this.elements.items[item].contentType === "case-studies"
							? "case study"
							: this.elements.items[item].contentType === "blog"
							? this.elements.items[item].contentType
							: this.elements.items[item].contentType.substring(
									0,
									this.elements.items[item].contentType.length - 1
							  );

					htmlItems += `<div class="col html-code">
                          <img src="${this.elements.items[item].photo}" alt="" />
                          <p class="body-text-bold">${singleName}</p>
                          <h5>${this.elements.items[item].title.en}</h5>
                          <div class="btn-container">
                            <a class="btn btn-text btn-icon focus" href="/${this.elements.items[item].contentType}/${this.elements.items[item].slug}">
                              <div class="text-container">
                                <div class="text">
                                  read more
                                </div>
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
                          {{ include('@theme/partials/_featured_insights_mixed.twig') }}
                        {% endif %}`;
				}
			}

			htmlStructure = `<section class="container-insights">
                        <div class="title">
                            <h2>
                              Key insights and featured news - mixed
                            </h2>
                        </div>
                          <div class="row">
                            ${htmlItems}
                          </div>
                      </section>`;
		}

		this.app.editor.insertContent({
			html: htmlStructure,
		});
	},
});
