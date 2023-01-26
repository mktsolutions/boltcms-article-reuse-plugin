// Icon
ArticleEditor.iconHero = '<i class="fa fa-camera-retro"></i>';

// Plugin
ArticleEditor.add("plugin", "herounnamed", {
	translations: {
		en: {
			herounnamed: {
				herounnamed: "Herounnamed carousel",
				add: "Insert",
				cancel: "Cancel",
				label: "How many banners do you want to insert?",
			},
			blocks: {
				herounnamed: "Hero carousel (unnamed tabs)",
			},
		},
	},
	start: function () {
		this.app.addbar.add("herounnamed", {
			title: "## blocks.herounnamed ##",
			icon: ArticleEditor.iconHero,
			command: "herounnamed.popup",
		});
	},
	popup: function () {
		var stack = this.app.popup.add("herounnamed", {
			title: "## herounnamed.herounnamed ##",
			width: "400px",
			command: "addbar.popup",
			form: {
				herounnamed: {
					label: "## herounnamed.label ##",
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
					title: "## herounnamed.add ##",
					command: "herounnamed.insert",
					type: "primary",
				},
				cancel: { title: "## herounnamed.cancel ##", command: "popup.close" },
			},
		});

		stack.open({ focus: "herounnamed" });
	},
	insert: function (stack) {
		var instance = this._buildInstance(stack);
	},
	_buildInstance: function (stack) {
		this.app.popup.close();

		var data = stack.getData();
		var editableType = data.herounnamed;

		var herounnamedHtml = `<section class="container-hero-carousel">
                        <div id="carouselHerounnamed" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">`;

		for (var x = 1; x <= editableType; x++) {
			var classname = x === 1 ? "active" : "";
			herounnamedHtml += `<div class="carousel-item ${classname}">
                                    <div class="fill">
                                        <img src="https://dummyimage.com/1920x940/adadad/484c8a" alt="Banner">
                                        <div class="container">
                                            <div class="carousel-caption">
                                                <h1>Your agent for digital change</h1>
                                                <a class="btn btn-outline" href="#">Connect with us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
		}

		herounnamedHtml += `</div>`; // DIV carousel-inner
		herounnamedHtml += `<div class="container container-indicators">
                                <div class="carousel-unnamed-indicators">`;

		var slidePosition = 0;
		for (var z = 1; z <= editableType; z++) {
			var classname = z === 1 ? "active" : "";
			herounnamedHtml += `<a data-bs-target="#carouselHerounnamed" data-bs-slide-to="${slidePosition}" class="${classname}" aria-current="true"><p>Banner title</p></a>`;
			slidePosition++;
		}

		herounnamedHtml += `</div></div>`; // DIV container container-indicators and DIV carousel-indicators

		herounnamedHtml += `</div>
                            <div class="down-arr carousel-v">
                                <a href="#banner-down">
                                    <div class="text-20"><p>Learn more</p><i></i></div>
                                </a>
                            </div></section>`; // Arrow and Main DIV carousel slide

		this.app.editor.insertContent({
			html: herounnamedHtml,
		});
	},
});
