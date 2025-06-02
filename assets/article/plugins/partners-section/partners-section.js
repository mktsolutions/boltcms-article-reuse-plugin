// Icon
ArticleEditor.iconSectors = '<i class="fa fa-puzzle-piece"></i>'

// Block
ArticleEditor.add('block', 'block.partners-section', {
    mixins: ['block'],
    type: 'partners-section',
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
ArticleEditor.add('plugin', 'partners-section', {
    translations: {
        en: {
            "partners-section": {
                "partners-section": "Partners Section",
                "add": "Insert",
                "cancel": "Cancel"
            },
            "blocks": {
                "partners-section": "Partners Section"
            }
        }
    },
    start: function() {
        this.app.addbar.add('partners-section', {
            title: '## blocks.partners-section ##',
            icon: ArticleEditor.iconSectors,
            command: 'partners-section.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('partners-section', {
            title: '## partners-section.partners-section ##',
            width: '500px',
            command: 'addbar.popup',
            form: {
                'amount': {
                    label: 'How many items do you want to insert?',
                    type: 'select',
                    options: {
                        1: '1',
                        2: '2',
                        3: '3',
                        4: '4',
                        5: '5',
                        6: '6',
                        7: '7',
                        8: '8'
                    }
                },
                'version': {
                    label: 'What version do you want to use?',
                    type: 'select',
                    options: {
                        'two-colums': 'Version with 2 columns',
                        'three-columns': 'Version with 3 columns',
                        'four-columns': 'Version with 4 columns'
                    }
                }
            },
            footer: {
                insert: { title: '## partners-section.add ##', command: 'partners-section.insert', type: 'primary' },
                cancel: { title: '## partners-section.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'partners-section' })
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
        var partnersAmount = parseInt(data.amount)
        var version = data.version
        var instance = instance || this.app.create('block.partners-section')
        var $block = instance.getBlock()
        var htmlContent = ``

        if (version === 'two-colums') {
            $block.addClass('partners-section container')
        } else if (version === 'three-columns') {
            $block.addClass('partners-section container version-3-cols')
        } else {
            $block.addClass('partners-section container version-4-cols')
        }

        htmlContent += `<div class="partners-section__container">
                                    <div class="row">
                                        <div>
                                            <h4>
                                                Our Capital Markets partners
                                            </h4>
                                        </div>
                                        <div>
                                            <div class="col-12">
                                                    <p class="text-20">
                                                        Luxoft provides a comprehensive range of platform integration services from advisory and platform selection, through implementation and upgrade projects, to end-to-end service management
                                                    </p>
                                            </div>
                                            <div class="row">`

        for(var z = 1; z <= partnersAmount; z++) {
            htmlContent += `<div class="col items">
                                    <div class="partners-section--item">
                                        <div class="content">
                                            <div class="btn-container">
                                                <a class="btn btn-text btn-icon" href="#" aria-label="Link description">
                                                    <div class="text-container">
                                                        <div class="text stretched-link">
                                                            Murex
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
                                </div>`
        }

        htmlContent += `</div>
                    </div>
                </div>
            </div>`

        var $section = this.dom(htmlContent)
        $block.append($section)
        return instance
    }
})