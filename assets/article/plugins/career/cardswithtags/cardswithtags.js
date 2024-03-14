// Icon
ArticleEditor.iconcardswithtags = '<i class="fa fa-calendar-week"></i>';

// Plugin
ArticleEditor.add("plugin", "cardswithtags", {
  translations: {
    en: {
      cardswithtags: {
        cardswithtags: "Cards with tags",
        add: "Insert",
        cancel: "Cancel",
        label: "Choose the design you want to insert",
      },
      blocks: {
        cardswithtags: "Cards with tags",
      },
    },
  },
  init: function () {
    this.elements = {};
  },
  start: async function () {
    const $this = this;
    const storageInterval = setInterval(checkStorage, 5000);

    function checkStorage() {
      if ((localStorage.getItem("contentTypeEventsData") || localStorage.getItem("contentTypeBlogsData")) !== null) {
        getEventsData();
      }
    }

    function getEventsData() {
      const storageData = JSON.parse(
          localStorage.getItem("contentTypeEventsData")
      );

      const storageDataBlogs = JSON.parse(
          localStorage.getItem("contentTypeBlogsData")
      )

      const items = {
        ...storageData.items,
        ...storageDataBlogs.items
      }

      const options = {
        ...storageData.selectOptions,
        ...storageDataBlogs.selectOptions
      }

      $this.elements = {
        items: items,
        selectOptions: options,
      };

      $this.app.addbar.add("cardswithtags", {
        title: "## blocks.cardswithtags ##",
        icon: ArticleEditor.iconcardswithtags,
        command: "cardswithtags.popup",
      });

      clearInterval(storageInterval);
    }
  },
  popup: function () {
    var stack = this.app.popup.create("cardswithtags", {
      title: "## cardswithtags.cardswithtags ##",
      width: "400px",
      command: "addbar.popup",
      form: {
        variant: {
          type: "select",
          label: "Choose variant",
          options: {
            1: "White Background",
            2: "Gray Background",
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
        item4: {
          type: "select",
          label: "Choose an item to insert",
          options: this.elements.selectOptions,
        },
      },
      footer: {
        insert: {
          title: "## cardswithtags.add ##",
          command: "cardswithtags.insert",
          type: "primary",
        },
        cancel: { title: "## cardswithtags.cancel ##", command: "popup.close" },
      },
    });

    stack.open({ focus: "cardswithtags" });
  },
  insert: function (stack) {
    this._buildInstance(stack);
  },
  _buildInstance: function (stack) {
    this.app.popup.close();

    var data = stack.getData();

    var editableType = data.variant;

    var item1 = data.item1;
    var item2 = data.item2;
    var item3 = data.item3;
    var item4 = data.item4;
    var items = [item1, item2, item3, item4];
    var htmlStructure = ``;
    var htmlItems = ``;
    let htmlItemsMobile = "";
    var id = Math.floor(Math.random() * 9999);
    let isGray = editableType == 1 ? "" : "gray";

    for (var item of items) {
      if (item !== "none") {
        htmlItems += `
            <div class="life-stories__content__stories__story">
              <figure>
                <img
                    class="life-stories__content__stories__story__image"
                    src="${this.elements.items[item].photo}"
                    loading="lazy"
                />
              </figure>
              <div
                  class="life-stories__content__stories__story__right-col flex flex-col"
              >
                  <div class="flex flex-col">
                      <div
                          class="life-stories__content__stories__story__right-col__ct"
                      >
                          ${this.elements.items[item].contentType === 'events' ? 'Events' : 'Blogs' }
                      </div>
                      <h3
                          class="life-stories__content__stories__story__right-col__title"
                      >
                      ${this.elements.items[item].title.en}
                      </h3>
                  </div>
                  <p
                      class="life-stories__content__stories__story__right-col__description"
                  >
                  ${this.elements.items[item].description}
                  </p>
              </div>
          </div>
        `;
      }
    }

    htmlStructure += `
    <section class="life-stories ${isGray}">
            <div class="container life-stories__content">
                <h2>What's happening at Luxoft</h2>
                <div class="life-stories__content__stories">
                    ${htmlItems}
                </div>
                <a class="btn-arrow-ghost--rich-black" href="#"
                    >View more stories<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewbox="0 0 24 25"
                        fill="none"
                    >
                        <path
                            d="M16.2581 8.2417L6.96777 17.532"
                            stroke-width="1.5"
                            stroke-linecap="square"
                            stroke-linejoin="round"
                        ></path>
                        <path
                            d="M10 7.5L16.95 7.549L17 14.5"
                            stroke-width="1.5"
                            stroke-linecap="square"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </a>
            </div>
        </section>
    `;

    this.app.editor.insertContent({
      html: htmlStructure,
    });
  },
});
