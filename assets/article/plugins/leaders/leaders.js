ArticleEditor.add("plugin", "leaders", {
	defaults: {
		url: window.location.origin,
		contentType: "people",
	},
	start: async function () {
		const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		var items = {};
		var selectOptions = {};
		var leaderPosion = 0;

		for await (const page of pages.map((page) =>
			fetch(
				`${this.opts.leaders.url}/api/contents?page=${page}&contentType=${this.opts.leaders.contentType}&status=published`
			)
		)) {
			const dataJson = await page.json();

			if (Object.keys(dataJson).length > 0) {
				const result = await this.getLeadersData(dataJson, leaderPosion);
				items = {
					...items,
					...result[0],
				};
				selectOptions = {
					...selectOptions,
					...result[1],
				};
				leaderPosion = result[2];

				continue;
			}

			break;
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
	getLeadersData: async function (dataJson, leaderPosion) {
		const newItems = {};
		const newSelectOptions = {};

		for (const leader in dataJson) {
			const item = {
				id: dataJson[leader].id,
				name: dataJson[leader].fieldValues.name,
				title: dataJson[leader].fieldValues.title.en,
				link: dataJson[leader].fieldValues.linkedin_url,
				photo:
					window.location.hostname === "127.0.0.1"
						? "https://www.luxoft.com/upload/resize_cache/iblock/303/400_0_1/RinoAriganello.jpg"
						: dataJson[leader].fieldValues.image.url,
				command: "leaders.insert",
			};
			newItems[leaderPosion] = item;
			newSelectOptions[
				leaderPosion
			] = `${dataJson[leader].fieldValues.name} - ${dataJson[leader].fieldValues.title.en}`;
			leaderPosion++;
		}

		return [newItems, newSelectOptions, leaderPosion];
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
