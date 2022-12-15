// Icon
ArticleEditor.iconEditables = '<i class="fa fa-user"></i>'

// Plugin
ArticleEditor.add('plugin', 'editables', {
    translations: {
        en: {
            "editables": {
                "editables": "Team section",
                "add": "Insert",
                "cancel": "Cancel",
                "label": "Choose the version you want to insert"
            },
             "blocks": {
                 "editables": "Team section"
             }
        }
    },
    start: function() {
        this.app.addbar.add('editables', {
            title: '## blocks.editables ##',
            icon: ArticleEditor.iconEditables,
            command: 'editables.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('editables', {
            title: '## editables.editables ##',
            width: '400px',
            command: 'addbar.popup',
            form: {
                editables: { 
                    label: '## editables.label ##',
                    type: 'select',
                    options: {
                        leadersBlack: 'Team section - black version',
                        leadersWhite: 'Team section - white version'
                    }
                }
            },
            footer: {
                insert: { title: '## editables.add ##', command: 'editables.insert', type: 'primary' },
                cancel: { title: '## editables.cancel ##', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'editables' })
    },
    insert: function(stack) {
        var instance = this._buildInstance(stack)
    },
    _buildInstance: function(stack) {
        this.app.popup.close()

        var data = stack.getData()
        var editableType = data.editables
        var leadersHtml = ''
        
        if (editableType === 'leadersBlack') {
            leadersHtml = `<section class="section-team">
                                <div class="container-team">
                                    <h2>Our Team</h2>
                                    <div class="team-slider">
                                    </div>
                                </div>
                            </section>`

        } else if(editableType === 'leadersWhite') {
            leadersHtml = `<section class="section-team bd-white">
                                <div class="container-team">
                                    <h2>Our Team</h2>
                                    <div class="team-slider">
                                    </div>
                                </div>
                            </section>`
        } 

        this.app.editor.insertContent({
			html: leadersHtml,
		})
    }
})