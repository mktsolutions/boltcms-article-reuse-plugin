ArticleEditor.add("plugin", "exploreMore", {
	start: function () {
		this.app.addbar.add("exploreMore", {
			title: "Explore more",
			icon: '<i class="fa fa-arrows-alt"></i>',
			command: "exploreMore.popup",
		})
	},
	popup: function () {
		var stack = this.app.popup.add("exploreMore", {
			title: "Explore more",
			width: "400px",
			command: "addbar.popup",
			form: {
				elements: {
					label: "How many elements do you want to insert?",
					type: "select",
					options: {
						3: "3",
						4: "4",
						5: "5"
					},
				},
			},
			footer: {
				insert: {
					title: "Insert",
					command: "exploreMore.insert",
					type: "primary",
				},
				cancel: { title: "Cancel", command: "popup.close" },
			},
		})

		stack.open({ focus: "exploreMore" })
	},
	insert: function (stack) {
		var instance = this._buildInstance(stack)
	},
	_buildInstance: function (stack) {
		this.app.popup.close()

		var data = stack.getData()
		var elements = parseInt(data.elements)
		var exploreMoreContent = `
                <section class="single-location single-location__explore-more background__gray">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h2>Explore more</h2>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-xl-${elements} mt-4 single-location__explore-more--items">
                            <div class="col">
                                <div class="explore-more-item">
                                    <a href="#">
                                        <div class="explore-more-item__image">
                                            <figure>
                                                <img src="{{ asset('/theme/luxoft/assets/images/others/explore-more-01.jpeg') }}" alt="item image">
                                            </figure>
                                        </div>
                                        <div class="explore-more-item__text">
                                            <p class="item-title fw-semibold">
                                                LoGeek Magazine
                                            </p>
                                            <p class="item-description text-gray-63666a text-15">
                                                Luxoft’s digital magazine covers the latest innovations in technology, IT trends, and the coding IT specialists need to know. It’s all things tech.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col">
                                <div class="explore-more-item">
                                    <a href="#">
                                        <div class="explore-more-item__image">
                                            <figure>
                                                <img src="{{ asset('/theme/luxoft/assets/images/others/explore-more-02.jpeg') }}" alt="item image">
                                            </figure>
                                        </div>
                                        <div class="explore-more-item__text">
                                            <p class="item-title fw-semibold">
                                                Events
                                            </p>
                                            <p class="item-description text-gray-63666a text-15">
                                                Find out what’s happening in the world of Luxoft, from events and networking to learning opportunities from the tech universe — never miss anything.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col">
                                <div class="explore-more-item">
                                    <a href="#">
                                        <div class="explore-more-item__image">
                                            <figure>
                                                <img src="{{ asset('/theme/luxoft/assets/images/others/explore-more-03.jpeg') }}" alt="item image">
                                            </figure>
                                        </div>
                                        <div class="explore-more-item__text">
                                            <p class="item-title fw-semibold">
                                                Referral Platform
                                            </p>
                                            <p class="item-description text-gray-63666a text-15">
                                                This platform is for Luxoft employees and private entrepreneurs who provide critical services to the Luxoft ecosystem. Check out what’s available.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>`

    if (elements === 4) {
      exploreMoreContent += `<div class="col">
                                <div class="explore-more-item">
                                    <a href="#">
                                        <div class="explore-more-item__image">
                                            <figure>
                                                <img src="{{ asset('/theme/luxoft/assets/images/others/explore-more-03.jpeg') }}" alt="item image">
                                            </figure>
                                        </div>
                                        <div class="explore-more-item__text">
                                            <p class="item-title fw-semibold">
                                                Referral Platform
                                            </p>
                                            <p class="item-description text-gray-63666a text-15">
                                                This platform is for Luxoft employees and private entrepreneurs who provide critical services to the Luxoft ecosystem. Check out what’s available.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>`
    }

    if (elements === 5) {
      exploreMoreContent += `<div class="col">
                                <div class="explore-more-item">
                                    <a href="#">
                                        <div class="explore-more-item__image">
                                            <figure>
                                                <img src="{{ asset('/theme/luxoft/assets/images/others/explore-more-03.jpeg') }}" alt="item image">
                                            </figure>
                                        </div>
                                        <div class="explore-more-item__text">
                                            <p class="item-title fw-semibold">
                                                Referral Platform
                                            </p>
                                            <p class="item-description text-gray-63666a text-15">
                                                This platform is for Luxoft employees and private entrepreneurs who provide critical services to the Luxoft ecosystem. Check out what’s available.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                           <div class="col">
                                <div class="explore-more-item">
                                    <a href="#">
                                        <div class="explore-more-item__image">
                                            <figure>
                                                <img src="{{ asset('/theme/luxoft/assets/images/others/explore-more-03.jpeg') }}" alt="item image">
                                            </figure>
                                        </div>
                                        <div class="explore-more-item__text">
                                            <p class="item-title fw-semibold">
                                                Referral Platform
                                            </p>
                                            <p class="item-description text-gray-63666a text-15">
                                                This platform is for Luxoft employees and private entrepreneurs who provide critical services to the Luxoft ecosystem. Check out what’s available.
                                            </p>
                                        </div>
                                    </a>
                                </div>
                           </div>`
    }

		exploreMoreContent += `</div>
                    </div>
                </section>`

		this.app.editor.insertContent({
			html: exploreMoreContent
		})
	}
})
