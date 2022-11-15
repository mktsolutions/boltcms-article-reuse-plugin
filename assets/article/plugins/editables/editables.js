// Icon
ArticleEditor.iconEditables = '<i class="fa fa-user"></i>'

// Block
ArticleEditor.add('block', 'block.editables', {
    mixins: ['block'],
    type: 'editables',
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

        if (instance) {
            this.app.block.add({ instance: instance })
            this.app.source.toggle()
            this.app.source.toggle()
        }
    },
    _buildInstance: function(stack, instance) {
        this.app.popup.close()

        var data = stack.getData()
        var editableType = data.editables
        var instance = instance || this.app.create('block.editables')
        var $block = instance.getBlock()

        if (editableType === 'leadersBlack') {
            $block.addClass('bd-black')

            var leadersHtml = ` <div class="container container-team">
                                    <h2>Our Team</h2>
                                    <div class="row">
                                    </div>
                                </div>`
            var $section = this.dom(leadersHtml)

        } else if(editableType === 'leadersWhite') {
            $block.addClass('bd-white')
            
            var insightsHtml = `<div class="container container-team">
                                    <h2>Our Team</h2>
                                    <div class="row">
                                    </div>
                                </div>`
            var $section = this.dom(insightsHtml)

        } 

        $block.append($section)

        return instance
    }
})