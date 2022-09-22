// Icon
ArticleEditor.iconWidgets = '<i class="fa fa-magic"></i>'

// Block
ArticleEditor.add('block', 'block.widgets', {
    mixins: ['block'],
    type: 'widgets',
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
ArticleEditor.add('plugin', 'widgets', {
    translations: {
        en: {
            "widgets": {
                "widgets": "Widgets",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "Choose the widget you want to insert"
            },
             "blocks": {
                 "widgets": "Widgets"
             }
        }
    },
    defaults: {
        classname: ''
    },
    start: function() {
        this.app.addbar.add('widgets', {
            title: '## blocks.widgets ##',
            icon: ArticleEditor.iconWidgets,
            command: 'widgets.popup'
        })
    },
    popup: function() {
        console.log('popup...')
        var stack = this.app.popup.add('widgets', {
            title: '## widgets.widgets ##',
            width: '100%',
            command: 'addbar.popup',
            form: {
                widgets: { 
                    label: '## widgets.label ##',
                    type: 'select',
                    options: {
                        leaders: 'Leaders',
                        insights: 'Insights',
                        cases: 'Cases'
                    }
                }
            },
            footer: {
                insert: { title: '## widgets.add ##', command: 'widgets.insert', type: 'primary' },
                cancel: { title: '## widgets.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'widgets' })
    },
    insert: function(stack) {
        var instance = this._buildInstance(stack)

        if (instance) {
            this.app.block.add({ instance: instance })
            this.app.source.toggle();
            this.app.source.toggle();
        }
    },
    _buildInstance: function(stack, instance) {
        this.app.popup.close()

        var data = stack.getData()
        var widgetType = data.widgets
        var instance = instance || this.app.create('block.widgets')
        var $block = instance.getBlock()

        if (widgetType === 'leaders') {
            $block.addClass('section-container section-container--speakers')

            var leadersHtml = `<section class="experts">
                                    <div class="container">
                                        <div class="two-thirds-width text-centered animation fadeIn">
                                            <h2><span>Our</span> leaders</h2>
                                        </div>
                                        <div class="experts__list animation fadeIn">
                                            
                                        </div>
                                    </div>
                                </section>`
            var $section = this.dom(leadersHtml)
        } else if(widgetType === 'insights') {
            $block.addClass('section-container section-container--news-list')
            
            var insightsHtml = `<section class="tiles">
                                    <div class="container">
                                        <div class="two-thirds-width text-centered animation fadeIn">
                                            <h2><span>News and</span> insights</h2>
                                        </div>
                                        <div class="tiles__list animation fadeIn">
                                            <div></div>
                                        </div>
                                    </div>
                                </section>`
            var $section = this.dom(insightsHtml)
        } else if(widgetType === 'cases') {
            $block.addClass('one-box-slider')
            
            var casesHtml = `<div class="container">
                                <div class="two-thirds-width text-centered animation fadeIn">
                                    <h2><span>Client</span> success stories</h2>
                                </div>
                                <div class="one-box-slider__border">
                                    <div class="one-box-slider__slides owl-carousel animation">
                                        <div></div>
                                    </div>
                                </div>
                            </div>`
            var $section = this.dom(casesHtml)
        }

        $block.append($section)

        return instance
    }
})