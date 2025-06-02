ArticleEditor.add("plugin", "herowithcontrolsIndicators", {
	start: function () {
		this.app.addbar.add("herowithcontrolsIndicators", {
			title: "Hero carousel with indicators",
			icon: '<i class="fa fa-camera-retro"></i>',
			command: "herowithcontrolsIndicators.popup",
		})
	},
	popup: function () {
		var stack = this.app.popup.add("herowithcontrolsIndicators", {
			title: "Hero carousel with indicators",
			width: "400px",
			command: "addbar.popup",
			form: {
				elements: {
					label: "How many banners do you want to insert?",
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
					},
				},
			},
			footer: {
				insert: {
					title: "Insert",
					command: "herowithcontrolsIndicators.insert",
					type: "primary",
				},
				cancel: { title: "Cancel", command: "popup.close" },
			},
		})

		stack.open({ focus: "herowithcontrolsIndicators" })
	},
	insert: function (stack) {
		var instance = this._buildInstance(stack)
	},
	_buildInstance: function (stack) {
		this.app.popup.close()

		var data = stack.getData()
		var editableType = data.elements

		var heroHtml = `<section class="container-hero-carousel">
                            <div id="carouselHeroWithIndicators" class="carousel with-indicators slide" data-bs-ride="carousel">
								<div class="carousel-indicators">`

		for (var z = 1; z <= editableType; z++) {
			var indicatorClass = z === 1 ? "active" : ""
			var indicatorCurrent = z === 1 ? true : false
			heroHtml += `<a data-bs-target="#carouselHeroWithIndicators" data-bs-slide-to="${z-1}" class="${indicatorClass}" aria-current="${indicatorCurrent}"></a>`
		}

			heroHtml += `	<div class="actions-wrap">
								<button type="button" class="btn-pause-icon" id="play-pause-btn" aria-label="Play and pause button">
									<img src="{​{ asset('theme/luxoft/assets/images/icons/pause.svg') }​}" class="pause-icon" focusable="false" aria-hidden="true" alt="pause">
									<svg xmlns="http://www.w3.org/2000/svg" class="play-icon" viewBox="0 0 384 512">
										<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
									</svg>
								</button>
							</div>
						</div>
						<div class="carousel-inner">`


		for (var x = 1; x <= editableType; x++) {
			var classname = x === 1 ? "active" : ""
                   heroHtml += `<div class="carousel-item ${classname}" data-bs-interval="4000">
                                    <div class="fill">
                                        <img src="https://dummyimage.com/1920x940/adadad/484c8a" alt="Banner">
                                        <div class="container">
											<div class="carousel-caption">
												<h1>
													For a software-defined world
												</h1>
												<p>
													Risk management suit for Everstream analytics
												</p>
												<div class="btn-container">
													<a class="btn btn-text btn-icon" href="#">
														<div class="text-container">
															<div class="text">
																read our client story
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
                                    </div>
                                </div>`
		}

		heroHtml += `</div>
                        <div class="previous-container">
                            <button class="carousel-control-prev carousel-control-btn" type="button" data-bs-target="#carouselHeroWithIndicators" data-bs-slide="prev" aria-label="Previous">
                                <span class="carousel-control-prev-icon carousel-control-btn-icon" aria-hidden="true"></span>
                            </button>
                        </div>
						<div class="next-container">
                            <button class="carousel-control-next carousel-control-btn" type="button" data-bs-target="#carouselHeroWithIndicators" data-bs-slide="next" aria-label="Next">
                                <span class="carousel-control-next-icon carousel-control-btn-icon" aria-hidden="true"></span>
                            </button>
                        </div>`

		heroHtml += `</div></section>`

		this.app.editor.insertContent({
			html: heroHtml
		})
	}
})
