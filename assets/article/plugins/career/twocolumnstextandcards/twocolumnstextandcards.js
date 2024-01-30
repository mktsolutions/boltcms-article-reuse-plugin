// Icon
ArticleEditor.iconTwoColumns = '<i class="fa fa-border-all"></i>';

// Plugin
ArticleEditor.add("plugin", "twocolumnstextandcards", {
  translations: {
    en: {
      twocolumnstextandcards: {
        hero: "Two Columns text and cards",
        add: "Insert",
        cancel: "Cancel",
        label: "How many banners do you want to insert?",
      },
      blocks: {
        hero: "Two Columns text and cards",
      },
    },
  },
  start: function () {
    this.app.addbar.add("twocolumnstextandcards", {
      // poate aici trebe schimbat din hero
      title: "Two Columns text and cards",
      icon: ArticleEditor.iconTwoColumns,
      command: "twocolumnstextandcards.popup",
    });
  },
  popup: function () {
    var stack = this.app.popup.add("twocolumnstextandcards", {
      title: "Two Columns text and cards",
      width: "400px",
      command: "addbar.popup",
      form: {
        hero: {
          label: "Variant:",
          type: "select",
          options: {
            1: "Default",
          },
        },
      },
      footer: {
        insert: {
          title: "Insert",
          command: "twocolumnstextandcards.insert",
          type: "primary",
        },
        cancel: {
          title: "Cancel",
          command: "popup.close",
        },
      },
    });

    stack.open({ focus: "twocolumnstextandcards" });
  },
  insert: function (stack) {
    var instance = this._buildInstance(stack);
  },
  _buildInstance: function (stack) {
    this.app.popup.close();

    var data = stack.getData();
    var editableType = data.hero;

    var heroHtml = `
    <div id="twoColumnsTextAndCards">
      <div id="pinned-element" style="height: 700px; overflow: hidden">
              <div
                  id="container-to-get"
                  class="container about-us-first__two-col-scroll-container"
              >
                  <div class="about-us-first__two-col-scroll-container__left-col">
                      <div
                          class="about-us-first__two-col-scroll-container__left-col__info-section 1"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container__left-col__info-section__title"
                          >
                              <div
                                  id="left-title-box-1"
                                  class="about-us-first__two-col-scroll-container__left-col__info-section__title__box"
                              >
                                  <svg id="arrow-down-icon" class="arrow-down-icon" viewBox="0 0 24 25" fill="none">
    <path d="M11.984 18.5285L11.984 5.38998" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M16.9338 14.6281L11.9848 19.5078L7.03434 14.6281" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  </svg>

                              </div>
                              <h3 id="left-title-text-1">Grow</h3>
                          </div>
                          <p class="body-xl-regular">
                              Boost your individual advancement, both personally
                              and professionally. Find your own personal path for
                              constant enrichment via our team.
                          </p>
                      </div>
                      <div
                          class="about-us-first__two-col-scroll-container__left-col__info-section 2"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container__left-col__info-section__title"
                          >
                              <div
                                  id="left-title-box-2"
                                  class="about-us-first__two-col-scroll-container__left-col__info-section__title__box"
                              >
                                  <svg id="arrow-down-icon" class="arrow-down-icon" viewBox="0 0 24 25" fill="none">
    <path d="M11.984 18.5285L11.984 5.38998" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M16.9338 14.6281L11.9848 19.5078L7.03434 14.6281" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  </svg>

                              </div>
                              <h3 id="left-title-text-2">Unite</h3>
                          </div>
                          <p class="body-xl-regular">
                              Combine forces with talented experts across the
                              globe to push the frontiers of IT. Collaborate with
                              best-in-class tech authorities through our
                          </p>
                      </div>
                      <div
                          class="about-us-first__two-col-scroll-container__left-col__info-section 3"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container__left-col__info-section__title"
                          >
                              <div
                                  id="left-title-box-3"
                                  class="about-us-first__two-col-scroll-container__left-col__info-section__title__box"
                              >
                                  <svg id="arrow-down-icon" class="arrow-down-icon" viewBox="0 0 24 25" fill="none">
    <path d="M11.984 18.5285L11.984 5.38998" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M16.9338 14.6281L11.9848 19.5078L7.03434 14.6281" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  </svg>

                              </div>
                              <h3 id="left-title-text-3">Lead</h3>
                          </div>
                          <p class="body-xl-regular">
                              Be at the head of the pack shaping tomorrow’s
                              technology as you work arm-in-arm with
                              industry-defining clients. See your star rise with
                              our
                          </p>
                      </div>
                  </div>
                  <div
                      class="about-us-first__two-col-scroll-container__right-col"
                  >
                      <div
                          id="cards-section-1"
                          class="about-us-first__two-col-scroll-container__right-col__cards-section"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                      </div>
                      <div
                          id="cards-section-2"
                          class="about-us-first__two-col-scroll-container__right-col__cards-section"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                      </div>
                      <div
                          id="cards-section-3"
                          class="about-us-first__two-col-scroll-container__right-col__cards-section"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container__right-col__cards-section__card"
                          >
                              <p
                                  class="body-xl-semibold about-us-first__two-col-scroll-container__right-col__cards-section__card__title"
                              >
                                  Mentoring Program
                              </p>
                              <p
                                  class="body-l-regular about-us-first__two-col-scroll-container__right-col__cards-section__card__desc"
                              >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="tablet-pinned-element" style="height: 800px; overflow: hidden">
              <div
                  class="container about-us-first__two-col-scroll-container-tablet"
              >
                  <div
                      class="about-us-first__two-col-scroll-container-tablet__tab"
                  >
                      <div
                          class="about-us-first__two-col-scroll-container-tablet__tab__left"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container-tablet__tab__left__box-container"
                          >
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__left__box-container__box"
                              >
                                  <svg id="arrow-down-icon" class="arrow-down-icon" viewBox="0 0 24 25" fill="none">
    <path d="M11.984 18.5285L11.984 5.38998" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M16.9338 14.6281L11.9848 19.5078L7.03434 14.6281" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  </svg>

                              </div>
                          </div>
                      </div>
                      <div
                          class="about-us-first__two-col-scroll-container-tablet__tab__right"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container-tablet__tab__right__tab-name"
                          >
                              <h3
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__tab-name--title"
                              >
                                  Grow
                              </h3>
                              <p
                                  class="body-xl-regular about-us-first__two-col-scroll-container-tablet__tab__right__tab-name--desc"
                              >
                                  Boost your individual advancement, both
                                  personally and professionally. Find your own
                                  personal path for constant enrichment via our
                                  team.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section"
                          >
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div
                      class="about-us-first__two-col-scroll-container-tablet__tab"
                  >
                      <div
                          class="about-us-first__two-col-scroll-container-tablet__tab__left"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container-tablet__tab__left__box-container"
                          >
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__left__box-container__box"
                              >
                                  <svg id="arrow-down-icon" class="arrow-down-icon" viewBox="0 0 24 25" fill="none">
    <path d="M11.984 18.5285L11.984 5.38998" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M16.9338 14.6281L11.9848 19.5078L7.03434 14.6281" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  </svg>

                              </div>
                          </div>
                      </div>
                      <div
                          class="about-us-first__two-col-scroll-container-tablet__tab__right"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container-tablet__tab__right__tab-name"
                          >
                              <h3
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__tab-name--title"
                              >
                                  Lead
                              </h3>
                              <p
                                  class="body-xl-regular about-us-first__two-col-scroll-container-tablet__tab__right__tab-name--desc"
                              >
                                  Boost your individual advancement, both
                                  personally and professionally. Find your own
                                  personal path for constant enrichment via our
                                  team.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section"
                          >
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div
                      class="about-us-first__two-col-scroll-container-tablet__tab"
                  >
                      <div
                          class="about-us-first__two-col-scroll-container-tablet__tab__left"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container-tablet__tab__left__box-container"
                          >
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__left__box-container__box"
                              >
                                  <svg id="arrow-down-icon" class="arrow-down-icon" viewBox="0 0 24 25" fill="none">
    <path d="M11.984 18.5285L11.984 5.38998" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
    <path d="M16.9338 14.6281L11.9848 19.5078L7.03434 14.6281" stroke="#63666A" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  </svg>

                              </div>
                          </div>
                      </div>
                      <div
                          class="about-us-first__two-col-scroll-container-tablet__tab__right"
                      >
                          <div
                              class="about-us-first__two-col-scroll-container-tablet__tab__right__tab-name"
                          >
                              <h3
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__tab-name--title"
                              >
                                  Unite
                              </h3>
                              <p
                                  class="body-xl-regular about-us-first__two-col-scroll-container-tablet__tab__right__tab-name--desc"
                              >
                                  Boost your individual advancement, both
                                  personally and professionally. Find your own
                                  personal path for constant enrichment via our
                                  team.
                              </p>
                          </div>
                          <div
                              class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section"
                          >
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                              <div
                                  class="about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card"
                              >
                                  <p
                                      class="body-xl-semibold about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__title"
                                  >
                                      Mentoring Program
                                  </p>
                                  <p
                                      class="body-l-regular about-us-first__two-col-scroll-container-tablet__tab__right__cards-section__card__desc"
                                  >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit, sed sed do eiusmod tempor
                                      incididunt ut labore et dolore magna aliqua.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container about-us-first__two-col-scroll-container-mobile">
              <h4 class="about-us-first__two-col-scroll-container-mobile--title">
                  The ethos guiding our investment into each and every Luxofter
                  can be described in three words
              </h4>
              <div
                  class="collapsible-buttons about-us-first__two-col-scroll-container-mobile__buttons"
              >
                  <button
                      class="body-m-regular collapsible-button active"
                      data-target="content-1"
                  >
                      Grow
                  </button>
                  <button
                      class="body-m-regular collapsible-button"
                      data-target="content-2"
                  >
                      Unite
                  </button>
                  <button
                      class="body-m-regular collapsible-button"
                      data-target="content-3"
                  >
                      Lead
                  </button>
              </div>
              <div
                  class="about-us-first__two-col-scroll-container-mobile__panels"
              >
                  <div
                      class="collapsible-content about-us-first__two-col-scroll-container-mobile__panels__panel"
                      id="content-1"
                  >
                      <p
                          class="body-xl-regular about-us-first__two-col-scroll-container-mobile__panels__panel--desc"
                      >
                          Boost your individual advancement, both personally and
                          professionally. Find your own personal path for constant
                          enrichment via our team.
                      </p>
                      <section
                          id="programs-carousel-1"
                          class="splide about-us-first__two-col-scroll-container-mobile__panels__panel__carousel"
                      >
                          <div class="splide__track">
                              <ul class="splide__list">
                                  <div class="splide__slide">
                                      <div
                                          class="about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card"
                                      >
                                          <p
                                              class="body-xl-semibold about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--title"
                                          >
                                              Mentoring Program
                                          </p>
                                          <p
                                              class="body-l-regular about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--desc"
                                          >
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Lorem
                                              ipsum dolor sit amet, consectetur
                                              adipiscing.
                                          </p>
                                      </div>
                                  </div>
                                  <div class="splide__slide">
                                      <div
                                          class="about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card"
                                      >
                                          <p
                                              class="body-xl-semibold about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--title"
                                          >
                                              Training Center
                                          </p>
                                          <p
                                              class="body-l-regular about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--desc"
                                          >
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Lorem
                                              ipsum dolor sit amet, consectetur
                                              adipiscing.
                                          </p>
                                      </div>
                                  </div>
                                  <div class="splide__slide">
                                      <div
                                          class="about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card"
                                      >
                                          <p
                                              class="body-xl-semibold about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--title"
                                          >
                                              Culture of Feedback
                                          </p>
                                          <p
                                              class="body-l-regular about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--desc"
                                          >
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Lorem
                                              ipsum dolor sit amet, consectetur
                                              adipiscing.
                                          </p>
                                      </div>
                                  </div>
                              </ul>
                          </div>
                      </section>
                  </div>
                  <div
                      class="collapsible-content about-us-first__two-col-scroll-container-mobile__panels__panel"
                      id="content-2"
                  >
                      <p
                          class="body-xl-regular about-us-first__two-col-scroll-container-mobile__panels__panel--desc"
                      >
                          Boost your individual advancement, both personally and
                          professionally. Find your own personal path for constant
                          enrichment via our team.
                      </p>
                      <section
                          id="programs-carousel-2"
                          class="splide about-us-first__two-col-scroll-container-mobile__panels__panel__carousel"
                      >
                          <div class="splide__track">
                              <ul class="splide__list">
                                  <div class="splide__slide">
                                      <div
                                          class="about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card"
                                      >
                                          <p
                                              class="body-xl-semibold about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--title"
                                          >
                                              Volunteer Club
                                          </p>
                                          <p
                                              class="body-l-regular about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--desc"
                                          >
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Lorem
                                              ipsum dolor sit amet, consectetur
                                              adipiscing.
                                          </p>
                                      </div>
                                  </div>
                                  <div class="splide__slide">
                                      <div
                                          class="about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card"
                                      >
                                          <p
                                              class="body-xl-semibold about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--title"
                                          >
                                              PPM University
                                          </p>
                                          <p
                                              class="body-l-regular about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--desc"
                                          >
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Lorem
                                              ipsum dolor sit amet, consectetur
                                              adipiscing.
                                          </p>
                                      </div>
                                  </div>
                                  <div class="splide__slide">
                                      <div
                                          class="about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card"
                                      >
                                          <p
                                              class="body-xl-semibold about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--title"
                                          >
                                              Relocation program
                                          </p>
                                          <p
                                              class="body-l-regular about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--desc"
                                          >
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Lorem
                                              ipsum dolor sit amet, consectetur
                                              adipiscing.
                                          </p>
                                      </div>
                                  </div>
                              </ul>
                          </div>
                      </section>
                  </div>
                  <div
                      class="collapsible-content about-us-first__two-col-scroll-container-mobile__panels__panel"
                      id="content-3"
                  >
                      <p
                          class="body-xl-regular about-us-first__two-col-scroll-container-mobile__panels__panel--desc"
                      >
                          Boost your individual advancement, both personally and
                          professionally. Find your own personal path for constant
                          enrichment via our team.
                      </p>
                      <section
                          id="programs-carousel-3"
                          class="splide about-us-first__two-col-scroll-container-mobile__panels__panel__carousel"
                      >
                          <div class="splide__track">
                              <ul class="splide__list">
                                  <div class="splide__slide">
                                      <div
                                          class="about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card"
                                      >
                                          <p
                                              class="body-xl-semibold about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--title"
                                          >
                                              Mentoring Program
                                          </p>
                                          <p
                                              class="body-l-regular about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--desc"
                                          >
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Lorem
                                              ipsum dolor sit amet, consectetur
                                              adipiscing.
                                          </p>
                                      </div>
                                  </div>
                                  <div class="splide__slide">
                                      <div
                                          class="about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card"
                                      >
                                          <p
                                              class="body-xl-semibold about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--title"
                                          >
                                              Global CSR Programs
                                          </p>
                                          <p
                                              class="body-l-regular about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--desc"
                                          >
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Lorem
                                              ipsum dolor sit amet, consectetur
                                              adipiscing.
                                          </p>
                                      </div>
                                  </div>
                                  <div class="splide__slide">
                                      <div
                                          class="about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card"
                                      >
                                          <p
                                              class="body-xl-semibold about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--title"
                                          >
                                              Loyalty Program
                                          </p>
                                          <p
                                              class="body-l-regular about-us-first__two-col-scroll-container-mobile__panels__panel__carousel-card--desc"
                                          >
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna aliqua. Lorem
                                              ipsum dolor sit amet, consectetur
                                              adipiscing.
                                          </p>
                                      </div>
                                  </div>
                              </ul>
                          </div>
                      </section>
                  </div>
              </div>
          </div>
        </div>
    `;

    this.app.editor.insertContent({
      html: heroHtml,
    });
  },
});
