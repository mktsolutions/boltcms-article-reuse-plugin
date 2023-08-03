ArticleEditor.add("plugin", "leaders", {
	start: async function () {
		const $this = this
		const storageInterval = setInterval(checkStorage, 5000)

		function checkStorage() {
			if (localStorage.getItem('contentTypePeopleData') !== null) {
				getPeopleData()
			}
		}

		function getPeopleData() {
			const storageData = JSON.parse(localStorage.getItem('contentTypePeopleData'))

			$this.app.toolbar.add("leaders", {
				title: "Leaders",
				icon: '<i class="fa fa-users"></i>',
				command: "leaders.popup",
				blocks: {
					types: ["layer", "column"],
				},
				params: {
					items: storageData.items,
					selectOptions: storageData.selectOptions
				},
			})

			clearInterval(storageInterval)
		}
	},
	popup: function (params, button) {
		this.app.popup.create("leaders", {
			width: "450px",
			footer: {
				save: {
					title: "Insert",
					command: "leaders.insert",
					type: "primary",
				},
				cancel: {
					title: "Cancel",
					command: "popup.close",
				},
			},
			form: {
				leadersList: {
					type: "select",
					label: "Choose a leader to insert",
					options: params.selectOptions,
				},
			},
			leaders: params.items,
		});

		this.app.popup.open({ button: button });
	},
	insert: function (params, button, name) {
		this.app.popup.close();

		// get form data
		var data = params.getData();
		var ledaerPosition = data.leadersList;

		this.app.editor.insertContent({
			html: `<div class="tns-item">
                          <div class="card html-code">
                              <img src="${params.params.leaders[ledaerPosition].photo}" alt="leader image">
                              <a href="${params.params.leaders[ledaerPosition].link}"></a>
                              <div class="card-body">
                                  <h5 class="card-title">${params.params.leaders[ledaerPosition].name}</h5>
                                  <p class="card-text">${params.params.leaders[ledaerPosition].title}</p>
                              </div>
                          </div>
                          <div class="twig-code">{% setcontent leader = 'person/${params.params.leaders[ledaerPosition].id}' %}</div>
                          {% if leader is not empty %}
                              {{ include('@theme/partials/_leader_card.twig') }}
                          {% endif %}
                      </div>`,
		});
	},
});
