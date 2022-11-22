// Icon
ArticleEditor.iconWhyLuxoftOptional = '<i class="fa fa-question"></i>'

// Block
ArticleEditor.add('block', 'block.whyluxoftoptional', {
    mixins: ['block'],
    type: 'whyluxoftoptional',
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
ArticleEditor.add('plugin', 'whyluxoftoptional', {
    translations: {
        en: {
            "whyluxoftoptional": {
                "whyluxoftoptional": "Why Luxoft block",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many 'Why Luxoft' do you want to insert?",
            },
             "blocks": {
                 "whyluxoftoptional": "Why Luxoft block"
             }
        }
    },
    start: function() {
        this.app.addbar.add('whyluxoftoptional', {
            title: '## blocks.whyluxoftoptional ##',
            icon: ArticleEditor.iconWhyLuxoftOptional,
            command: 'whyluxoftoptional.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('whyluxoftoptional', {
            title: '## whyluxoftoptional.whyluxoftoptional ##',
            width: '400px',
            command: 'addbar.popup',
            form: {
                whyluxoftoptional: { 
                    label: '## whyluxoftoptional.label ##',
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
                insert: { title: '## whyluxoftoptional.add ##', command: 'whyluxoftoptional.insert', type: 'primary' },
                cancel: { title: '## whyluxoftoptional.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'whyluxoftoptional' })
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
        var editableType = data.whyluxoftoptional
        console.log(data)
        var instance = instance || this.app.create('block.whyluxoftoptional')
        var $block = instance.getBlock()
        
        $block.addClass('whyluxoftoptional')
        var id = Math.floor(Math.random() * 100)

        var leadersHtml = 
            `<section>
                <h2>Why Luxoft</h2>
                <div id="wl1${id}" class="row g-0">`
        for(var x = 1; x <= editableType; x++) {
            leadersHtml += 
                `<div class="col">
                    <a href="#">
                        <h5>Technological independence and strong partnerships</h5>
                        <p>While accelerating growth we solve your legacy-system issues, protecting existing
                        investments with technologically independent solutions and the support of our top-tier partner network.</p>
                    </a>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="aih${x}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ai${x}" aria-expanded="false" aria-controls="ai${x}">
                            Technological independence and strong partnerships
                        </button>
                        </h2>
                        <div id="ai${x}" class="accordion-collapse collapse" aria-labelledby="aih1" data-bs-parent="#wl${x}">
                        <p>While accelerating growth we solve your legacy-system issues, protecting existing
                            investments with technologically independent solutions and the support of our top-tier partner network.</p>
                        </div>
                    </div>
                </div>`
        }               
        leadersHtml += `</div></section>` //End of main section
        var $section = this.dom(leadersHtml)
        $block.append($section)
        return instance
    }
})
