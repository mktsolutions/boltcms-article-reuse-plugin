// Icon
ArticleEditor.iconBenefits = '<i class="fa fa-gift"></i>'

// Plugin
ArticleEditor.add('plugin', 'benefits', {
    translations: {
        en: {
            "benefits": {
                "benefits": "Benefits",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "How many benefits do you want to insert?",
                "version": "What version do you want to use?",
            },
             "blocks": {
                 "benefits": "Benefits"
             }
        }
    },
    start: function() {
        this.app.addbar.add('benefits', {
            title: '## blocks.benefits ##',
            icon: ArticleEditor.iconBenefits,
            command: 'benefits.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('benefits', {
            title: '## benefits.benefits ##',
            width: '400px',
            command: 'addbar.popup',
            form: {
                benefits: { 
                    label: '## benefits.label ##',
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
                },
                version: { 
                    label: '## benefits.version ##',
                    type: 'select',
                    options: {
                        'one-colum': 'Version with one column',
                        'two-columns': 'Version with two columns'
                    }
                }
            },
            footer: {
                insert: { title: '## benefits.add ##', command: 'benefits.insert', type: 'primary' },
                cancel: { title: '## benefits.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'benefits' })
    },
    insert: function(stack) {
        var instance = this._buildInstance(stack)
    },
    _buildInstance: function(stack) {
        this.app.popup.close()

        var data = stack.getData()
        var benefitsAmount = data.benefits
        var benefitsVersion = data.version
        var navId = Math.floor(Math.random() * 100)

        var benefitsHtml = `<section class="container-benefits-source">
                            <h2>Quantifiable benefits</h2>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab-${navId}" role="tablist">`

            for(var x = 1; x <= benefitsAmount; x++) {
                var classname = (x === 1) ? 'active' : ''
                var tabStatus = (x === 1) ? 'true' : 'false'
                benefitsHtml += `<button class="nav-link ${classname}" data-bs-toggle="tab" type="button" role="tab" aria-selected="${tabStatus}">Cloud technologies</button>`
            }               

            benefitsHtml += `</div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent-${navId}">`
            
            if (benefitsVersion === 'one-colum') {
                for(var z = 1; z <= benefitsAmount; z++) {
                    var classname = (z === 1) ? 'show active' : ''
                    benefitsHtml += `<div class="tab-pane fade ${classname}" role="tabpanel" tabindex="0">
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 1.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 2.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 3.</li>
                                        </ul>
                                    </div>`
                }
            } else {
                for(var z = 1; z <= benefitsAmount; z++) {
                    var classname = (z === 1) ? 'show active' : ''
                    benefitsHtml += `<div class="tab-pane fade ${classname}" role="tabpanel" tabindex="0">
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                        </ul>
                                        <div>
                                            <h2>45+</h2>
                                            <p>The Ultimate Text for Placeholder description which is long</p>
                                        </div>
                                    </div>`
                }
            }
            
        benefitsHtml += `</div></section>` // DIV nav-tabContent
        this.app.editor.insertContent({
			html: benefitsHtml,
		})
    }
})