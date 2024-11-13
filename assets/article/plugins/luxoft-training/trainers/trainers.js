ArticleEditor.add("plugin", "trainers", {
	start: function () {
		const $this = this

		const storageInterval = setInterval(checkStorage, 5000)

		function checkStorage() {
			if (localStorage.getItem('contentTypeTrainersData') !== null) {
				getTrainersData()
			}
		}

		function getTrainersData() {
			const storageData = JSON.parse(localStorage.getItem('contentTypeTrainersData'))

			$this.app.toolbar.add("trainers", {
				title: "Training Speakers",
				icon: '<i class="fa fa-users"></i>',
				command: "trainers.popup",
				blocks: {
					types: ["layer", "column"],
				},
				params: {
					items: storageData.items,
					selectOptions: storageData.selectOptions,
				},
			})

			clearInterval(storageInterval)
		}
	},
	popup: function (params, button) {
		this.app.popup.create("trainers", {
			width: "450px",
			footer: {
				save: {
					title: "Insert",
					command: "trainers.insert",
					type: "primary",
				},
				cancel: {
					title: "Cancel",
					command: "popup.close",
				},
			},
			form: {
				trainersList: {
					type: "select",
					label: "Choose a trainer to insert",
					options: params.selectOptions,
				},
			},
			trainers: params.items,
		});

		this.app.popup.open({ button: button })
	},
	insert: function (params, button, name) {
		this.app.popup.close()

		var data = params.getData();
		var speakerPosition = data.trainersList

		this.app.editor.insertContent({
			html: ` <div class="col-12 col-md-6 mb-4 single-event__our-speakers--item--container">
						<div class="item single-event__our-speakers--item html-code">
							<div class="single-event__our-speakers--item--name-title">
								<div class="speaker-name-title">
									<p class="text-18 fw-semibold speaker-name">${params.params.trainers[speakerPosition].name}</p>
									<p class="text-15 speaker-title">${params.params.trainers[speakerPosition].title}</p>
								</div>
							</div>
							<div class="single-event__our-speakers--item--bio mt-3">
								<div class="speaker-img">
									<img src="${params.params.trainers[speakerPosition].photo}" alt="speaker photo">
								</div>
								<div class="speaker-bio">
									<p class="text-15">
										${params.params.trainers[speakerPosition].bio}
									</p>
								</div>
							</div>
						</div>

						<div class="twig-code">{% setcontent trainer = 'trainer/${params.params.trainers[speakerPosition].id}' %}</div>
						{% if trainer is not empty %}
							{{ include('@theme/partials/_event_speaker_card.twig') }}
						{% endif %}
					</div>`,
		})
	},
})
