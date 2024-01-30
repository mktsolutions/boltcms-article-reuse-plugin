// Icon
ArticleEditor.iconregioncards = '<i class="fa fa-columns"></i>';

// Plugin
ArticleEditor.add("plugin", "regioncards", {
  translations: {
    en: {
      regioncards: {
        hero: "Region Cards",
        add: "Insert",
        cancel: "Cancel",
        label: "Choose the number of cards to be inserted:",
      },
      blocks: {
        hero: "Region Cards",
      },
    },
  },
  start: function () {
    this.app.addbar.add("regioncards", {
      // poate aici trebe schimbat din hero
      title: "Region Cards",
      icon: ArticleEditor.iconregioncards,
      command: "regioncards.popup",
    });
  },
  popup: function () {
    var stack = this.app.popup.add("regioncards", {
      title: "Region Cards",
      width: "400px",
      command: "addbar.popup",
      form: {
        cards: {
          type: "input",
          label: "Number of cards:",
        },
      },
      footer: {
        insert: {
          title: "Insert",
          command: "regioncards.insert",
          type: "primary",
        },
        cancel: {
          title: "Cancel",
          command: "popup.close",
        },
      },
    });

    stack.open({ focus: "regioncards" });
  },
  insert: function (stack) {
    var instance = this._buildInstance(stack);
  },
  _buildInstance: function (stack) {
    this.app.popup.close();

    var data = stack.getData();
    var nrOfCards = data.cards;
    var cardsStructure = ``;
    var mobileCardsStructure = ``;
    var html = ``;

    for (let i = 0; i < nrOfCards; i++) {
      cardsStructure += `
      <div class="location-cards__countries__country">
        <div class="location-cards__countries__country__image">
            <figure>
                <img
                    class="location-cards__countries__country__image__photo"
                    src="https://dummyimage.com/1000x500/000/fff"
                    alt=""
                    loading="lazy"
                />
            </figure>
        </div>
        <div class="location-cards__countries__country__description">
            <div
                class="location-cards__countries__country__description__left"
            >
                <h3
                    class="location-cards__countries__country__description__left__title"
                >
                    Argentina
                </h3>
                <p
                    class="location-cards__countries__country__description__left__positions"
                >
                    46 positions
                </p>
            </div>
            <div
                class="location-cards__countries__country__description__right"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M10 16L14 12L10 8"
                        stroke="#63666A"
                        stroke-width="1.5"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
        <a class="stretched-link" href="#"></a>
    </div>
      `;

      mobileCardsStructure += `
      <div class="splide__slide">
        <figure>
            <img
                src="https://dummyimage.com/1000x500/000/fff"
                alt=""
                loading="lazy"
            />
        </figure>
        <div
            class="our-locations__content__right__location"
        >
            <div
                class="our-locations__content__right__location--text"
            >
                <p class="city body-l-semibold">
                    Argentina
                </p>
                <p class="jobs body-l-regular">
                    12 jobs
                </p>
            </div>
            <a
                href="#"
                class="btn-arrow"
            >
                <svg
                    width="24"
                    height="24"
                    viewbox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        clip-path="url(#clip0_994_15662)"
                    >
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
                        <clipPath
                            id="clip0_994_15662"
                        >
                            <rect
                                width="24"
                                height="24"
                            ></rect>
                        </clipPath>
                    </defs>
                </svg>
            </a>
        </div>
    </div>
      `;
    }

    html += `
    <div id="1" class="container location-cards" data-section-id="1">
      <h2>Americas</h2>
      <div class="location-cards__countries">
          ${cardsStructure}
      </div>
    </div>
    <div id="regions-accordion" class="accordion locations location-cards__mobile-regions">
    <div class="accordion-item location-cards__mobile-regions__region">
        <h2
            class="accordion-header location-cards__mobile-regions__region__title"
        >
            <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse-1"
                aria-expanded="true"
                aria-controls="collapse-1"
            >
                Americas
            </button>
        </h2>
        <div
            id="collapse-1"
            class="accordion-collapse collapse show location-cards__mobile-regions__region__country"
            data-bs-parent="#regions-accordion"
        >
            <div class="accordion-body">
                <section id="splider-1" class="splide">
                    <div class="splide__track">
                        <ul class="splide__list">
                            ${mobileCardsStructure}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
    `;

    this.app.editor.insertContent({
      html: html,
    });
  },
});
