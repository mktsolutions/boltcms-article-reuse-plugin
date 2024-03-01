// Icon
ArticleEditor.iconSectors = '<i class="fa fa-puzzle-piece"></i>'

// Block
ArticleEditor.add('block', 'block.partners-section-image', {
    mixins: ['block'],
    type: 'partners-section-image',
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
ArticleEditor.add('plugin', 'partners-section-image', {
    translations: {
        en: {
            "partners-section-image": {
                "partners-section-image": "Partners Section with images",
                "add": "Insert",
                "cancel": "Cancel"
            },
            "blocks": {
                "partners-section-image": "Partners Section with images"
            }
        }
    },
    start: function() {
        this.app.addbar.add('partners-section-image', {
            title: '## blocks.partners-section-image ##',
            icon: ArticleEditor.iconSectors,
            command: 'partners-section-image.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('partners-section-image', {
            title: '## partners-section-image.partners-section-image ##',
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
                },
            },
            footer: {
                insert: { title: '## partners-section-image.add ##', command: 'partners-section-image.insert', type: 'primary' },
                cancel: { title: '## partners-section-image.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'partners-section-image' })
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
        var instance = instance || this.app.create('block.partners-section-image')
        var $block = instance.getBlock()
        var htmlContent = ``

        if (version === 'two-colums') {
            $block.addClass('partners-section-image container')
        } else if (version === 'three-columns') {
            $block.addClass('partners-section-image container version-3-cols')
        } else {
            $block.addClass('partners-section-image container version-4-cols')
        }

        htmlContent += `<div class="partners-section-image__container">
                                    <div class="partners-row">
                                        <div>
                                            <h4>
                                                Our Capital Markets partners
                                            </h4>
                                        </div>
                                        <div>
                                            <div class="partners-col">
                                                    <p class="text-20">
                                                        Luxoft provides a comprehensive range of platform integration services from advisory and platform selection, through implementation and upgrade projects, to end-to-end service management
                                                    </p>
                                            </div>
                                            <div class="partners-wrapper">`

        for(let z = 1; z <= partnersAmount; z++) {
            htmlContent += `<a class="partners-col items btn btn-text btn-icon" href="#">
                                <div class="partners-image-container">
                                    <figure>
                                        <img src="/theme/luxoft/assets/images/image-148.jpg" alt="Partner Image">
                                    </figure>
                                </div>
                                <div class="text-container">
                                    <div class="text stretched-link">
                                        Murex
                                    </div>
                                    <div class="arr-offering">
                                        <i class="arr-small one"></i><i class="arr-small two"></i><i class="arr-small three"></i>
                                    </div>
                                </div>
                            </a>`
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