// Icon
ArticleEditor.iconFaqAccordion = '<i class="fas fa-info"></i>'

// Plugin
ArticleEditor.add('plugin', 'faqaccordion', {
    translations: {
        en: {
            "faqaccordion": {
                "faqaccordion": "FAQ Accordion",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many items do you want to insert?",
            },
             "blocks": {
                 "faqaccordion": "FAQ Accordion"
             }
        }
    },
    start: function() {
        this.app.addbar.add('faqaccordion', {
            title: '## blocks.faqaccordion ##',
            icon: ArticleEditor.iconFaqAccordion,
            command: 'faqaccordion.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('faqaccordion', {
            title: '## faqaccordion.faqaccordion ##',
            width: '400px',
            command: 'addbar.popup',
            form: {
                faqaccordion: { 
                    label: '## faqaccordion.label ##',
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
                insert: { title: '## faqaccordion.add ##', command: 'faqaccordion.insert', type: 'primary' },
                cancel: { title: '## faqaccordion.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'faqaccordion' })
    },
    insert: function(stack) {
        var instance = this._buildInstance(stack)
    },
    _buildInstance: function(stack) {
        this.app.popup.close()

        var data = stack.getData()
        var editableType = data.faqaccordion

        var id = Math.floor(Math.random() * 100)

        var stringHtml = 
                `<section class="accordion-section"><div class="accordion" id="accordionExample${id}">`
        for(var x = 1; x <= editableType; x++) {
            var itemId = Math.floor(Math.random() * 1000)
            stringHtml += 
                `<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="accordion-item">
                    <h2 itemprop="name" class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${itemId}" aria-controls="collapse${itemId}">
                        Accordion Item #${x}
                    </button>
                    </h2>
                    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" id="collapse${itemId}" class="accordion-collapse collapse">
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
