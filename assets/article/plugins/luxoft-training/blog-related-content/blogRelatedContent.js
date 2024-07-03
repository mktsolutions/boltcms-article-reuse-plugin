ArticleEditor.add("plugin", "blogRelatedContent", {
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

      $this.app.addbar.add("blogRelatedContent", {
        title: "Blog related content (bottom)",
        icon: '<i class="fa fa-clipboard"></i>',
        command: "blogRelatedContent.popup",
      });

      clearInterval(storageInterval)
    }
  },
  popup: function () {
    var stack = this.app.popup.create("blogs", {
      title: "Blog related content (bottom)",
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
          command: "blogRelatedContent.insert",
          type: "primary",
        },
        cancel: { title: "Cancel", command: "popup.close" },
      },
    });

    stack.open({ focus: "blogRelatedContent" });
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
				<div class="col">
          <div class="twig-code">
          {% setcontent item = '${this.elements.items[item].contentType}/${this.elements.items[item].id}' %}
          </div>
          {% if item is not empty %}
            {{ include('@theme/partials/_blog-bottom-related-content.twig') }}
          {% endif %}
        </div>`;
      }
    }

    htmlStructure = `<div class="blog-post__related-content">
                        <div class="blog-post__related-content--title">
                            <h2>
                                Related content
                            </h2>
                        </div>
                        <div class="row">
                              ${htmlItems}
                        </div>
                        <div class="row mt-4">
                            <div class="col">
                                <div class="btn-center">
                                    <a href="/blog" class="btn-arrow-ghost--rich-black">
                                        VIEW ALL ARTICLES
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewbox="0 0 24 25" fill="none"><path d="M16.2581 8.2417L6.96777 17.532" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path><path d="M10 7.5L16.95 7.549L17 14.5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                      </div>`;

    this.app.editor.insertContent({
      html: htmlStructure,
    });
  },
});
