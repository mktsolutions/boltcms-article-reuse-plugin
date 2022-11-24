// Icon
ArticleEditor.iconAccordion = '<i class="fas fa-stream"></i>'

// Block
ArticleEditor.add('block', 'block.accordion', {
    mixins: ['block'],
    type: 'accordion',
    toolbar: {
        add: { command: 'addbar.popup', tBlockitle: '## buttons.add ##' },
    },
    control: {
        trash: { command: 'block.remove', title: '## buttons.delete ##' },
    },
    create: function() {
        return this.dom('<section>')
    }
})

// Plugin
ArticleEditor.add('plugin', 'accordion', {
    translations: {
        en: {
            "accordion": {
                "accordion": "Accordion",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many items do you want to insert?",
            },
             "blocks": {
                 "accordion": "Accordion"
             }
        }
    },
    start: function() {
        this.app.addbar.add('accordion', {
            title: '## blocks.accordion ##',
            icon: ArticleEditor.iconAccordion,
            command: 'accordion.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('accordion', {
            title: '## accordion.accordion ##',
            width: '400px',
            command: 'addbar.popup',
            form: {
                accordion: { 
                    label: '## accordion.label ##',
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
                insert: { title: '## accordion.add ##', command: 'accordion.insert', type: 'primary' },
                cancel: { title: '## accordion.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'accordion' })
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
        var editableType = data.accordion
        console.log(data)
        var instance = instance || this.app.create('block.accordion')
        var $block = instance.getBlock()

        $block.addClass('accordion-section')
        var id = Math.floor(Math.random() * 100)

        var stringHtml = 
                `<div class="accordion" id="accordionExample${id}">`
        for(var x = 1; x <= editableType; x++) {
            var itemId = Math.floor(Math.random() * 1000)
            stringHtml += 
                `<div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${itemId}" aria-controls="collapse${itemId}">
                        Accordion Item #${x}
                    </button>
                    </h2>
                    <div id="collapse${itemId}" class="accordion-collapse collapse">
                    <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong>
                    </div>
                    </div>
                </div>`
        }               
        stringHtml += `</div>` //End of main section
        var $section = this.dom(stringHtml)
        $block.append($section)
        return instance
    }
})
