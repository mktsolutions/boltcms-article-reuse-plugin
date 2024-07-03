ArticleEditor.add("plugin", "blogs", {
	init: function () {
		this.elements = {};
	},
	start: async function () {
		const $this = this
		const storageInterval = setInterval(checkStorage, 5000)

		function checkStorage() {
			if (localStorage.getItem('contentTypeBlogsData') !== null) {
				getBlogsData()
			}
		}

		function getBlogsData() {
			const storageData = JSON.parse(localStorage.getItem('contentTypeBlogsData'))

			$this.elements = {
				items: storageData.items,
				selectOptions: storageData.selectOptions,
			}

			$this.app.addbar.add("blogs", {
				title: "Blog related content (right column)",
				icon: '<i class="fa fa-clipboard"></i>',
				command: "blogs.popup",
			});

			clearInterval(storageInterval)
		}
	},
	popup: function () {
		var stack = this.app.popup.create("blogs", {
			title: "Blog related content (right column)",
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
					title: "Insert",
					command: "blogs.insert",
					type: "primary",
				},
				cancel: { title: "Cancel", command: "popup.close" },
			},
		});

		stack.open({ focus: "blogs" });
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
						<p>${this.elements.items[item].title.en}</p>
						</a>
					</div>
				</div>
				<div class="twig-code">
				{% setcontent item = '${this.elements.items[item].contentType}/${this.elements.items[item].id}' %}
				</div>
				{% if item is not empty %}
					{{ include('@theme/partials/_blog-right-column-related-content.twig') }}
				{% endif %}`;
			}
		}

		htmlStructure = `<div class="related-content" id="related-content-right-column">
							<div class="related-content__title">
								<p class="text-20">Related content</p>
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
