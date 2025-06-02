ArticleEditor.add("plugin", "heroWithControls", {
	start: function () {
		this.app.addbar.add("heroWithControls", {
			title: "Hero carousel with controls",
			icon: '<i class="fa fa-camera-retro"></i>',
			command: "heroWithControls.popup",
		});
	},
	popup: function () {
		var stack = this.app.popup.add("heroWithControls", {
			title: "Hero carousel with controls",
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
					command: "heroWithControls.insert",
					type: "primary",
				},
				cancel: { title: "Cancel", command: "popup.close" },
			},
		});

		stack.open({ focus: "heroWithControls" });
	},
	insert: function (stack) {
		var instance = this._buildInstance(stack);
	},
	_buildInstance: function (stack) {
		this.app.popup.close();

		var data = stack.getData();
		var editableType = data.elements;

		var heroHtml = `<section class="container-hero-carousel">
                            <div id="carouselHeroWithControls" class="carousel with-controls slide" data-bs-ride="carousel">
                                <div class="carousel-inner">`;

		for (var x = 1; x <= editableType; x++) {
			var classname = x === 1 ? "active" : "";
                   heroHtml += `<div class="carousel-item ${classname}" data-bs-interval="4000">
                                    <div class="fill">
                                        <img src="https://dummyimage.com/1920x940/adadad/484c8a" alt="Banner">
                                        <div class="container">
											<a href="#">
												<div class="carousel-caption">
													<h1>
														For a software-defined world
													</h1>
													<p>
														Risk management suit for Everstream analytics
													</p>
												</div>
												<div class="carousel-caption-bottom">
													<p class="main-txt">
														Explore our client success stories
													</p>
													<p class="sub-txt">
														Predictive Maintenance for Connected Vehicles
													</p>
												</div>
											</a>
                                        </div>
                                    </div>
                                </div>`;
		}

		heroHtml += `</div>
                        <div class="container controls-container">
                            <button class="carousel-control-prev carousel-control-btn" type="button" data-bs-target="#carouselHeroWithControls" data-bs-slide="prev" aria-label="Previous">
                                <span class="carousel-control-prev-icon carousel-control-btn-icon" aria-hidden="true"></span>
                            </button>
                            <button class="carousel-control-next carousel-control-btn" type="button" data-bs-target="#carouselHeroWithControls" data-bs-slide="next" aria-label="Next">
                                <span class="carousel-control-next-icon carousel-control-btn-icon" aria-hidden="true"></span>
                            </button>
                        </div>`;



		heroHtml += `</div></section>`;

		this.app.editor.insertContent({
			html: heroHtml,
		});
	},
});
