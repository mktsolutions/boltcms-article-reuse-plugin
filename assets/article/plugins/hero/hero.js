// Icon
ArticleEditor.iconHero = '<i class="fa fa-camera-retro"></i>'

// Plugin
ArticleEditor.add('plugin', 'hero', {
    translations: {
        en: {
            "hero": {
                "hero": "Hero carousel",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many banners do you want to insert?",
            },
             "blocks": {
                 "hero": "Hero carousel"
             }
        }
    },
    start: function() {
        this.app.addbar.add('hero', {
            title: '## blocks.hero ##',
            icon: ArticleEditor.iconHero,
            command: 'hero.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('hero', {
            title: '## hero.hero ##',
            width: '400px',
            command: 'addbar.popup',
            form: {
                hero: { 
                    label: '## hero.label ##',
                    type: 'select',
                    options: {
                        2: '2',
                        3: '3',
                        4: '4',
                        5: '5',
                        6: '6',
                        7: '7',
                        8: '8',
                        9: '9',
                        10: '10',
                    }
                }
            },
            footer: {
                insert: { title: '## hero.add ##', command: 'hero.insert', type: 'primary' },
                cancel: { title: '## hero.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'hero' })
    },
    insert: function(stack) {
        var instance = this._buildInstance(stack)
    },
    _buildInstance: function(stack) {
        this.app.popup.close()

        var data = stack.getData()
        var editableType = data.hero

        var heroHtml = `<section class="container-hero-carousel">
                        <div id="carouselHero" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">`

            for(var x = 1; x <= editableType; x++) {
                var classname = (x === 1) ? 'active' : ''
                heroHtml += `<div class="carousel-item ${classname}">
                                    <div class="fill">
                                        <img src="https://dummyimage.com/1920x940/adadad/484c8a" alt="Banner">
                                        <div class="container">
                                            <div class="carousel-caption">
                                                <h1>Your agent for digital change</h1>
                                                <a class="btn btn-outline" href="#">Connect with us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
            }               

            heroHtml += `</div>` // DIV carousel-inner
            heroHtml += `<div class="container container-indicators">
                                <div class="carousel-indicators">`
            
            var slidePosition = 0
            for(var z = 1; z <= editableType; z++) {
                var classname = (z === 1) ? 'active' : ''
                heroHtml += `<a data-bs-target="#carouselHero" data-bs-slide-to="${slidePosition}" class="${classname}" aria-current="true"><p>Banner title</p></a>`
                slidePosition++
            }

            heroHtml += `</div></div>` // DIV container container-indicators and DIV carousel-indicators

            heroHtml += `</div>
                            <div class="down-arr carousel-v">
                                <a href="#banner-down">
                                    <div class="text-20"><p>Learn more</p><i></i></div>
                                </a>
                            </div></section>` // Arrow and Main DIV carousel slide
            
            this.app.editor.insertContent({
                html: heroHtml,
            })
    }
})
