ArticleEditor.add("plugin", "speakers", {
	defaults: {
		url: window.location.origin,
		contentType: "people",
	},
	start: async function () {
		const pagesAmount = 5;
		const pageSize = 200;
		let items = {};
		let selectOptions = {};
		let speakerPosition = 0;

		for (let i = 1; i <= pagesAmount; i++) {
			let apiResponse = await fetch(
				`${this.opts.speakers.url}/api/contents?page=${i}&contentType=${this.opts.speakers.contentType}&status=published&pageSize=${pageSize}`
			);
			let json = await apiResponse.json();

			if (!json.length) {
				// if no data - no need to send more requests
				break;
			}

			const result = await this.getSpeakersData(json, speakerPosition);

			items = {
				...items,
				...result[0],
			};
			selectOptions = {
				...selectOptions,
				...result[1],
			};
			speakerPosition = result[2];

			if (json.length < pageSize) {
				// if no data - no need to send more requests
				break;
			}
		}

		this.app.toolbar.add("speakers", {
			title: "Event Speakers",
			icon: '<i class="fa fa-users"></i>',
			command: "speakers.popup",
			blocks: {
				types: ["layer", "column"],
			},
			params: {
				items: items,
				selectOptions: selectOptions,
			},
		});
	},
	getSpeakersData: async function (dataJson, speakerPosition) {
		const newItems = {};
		const newSelectOptions = {};
		const isLocal = window.location.hostname === "127.0.0.1";

		for (const speaker in dataJson) {
			const item = {
				id: dataJson[speaker].id,
				name: dataJson[speaker].fieldValues.name,
				title: dataJson[speaker].fieldValues.title.en,
				photo:
					isLocal
						? "https://www.luxoft.com/files/people/2022/12/Rino-Ariganello.jpg"
						: dataJson[speaker].fieldValues.image.url,
				command: "speakers.insert",
			};
			newItems[speakerPosition] = item;
			newSelectOptions[
				speakerPosition
			] = `${dataJson[speaker].fieldValues.name} - ${dataJson[speaker].fieldValues.title.en}`;
			speakerPosition++;
		}

		return [newItems, newSelectOptions, speakerPosition];
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
