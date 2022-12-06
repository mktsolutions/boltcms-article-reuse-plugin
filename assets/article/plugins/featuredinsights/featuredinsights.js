ArticleEditor.add("plugin", "featuredinsights", {
  defaults: {
    url: window.location.origin,
    contentTypes: {
      caseStudies: "case-studies",
      videos: "videos",
      blogs: "blogs",
    },
  },
  start: async function () {
    const response = await fetch(
      `${this.opts.featuredinsights.url}/api/contents?page=1&contentType%5B%5D=${this.opts.featuredinsights.contentTypes.caseStudies}&contentType%5B%5D=${this.opts.featuredinsights.contentTypes.videos}&contentType%5B%5D=${this.opts.featuredinsights.contentTypes.blogs}&status=published`
    );
    const dataJson = await response.json();
    const items = {};
    const selectOptions = { empty: "-- NONE --" };

    for (const featuredInsight in dataJson) {
      const item = {
        id: dataJson[featuredInsight].id,
        title: dataJson[featuredInsight].fieldValues.name,
        description:
          dataJson[featuredInsight].fieldValues.preview_description_text,
        link: dataJson[featuredInsight].fieldValues.linkedin_url,
        photo:
          window.location.hostname === "127.0.0.1"
            ? "https://www.luxoft.com/upload/resize_cache/iblock/303/400_0_1/RinoAriganello.jpg"
            : dataJson[featuredInsight].fieldValues.image.url,
        command: "featuredinsights.insert",
        contentType:
          dataJson[featuredInsight].contentType === "blogs"
            ? "blog-posts"
            : dataJson[featuredInsight].contentType,
      };
      items[featuredInsight] = item;
      selectOptions[
        featuredInsight
      ] = `${dataJson[featuredInsight].fieldValues.name} - ${dataJson[featuredInsight].fieldValues.preview_description_text}`;
    }

    this.app.toolbar.add("featuredinsights", {
      title: "Featured Insights",
      icon: '<i class="fa fa-users"></i>',
      command: "featuredinsights.popup",
      blocks: {
        types: ["layer", "column"],
      },
      params: {
        items,
        selectOptions,
      },
    });
  },
  popup: function (params, button) {
    this.app.popup.create("featuredinsights", {
      width: "450px",
      footer: {
        save: {
          title: "Insert",
          command: "featuredinsights.insert",
          type: "primary",
        },
        cancel: {
          title: "Cancel",
          command: "popup.close",
        },
      },
      form: {
        featuredInsightsList1: {
          type: "select",
          label: "Choose an insight to insert",
          options: params.selectOptions,
        },
        featuredInsightsList2: {
          type: "select",
          label: "Choose an insight to insert",
          options: params.selectOptions,
        },
        featuredInsightsList3: {
          type: "select",
          label: "Choose an insight to insert",
          options: params.selectOptions,
        },
        designs: {
          type: "select",
          label: "Choose a design to use",
          options: {
            simple: "simple",
            fancy: "fancy",
            mixed: "mixed",
          },
        },
      },
      featuredInsights: params.items,
    });
    console.log(params.selectOptions);
    this.app.popup.open({ button: button });
  },
  insert: function (params, button, name) {
    this.app.popup.close();

    // get form data
    var data = params.getData();
    // console.log(data);
    var featuredInsightPositions = [];
    data.featuredInsightsList1 === "empty"
      ? ""
      : featuredInsightPositions.push(data.featuredInsightsList1);
    data.featuredInsightsList2 === "empty"
      ? ""
      : featuredInsightPositions.push(data.featuredInsightsList2);
    data.featuredInsightsList3 === "empty"
      ? ""
      : featuredInsightPositions.push(data.featuredInsightsList3);

    console.log(
      params.params.featuredInsights[featuredInsightPositions[0]].contentType
    );

    if (featuredInsightPositions.length === 1) {
      this.app.editor.insertContent({
        html: `<div class="tns-item">
                    <div class="html-code">
                      <div>
                        <img src="${
                          params.params.featuredInsights[
                            featuredInsightPositions[0]
                          ].photo
                        }" alt="leader image">
                        <a href="${
                          params.params.featuredInsights[
                            featuredInsightPositions[0]
                          ].link
                        }"></a>
                        <div class="card-body">
                            <h5 class="card-title">${
                              params.params.featuredInsights[
                                featuredInsightPositions[0]
                              ].title
                            }</h5>
                            <p class="card-text">${
                              params.params.featuredInsights[
                                featuredInsightPositions[0]
                              ].description
                            }</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="twig-code">{% setcontent contents = '${
                  params.params.featuredInsights[featuredInsightPositions[0]]
                    .contentType
                }/${
          params.params.featuredInsights[featuredInsightPositions[0]].id
        }' %}</div>
                {% if contents is not empty %}
                  <div class="twig-code">
                      <div class="col">
                        <img src="{{ contents.photo }}" alt="insight image">
                        <h4>{{contents.name}}</h4>
                        <p class="gray">{{contents.title}}</p>
                        <button class="btn btn-text btn-icon focus" type="button">
                          <div class="text-container">
                              <div class="text">Next Story</div>
                              <div class="arr-offering">
                                  <i class="arr-small one"></i>
                                  <i class="arr-small two"></i>
                                  <i class="arr-small three"></i>
                              </div>
                          </div>
                        </button>
                      </div>
                  </div>
                {% endif %}`,
      });
    } else if (featuredInsightPositions.length === 2) {
      this.app.editor.insertContent({
        html: `<div class="tns-item">
                    <div class="card html-code">
                      <div>
                        <img src="${
                          params.params.featuredInsights[
                            featuredInsightPositions[0]
                          ].photo
                        }" alt="leader image">
                        <a href="${
                          params.params.featuredInsights[
                            featuredInsightPositions[0]
                          ].link
                        }"></a>
                        <div class="card-body">
                            <h5 class="card-title">${
                              params.params.featuredInsights[
                                featuredInsightPositions[0]
                              ].title
                            }</h5>
                            <p class="card-text">${
                              params.params.featuredInsights[
                                featuredInsightPositions[0]
                              ].description
                            }</p>
                        </div>
                      </div>
                      <div>
                        <img src="${
                          params.params.featuredInsights[
                            featuredInsightPositions[1]
                          ].photo
                        }" alt="leader image">
                        <a href="${
                          params.params.featuredInsights[
                            featuredInsightPositions[1]
                          ].link
                        }"></a>
                        <div class="card-body">
                            <h5 class="card-title">${
                              params.params.featuredInsights[
                                featuredInsightPositions[1]
                              ].title
                            }</h5>
                            <p class="card-text">${
                              params.params.featuredInsights[
                                featuredInsightPositions[1]
                              ].description
                            }</p>
                        </div>
                      </div>
                    </div>
                    <div class="twig-code">{% setcontent content1 = '${
                      params.params.featuredInsights[
                        featuredInsightPositions[0]
                      ].contentType
                    }/${
          params.params.featuredInsights[featuredInsightPositions[0]].id
        }' %}</div>
                    <div class="twig-code">{% setcontent content2 = '${
                      params.params.featuredInsights[
                        featuredInsightPositions[1]
                      ].contentType
                    }/${
          params.params.featuredInsights[featuredInsightPositions[1]].id
        }' %}</div>
                    {% if content1 is not empty %}
                      {% if content2 is not empty %}
                      <div class="card twig-code">
                          <div class="col">
                            <img src="{{ content1.photo }}" alt="insight image">
                            <h4>{{content1.name}}</h4>
                            <p class="gray">{{content1.title}}</p>
                            <button class="btn btn-text btn-icon focus" type="button">
                              <div class="text-container">
                                  <div class="text">Next Story</div>
                                  <div class="arr-offering">
                                      <i class="arr-small one"></i>
                                      <i class="arr-small two"></i>
                                      <i class="arr-small three"></i>
                                  </div>
                              </div>
                            </button>
                          </div>
                          <div class="col">
                            <img src="{{ content2.photo }}" alt="insight image">
                            <h4>{{content2.name}}</h4>
                            <p class="gray">{{content2.title}}</p>
                            <button class="btn btn-text btn-icon focus" type="button">
                              <div class="text-container">
                                  <div class="text">Next Story</div>
                                  <div class="arr-offering">
                                      <i class="arr-small one"></i>
                                      <i class="arr-small two"></i>
                                      <i class="arr-small three"></i>
                                  </div>
                              </div>
                            </button>
                          </div>
                      </div>
                      {% endif %}
                    {% endif %}
                </div>`,
      });
    } else if (featuredInsightPositions.length === 3) {
      this.app.editor.insertContent({
        html: `<div class="tns-item">
                    <div class="card html-code">
                      <div>
                        <img src="${
                          params.params.featuredInsights[
                            featuredInsightPositions[0]
                          ].photo
                        }" alt="leader image">
                        <a href="${
                          params.params.featuredInsights[
                            featuredInsightPositions[0]
                          ].link
                        }"></a>
                        <div class="card-body">
                            <h5 class="card-title">${
                              params.params.featuredInsights[
                                featuredInsightPositions[0]
                              ].title
                            }</h5>
                            <p class="card-text">${
                              params.params.featuredInsights[
                                featuredInsightPositions[0]
                              ].description
                            }</p>
                        </div>
                      </div>
                      <div>
                        <img src="${
                          params.params.featuredInsights[
                            featuredInsightPositions[1]
                          ].photo
                        }" alt="leader image">
                        <a href="${
                          params.params.featuredInsights[
                            featuredInsightPositions[1]
                          ].link
                        }"></a>
                        <div class="card-body">
                            <h5 class="card-title">${
                              params.params.featuredInsights[
                                featuredInsightPositions[1]
                              ].title
                            }</h5>
                            <p class="card-text">${
                              params.params.featuredInsights[
                                featuredInsightPositions[1]
                              ].description
                            }</p>
                        </div>
                      </div>
                      <div>
                        <img src="${
                          params.params.featuredInsights[
                            featuredInsightPositions[2]
                          ].photo
                        }" alt="leader image">
                        <a href="${
                          params.params.featuredInsights[
                            featuredInsightPositions[2]
                          ].link
                        }"></a>
                        <div class="card-body">
                            <h5 class="card-title">${
                              params.params.featuredInsights[
                                featuredInsightPositions[2]
                              ].title
                            }</h5>
                            <p class="card-text">${
                              params.params.featuredInsights[
                                featuredInsightPositions[2]
                              ].description
                            }</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="twig-code">{% setcontent content1 = '${
                  params.params.featuredInsights[featuredInsightPositions[0]]
                    .contentType
                }/${
          params.params.featuredInsights[featuredInsightPositions[0]].id
        }' %}</div>
                <div class="twig-code">{% setcontent content2 = '${
                  params.params.featuredInsights[featuredInsightPositions[1]]
                    .contentType
                }/${
          params.params.featuredInsights[featuredInsightPositions[1]].id
        }' %}</div>
                <div class="twig-code">{% setcontent content3 = '${
                  params.params.featuredInsights[featuredInsightPositions[2]]
                    .contentType
                }/${
          params.params.featuredInsights[featuredInsightPositions[2]].id
        }' %}</div>
                {% if content1 is not empty %}
                  {% if content2 is not empty %}
                  {% if content3 is not empty %}
                  <div class="twig-code">
                      <div class="col">
                        <img src="{{ content1.photo }}" alt="insight image">
                        <h4>{{content1.name}}</h4>
                        <p class="gray">{{content1.title}}</p>
                        <button class="btn btn-text btn-icon focus" type="button">
                          <div class="text-container">
                              <div class="text">Next Story</div>
                              <div class="arr-offering">
                                  <i class="arr-small one"></i>
                                  <i class="arr-small two"></i>
                                  <i class="arr-small three"></i>
                              </div>
                          </div>
                        </button>
                      </div>
                      <div class="col">
                        <img src="{{ content2.photo }}" alt="insight image">
                        <h4>{{content2.name}}</h4>
                        <p class="gray">{{content2.title}}</p>
                        <button class="btn btn-text btn-icon focus" type="button">
                          <div class="text-container">
                              <div class="text">Next Story</div>
                              <div class="arr-offering">
                                  <i class="arr-small one"></i>
                                  <i class="arr-small two"></i>
                                  <i class="arr-small three"></i>
                              </div>
                          </div>
                        </button>
                      </div>
                      <div class="col">
                        <img src="{{ content3.photo }}" alt="insight image">
                        <h4>{{content3.name}}</h4>
                        <p class="gray">{{content3.title}}</p>
                        <button class="btn btn-text btn-icon focus" type="button">
                          <div class="text-container">
                              <div class="text">Next Story</div>
                              <div class="arr-offering">
                                  <i class="arr-small one"></i>
                                  <i class="arr-small two"></i>
                                  <i class="arr-small three"></i>
                              </div>
                          </div>
                        </button>
                      </div>
                  </div>
                  {% endif %}
                  {% endif %}
                {% endif %}`,
      });
    }

    // this.app.editor.insertContent({
    //   html: `<div class="tns-item">
    //               <div class="card html-code">
    //                 <div>
    //                   <img src="${params.params.featuredInsights[featuredInsightPosition1].photo}" alt="leader image">
    //                   <a href="${params.params.featuredInsights[featuredInsightPosition1].link}"></a>
    //                   <div class="card-body">
    //                       <h5 class="card-title">${params.params.featuredInsights[featuredInsightPosition1].title}</h5>
    //                       <p class="card-text">${params.params.featuredInsights[featuredInsightPosition1].description}</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div class="twig-code">{% setcontent leader = 'case-studies/${params.params.featuredInsights[featuredInsightPosition].id}' %}</div>
    //               {% if leader is not empty %}
    //                   {{ include('partials/_featured_insights.twig') }}
    //               {% endif %}
    //           </div>`,
    // });
  },
});
