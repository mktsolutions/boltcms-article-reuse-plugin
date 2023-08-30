// Icon
ArticleEditor.iconInsights = '<i class="fa fa-clipboard"></i>';

// Plugin
ArticleEditor.add("plugin", "insights", {
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
		const $this = this
		const storageInterval = setInterval(checkStorage, 5000)

		function checkStorage() {
			if (localStorage.getItem('contentTypeInsightsData') !== null) {
				getinsightsData()
			}
		}

		function getinsightsData() {
			const storageData = JSON.parse(localStorage.getItem('contentTypeInsightsData'))

			$this.elements = {
				items: storageData.items,
				selectOptions: storageData.selectOptions,
			}
	
			$this.app.addbar.add("insights", {
				title: "## blocks.insights ##",
				icon: ArticleEditor.iconInsights,
				command: "insights.popup",
			});
		
			clearInterval(storageInterval)
		}
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
						vertical: "Vertical",
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
		var items = [data.item1, data.item2, data.item3];
		var htmlStructure = ``;
		var htmlItems = ``;

		if (insightsVersion === "simple") {
			for (var item of items) {
				if (item !== "none") {
					htmlItems += `<div class="col html-code">
                          <img src="${this.elements.items[item].photo}" alt="">
                          <h3>${this.elements.items[item].title.en}</h3>
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
                          <h4 class="fs-2">Featured insights - simple</h4>
                        </div>
                        <div class="row">
                          ${htmlItems}
                        </div>
                      </section>`;
		} else if (insightsVersion === "fancy") {
			for (var item of items) {
				if (item !== "none") {
					htmlItems += `<div class="col html-code">
                          <img src="${this.elements.items[item].photo}" alt="">
                          <p>${this.elements.items[item].industry}</p>
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
                              <h4 class="featured__title fs-2">Featured insights - fancy</h4>
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
                            <p class="fs-2">
                              Key insights and featured news - mixed
                            </p>
                        </div>
                          <div class="row">
                            ${htmlItems}
                          </div>
                      </section>`;
		} else if (insightsVersion === "vertical") {
			for (var item of items) {
				if (item !== "none") {
					htmlItems += `
					<div class="item html-code">
						<div class="item--image">
							<figure>
								<img src="${this.elements.items[item].photo}" alt="">
							</figure>
						</div>
						<div class="item--title">
							<a href="/${this.elements.items[item].contentType}/${this.elements.items[item].slug}">
							<p>${this.elements.items[item].title.en}</p>
							</a>
						</div>
					</div>
					<div class="twig-code">{% setcontent item = '${this.elements.items[item].contentType}/${this.elements.items[item].id}' %}</div>
					{% if item is not empty %}
						{{ include('@theme/partials/_blog-right-column-author.twig') }}
					{% endif %}`;
				}
			}

			htmlStructure = `<div class="related-content">
								<div class="related-content__title">
									<p class="text-20 unscaled bold">Related content</p>
								</div>
								<div class="related-content__items">
								${htmlItems}
								</div>
							</div>`;
		}

		this.app.editor.insertContent({
			html: htmlStructure,
		});
	},
});
