// Icon
ArticleEditor.iconFaqDarkAccordion = '<i class="fas fa-info"></i>'

// Plugin
ArticleEditor.add('plugin', 'faqdarkaccordion', {
    translations: {
        en: {
            "faqdarkaccordion": {
                "faqdarkaccordion": "FAQ dark",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many items do you want to insert?",
            },
             "blocks": {
                 "faqdarkaccordion": "FAQ dark"
             }
        }
    },
    start: function() {
        this.app.addbar.add('faqdarkaccordion', {
            title: '## blocks.faqdarkaccordion ##',
            icon: ArticleEditor.iconFaqDarkAccordion,
            command: 'faqdarkaccordion.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('faqdarkaccordion', {
            title: '## faqdarkaccordion.faqdarkaccordion ##',
            width: '400px',
            command: 'addbar.popup',
            form: {
                faqdarkaccordion: { 
                    label: '## faqdarkaccordion.label ##',
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
                insert: { title: '## faqdarkaccordion.add ##', command: 'faqdarkaccordion.insert', type: 'primary' },
                cancel: { title: '## faqdarkaccordion.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'faqdarkaccordion' })
    },
    insert: function(stack) {
        var instance = this._buildInstance(stack)
    },
    _buildInstance: function(stack) {
        this.app.popup.close()

        var data = stack.getData()
        var editableType = data.faqdarkaccordion

        var id = Math.floor(Math.random() * 100)

        var stringHtml = 
                `<section class="accordion-section"><div class="accordion" id="accordionFaqDark${id}">`
        for(var x = 1; x <= editableType; x++) {
            var itemId = Math.floor(Math.random() * 1000)
            stringHtml += 
                `<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="accordion-item">
                    <h3 itemprop="name" class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-faq-dark${itemId}" aria-controls="collapse-faq-dark${itemId}">
                        Accordion Item #${x}
                    </button>
                    </h3>
                    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" id="collapse-faq-dark${itemId}" class="accordion-collapse collapse">
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
