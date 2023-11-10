// Icon
ArticleEditor.iconSectors = '<i class="fa fa-puzzle-piece"></i>'

// Block
ArticleEditor.add('block', 'block.sectorsweserve', {
    mixins: ['block'],
    type: 'sectorsweserve',
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
ArticleEditor.add('plugin', 'sectorsweserve', {
    translations: {
        en: {
            "sectorsweserve": {
                "sectorsweserve": "Sectors we serve",
                "add": "Insert",
                "cancel": "Cancel"
            },
            "blocks": {
                "sectorsweserve": "Sectors we serve"
            }
        }
    },
    start: function() {
        this.app.addbar.add('sectorsweserve', {
            title: '## blocks.sectorsweserve ##',
            icon: ArticleEditor.iconSectors,
            command: 'sectorsweserve.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('sectorsweserve', {
            title: '## sectorsweserve.sectorsweserve ##',
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
                'style': { 
                    label: 'Select a style:',
                    type: 'input'
                },
                'style1': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/sectorsweserve/version-1.png">'
                },
                'style2': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/sectorsweserve/version-2.png">'
                },
                'style3': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/sectorsweserve/version-3.png">'
                }
            },
            footer: {
                insert: { title: '## sectorsweserve.add ##', command: 'sectorsweserve.insert', type: 'primary' },
                cancel: { title: '## sectorsweserve.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'sectorsweserve' })
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
        var sectorsAmount = parseInt(data.amount)
        var version = data.version
        var [style1, style2, style3] = [data.style1, data.style2, data.style3]
        var instance = instance || this.app.create('block.sectorsweserve')
        var $block = instance.getBlock()
        var htmlContent = ``

        if (version === 'two-colums') {
            $block.addClass('section-sectors-we-serve container')
        } else if (version === 'three-columns') {
            $block.addClass('section-sectors-we-serve container version-3-cols')
        } else {
            $block.addClass('section-sectors-we-serve container version-4-cols')
        }

        htmlContent += `<div class="container section-sectors-we-serve__container">
                                    <div class="row">
                                        <div>
                                            <h2>
                                                Sector we serve
                                            </h2>
                                        </div>
                                        <div>
                                            <div class="row">`

        if (style1) {
            for(var z = 1; z <= sectorsAmount; z++) {
                htmlContent += `<div class="col">
                                    <div class="content">
                                        <div class="icon">
                                            <img src="{{ asset('dist/images/icons/house.png') }}" alt="sector icon">
                                        </div>
                                        <div class="text-20">
                                            <b>Sector ${z}</b>
                                        </div>
                                        <p class="text-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        <div class="content__btn">
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
        }

        if (style2) {
            for(var z = 1; z <= sectorsAmount; z++) {
                htmlContent += `<div class="col">
                                    <div class="content">
                                        <div class="icon">
                                            <img src="{{ asset('dist/images/icons/house.png') }}" alt="sector icon">
                                        </div>
                                        <div class="text-20">
                                            <b>Sector ${z}</b>
                                        </div>
                                        <div class="content__btn">
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
        }

        if (style3) {
            for(var z = 1; z <= sectorsAmount; z++) {
                htmlContent += `<div class="col">
                                    <div class="content">
                                        <div class="icon">
                                            <img src="{{ asset('dist/images/icons/house.png') }}" alt="sector icon">
                                        </div>
                                        <div class="text-20">
                                            <b>Sector ${z}</b>
                                        </div>
                                    </div>
                                </div>`
            }
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
