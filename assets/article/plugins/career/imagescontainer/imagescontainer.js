// Icon
ArticleEditor.iconHero = '<i class="fa fa-camera-retro"></i>';

// Plugin
ArticleEditor.add("plugin", "imagescontainer", {
  translations: {
    en: {
      imagescontainer: {
        hero: "Images Container",
        add: "Insert",
        cancel: "Cancel",
        label: "Choose the version:",
      },
      blocks: {
        hero: "Images Container",
      },
    },
  },
  start: function () {
    this.app.addbar.add("imagescontainer", {
      // poate aici trebe schimbat din hero
      title: "Images Container",
      icon: ArticleEditor.iconHero,
      command: "imagescontainer.popup",
    });
  },
  popup: function () {
    var stack = this.app.popup.add("imagescontainer", {
      title: "Images Container",
      width: "400px",
      command: "addbar.popup",
      form: {
        hero: {
          label: "Choose the version",
          type: "select",
          options: {
            1: "images only",
            2: "images and text",
          },
        },
      },
      footer: {
        insert: {
          title: "Insert",
          command: "imagescontainer.insert",
          type: "primary",
        },
        cancel: {
          title: "Close",
          command: "popup.close",
        },
      },
    });

    stack.open({ focus: "imagescontainer" });
  },
  insert: function (stack) {
    var instance = this._buildInstance(stack);
  },
  _buildInstance: function (stack) {
    this.app.popup.close();

    var data = stack.getData();
    var editableType = data.hero;

    var heroHtml = ``;

    if (editableType == 1) {
      heroHtml += `
      <div
      class="container images-only-container"
      data-aos="fade-up"
      data-aos-duration="2000"
  >
      <h1>How we hire</h1>
      <p class="body-xl-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="images-only-container__header-imgs">
          <figure class="image-0">
              <img
                  src="https://dummyimage.com/1000x500/000/fff"
                  alt=""
                  class="images-only-container__header-imgs__img"
                  loading="lazy"
              />
          </figure>
          <figure class="image-1">
              <img
                  src="https://dummyimage.com/1000x500/000/fff"
                  alt=""
                  class="images-only-container__header-imgs__img"
                  loading="lazy"
              />
          </figure>
          <figure class="image-2">
              <img
                  src="https://dummyimage.com/1000x500/000/fff"
                  alt=""
                  class="images-only-container__header-imgs__img"
                  loading="lazy"
              />
          </figure>
          <figure class="image-3">
              <img
                  src="https://dummyimage.com/1000x500/000/fff"
                  alt=""
                  class="images-only-container__header-imgs__img"
                  loading="lazy"
              />
          </figure>
      </div>
  </div>
      `;
    }

    if (editableType == 2) {
      heroHtml += `
      <div
      class="container images-and-text-container"
      data-aos="fade-up"
      data-aos-duration="2000"
  >
      <h1>Learn the Luxoft story</h1>
      <p class="body-xl-regular images-and-text-container__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
      </p>
      <div class="images-and-text-container__header-imgs">
          <div class="images-and-text-container__header-imgs__img1">
              <p
                  class="subtitle-l images-and-text-container__header-imgs__img1--title"
              >
                  Who we are
              </p>
              <p
                  class="body-l-regular images-and-text-container__header-imgs__img1--desc"
              >
                  Luxoft is a global partner to more than 430 clients and
                  remains at the forefront of digital transformation. Add
                  your expertise to our growing community of professionals
                  and facilitate innovation for companies at every level.
              </p>
              <svg
                  width="268"
                  height="80"
                  viewBox="0 0 268 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="images-and-text-container__header-imgs__img1__small-circle"
              >
                  <g filter="url(#filter0_b_3851_6850)">
                      <circle
                          cx="66.5"
                          cy="201.5"
                          r="171.5"
                          stroke="url(#paint0_linear_3851_6850)"
                          stroke-opacity="0.5"
                          stroke-width="60"
                          stroke-linecap="round"
                      />
                  </g>
                  <defs>
                      <filter
                          id="filter0_b_3851_6850"
                          x="-155"
                          y="-20"
                          width="443"
                          height="443"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                      >
                          <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                          />
                          <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation="10"
                          />
                          <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_3851_6850"
                          />
                          <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_3851_6850"
                              result="shape"
                          />
                      </filter>
                      <linearGradient
                          id="paint0_linear_3851_6850"
                          x1="-2750.5"
                          y1="-1305.5"
                          x2="554.71"
                          y2="-1743.46"
                          gradientUnits="userSpaceOnUse"
                      >
                          <stop stop-color="white" />
                          <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0"
                          />
                      </linearGradient>
                  </defs>
              </svg>
              <svg
                  width="250"
                  height="181"
                  viewBox="0 0 250 181"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="images-and-text-container__header-imgs__img1__big-circle"
              >
                  <circle
                      cx="201"
                      cy="201"
                      r="171"
                      stroke="url(#paint0_linear_3851_6849)"
                      stroke-width="60"
                      stroke-linecap="round"
                  />
                  <defs>
                      <linearGradient
                          id="paint0_linear_3851_6849"
                          x1="-1206"
                          y1="-1306.5"
                          x2="237.078"
                          y2="-1476.45"
                          gradientUnits="userSpaceOnUse"
                      >
                          <stop stop-color="white" />
                          <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0"
                          />
                      </linearGradient>
                  </defs>
              </svg>
          </div>
          <div class="images-and-text-container__header-imgs__img2">
              <img
                  src="/thumbs/1000×1000×max/1694168311_green-card.jpg\" loading="lazy"
              />
          </div>
          <div class="images-and-text-container__header-imgs__img3">
              <p
                  class="subtitle-l images-and-text-container__header-imgs__img3--title"
              >
                  Our culture
              </p>
              <p
                  class="body-l-regular images-and-text-container__header-imgs__img3--desc"
              >
                  With broad domain knowledge and a commitment to
                  sustainable business principles, Luxoft maintains a
                  culture of innovation. We bring our best to our clients
                  and help foster the best in our teams. Join us to make a
                  difference.
              </p>
              <svg
                  class="images-and-text-container__header-imgs__img3__big-circle-left"
                  width="132"
                  height="176"
                  viewBox="0 0 132 176"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <circle
                      cx="-69"
                      cy="196"
                      r="171"
                      stroke="url(#paint0_linear_3851_6856)"
                      stroke-width="60"
                      stroke-linecap="round"
                  />
                  <defs>
                      <linearGradient
                          id="paint0_linear_3851_6856"
                          x1="-1476"
                          y1="-1311.5"
                          x2="-32.9218"
                          y2="-1481.45"
                          gradientUnits="userSpaceOnUse"
                      >
                          <stop stop-color="white" />
                          <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0"
                          />
                      </linearGradient>
                  </defs>
              </svg>
          </div>
          <div class="images-and-text-container__header-imgs__img4">
              <img
                  src="/thumbs/1000×1000×max/1694168311_green-card.jpg\" loading="lazy"
              />
          </div>
          <div class="images-and-text-container__header-imgs__img5">
              <img
                  src="/thumbs/1000×1000×max/1694168311_green-card.jpg\" loading="lazy"
              />
          </div>
      </div>
      <section id="splider-about-us-header" class="splide">
          <div class="splide__track">
              <ul class="splide__list">
                  <div class="splide__slide">
                      <div
                          class="images-and-text-container__header-imgs-carousel__card"
                      >
                          <p
                              class="subtitle-l images-and-text-container__header-imgs-carousel__card--title"
                          >
                              Who we are
                          </p>
                          <p
                              class="body-l-regular images-and-text-container__header-imgs-carousel__card--desc"
                          >
                              Luxoft is a global partner to more than 430
                              clients and remains at the forefront of
                              digital transformation. Add your expertise
                              to our growing community of professionals
                              and facilitate innovation for companies at
                              every level.
                          </p>
                          <svg
                              class="images-and-text-container__header-imgs-carousel__card__mobile-left-circles"
                              width="280"
                              height="121"
                              viewBox="0 0 280 121"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <circle
                                  cx="372.5"
                                  cy="215.5"
                                  r="197.5"
                                  stroke="url(#paint0_linear_3984_629)"
                                  stroke-width="35"
                                  stroke-linecap="round"
                              />
                              <g filter="url(#filter0_b_3984_629)">
                                  <circle
                                      cx="168"
                                      cy="283"
                                      r="198"
                                      stroke="url(#paint1_linear_3984_629)"
                                      stroke-opacity="0.5"
                                      stroke-width="35"
                                      stroke-linecap="round"
                                  />
                              </g>
                              <defs>
                                  <filter
                                      id="filter0_b_3984_629"
                                      x="-67.5"
                                      y="47.5"
                                      width="471"
                                      height="471"
                                      filterUnits="userSpaceOnUse"
                                      color-interpolation-filters="sRGB"
                                  >
                                      <feFlood
                                          flood-opacity="0"
                                          result="BackgroundImageFix"
                                      />
                                      <feGaussianBlur
                                          in="BackgroundImageFix"
                                          stdDeviation="10"
                                      />
                                      <feComposite
                                          in2="SourceAlpha"
                                          operator="in"
                                          result="effect1_backgroundBlur_3984_629"
                                      />
                                      <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_backgroundBlur_3984_629"
                                          result="shape"
                                      />
                                  </filter>
                                  <linearGradient
                                      id="paint0_linear_3984_629"
                                      x1="-1577.5"
                                      y1="-1812"
                                      x2="327.613"
                                      y2="-2067.92"
                                      gradientUnits="userSpaceOnUse"
                                  >
                                      <stop stop-color="white" />
                                      <stop
                                          offset="1"
                                          stop-color="white"
                                          stop-opacity="0"
                                      />
                                  </linearGradient>
                                  <linearGradient
                                      id="paint1_linear_3984_629"
                                      x1="-3084.28"
                                      y1="-1456.86"
                                      x2="731.648"
                                      y2="-1962.49"
                                      gradientUnits="userSpaceOnUse"
                                  >
                                      <stop stop-color="white" />
                                      <stop
                                          offset="1"
                                          stop-color="white"
                                          stop-opacity="0"
                                      />
                                  </linearGradient>
                              </defs>
                          </svg>
                      </div>
                  </div>
                  <div class="splide__slide">
                      <div
                          class="images-and-text-container__header-imgs-carousel__card"
                      >
                          <p
                              class="subtitle-l images-and-text-container__header-imgs-carousel__card--title"
                          >
                              Our culture
                          </p>
                          <p
                              class="body-l-regular images-and-text-container__header-imgs-carousel__card--desc"
                          >
                              With broad domain knowledge and a commitment
                              to sustainable business principles, Luxoft
                              maintains a culture of innovation. We bring
                              our best to our clients and help foster the
                              best in our teams. Join us to make a
                              difference.
                          </p>
                          <svg
                              class="images-and-text-container__header-imgs-carousel__card__mobile-right-circle"
                              width="280"
                              height="121"
                              viewBox="0 0 280 121"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <circle
                                  cx="77.5"
                                  cy="215.5"
                                  r="197.5"
                                  stroke="url(#paint0_linear_3984_1076)"
                                  stroke-width="35"
                                  stroke-linecap="round"
                              />
                              <defs>
                                  <linearGradient
                                      id="paint0_linear_3984_1076"
                                      x1="-1872.5"
                                      y1="-1812"
                                      x2="32.6128"
                                      y2="-2067.92"
                                      gradientUnits="userSpaceOnUse"
                                  >
                                      <stop stop-color="white" />
                                      <stop
                                          offset="1"
                                          stop-color="white"
                                          stop-opacity="0"
                                      />
                                  </linearGradient>
                              </defs>
                          </svg>
                      </div>
                  </div>
              </ul>
          </div>
      </section>
  </div>
      `;
    }

    this.app.editor.insertContent({
      html: heroHtml,
    });
  },
});
