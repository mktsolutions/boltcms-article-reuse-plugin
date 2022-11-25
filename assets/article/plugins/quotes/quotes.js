// Icon
ArticleEditor.iconQuotes = '<i class="fa fa-quote-right"></i>'

// Block
ArticleEditor.add('block', 'block.quotes', {
    mixins: ['block'],
    type: 'quotes',
    toolbar: {
        add: { command: 'addbar.popup', title: '## buttons.add ##' },
    },
    control: {
        trash: { command: 'block.remove', title: '## buttons.delete ##' },
    },
    create: function() {
        return this.dom('<section>')
    }
})

// Plugin
ArticleEditor.add('plugin', 'quotes', {
    translations: {
        en: {
            "quotes": {
                "quotes": "Quotes block",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many items do you want to insert?"
            },
             "blocks": {
                 "quotes": "Quotes block"
             }
        }
    },
    start: function() {
        this.app.addbar.add('quotes', {
            title: '## blocks.quotes ##',
            icon: ArticleEditor.iconQuotes,
            command: 'quotes.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('quotes', {
            title: '## quotes.quotes ##',
            width: '500px',
            command: 'addbar.popup',
            form: {
                'amount': { 
                    label: '## quotes.label ##',
                    type: 'select',
                    options: {
                        1: '1',
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
                },
                'version1': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/quotes/version-1.png"><img src="/assets/article/plugins/quotes/version-4.png">'
                },
                'version2': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/quotes/version-2.png">'
                },
                'version3': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/quotes/version-3.png">'
                },
                'version4': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/quotes/version-5.png">'
                }
            },
            footer: {
                insert: { title: '## quotes.add ##', command: 'quotes.insert', type: 'primary' },
                cancel: { title: '## quotes.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'quotes' })
    },
    insert: function(stack) {
        var instance = this._buildInstance(stack)

        if (instance) {
            this.app.block.add({ instance: instance })
            this.app.source.toggle()
            this.app.source.toggle()
        }
    },
    _buildInstance: function(stack, instance) {
        this.app.popup.close()

        var data = stack.getData()
        var quotesAmount = parseInt(data.amount)
        var version1 = data.version1
        var version2 = data.version2
        var version3 = data.version3
        var version4 = data.version4
        var instance = instance || this.app.create('block.quotes')
        var $block = instance.getBlock()

        var htmlContent = ``
        var quotesId = Math.floor(Math.random() * 1000)
        

        /**
         * Items from version1, version2 and version3 have almost the same structure, the only differences are if they
         * have the client image on them or not, and if they white or blue.
         */
        if (version1 || version3 || version4) {
            if (version3 && quotesAmount > 1) {
                $block.addClass('quotes-section quotes-section--v1 quotes-section--v1--multiple quotes-section--v1--white')
            } else if (version3 && quotesAmount === 1) {
                $block.addClass('quotes-section quotes-section--v1 quotes-section--v1--white')
            } else if (!version3 && quotesAmount > 1) {
                $block.addClass('quotes-section quotes-section--v1 quotes-section--v1--multiple')
            } else {
                $block.addClass('quotes-section quotes-section--v1')
            }

            var clientImg = (version4) 
                            ? `<figure><img src="{{ asset('theme/luxoft/assets/images/quotes/client.png') }}" class="client" alt="client image"></figure>` 
                            : ``

            if(quotesAmount > 1) {
                
                htmlContent += `<img class="background" src="{{ asset('theme/luxoft/assets/images/quotes/bg.png') }}" alt="quotes background">
                                <div id="carouselExampleIndicators-${quotesId}" class="carousel slide">
                                <div class="carousel-inner">`

                                for(var z = 1; z <= quotesAmount; z++) {
                                    var classname = (z === 1) ? 'active' : ''
                                    htmlContent += `<div class="carousel-item ${classname}">
                                                        <div class="carousel-item__content">
                                                        ${clientImg}
                                                        <div>
                                                            <img class="picture" src="{{ asset('theme/luxoft/assets/images/quotes/purple-quotes.svg') }}" alt="quotes icon">
                                                            <p>
                                                                ${z} - At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
                                                                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique 
                                                                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                                            </p>
                                                            <h5>Name ${z}</h5>
                                                            <h6>Job title ${z}</h6>
                                                        </div>
                                                        </div>
                                                    </div>`
                                }

                htmlContent += `</div>
                                <div class="button-group">
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-${quotesId}" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-${quotesId}"data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                    <div class="carousel-indicators">`
                                    
                                    for(var z = 1; z <= quotesAmount; z++) {
                                        var classname = (z === 1) ? 'active' : ''
                                        htmlContent += `<button type="button" data-bs-target="#carouselExampleIndicators-${quotesId}" data-bs-slide-to="${z - 1}" class="${classname}"></button>`
                                    }
                                    
                htmlContent += `    </div>
                                </div>
                                </div>` //main carousel slide, button-group and carousel-indicators

            } else {
                
                htmlContent = `<img class="background" src="{{ asset('theme/luxoft/assets/images/quotes/bg.png') }}" alt="quotes background">
                                <div class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <div class="carousel-item__content">
                                                ${clientImg}
                                                <div>
                                                    <img class="picture" src="{{ asset('theme/luxoft/assets/images/quotes/purple-quotes.svg') }}" alt="quotes icon">
                                                    <p>
                                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
                                                        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique 
                                                        sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                                    </p>
                                                    <h5>Name</h5>
                                                    <h6>Job title</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
            }
        }


        if (version2) {
            $block.addClass('quotes-section quotes-section--v2')

            htmlContent += `<div id="carouselExampleIndicators-${quotesId}" class="carousel slide">
                            <div class="carousel-inner">`

                            for(var z = 1; z <= quotesAmount; z++) {
                                var classname = (z === 1) ? 'active' : ''
                                htmlContent += `<div class="carousel-item ${classname}">
                                                    <div class="carousel-item-default">
                                                        <img class="picture" src="{{ asset('theme/luxoft/assets/images/quotes/purple-quotes.svg') }}" alt="quotes icon">
                                                        <p>
                                                            ${z} - At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
                                                            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique 
                                                            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                                        </p>
                                                        <h5>Name ${z}</h5>
                                                        <h6>Job title ${z}</h6>
                                                    </div>
                                                </div>`
                            }

                htmlContent += `</div>
                                <div class="button-group">
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators-${quotesId}" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators-${quotesId}"data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                    <div class="carousel-indicators">`
                                    
                                    for(var z = 1; z <= quotesAmount; z++) {
                                        var classname = (z === 1) ? 'active' : ''
                                        htmlContent += `<button type="button" data-bs-target="#carouselExampleIndicators-${quotesId}" data-bs-slide-to="${z - 1}" class="${classname}"></button>`
                                    }
                                    
                htmlContent += `    </div>
                                </div>
                                </div>` //main carousel slide, button-group and carousel-indicators

            if(quotesAmount > 1) {
                
            } else {
                htmlContent += `<div class="carousel slide">
                                    <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="carousel-item-default">
                                        <img class="picture" src="{{ asset('theme/luxoft/assets/images/quotes/purple-quotes.svg') }}" alt="quotes icon">
                                        <p>
                                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
                                            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique 
                                            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                        </p>
                                        <h5>Name</h5>
                                        <h6>Job title</h6>
                                        </div>
                                    </div>
                                    </div>
                                </div>`
            }
        }

        // htmlContent += ``
        var $section = this.dom(htmlContent)
        $block.append($section)
        return instance
    }
})