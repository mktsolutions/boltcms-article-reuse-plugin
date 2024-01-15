ArticleEditor.add("plugin", "servicesVerticalTabs", {
	start: function () {
		this.app.addbar.add("servicesVerticalTabs", {
			title: "Services vertical tabs",
			icon: '<i class="fa fa-handshake"></i>',
			command: "servicesVerticalTabs.popup",
		})
	},
	popup: function () {
		var stack = this.app.popup.add("servicesVerticalTabs", {
			title: "Services vertical tabs",
			width: "400px",
			command: "addbar.popup",
			form: {
				elements: {
					label: "How many elements do you want to insert?",
					type: "select",
					options: {
						2: "2",
						3: "3",
						4: "4",
						5: "5",
						6: "6",
						7: "7",
						8: "8",
						9: "9",
						10: "10",
                        11: "11",
                        12: "12",
                        13: "13",
                        14: "14",
					},
				},
			},
			footer: {
				insert: {
					title: "Insert",
					command: "servicesVerticalTabs.insert",
					type: "primary",
				},
				cancel: { title: "Cancel", command: "popup.close" },
			},
		})

		stack.open({ focus: "servicesVerticalTabs" })
	},
	insert: function (stack) {
		var instance = this._buildInstance(stack)
	},
	_buildInstance: function (stack) {
		this.app.popup.close()

		var data = stack.getData()
		var editableType = data.elements

		var servicesHtml = `<section class="services-vertical-tabs container">
                                <div class="row">
                                    <div class="col">
                                        <div class="services-vertical-tabs__main-container">
                                            <div class="services-vertical-tabs__main-container--tabs nav nav-pills" id="services-tabs" role="tablist" aria-orientation="vertical">`

		for (var z = 1; z <= editableType; z++) {
			var buttonClass = z === 1 ? "active" : ""
			var buttonSelected = z === 1 ? true : false
			servicesHtml += `<button class="${buttonClass}" id="service-${z}-tab" data-href="/contact-form" data-bs-toggle="pill" data-bs-target="#service-${z}" type="button" role="tab" aria-controls="service-${z}" aria-selected="${buttonSelected}">
                                Button service ${z}
                            </button>`
		}

			servicesHtml += `</div>
                            <div class="services-vertical-tabs__main-container--tabs-content tab-content" id="services-tabsContent">`


		for (var x = 1; x <= editableType; x++) {
			var classname = x === 1 ? "show active" : ""
                   servicesHtml += `<div class="tab-pane fade ${classname}" id="service-${x}" role="tabpanel" aria-labelledby="service-${x}-tab" tabindex="0">
                                        <div class="single-tab-content">
                                            <div class="single-tab-content--image">
                                                <figure>
                                                    <img src="{{asset('theme/luxoft/assets/images/tab-example.png')}}" alt="tab image">
                                                </figure>
                                            </div>
                                            <div class="single-tab-content--text">
                                                <h5>Service ${x} title</h5>
                                                <p>
                                                    Service ${x} description, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                </p>
                                                <div class="items-list">
                                                    <ul class="default-ul">
                                                        <li><a href="#">Lorem ipsum dolor sit adipiscing</a></li>
                                                        <li><a href="#">Lorem ipsum dolor sit adipiscing</a></li>
                                                        <li><a href="#">Lorem ipsum dolor sit adipiscing</a></li>
                                                        <li><a href="#">Lorem ipsum dolor sit adipiscing</a></li>
                                                    </ul>
                                                </div>
                                                <div class="btn-container">
                                                    <a href="/about-us" class="btn btn-text btn-icon">
                                                        <div class="text-container">
                                                            <div class="text">
                                                                Read more
                                                            </div>
                                                            <div class="arr-offering">
                                                                <i class="arr-small one"></i>
                                                                <i class="arr-small two"></i>
                                                                <i class="arr-small three"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
		}

		servicesHtml += `</div>
                        </div>
                    </div>
                </div>
            </section>`

		this.app.editor.insertContent({
			html: servicesHtml
		})
	}
})
