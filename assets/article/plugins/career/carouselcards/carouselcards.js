// Icon
ArticleEditor.iconCarouselCards = '<i class="fa fa-ellipsis-h"></i>';

// Plugin
ArticleEditor.add("plugin", "carouselcards", {
  translations: {
    en: {
      carouselcards: {
        hero: "Carousel Cards",
        add: "Insert",
        cancel: "Cancel",
        label: "Choose the number of cards:",
      },
      blocks: {
        hero: "Carousel Cards",
      },
    },
  },
  start: function () {
    this.app.addbar.add("carouselcards", {
      // poate aici trebe schimbat din hero
      title: "Carousel Cards",
      icon: ArticleEditor.iconCarouselCards,
      command: "carouselcards.popup",
    });
  },
  popup: function () {
    var stack = this.app.popup.add("carouselcards", {
      title: "Carousel Cards",
      width: "400px",
      command: "addbar.popup",
      form: {
        hero: {
          label: "Choose the version",
          type: "select",
          options: {
            7: "7",
          },
        },
      },
      footer: {
        insert: {
          title: "Insert",
          command: "carouselcards.insert",
          type: "primary",
        },
        cancel: {
          title: "Close",
          command: "popup.close",
        },
      },
    });

    stack.open({ focus: "carouselcards" });
  },
  insert: function (stack) {
    var instance = this._buildInstance(stack);
  },
  _buildInstance: function (stack) {
    this.app.popup.close();

    var data = stack.getData();
    var editableType = data.hero;

    var html = ``;

    html += `
    <div class="carousel-cards">
    <h2 class="container">How to get to us</h2>
<section id="how-we-hire-carousel" class="splide">
    <div class="splide__track">
        <div class="splide__list">
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-1">
                    <div class="how-we-hire__slide-container__image">
                        <img
                            src="https://dummyimage.com/350x300/000/fff"
                            alt=""
                            loading="lazy"
                        />
                        <div
                            class="how-we-hire__slide-container__image__number"
                        >
                            1
                        </div>
                    </div>
                    <div class="how-we-hire__slide-container__text">
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Send your resume
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod eiusmod tempor incididunt.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-3">
                    <div class="how-we-hire__slide-container__image">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="241"
                            height="290"
                            viewBox="0 0 241 290"
                            fill="none"
                            class="how-we-hire__slide-container__image__svg-left"
                        >
                            <g
                                opacity="0.75"
                                filter="url(#filter0_b_3292_1821)"
                            >
                                <path
                                    d="M410 543L318.251 543L15.1348 186.73C-3.92574 164.327 -3.9352 131.409 15.1125 108.996L171.475 -75L256.075 -75L100.062 108.584C80.8615 131.178 81.0439 164.409 100.492 186.791L410 543Z"
                                    fill="url(#paint0_linear_3292_1821)"
                                    fill-opacity="0.5"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_b_3292_1821"
                                    x="-19.167"
                                    y="-95"
                                    width="449.167"
                                    height="658"
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
                                        result="effect1_backgroundBlur_3292_1821"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_3292_1821"
                                        result="shape"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_3292_1821"
                                    x1="264"
                                    y1="903.5"
                                    x2="100.969"
                                    y2="-366.305"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="434"
                            height="290"
                            viewBox="0 0 434 290"
                            fill="none"
                            class="how-we-hire__slide-container__image__svg-right"
                        >
                            <path
                                opacity="0.75"
                                d="M78.3993 -163H171.966L417.391 105.496C438.323 128.396 438.345 163.477 417.442 186.402L20.2762 622H-66L330.692 186.922C351.792 163.78 351.544 128.301 330.123 105.456L78.3993 -163Z"
                                fill="url(#paint0_linear_3292_1820)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_3292_1820"
                                    x1="419.5"
                                    y1="-449"
                                    x2="8.78335"
                                    y2="534.628"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div
                            class="how-we-hire__slide-container__image__number"
                        >
                            2
                        </div>
                    </div>
                    <div class="how-we-hire__slide-container__text">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="434"
                            height="180"
                            viewBox="0 0 434 180"
                            fill="none"
                            class="how-we-hire__slide-container__text__svg-left"
                        >
                            <path
                                opacity="0.75"
                                d="M78.3993 -463H171.966L417.391 -194.504C438.323 -171.604 438.345 -136.523 417.442 -113.598L20.2762 322H-66L330.692 -113.078C351.792 -136.22 351.544 -171.699 330.123 -194.544L78.3993 -463Z"
                                fill="url(#paint0_linear_3292_1827)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_3292_1827"
                                    x1="419.5"
                                    y1="-749"
                                    x2="8.78335"
                                    y2="234.628"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="241"
                            height="180"
                            viewBox="0 0 241 180"
                            fill="none"
                            class="how-we-hire__slide-container__text__svg-right"
                        >
                            <g
                                opacity="0.75"
                                filter="url(#filter0_b_3292_1828)"
                            >
                                <path
                                    d="M410 243L318.251 243L15.1348 -113.27C-3.92574 -135.673 -3.9352 -168.591 15.1125 -191.004L171.475 -375L256.075 -375L100.062 -191.416C80.8615 -168.822 81.0439 -135.591 100.492 -113.209L410 243Z"
                                    fill="url(#paint0_linear_3292_1828)"
                                    fill-opacity="0.5"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_b_3292_1828"
                                    x="-19.167"
                                    y="-395"
                                    width="449.167"
                                    height="658"
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
                                        result="effect1_backgroundBlur_3292_1828"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_3292_1828"
                                        result="shape"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_3292_1828"
                                    x1="264"
                                    y1="603.5"
                                    x2="100.969"
                                    y2="-666.305"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Recruiter interview
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-2">
                    <img
                        class="how-we-hire__slide-container__image"
                        src="https://dummyimage.com/350x300/000/fff"
                        alt=""
                        loading="lazy"
                    />
                    <div class="how-we-hire__slide-container__number">3</div>
                    <div class="how-we-hire__slide-container__text">
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Technical interview
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-4">
                    <div class="how-we-hire__slide-container__image">
                        <svg
                            width="441"
                            height="188"
                            viewBox="0 0 441 188"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="how-we-hire__slide-container__image__svg-left"
                        >
                            <g
                                opacity="0.75"
                                filter="url(#filter0_b_3292_2282)"
                            >
                                <circle
                                    cx="123"
                                    cy="318"
                                    r="273"
                                    stroke="url(#paint0_linear_3292_2282)"
                                    stroke-opacity="0.5"
                                    stroke-width="90"
                                    stroke-linecap="round"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_b_3292_2282"
                                    x="-215"
                                    y="-20"
                                    width="676"
                                    height="676"
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
                                        result="effect1_backgroundBlur_3292_2282"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_3292_2282"
                                        result="shape"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_3292_2282"
                                    x1="105.5"
                                    y1="-271.5"
                                    x2="1077.58"
                                    y2="217.134"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg
                            width="339"
                            height="279"
                            viewBox="0 0 339 279"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="how-we-hire__slide-container__image__svg-right"
                        >
                            <circle
                                opacity="0.75"
                                cx="318"
                                cy="318"
                                r="273"
                                stroke="url(#paint0_linear_3292_2283)"
                                stroke-width="90"
                                stroke-linecap="round"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_3292_2283"
                                    x1="-651.5"
                                    y1="-1451.5"
                                    x2="677.91"
                                    y2="-1203.53"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="0.0001"
                                        stop-color="#CBCBCB"
                                    />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div
                            class="how-we-hire__slide-container__image__number"
                        >
                            4
                        </div>
                    </div>
                    <div class="how-we-hire__slide-container__text">
                        <svg
                            width="339"
                            height="180"
                            viewBox="0 0 339 180"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="how-we-hire__slide-container__text__svg-left"
                        >
                            <circle
                                opacity="0.75"
                                cx="318"
                                cy="29"
                                r="273"
                                stroke="url(#paint0_linear_3292_2289)"
                                stroke-width="90"
                                stroke-linecap="round"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_3292_2289"
                                    x1="-651.5"
                                    y1="-1740.5"
                                    x2="677.91"
                                    y2="-1492.53"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="0.0001"
                                        stop-color="#CBCBCB"
                                    />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg
                            width="441"
                            height="180"
                            viewBox="0 0 441 180"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="how-we-hire__slide-container__text__svg-right"
                        >
                            <g
                                opacity="0.75"
                                filter="url(#filter0_b_3292_2290)"
                            >
                                <circle
                                    cx="123"
                                    cy="120"
                                    r="273"
                                    stroke="url(#paint0_linear_3292_2290)"
                                    stroke-opacity="0.5"
                                    stroke-width="90"
                                    stroke-linecap="round"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_b_3292_2290"
                                    x="-215"
                                    y="-218"
                                    width="676"
                                    height="676"
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
                                        result="effect1_backgroundBlur_3292_2290"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_3292_2290"
                                        result="shape"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_3292_2290"
                                    x1="105.5"
                                    y1="-469.5"
                                    x2="1077.58"
                                    y2="19.1344"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="0.997106"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>

                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Test assignments
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-1">
                    <div class="how-we-hire__slide-container__image">
                        <img
                            src="https://dummyimage.com/350x300/000/fff"
                            alt=""
                            loading="lazy"
                        />
                        <div
                            class="how-we-hire__slide-container__image__number"
                        >
                            5
                        </div>
                    </div>
                    <div class="how-we-hire__slide-container__text">
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Job offer
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod eiusmod tempor incididunt.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-2">
                    <img
                        class="how-we-hire__slide-container__image"
                        src="https://dummyimage.com/350x300/000/fff"
                        alt=""
                        loading="lazy"
                    />
                    <div class="how-we-hire__slide-container__number">6</div>
                    <div class="how-we-hire__slide-container__text">
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Client interview (optional)
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-1">
                    <div class="how-we-hire__slide-container__image">
                        <img
                            src="https://dummyimage.com/350x300/000/fff"
                            alt=""
                            loading="lazy"
                        />
                        <div
                            class="how-we-hire__slide-container__image__number"
                        >
                            7
                        </div>
                    </div>
                    <div class="how-we-hire__slide-container__text">
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Job offer
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="carousel-mobile-blur"></div> -->
</section>
<section id="how-we-hire-mobile-carousel" class="splide">
    <div class="splide__track">
        <div class="splide__list">
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-1">
                    <div class="how-we-hire__slide-container__image">
                        <img
                            src="https://dummyimage.com/350x300/000/fff"
                            alt=""
                            loading="lazy"
                        />
                        <div
                            class="how-we-hire__slide-container__image__number"
                        >
                            1
                        </div>
                    </div>
                    <div class="how-we-hire__slide-container__text">
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Send your resume
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod eiusmod tempor incididunt.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-3">
                    <div class="how-we-hire__slide-container__image">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="241"
                            height="290"
                            viewBox="0 0 241 290"
                            fill="none"
                            class="how-we-hire__slide-container__image__svg-left"
                        >
                            <g
                                opacity="0.75"
                                filter="url(#filter0_b_3292_1821)"
                            >
                                <path
                                    d="M410 543L318.251 543L15.1348 186.73C-3.92574 164.327 -3.9352 131.409 15.1125 108.996L171.475 -75L256.075 -75L100.062 108.584C80.8615 131.178 81.0439 164.409 100.492 186.791L410 543Z"
                                    fill="url(#paint0_linear_3292_1821)"
                                    fill-opacity="0.5"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_b_3292_1821"
                                    x="-19.167"
                                    y="-95"
                                    width="449.167"
                                    height="658"
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
                                        result="effect1_backgroundBlur_3292_1821"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_3292_1821"
                                        result="shape"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_3292_1821"
                                    x1="264"
                                    y1="903.5"
                                    x2="100.969"
                                    y2="-366.305"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="434"
                            height="290"
                            viewBox="0 0 434 290"
                            fill="none"
                            class="how-we-hire__slide-container__image__svg-right"
                        >
                            <path
                                opacity="0.75"
                                d="M78.3993 -163H171.966L417.391 105.496C438.323 128.396 438.345 163.477 417.442 186.402L20.2762 622H-66L330.692 186.922C351.792 163.78 351.544 128.301 330.123 105.456L78.3993 -163Z"
                                fill="url(#paint0_linear_3292_1820)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_3292_1820"
                                    x1="419.5"
                                    y1="-449"
                                    x2="8.78335"
                                    y2="534.628"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div
                            class="how-we-hire__slide-container__image__number"
                        >
                            2
                        </div>
                    </div>
                    <div class="how-we-hire__slide-container__text">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="434"
                            height="180"
                            viewBox="0 0 434 180"
                            fill="none"
                            class="how-we-hire__slide-container__text__svg-left"
                        >
                            <path
                                opacity="0.75"
                                d="M78.3993 -463H171.966L417.391 -194.504C438.323 -171.604 438.345 -136.523 417.442 -113.598L20.2762 322H-66L330.692 -113.078C351.792 -136.22 351.544 -171.699 330.123 -194.544L78.3993 -463Z"
                                fill="url(#paint0_linear_3292_1827)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_3292_1827"
                                    x1="419.5"
                                    y1="-749"
                                    x2="8.78335"
                                    y2="234.628"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="241"
                            height="180"
                            viewBox="0 0 241 180"
                            fill="none"
                            class="how-we-hire__slide-container__text__svg-right"
                        >
                            <g
                                opacity="0.75"
                                filter="url(#filter0_b_3292_1828)"
                            >
                                <path
                                    d="M410 243L318.251 243L15.1348 -113.27C-3.92574 -135.673 -3.9352 -168.591 15.1125 -191.004L171.475 -375L256.075 -375L100.062 -191.416C80.8615 -168.822 81.0439 -135.591 100.492 -113.209L410 243Z"
                                    fill="url(#paint0_linear_3292_1828)"
                                    fill-opacity="0.5"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_b_3292_1828"
                                    x="-19.167"
                                    y="-395"
                                    width="449.167"
                                    height="658"
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
                                        result="effect1_backgroundBlur_3292_1828"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_3292_1828"
                                        result="shape"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_3292_1828"
                                    x1="264"
                                    y1="603.5"
                                    x2="100.969"
                                    y2="-666.305"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Recruiter interview
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-2">
                    <img
                        class="how-we-hire__slide-container__image"
                        src="https://dummyimage.com/350x300/000/fff"
                        alt=""
                        loading="lazy"
                    />
                    <div class="how-we-hire__slide-container__number">3</div>
                    <div class="how-we-hire__slide-container__text">
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Technical interview
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-4">
                    <div class="how-we-hire__slide-container__image">
                        <svg
                            width="441"
                            height="188"
                            viewBox="0 0 441 188"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="how-we-hire__slide-container__image__svg-left"
                        >
                            <g
                                opacity="0.75"
                                filter="url(#filter0_b_3292_2282)"
                            >
                                <circle
                                    cx="123"
                                    cy="318"
                                    r="273"
                                    stroke="url(#paint0_linear_3292_2282)"
                                    stroke-opacity="0.5"
                                    stroke-width="90"
                                    stroke-linecap="round"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_b_3292_2282"
                                    x="-215"
                                    y="-20"
                                    width="676"
                                    height="676"
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
                                        result="effect1_backgroundBlur_3292_2282"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_3292_2282"
                                        result="shape"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_3292_2282"
                                    x1="105.5"
                                    y1="-271.5"
                                    x2="1077.58"
                                    y2="217.134"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg
                            width="339"
                            height="279"
                            viewBox="0 0 339 279"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="how-we-hire__slide-container__image__svg-right"
                        >
                            <circle
                                opacity="0.75"
                                cx="318"
                                cy="318"
                                r="273"
                                stroke="url(#paint0_linear_3292_2283)"
                                stroke-width="90"
                                stroke-linecap="round"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_3292_2283"
                                    x1="-651.5"
                                    y1="-1451.5"
                                    x2="677.91"
                                    y2="-1203.53"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="0.0001"
                                        stop-color="#CBCBCB"
                                    />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div
                            class="how-we-hire__slide-container__image__number"
                        >
                            4
                        </div>
                    </div>
                    <div class="how-we-hire__slide-container__text">
                        <svg
                            width="339"
                            height="180"
                            viewBox="0 0 339 180"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="how-we-hire__slide-container__text__svg-left"
                        >
                            <circle
                                opacity="0.75"
                                cx="318"
                                cy="29"
                                r="273"
                                stroke="url(#paint0_linear_3292_2289)"
                                stroke-width="90"
                                stroke-linecap="round"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_3292_2289"
                                    x1="-651.5"
                                    y1="-1740.5"
                                    x2="677.91"
                                    y2="-1492.53"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="0.0001"
                                        stop-color="#CBCBCB"
                                    />
                                    <stop
                                        offset="1"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg
                            width="441"
                            height="180"
                            viewBox="0 0 441 180"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="how-we-hire__slide-container__text__svg-right"
                        >
                            <g
                                opacity="0.75"
                                filter="url(#filter0_b_3292_2290)"
                            >
                                <circle
                                    cx="123"
                                    cy="120"
                                    r="273"
                                    stroke="url(#paint0_linear_3292_2290)"
                                    stroke-opacity="0.5"
                                    stroke-width="90"
                                    stroke-linecap="round"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_b_3292_2290"
                                    x="-215"
                                    y="-218"
                                    width="676"
                                    height="676"
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
                                        result="effect1_backgroundBlur_3292_2290"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_3292_2290"
                                        result="shape"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_3292_2290"
                                    x1="105.5"
                                    y1="-469.5"
                                    x2="1077.58"
                                    y2="19.1344"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#CBCBCB" />
                                    <stop
                                        offset="0.997106"
                                        stop-color="#CBCBCB"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>

                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Test assignments
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-1">
                    <div class="how-we-hire__slide-container__image">
                        <img
                            src="https://dummyimage.com/350x300/000/fff"
                            alt=""
                            loading="lazy"
                        />
                        <div
                            class="how-we-hire__slide-container__image__number"
                        >
                            5
                        </div>
                    </div>
                    <div class="how-we-hire__slide-container__text">
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Job offer
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod eiusmod tempor incididunt.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-2">
                    <img
                        class="how-we-hire__slide-container__image"
                        src="https://dummyimage.com/350x300/000/fff"
                        alt=""
                        loading="lazy"
                    />
                    <div class="how-we-hire__slide-container__number">6</div>
                    <div class="how-we-hire__slide-container__text">
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Client interview (optional)
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div class="splide__slide">
                <div class="how-we-hire__slide-container mod-1">
                    <div class="how-we-hire__slide-container__image">
                        <img
                            src="https://dummyimage.com/350x300/000/fff"
                            alt=""
                            loading="lazy"
                        />
                        <div
                            class="how-we-hire__slide-container__image__number"
                        >
                            7
                        </div>
                    </div>
                    <div class="how-we-hire__slide-container__text">
                        <p
                            class="subtitle-l how-we-hire__slide-container__text__title"
                        >
                            Job offer
                        </p>
                        <p
                            class="body-l-regular how-we-hire__slide-container__text__description"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="carousel-mobile-blur"></div> -->
</section>
</div>
    `;

    this.app.editor.insertContent({
      html: html,
    });
  },
});
