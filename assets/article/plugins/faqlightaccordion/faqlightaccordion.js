// Icon
ArticleEditor.iconFaqLightAccordion = '<i class="fas fa-feather-alt"></i>'

// Plugin
ArticleEditor.add('plugin', 'faqlightaccordion', {
    translations: {
        en: {
            "faqlightaccordion": {
                "faqlightaccordion": "FAQ light",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many items do you want to insert?",
            },
             "blocks": {
                 "faqlightaccordion": "FAQ light"
             }
        }
    },
    start: function() {
        this.app.addbar.add('faqlightaccordion', {
            title: '## blocks.faqlightaccordion ##',
            icon: ArticleEditor.iconFaqLightAccordion,
            command: 'faqlightaccordion.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('faqlightaccordion', {
            title: '## faqlightaccordion.faqlightaccordion ##',
            width: '400px',
            command: 'addbar.popup',
            form: {
                faqlightaccordion: { 
                    label: '## faqlightaccordion.label ##',
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
                insert: { title: '## faqlightaccordion.add ##', command: 'faqlightaccordion.insert', type: 'primary' },
                cancel: { title: '## faqlightaccordion.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'faqlightaccordion' })
    },
    insert: function(stack) {
        var instance = this._buildInstance(stack)
    },
    _buildInstance: function(stack) {
        this.app.popup.close()

        var data = stack.getData()
        var editableType = data.faqlightaccordion

        var id = Math.floor(Math.random() * 100)

        var stringHtml = 
                `<section class="accordion-section faq-light"><div class="accordion" id="accordionFaqLight${id}">`
        for(var x = 1; x <= editableType; x++) {
            var itemId = Math.floor(Math.random() * 1000)
            stringHtml += 
                `<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="accordion-item">
                    <h3 itemprop="name" class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-faq-light${itemId}" aria-controls="collapse-faq-light${itemId}">
                            Accordion Item #${x}
                        </button>
                    </h3>
                    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" id="collapse-faq-light${itemId}" class="accordion-collapse collapse">
                        <div itemprop="text" class="accordion-body">
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
