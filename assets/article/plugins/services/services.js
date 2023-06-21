// Icon
ArticleEditor.iconServices = '<i class="fa fa-handshake"></i>'

// Block
ArticleEditor.add('block', 'block.services', {
    mixins: ['block'],
    type: 'services',
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
ArticleEditor.add('plugin', 'services', {
    translations: {
        en: {
            "services": {
                "services": "Services",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many services do you want to insert?",
                "version": "What version do you want to use?",
            },
             "blocks": {
                 "services": "Services"
             }
        }
    },
    start: function() {
        this.app.addbar.add('services', {
            title: '## blocks.services ##',
            icon: ArticleEditor.iconServices,
            command: 'services.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('services', {
            title: '## services.services ##',
            width: '400px',
            command: 'addbar.popup',
            form: {
                services: { 
                    label: '## services.label ##',
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
                        11: '11',
                        12: '12'
                    }
                },
                version: { 
                    label: '## services.version ##',
                    type: 'select',
                    options: {
                        'two-colum': 'Version with two columns',
                        'three-columns': 'Version with three columns'
                    }
                }
            },
            footer: {
                insert: { title: '## services.add ##', command: 'services.insert', type: 'primary' },
                cancel: { title: '## services.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'services' })
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
        var servicesAmount = data.services
        var servicesVersion = data.version
        var instance = instance || this.app.create('block.services')
        var $block = instance.getBlock()

        if (servicesVersion === 'two-colum') {
            $block.addClass('section-services')
        } else {
            $block.addClass('section-services services-col-3')
        }

        var servicesHtml = `<div class="container container-services">
                                <div class="row">
                                <div>
                                    <h2>Services we offer</h2>
                                </div>
                                <div>
                                    <div class="row">`

        for(var x = 1; x <= servicesAmount; x++) {
            servicesHtml += `<div class="col">
                                <div class="content">
                                    <a href="#">
                                        <div class="sub02"><h3>Service ${x}</h3></div>
                                        <p>Description of service ${x}</p>
                                    </a>
                                </div>
                            </div>`
        }               

        var id = Math.floor(Math.random() * 100)

        servicesHtml += `</div>
                        </div>
                        </div>
                        </div>
                        <div class="container container-services-mobile">
                            <h5>Services we offer</h5>
                            <div class="accordion accordion-flush" id="accordionFlush${id}">`

        for(var z = 1; z <= servicesAmount; z++) {
            var elementId = Math.floor(Math.random() * 1000)
            servicesHtml += `<div class="accordion-item">
                                <div class="accordion-header" id="flush-heading${elementId}">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${elementId}" aria-expanded="false" aria-controls="flush-collapse${elementId}">
                                        Service ${z} mobile
                                    </button>
                                </div>
                                <div id="flush-collapse${elementId}" class="accordion-collapse collapse" aria-labelledby="flush-heading${elementId}" data-bs-parent="#accordionFlush${id}">
                                    <div class="accordion-body">
                                        <p>Description of service ${z} mobile</p>
                                        <div>
                                            <a class="btn btn-text btn-icon focus" href="#">
                                                <div class="text-container">
                                                    <div class="text">read more</div>
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

        servicesHtml += `</div>
                        </div>`
            
        var $section = this.dom(servicesHtml)
        $block.append($section)
        return instance
    }
})