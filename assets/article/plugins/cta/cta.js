ArticleEditor.add('plugin', 'cta', {
    start: function() {
           
        this.app.toolbar.add('cta', {
            title: 'CTA',
            icon: '<i class="fa fa-link"></i>',
            command: 'cta.popup',
            blocks: {
                types: ['paragraph']
            }
        })
    },
    popup: function(params, button) {
        this.app.popup.create('cta', {
            width: '350px',
            footer: {
                save: {
                    title: 'Insert',
                    command: 'cta.insert',
                    type: 'primary'
                },
                cancel: {
                    title: 'Cancel',
                    command: 'popup.close'
                }
            },
            form: {
                'ctaList': {
                    type: 'select',
                    label: 'Choose a CTA variation to insert',
                    options: {
                        0: 'Filled button',
                        1: 'Outlined button',
                        2: 'Text+icon button'
                    }
                }
            }
        })
        
        this.app.popup.open({ button: button })
    },
    insert: function(params, button, name) {
        this.app.popup.close()

        var data = params.getData()
        var ledaerPosition = parseInt(data.ctaList)

        var ctaClass = (ledaerPosition === 0) ? 'btn' : (ledaerPosition === 1) ? 'btn btn-outline' : 'btn btn-text btn-icon'

        this.app.editor.insertContent({
            html:  `<p><a class="${ctaClass}" href="#">READ MORE</a></p>`
        })
    }
})
