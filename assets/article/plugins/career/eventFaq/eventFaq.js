ArticleEditor.add("plugin", "eventFaq", {
	start: function () {
		this.app.addbar.add("eventFaq", {
			title: "Event FAQ",
			icon: '<i class="fa fa-question"></i>',
			command: "eventFaq.popup",
		})
	},
	popup: function () {
		var stack = this.app.popup.add("eventFaq", {
			title: "Event FAQ",
			width: "400px",
			command: "addbar.popup",
			form: {
				elements: {
					label: "How many questions do you want to insert?",
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
						10: "10"
					},
				},
			},
			footer: {
				insert: {
					title: "Insert",
					command: "eventFaq.insert",
					type: "primary",
				},
				cancel: { title: "Cancel", command: "popup.close" },
			},
		})

		stack.open({ focus: "eventFaq" })
	},
	insert: function (stack) {
		var instance = this._buildInstance(stack)
	},
	_buildInstance: function (stack) {
		this.app.popup.close()

		var data = stack.getData()
		var editableType = data.elements
		var id = Math.floor(Math.random() * 100)
		var eventFaqContent = `<section class="single-event__faq background__gray">
									<div class="container">
										<h2>FAQ</h2>
										<div class="mt-4">
											<div class="accordion" id="faqAccordion${id}">`

		for (var z = 1; z <= editableType; z++) {
			let itemId = Math.floor(Math.random() * 9999)
			eventFaqContent += `<div class="accordion-item">
									<h2 class="accordion-header">
										<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${itemId}" aria-expanded="false" aria-controls="collapse${itemId}">
											Accordion Item #${z}
										</button>
									</h2>
									<div id="collapse${itemId}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion${id}">
										<div class="accordion-body">
											<p>It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the</p>
										</div>
									</div>
								</div>`
		}

		eventFaqContent += `</div>
						</div>
					</div>
				</section>`

		this.app.editor.insertContent({
			html: eventFaqContent
		})
	}
})
