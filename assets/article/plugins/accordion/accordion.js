// Icon
ArticleEditor.iconAccordion = '<i class="fas fa-stream"></i>'

// Plugin
ArticleEditor.add('plugin', 'accordion', {
    translations: {
        en: {
            "accordion": {
                "accordion": "Accordion dark",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many items do you want to insert?",
            },
             "blocks": {
                 "accordion": "Accordion dark"
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
    },
    _buildInstance: function(stack) {
        this.app.popup.close()

        var data = stack.getData()
        var editableType = data.accordion

        var id = Math.floor(Math.random() * 100)

        var stringHtml = 
                `<section class="accordion-section"><div class="accordion" id="accordionExample${id}">`
        for(var x = 1; x <= editableType; x++) {
            var itemId = Math.floor(Math.random() * 1000)
            stringHtml += 
                `<div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${itemId}" aria-controls="collapse${itemId}">
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
        stringHtml += `</div></section>` //End of main section
        this.app.editor.insertContent({
			html: stringHtml,
		})
    }
})
