// Icon
ArticleEditor.iconjobscards = '<i class="fa fa-user-plus"></i>';

// Plugin
ArticleEditor.add("plugin", "jobscards", {
  translations: {
    en: {
      jobscards: {
        jobscards: "Jobs cards",
        add: "Insert",
        cancel: "Cancel",
        label: "Choose the design you want to insert",
      },
      blocks: {
        jobscards: "Jobs cards",
      },
    },
  },
  init: function () {
    this.elements = {};
    this.locations = {};
  },
  start: async function () {
    const $this = this;
    const storageInterval = setInterval(checkStorage, 5000);

    function checkStorage() {
      if (localStorage.getItem("contentTypeJobsData") !== null) {
        getJobsData();
        getLocationsData();
      }
    }

    function getJobsData() {
      const storageData = JSON.parse(
          localStorage.getItem("contentTypeJobsData")
      );

      $this.elements = {
        items: storageData.items,
        selectOptions: storageData.selectOptions,
      };

      $this.app.addbar.add("jobscards", {
        title: "## blocks.jobscards ##",
        icon: ArticleEditor.iconjobscards,
        command: "jobscards.popup",
      });

      clearInterval(storageInterval);
    }

    function getLocationsData() {
      const storageData = JSON.parse(
          localStorage.getItem("contentTypeJobsData")
      );

      const uniqueCountries = [...new Set(storageData.items.map(item => item.country))].filter(n => n).sort();
      $this.locations = {
        selectOptions: uniqueCountries
      };

      clearInterval(storageInterval);
    }

  },
  popup: function () {
    var stack = this.app.popup.create("jobscards", {
      title: "## jobscards.jobscards ##",
      width: "400px",
      command: "addbar.popup",
      form: {
        location: {
          type: "select",
          label: "Choose location",
          options: this.locations.selectOptions,
        }
      },
      footer: {
        insert: {
          title: "## jobscards.add ##",
          command: "jobscards.insert",
          type: "primary",
        },
        cancel: { title: "## jobscards.cancel ##", command: "popup.close" },
      },
    });

    stack.open({ focus: "jobscards" });
    const countries = stack.$form.nodes[0].querySelectorAll('select[name="location"]')[0];
    const defaultValueSelected = document.createElement('option');
    defaultValueSelected.value = 'none';
    defaultValueSelected.innerHTML = '';
    defaultValueSelected.setAttribute('selected',true);
    countries.appendChild(defaultValueSelected);
  },
  insert: function (stack) {
    this._buildInstance(stack);
  },
  _buildInstance: function (stack) {
    this.app.popup.close();

    const data = stack.getData();
    const country = this.locations.selectOptions[data.location];
    let htmlStructure = ``;

    htmlStructure += `
    <section class="container latest-opportunities">
        {% set latestVacancies = latestVacancies(4, { 'country': '${country}' }) %}
        <div class="latest-opportunities__left-col">
            <h2>Explore our latest opportunities</h2>
            <p>Advanced core specialization hiring + referral programs + global relocation services – Experience the best (and fastest) hiring process you’ve ever seen. It’s no wonder Luxoft has a 0 rejection rate.</p>
            {% if latestVacancies is not empty %}
                {{ include('@theme/partials/_latest_opportunities_mobile.twig') }}
            {% endif %}
            <div class="button-container">
                <a href="/jobs" class="btn-normal d-block">All open roles</a>
            </div>
        </div>
        <div class="latest-opportunities__right-col">
        {% if latestVacancies is not empty %}
            {{ include('@theme/partials/_latest_opportunities_desktop.twig') }}
        {% endif %}
        </div>
    </section>`

    this.app.editor.insertContent({
      html: htmlStructure,
    });
  },
});
