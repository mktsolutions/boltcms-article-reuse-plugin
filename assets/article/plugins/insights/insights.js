// Icon
ArticleEditor.iconInsights = '<i class="fa fa-user"></i>';

// Block
ArticleEditor.add("block", "block.insights", {
  mixins: ["block"],
  type: "insights",
  toolbar: {
    add: { command: "addbar.popup", title: "## buttons.add ##" },
  },
  control: {
    trash: { command: "block.remove", title: "## buttons.delete ##" },
  },
  create: function () {
    return this.dom("<section>");
  },
});

// Plugin
ArticleEditor.add("plugin", "insights", {
  translations: {
    en: {
      insights: {
        insights: "Insights",
        add: "Insert",
        cancel: "Cancel",
        label: "Choose the design you want to insert",
      },
      blocks: {
        insights: "Insights",
      },
    },
  },
  start: function () {
    this.app.addbar.add("insights", {
      title: "## blocks.insights ##",
      icon: ArticleEditor.iconInsights,
      command: "insights.popup",
    });
  },
  popup: function () {
    var stack = this.app.popup.add("insights", {
      title: "## insights.insights ##",
      width: "400px",
      command: "addbar.popup",
      form: {
        insights: {
          label: "## insights.label ##",
          type: "select",
          options: {
            simple: "Simple",
            fancy: "Fancy",
            mixed: "Mixed",
          },
        },
      },
      footer: {
        insert: {
          title: "## insights.add ##",
          command: "insights.insert",
          type: "primary",
        },
        cancel: { title: "## insights.cancel ##", command: "popup.close" },
      },
    });

    stack.open({ focus: "insights" });
  },
  insert: function (stack) {
    var instance = this._buildInstance(stack);

    if (instance) {
      this.app.block.add({ instance: instance });
      this.app.source.toggle();
      this.app.source.toggle();
    }
  },
  _buildInstance: function (stack, instance) {
    this.app.popup.close();

    var data = stack.getData();
    var insightsType = data.insights;
    var instance = instance || this.app.create("block.insights");
    var $block = instance.getBlock();

    if (insightsType === "simple") {
      $block.addClass("container-featured container-xxl");

      var leadersHtml = ` <div class="title">
                            <h2>Featured insights</h2>
                            <div class="row">
                              <div></div>
                            </div>
                          </div>`;
      var $section = this.dom(leadersHtml);
    } else if (insightsType === "fancy") {
      $block.addClass("featured container-xxl");

      var insightsHtml = `<div class="container">
                            <div class="row">
                              <h2 class="featured__title">Featured insights</h2>
                            </div>
                            <div class="container-xxl js-stack-cards">
                              <div></div>
                            </div>
                          </div>`;
      var $section = this.dom(insightsHtml);
    } else if (insightsType === "mixed") {
      $block.addClass("container-insights");

      var insightsHtml = `<div class="title">
                            <h2>
                              Key insights and featured news
                            </h2>
                          </div>
                          <div class="row">
                            <div></div>
                          </div>`;
      var $section = this.dom(insightsHtml);
    }

    $block.append($section);

    return instance;
  },
});
