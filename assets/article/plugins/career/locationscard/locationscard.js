// Icon
ArticleEditor.iconlocationscard = '<i class="fa fa-map-marker-alt"></i>';

// Plugin
ArticleEditor.add("plugin", "locationscard", {
  translations: {
    en: {
      locationscard: {
        locationscard: "Locations Card",
        add: "Insert",
        cancel: "Cancel",
        label: "Choose the design you want to insert",
      },
      blocks: {
        locationscard: "Locations Card",
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
      if (localStorage.getItem("contentTypeLocationsData") !== null) {
        getLocationsData();
      }
    }

    function getLocationsData() {
      const storageData = JSON.parse(
        localStorage.getItem("contentTypeLocationsData")
      );

      $this.elements = {
        items: storageData.items,
        selectOptions: storageData.selectOptions,
      };

      $this.app.addbar.add("locationscard", {
        title: "## blocks.locationscard ##",
        icon: ArticleEditor.iconlocationscard,
        command: "locationscard.popup",
      });

      clearInterval(storageInterval);
    }
  },
  popup: function () {
    var stack = this.app.popup.create("locationscard", {
      title: "## locationscard.locationscard ##",
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
        item4: {
          type: "select",
          label: "Choose an item to insert",
          options: this.elements.selectOptions,
        },
        item5: {
          type: "select",
          label: "Choose an item to insert",
          options: this.elements.selectOptions,
        },
      },
      footer: {
        insert: {
          title: "## locationscard.add ##",
          command: "locationscard.insert",
          type: "primary",
        },
        cancel: { title: "## locationscard.cancel ##", command: "popup.close" },
      },
    });

    stack.open({ focus: "locationscard" });
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
    var item4 = data.item4;
    var item5 = data.item5;
    var items = [item1, item2, item3, item4, item5];
    var htmlStructure = ``;
    var htmlItems = ``;
    let htmlItemsMobile = "";
    var id = Math.floor(Math.random() * 9999);

    for (var item of items) {
      if (item !== "none") {
        htmlItems += `
        <a href="#" class="location-card" data-code="${this.elements.items[item].code}">
                    <div class="location-card__text">
                        <p class="location-card__text--country">${this.elements.items[item].title}</p>
                        <p class="location-card__text--jobs">loading...</p>
                    </div>
                    <svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_994_15662)">
                            <path
                                d="M16.9498 7.0498L7.0498 16.9498"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M10 7L16.95 7.049L17 14"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_994_15662">
                                <rect width="24" height="24" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
        `;

        htmlItemsMobile += `
        <div class="splide__slide">
                        <figure>
                            <img src="${this.elements.items[item].photo}" loading="lazy" />
                        </figure>
                        <div class="our-locations__content__right__location" data-code="${this.elements.items[item].code}">
                            <div
                                class="our-locations__content__right__location--text"
                            >
                                <p
                                    class="our-locations__content__right__location--text__city"
                                >
                                ${this.elements.items[item].title}
                                </p>
                                <p
                                    class="our-locations__content__right__location--text__jobs"
                                >
                                    loading...
                                </p>
                            </div>
                            <a href="#" class="btn-arrow">
                                <svg
                                    width="24"
                                    height="24"
                                    viewbox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_994_15662)">
                                        <path
                                            d="M16.9498 7.0498L7.0498 16.9498"
                                            stroke-width="1.2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                        <path
                                            d="M10 7L16.95 7.049L17 14"
                                            stroke-width="1.2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_994_15662">
                                            <rect width="24" height="24"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
        `;
      }
    }

    htmlStructure += `
    <section class="container">
    <div class="our-locations">
        <div class="our-locations__description">
            <h2>Our locations</h2>
            <p>
                Luxoft works with companies from all over the globe and offers
                opportunities for candidates anywhere in the world.
            </p>
        </div>
        <div class="our-locations__content">
            <div class="our-locations__content__left">
                ${htmlItems}
                <a href="#" class="location-card">
                    <div class="location-card__text">
                        <p class="location-card__text--country">
                            All countries?
                        </p>
                        <p class="location-card__text--jobs">loading...</p>
                    </div>
                </a>
            </div>
            <div class="our-locations__content__right">
                <figure>
                    <img src="https://dummyimage.com/350x300/000/fff" loading="lazy" />
                </figure>
                <div class="our-locations__content__right__location">
                    <figure
                        class="our-locations__content__right__location--icon"
                    >
                        <img
                            src="{​{ asset('theme/luxoft/frontend/source/assets/images/pin_location.svg') }​}" loading="lazy"
                        />
                    </figure>
                    <div class="our-locations__content__right__location--text">
                        <p
                            class="our-locations__content__right__location--text__city"
                        >
                            New York
                        </p>
                        <p
                            class="our-locations__content__right__location--text__jobs"
                        >
                            12 jobs
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <section id="splider-our-locations" class="splide">
            <div class="splide__track">
                <div class="splide__list">
                    ${htmlItemsMobile}
                </div>
            </div>
        </section>
        <div class="button-container">
            <a href="#" class="btn-normal d-block">All 32 countries</a>
        </div>
    </div>
    <input
    type="hidden"
    name="_csrf_token"
    value="{{ csrf_token('data_form') }}"
/>
</section>
    `;

    this.app.editor.insertContent({
      html: htmlStructure,
    });
  },
});
