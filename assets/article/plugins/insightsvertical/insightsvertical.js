// Plugin
ArticleEditor.add("plugin", "insightsvertical", {
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
			insightsvertical: {
				insightsvertical: "Insights (vertical)",
				add: "Insert",
				cancel: "Cancel",
				label: "Choose the design you want to use",
			},
			blocks: {
				insightsvertical: "Insights (vertical)",
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
				`${this.opts.insightsvertical.url}/api/contents?page=${page}&contentType%5B%5D=${this.opts.insightsvertical.contentTypes.videos}&contentType%5B%5D=${this.opts.insightsvertical.contentTypes.pressReleases}&contentType%5B%5D=${this.opts.insightsvertical.contentTypes.whitepapers}&contentType%5B%5D=${this.opts.insightsvertical.contentTypes.blogs}&contentType%5B%5D=${this.opts.insightsvertical.contentTypes.caseStudies}&status=published`
			)
		)) {
			const dataJson = await page.json();

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

		this.app.addbar.add("insightsvertical", {
			title: "## blocks.insightsvertical ##",
			icon: '<i class="fa fa-clipboard"></i>',
			command: "insightsvertical.popup",
		});
	},
	getItemsData: async function (dataJson, itemPosion) {
		const newItems = {};
		const newSelectOptions = {};

		for (const single in dataJson) {
			const item = {
				id: dataJson[single].id,
				title: dataJson[single].fieldValues.title,
				slug: dataJson[single].fieldValues.slug,
				photo:
					window.location.hostname === "127.0.0.1"
						? "https://www.luxoft.com/files/blog/2023/04/how-are-software-defined-vehicles-disrupting-the-automotive-industry.jpg"
						: dataJson[single].fieldValues.photo.url,
				contentType: dataJson[single].contentType,
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
		var stack = this.app.popup.create("insightsvertical", {
			title: "## insightsvertical.insightsvertical ##",
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
					title: "## insightsvertical.add ##",
					command: "insightsvertical.insert",
					type: "primary",
				},
				cancel: { title: "## insightsvertical.cancel ##", command: "popup.close" },
			},
		});

		stack.open({ focus: "insightsvertical" });
	},
	insert: function (stack) {
		this._buildInstance(stack);
	},
	_buildInstance: function (stack) {
		this.app.popup.close();

		var data = stack.getData();
		var items = [data.item1, data.item2, data.item3];
		var htmlStructure = ``;
		var htmlItems = ``;

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
							<h5>${this.elements.items[item].title.en}</h5>
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
							<h4 class="text-20 unscaled">Related content</h4>
						</div>
                        <div class="related-content__items">
                          ${htmlItems}
                        </div>
                      </div>`;
		

		this.app.editor.insertContent({
			html: htmlStructure,
		});
	},
});
