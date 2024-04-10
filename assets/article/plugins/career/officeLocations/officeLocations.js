ArticleEditor.add("plugin", "officeLocations", {
	start: function () {
		this.app.addbar.add("officeLocations", {
			title: "Office Locations",
			icon: '<i class="fa fa-location-arrow"></i>',
			command: "officeLocations.popup",
		})
	},
	popup: function () {
		var stack = this.app.popup.add("officeLocations", {
			title: "Office Locations",
			width: "400px",
			command: "addbar.popup",
			form: {
				elements: {
					label: "How many locations do you want to insert?",
					type: "select",
					options: {
            1: "1",
						2: "2",
						3: "3",
						4: "4",
						5: "5",
						6: "6",
						7: "7",
						8: "8",
						9: "9",
						10: "10"
					},
				},
			},
			footer: {
				insert: {
					title: "Insert",
					command: "officeLocations.insert",
					type: "primary",
				},
				cancel: { title: "Cancel", command: "popup.close" },
			},
		})

		stack.open({ focus: "officeLocations" })
	},
	insert: function (stack) {
		var instance = this._buildInstance(stack)
	},
	_buildInstance: function (stack) {
		this.app.popup.close()

		var data = stack.getData()
		var elements = data.elements
		var officeLocationsContent = `<section class="single-location single-location__offices mobile">
                                            <h2>Our locations</h2>
                                            <div id="single-location-locations-splider" class="splide single-location__locations-slider--splide mt-3">
                                                <div class="splide__track">
                                                    <div class="splide__list">
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

    <section class="single-location single-location__offices desktop" id="single-location-offices-desktop">
                <div class="container">
                    <div class="single-location__offices--wrapper">
                        <div class="title-section text-center mb-4">
                            <h2>Our locations</h2>
                        </div>
                        <div class="tabs-section">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">`

		for (let z = 1; z <= elements; z++) {
      const classname = (z === 1) ? 'active' : ''
			officeLocationsContent += `<li class="nav-item" role="presentation">
                                    <button class="nav-link ${classname}" id="tab-${z}-0" data-bs-toggle="tab" data-bs-target="#tab-${z}" type="button" role="tab" aria-controls="tab-${z}" aria-selected="true">Tab ${z}</button>
                                </li>`
		}

    officeLocationsContent += `</ul>
                        </div>

                        <div class="tab-content tabs-content-section mt-5">`

    for (let x = 1; x <= elements; x++) {
      const classname = (x === 1) ? 'active show' : ''
      officeLocationsContent += `<div class="tab-pane fade ${classname}" id="tab-${x}" role="tabpanel" aria-labelledby="tab-${x}-0" tabindex="0">
                                <div class="tab-pane__content">
                                    <div class="tab-pane__content--text">
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore .
                                        </p>
                                        <div class="address-section mt-3">
                                            <img src="/theme/luxoft/assets/images/icons/location-pin-purple.svg" alt="location icon">
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus<br> error sit voluptatem accusantium
                                            </p>
                                        </div>
                                    </div>
                                    <div class="tab-pane__content--image">
                                        <figure>
                                            <img src="https://www.luxoft.com/files/homepage/locationsEurope.jpg" alt="tab image">
                                        </figure>
                                    </div>
                                </div>
                            </div>`
    }

		officeLocationsContent += `</div>
                    </div>
                </div>
            </section>`

		this.app.editor.insertContent({
			html: officeLocationsContent
		})
	}
})
