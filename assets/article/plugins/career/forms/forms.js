ArticleEditor.add("plugin", "forms", {
    init: function () {
      this.elements = {};
    },
    start: async function () {
      const $this = this
      const storageInterval = setInterval(checkStorage, 5000)
  
      function checkStorage() {
        if (localStorage.getItem('contentTypeFormsData') !== null) {
          getFormsData()
        }
      }
  
      function getFormsData() {
        const storageData = JSON.parse(localStorage.getItem('contentTypeFormsData'))
  
        $this.elements = {
          items: storageData.items,
          selectOptions: storageData.selectOptions,
        }
  
        $this.app.addbar.add("forms", {
          title: "Forms for pages",
          icon: '<i class="fa fa-file"></i>',
          command: "forms.popup",
        });
  
        clearInterval(storageInterval)
      }
    },
    popup: function () {
      var stack = this.app.popup.create("forms", {
        title: "Forms for pages",
        width: "400px",
        command: "addbar.popup",
        form: {
          item: {
            type: "select",
            label: "Choose a form to insert",
            options: this.elements.selectOptions,
          },
          endDate: {
            type: "input",
            label: "End date",
            placeholder: '03-28-2024 19:00'
          }
        },
        footer: {
          insert: {
            title: "Insert",
            command: "forms.insert",
            type: "primary",
          },
          cancel: { title: "Cancel", command: "popup.close" },
        },
      });
  
      stack.open({ focus: "forms" });
    },
    insert: function (stack) {
      this._buildInstance(stack);
    },
    _buildInstance: function (stack) {
      this.app.popup.close()
  
      var data = stack.getData()
      var htmlStructure = ``
      const formId = this.elements.items[data.item].id
      const endDate = data.endDate.trim()
  
      htmlStructure += `
          <div class="page-form-container" id="page-form-container">
            {% setcontent form = 'form/${formId}' %}
            <p id="page-form-end-date" class="page-form-end-date">${endDate}</p>
            <div class="container single-event__event-form" id="register">
              <h2 class="event-headline mb-2">Register & join us!</h2>
              <p class="form-legend">
                  <span class="">*</span>Indicates a required field
              </p>
              {% include '@theme/form.twig' %}
            </div>
          </div>`
  
      this.app.editor.insertContent({
        html: htmlStructure,
      })
    }
  })
  