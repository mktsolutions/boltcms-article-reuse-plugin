ArticleEditor.add("plugin", "speakers", {
	start: function () {
		const $this = this

		const storageInterval = setInterval(checkStorage, 5000)

		function checkStorage() {
			if (localStorage.getItem('contentTypePeopleData') !== null) {
				getSpeakerData()
			}
		}

		function getSpeakerData() {
			const storageData = JSON.parse(localStorage.getItem('contentTypePeopleData'))

			$this.app.toolbar.add("speakers", {
				title: "Event Speakers",
				icon: '<i class="fa fa-users"></i>',
				command: "speakers.popup",
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
		this.app.popup.create("speakers", {
			width: "450px",
			footer: {
				save: {
					title: "Insert",
					command: "speakers.insert",
					type: "primary",
				},
				cancel: {
					title: "Cancel",
					command: "popup.close",
				},
			},
			form: {
				speakersList: {
					type: "select",
					label: "Choose a speaker to insert",
					options: params.selectOptions,
				},
			},
			speakers: params.items,
		});

		this.app.popup.open({ button: button })
	},
	insert: function (params, button, name) {
		this.app.popup.close()

		var data = params.getData();
		var speakerPosition = data.speakersList

		this.app.editor.insertContent({
			html: ` <div class="col-12 col-md-6 mb-4 single-event__our-speakers--item--container">
						<div class="item single-event__our-speakers--item html-code">
							<div class="single-event__our-speakers--item--name-title">
								<div class="speaker-name-title">
									<p class="text-18 fw-semibold speaker-name">${params.params.speakers[speakerPosition].name}</p>
									<p class="text-15 speaker-title">${params.params.speakers[speakerPosition].title}</p>
								</div>
							</div>
							<div class="single-event__our-speakers--item--bio mt-3">
								<div class="speaker-img">
									<img src="${params.params.speakers[speakerPosition].photo}" alt="speaker photo">
								</div>
								<div class="speaker-bio">
									<p class="text-15">
										${params.params.speakers[speakerPosition].bio}
									</p>
								</div>
							</div>
						</div>

						<div class="twig-code">{% setcontent speaker = 'person/${params.params.speakers[speakerPosition].id}' %}</div>
						{% if speaker is not empty %}
							{{ include('@theme/partials/_event_speaker_card.twig') }}
						{% endif %}
					</div>`,
		})
	},
})
