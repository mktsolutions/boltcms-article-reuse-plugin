ArticleEditor.add('plugin', 'hiringProcess', {
    start() {
      this.app.toolbar.add('hiringProcess', {
        title: 'Insert hiring process carousel',
        icon: '<i class="fa fa-address-card"></i>',
        command: 'hiringProcess.toggle',
        blocks: {
          all: 'editable'
        }
      });
    },
  
    toggle(params, button, name) {
      if (window.confirm('Are you sure you want to insert the carousel?')) {
        var stringHtml = `<section class="hiring-process-carousel" id="hiring-process-carousel">
              <div class="container text-center">
                  <h2>How to get to us</h2>
              </div>
  
              <div class="container mt-4">
                  <div id="splider-hiring-process" class="splide hiring-process-carousel__splide">
                      <div class="splide__track">
                          <div class="splide__list">
                              <div class="splide__slide">
                                  <div class="how-we-hire__slide-container mod-1">
                                      <div class="how-we-hire__slide-container__image">
                                          <img src="/files/how-we-hire/Step-1-desktop.jpg" alt="item image" loading="lazy">
                                          <div class="how-we-hire__slide-container__image__number">
                                              1
                                          </div>
                                      </div>
                                      <div class="how-we-hire__slide-container__text">
                                          <p class="subtitle-l how-we-hire__slide-container__text__title">
                                              Send your resume
                                          </p>
                                          <p class="body-l-regular how-we-hire__slide-container__text__description">
                                              Begin your Luxoft journey by sending us your resume. This is the first step toward joining our dynamic team of professionals. We’ll get to know your strengths and preferences, helping you find the right fit. At Luxoft, there’s an entire world of opportunity waiting —  with operations in 29 countries, your dream job is near you.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="splide__slide">
                                  <div class="how-we-hire__slide-container mod-3">
                                      <div class="how-we-hire__slide-container__image">
                                          <div class="how-we-hire__slide-container__image__number">
                                              2
                                          </div>
                                      </div>
                                      <div class="how-we-hire__slide-container__text">
                                          <p class="subtitle-l how-we-hire__slide-container__text__title">
                                              Recruiter interview
                                          </p>
                                          <p class="body-l-regular how-we-hire__slide-container__text__description">
                                                  In the recruiter interview, we aim to understand not just your skills, but also your unique qualities and aspirations. This conversation is a chance for us to get to know you personally and professionally. Let's explore your career dreams together and see how they align with the exciting opportunities at Luxoft.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="splide__slide">
                                  <div class="how-we-hire__slide-container mod-2">
                                      <img class="how-we-hire__slide-container__image" src="/files/how-we-hire/Step-3-desktop.jpg" alt="item image" loading="lazy">
                                      <div class="how-we-hire__slide-container__number">
                                          3
                                      </div>
                                      <div class="how-we-hire__slide-container__text">
                                          <p class="subtitle-l how-we-hire__slide-container__text__title">
                                            Technical interview
                                          </p>
                                          <p class="body-l-regular how-we-hire__slide-container__text__description">
                                              Showcase your experience and technical excellence during the technical interview. This is your time to shine and demonstrate your skills, problem-solving abilities, and passion for innovation. We're eager to see how your expertise aligns with the cutting-edge projects and challenges awaiting you at Luxoft.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="splide__slide">
                                <div class="how-we-hire__slide-container mod-4">
                                  <div class="how-we-hire__slide-container__image">
                                        <div class="how-we-hire__slide-container__image__number">
                                            4
                                        </div>
                                  </div>
                                  <div class="how-we-hire__slide-container__text">
                                        <p class="subtitle-l how-we-hire__slide-container__text__title">
                                            Test assignments
                                        </p>
                                        <p class="body-l-regular how-we-hire__slide-container__text__description">
                                            Test assignments are tailored to the role you're applying for so you’re able to demonstrate your expertise — without consuming excessive working hours. We're flexible on deadlines; just discuss with your recruiter. Remember, it's not just about the final outcome — we want to understand your task approach and problem-solving skills.
                                        </p>
                                  </div>
                                </div>
                              </div>
                              <div class="splide__slide">
                                  <div class="how-we-hire__slide-container mod-1">
                                      <div class="how-we-hire__slide-container__image">
                                          <img src="/files/how-we-hire/Step-5-desktop.jpg" alt="item image" loading="lazy">
                                          <div class="how-we-hire__slide-container__image__number">
                                              5
                                          </div>
                                      </div>
                                      <div class="how-we-hire__slide-container__text">
                                          <p class="subtitle-l how-we-hire__slide-container__text__title">
                                              Project lead interview
                                          </p>
                                          <p class="body-l-regular how-we-hire__slide-container__text__description">
                                              After technical interviews, an online interview with the project lead explores your personal qualities, teamwork, and career aspirations at Luxoft. We aim to understand how you handle various situations, your approach to working, and the role you'll assume within the team. It’s not just about what you know but how you apply that knowledge to succeed.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="splide__slide">
                                  <div class="how-we-hire__slide-container mod-3">
                                      <div class="how-we-hire__slide-container__image">
                                            <div class="how-we-hire__slide-container__image__number">
                                                6
                                            </div>
                                      </div>
                                      <div class="how-we-hire__slide-container__text">
                                            <p class="subtitle-l how-we-hire__slide-container__text__title">
                                                Client interview (optional)
                                            </p>
                                            <p class="body-l-regular how-we-hire__slide-container__text__description">
                                                In the optional client interview, you'll have the chance to demonstrate your client-facing skills and how they align with our project goals. This conversation provides a deeper understanding of your ability to communicate, collaborate, and foster strong client relationships, all of which are crucial in delivering successful projects at Luxoft.
                                            </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="splide__slide">
                                  <div class="how-we-hire__slide-container mod-1">
                                      <div class="how-we-hire__slide-container__image">
                                          <img src="/files/how-we-hire/Step-7-desktop.jpg" alt="item image" loading="lazy">
                                          <div class="how-we-hire__slide-container__image__number">
                                              7
                                          </div>
                                      </div>
                                      <div class="how-we-hire__slide-container__text">
                                          <p class="subtitle-l how-we-hire__slide-container__text__title">
                                              Job offer
                                          </p>
                                          <p class="body-l-regular how-we-hire__slide-container__text__description">
                                              Upon receiving positive client feedback, we'll invite you to an online discussion to go over the details around your job offer. If the terms align with your expectations, your hiring journey reaches a successful conclusion — welcome aboard! However, if you need time for deliberation or have questions, we can extend the decision deadline by several days.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>`
  
        this.app.editor.insertContent({
          html: stringHtml,
        })
      }
    }
  })
  