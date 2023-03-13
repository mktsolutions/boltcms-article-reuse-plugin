// Icon
ArticleEditor.iconSolutions = '<i class="fa fa-columns"></i>'

// Block
ArticleEditor.add('block', 'block.solutions', {
    mixins: ['block'],
    type: 'solutions',
    toolbar: {
        add: { command: 'addbar.popup', title: '## buttons.add ##' },
    },
    control: {
        trash: { command: 'block.remove', title: '## buttons.delete ##' },
    },
    create: function() {
        return this.dom('<div>')
    }
})

// Plugin
ArticleEditor.add('plugin', 'solutions', {
    translations: {
        en: {
            "solutions": {
                "solutions": "Solutions block",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many solutions do you want to insert?",
            },
             "blocks": {
                 "solutions": "Solutions block"
             }
        }
    },
    start: function() {
        this.app.addbar.add('solutions', {
            title: '## blocks.solutions ##',
            icon: ArticleEditor.iconSolutions,
            command: 'solutions.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('solutions', {
            title: '## solutions.solutions ##',
            width: '400px',
            command: 'addbar.popup',
            form: {
                solutions: { 
                    label: '## solutions.label ##',
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
                insert: { title: '## solutions.add ##', command: 'solutions.insert', type: 'primary' },
                cancel: { title: '## solutions.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'solutions' })
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
        var editableType = data.solutions
        var instance = instance || this.app.create('block.solutions')
        var $block = instance.getBlock()

        $block.addClass('solutions')
        var id = Math.floor(Math.random() * 100)

        var solutionsHtml = `<h2>Our solutions</h2>
                            <div class="container">
                                <p class="align-center">Some description here</p>
                            </div>
                            <div id="carouselExampleCaptions-${id}" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">`
            for(var x = 1; x <= editableType; x++) {
                var classname = (x === 1) ? 'active' : ''
                solutionsHtml += `<div class="carousel-item ${classname}">
                                    <figure><img src="https://dummyimage.com/1200x600/000/696969.png&amp;text=Example+of+image"></figure>

                                    <div class="carousel-caption">
                                        <h4>Title of solution ${x}</h4>
                                        <p>Description of solution ${x}</p>
                                        <div>
                                            <a class="btn btn-text btn-icon" href="#">
                                                <div class="text-container">
                                                <div class="text">
                                                    read more
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
                                </div>`
            }               
            solutionsHtml += `</div>` // DIV of carousel-inner

            solutionsHtml += `<div class="carousel-control">
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions-${id}" data-bs-slide="prev">&lsaquo;</button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions-${id}" data-bs-slide="next">&rsaquo;</button>
                            </div>
                            <div class="carousel-indicators">
                                <a data-bs-target="#carouselExampleCaptions-${id}" data-bs-slide="prev">&lsaquo;</a>`
            
            var slidePosition = 0
            for(var z = 1; z <= editableType; z++) {
                var classname = (z === 1) ? 'active' : ''
                solutionsHtml += `<a data-bs-target="#carouselExampleCaptions-${id}" data-bs-slide-to="${slidePosition}" class="${classname}" aria-current="true">Title of solution ${z}</a>`
                slidePosition++
            }

            solutionsHtml += `<a data-bs-target="#carouselExampleCaptions-${id}" data-bs-slide="next">&rsaquo;</a>
                            </div>
                            </div>` // Main DIV carouselExampleCaptions and DIV of carousel-indicators
        var $section = this.dom(solutionsHtml)

        $block.append($section)

        return instance
    }
})
