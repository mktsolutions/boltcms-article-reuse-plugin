// Icon
ArticleEditor.iconIndustries = '<i class="fa fa-th-list"></i>'

// Block
ArticleEditor.add('block', 'block.industries', {
    mixins: ['block'],
    type: 'industries',
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
ArticleEditor.add('plugin', 'industries', {
    translations: {
        en: {
            "industries": {
                "industries": "Clien stories / Industries",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many industries do you want to insert?",
            },
             "blocks": {
                 "industries": "Clien stories / Industries"
             }
        }
    },
    start: function() {
        this.app.addbar.add('industries', {
            title: '## blocks.industries ##',
            icon: ArticleEditor.iconIndustries,
            command: 'industries.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('industries', {
            title: '## industries.industries ##',
            width: '400px',
            command: 'addbar.popup',
            form: {
                industries: { 
                    label: '## industries.label ##',
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
                insert: { title: '## industries.add ##', command: 'industries.insert', type: 'primary' },
                cancel: { title: '## industries.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'industries' })
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
        var editableType = data.industries
        var instance = instance || this.app.create('block.industries')
        var $block = instance.getBlock()
        $block.addClass('client-story')

        var industriesHtml = `<div class="content">
                            <h2>Client Stories</h2>`

            for(var x = 1; x <= editableType; x++) {
                industriesHtml += `<div class="content-item">
                                    <p class="content-item-header">Industry title</p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                        dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                    <a class="btn btn-text btn-icon" data-bs-slide="next">Next Story</a>
                                </div>`
            }               

            industriesHtml += `</div>
                            <div class="tabs">`
            
            var slidePosition = 0
            for(var z = 1; z <= editableType; z++) {
                var classname = (z === 1) ? 'active' : ''
                industriesHtml += `<div class="tab ${classname}" data-content-item-to="${slidePosition}">
                                    <figure><img src="https://dummyimage.com/800x600/ffffff/e3e3e3.png"></figure>
                                </div>`
                slidePosition++
            }

            industriesHtml += `</div>` // 
        var $section = this.dom(industriesHtml)

        $block.append($section)

        return instance
    }
})