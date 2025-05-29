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
				searchSpeaker: {
					type: "input",
					label: "Search",
				},
				speakersList: {
					type: "select",
					label: "Choose a speaker to insert",
					options: params.selectOptions,
				},
			},
			speakers: params.items,
		});

		this.app.popup.open({ button: button })

		setTimeout(() => {
			const searchSpeakerInput = document.querySelectorAll('input[name="searchSpeaker"]')
			const speakersList = document.querySelectorAll('select[name="speakersList"]')
			speakersList[0].selectedIndex = -1

			if (searchSpeakerInput.length > 0 && speakersList.length > 0) {
				searchSpeakerInput[0].addEventListener('input', () => {
					const searchValue = searchSpeakerInput[0].value.toLowerCase()
					const options = speakersList[0].options
					let itemsFound = 0
					for (let i = 0; i < options.length; i++) {
						options[i].style.display = options[i].text.toLowerCase().includes(searchValue) ? "" : "none"
						itemsFound += options[i].style.display === "" ? 1 : 0
					}

					speakersList[0].disabled = itemsFound === 0
				})
			}
		}, 300)
	},
	insert: function (params, button, name) {
		this.app.popup.close()

		var data = params.getData();
		var speakerPosition = data.speakersList

		this.app.editor.insertContent({
			html: ` <div class="col-12 col-md-6 mb-4">
						<div class="our-speakers--item html-code">
							<div class="image">
								<img src="${params.params.speakers[speakerPosition].photo}" alt="speaker">
							</div>
							<div class="details">
								<p class="text-16 unscaled"><b>${params.params.speakers[speakerPosition].name}</b></p>
								<p class="text-14 unscaled">${params.params.speakers[speakerPosition].title}</p>
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
