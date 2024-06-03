// Icon
ArticleEditor.iconCardsWithIcons = '<i class="fa fa-grip-horizontal"></i>';

// Plugin
ArticleEditor.add("plugin", "cardswithicons", {
  translations: {
    en: {
      cardswithicons: {
        hero: "Cards and CTA",
        add: "Insert",
        cancel: "Cancel",
        label: "Choose the version:",
      },
      blocks: {
        hero: "Cards and CTA",
      },
    },
  },
  start: function () {
    this.app.addbar.add("cardswithicons", {
      // poate aici trebe schimbat din hero
      title: "Cards and CTA",
      icon: ArticleEditor.iconCardsWithIcons,
      command: "cardswithicons.popup",
    });
  },
  popup: function () {
    var stack = this.app.popup.add("cardswithicons", {
      title: "Cards and CTA",
      width: "400px",
      command: "addbar.popup",
      form: {
        hero: {
          label: "## cardswithicons.label ##",
          type: "select",
          options: {
            1: "3 grey with 1 cta",
          },
        },
      },
      footer: {
        insert: {
          title: "Insert",
          command: "cardswithicons.insert",
          type: "primary",
        },
        cancel: {
          title: "Cancel",
          command: "popup.close",
        },
      },
    });

    stack.open({ focus: "cardswithicons" });
  },
  insert: function (stack) {
    var instance = this._buildInstance(stack);
  },
  _buildInstance: function (stack) {
    this.app.popup.close();

    var data = stack.getData();
    var editableType = data.hero;

    var heroHtml = ``;

    heroHtml += `
    <section class="container cards-with-icons">
    <div class="cards-with-icons__description">
        <h2>Thrive in the world’s best workplace</h2>
        <p>
            Discover our culture and what it means to belong to the Luxoft
            family
        </p>
    </div>
    <div class="cards-with-icons__cards">
        <div class="cards-with-icons__cards__card--v2">
            <figure>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                >
                    <path
                        d="M4.16675 39.5833C4.16675 35 7.91675 31.25 12.5001 31.25H20.8334C25.4167 31.25 29.1667 35 29.1667 39.5833"
                        stroke="#5F249F"
                        stroke-width="2.5"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M21.8751 12.5C24.7917 15.4167 24.7917 20 21.8751 22.7083C18.9584 25.4167 14.3751 25.625 11.6667 22.7083C8.95841 19.7917 8.75007 15.4167 11.4584 12.5C14.1667 9.58332 18.9584 9.79166 21.8751 12.5Z"
                        stroke="#5F249F"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M33.3333 29.1667H39.5833C43.1249 29.1667 45.8333 31.8751 45.8333 35.4167"
                        stroke="#5F249F"
                        stroke-width="2.5"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M40.2082 13.9583C42.2916 16.0416 42.2916 19.3749 40.2082 21.2499C38.1249 23.1249 34.7916 23.3333 32.9166 21.2499C31.0416 19.1666 30.8332 15.8333 32.9166 13.9583C34.7916 12.0833 38.1249 12.0833 40.2082 13.9583Z"
                        stroke="#5F249F"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </figure>
            <h3>Achieve more with us</h3>
            <p>
                Happy, comfortable employees thrive in a work environment.
                Discover how Luxoft creates a fulfilling work environment from
                anywhere.
            </p>
        </div>
        <div class="cards-with-icons__cards__card--v2">
            <figure>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                >
                    <g clip-path="url(#clip0_937_19044)">
                        <path
                            d="M16.1104 43.3939C15.5928 43.664 15.0098 43.7838 14.4276 43.7396C13.8454 43.6953 13.2872 43.4889 12.8164 43.1436C12.3455 42.7983 11.9808 42.328 11.7636 41.7861C11.5464 41.2441 11.4854 40.6521 11.5875 40.0772L13.2729 30.4168L6.17707 23.6168C5.75201 23.2114 5.4498 22.6945 5.30508 22.1252C5.16036 21.556 5.179 20.9575 5.35886 20.3984C5.53871 19.8392 5.8725 19.3421 6.32195 18.964C6.7714 18.5858 7.31832 18.342 7.89998 18.2605L17.7521 16.8522L22.2 7.97927C22.4585 7.4576 22.8577 7.01853 23.3524 6.71156C23.8471 6.4046 24.4178 6.24194 25 6.24194C25.5822 6.24194 26.1529 6.4046 26.6476 6.71156C27.1423 7.01853 27.5414 7.4576 27.8 7.97927L32.2479 16.8522L42.1 18.2605C42.6816 18.342 43.2286 18.5858 43.678 18.964C44.1275 19.3421 44.4613 19.8392 44.6411 20.3984C44.821 20.9575 44.8396 21.556 44.6949 22.1252C44.5502 22.6945 44.248 23.2114 43.8229 23.6168L36.7271 30.4168L38.4125 40.0793C38.5146 40.6542 38.4535 41.2462 38.2363 41.7881C38.0191 42.3301 37.6544 42.8004 37.1836 43.1457C36.7127 43.491 36.1545 43.6974 35.5723 43.7417C34.9901 43.7859 34.4072 43.6661 33.8896 43.3959L25 38.8022L16.1104 43.3939Z"
                            stroke="#5F249F"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_937_19044">
                            <rect width="50" height="50" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </figure>
            <h3>Stay engaged at Luxoft</h3>
            <p>
                Luxoft offers unmatched professional development, improved work
                environment, and commitment to employee satisfaction. Experience
                the difference.
            </p>
        </div>
        <div class="cards-with-icons__cards__card--v2">
            <figure>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                >
                    <g clip-path="url(#clip0_937_19053)">
                        <path
                            d="M41.6666 27.0833C41.6666 36.2874 34.2041 43.7499 24.9999 43.7499C15.7958 43.7499 8.33325 36.2874 8.33325 27.0833V14.3999C8.33325 13.3312 9.14159 12.4187 10.2083 12.3354C15.3312 11.9312 19.9937 9.8916 23.6728 6.73535C24.427 6.08952 25.5749 6.08952 26.327 6.73535C30.0062 9.8916 34.6687 11.9333 39.7916 12.3354C40.8583 12.4187 41.6666 13.3312 41.6666 14.3999V27.0833Z"
                            stroke="#5F249F"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_937_19053">
                            <rect width="50" height="50" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </figure>
            <h3>Our reputation is unmatched</h3>
            <p>
                Positive work environments and stellar reputations attract—and
                retain—top talent. Find out why Luxoft stands apart from the
                rest.
            </p>
        </div>
        <div class="cards-with-icons__cards__card--v2">
            <h3>More information about the benefits of working with us</h3>
            <a href="#" class="btn-arrow-ghost--purple filled light-border"
                >Learn more<svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
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
                    </defs></svg
            ></a>
        </div>
    </div>
</section>

    `;

    this.app.editor.insertContent({
      html: heroHtml,
    });
  },
});
