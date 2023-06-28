ArticleEditor.add("plugin", "leaders", {
	defaults: {
		url: window.location.origin,
		contentType: "people",
	},
	start: async function () {

		const testPages = 10;
		const pageSize = 200;
		let leaderPosition = 0;
		let items = {};
		let selectOptions = {};

		for (let i = 1; i <= testPages; i++) {
			let apiResponse = await fetch(
				`${this.opts.leaders.url}/api/contents?page=${i}&contentType=${this.opts.leaders.contentType}&status=published&pageSize=${pageSize}`
			);
			let json = await apiResponse.json();

			if (!json.length) {
				// if no data - no need to send more requests
				break;
			}

			const result = await this.getLeadersData(json, leaderPosition);
			items = {
				...items,
				...result[0],
			};
			selectOptions = {
				...selectOptions,
				...result[1],
			};
			leaderPosition = result[2];

			console.log('leaders page ' + i);
			console.log(json);
		}

		this.app.toolbar.add("leaders", {
			title: "Leaders",
			icon: '<i class="fa fa-users"></i>',
			command: "leaders.popup",
			blocks: {
				types: ["layer", "column"],
			},
			params: {
				items: items,
				selectOptions: selectOptions,
			},
		});
	},
	getLeadersData: async function (dataJson, leaderPosition) {
		const newItems = {};
		const newSelectOptions = {};
		const isLocal = window.location.hostname === "127.0.0.1";

		for (const leader in dataJson) {
			const item = {
				id: dataJson[leader].id,
				name: dataJson[leader].fieldValues.name,
				title: dataJson[leader].fieldValues.title.en,
				link: dataJson[leader].fieldValues.linkedin_url,
				photo:
					isLocal
						? "https://www.luxoft.com/upload/resize_cache/iblock/303/400_0_1/RinoAriganello.jpg"
						: dataJson[leader].fieldValues.image.url,
				command: "leaders.insert",
			};
			newItems[leaderPosition] = item;
			newSelectOptions[
				leaderPosition
			] = `${dataJson[leader].fieldValues.name} - ${dataJson[leader].fieldValues.title.en}`;
			leaderPosition++;
		}

		return [newItems, newSelectOptions, leaderPosition];
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
