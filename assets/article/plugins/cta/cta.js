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
        var instance = this.app.block.get();
        var btnTitle = (instance.isEmpty()) ? 'Insert' : 'Update'

        this.app.popup.create('cta', {
            width: '350px',
            footer: {
                save: {
                    title: btnTitle,
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

        var instance = this.app.block.get();

        if(instance.isEmpty()) {
            this.app.editor.insertContent({
                html: `<a class="${ctaClass}" href="#">READ MORE</a>`
            })
        } else {
            instance.setHtml(`<a class="${ctaClass}" href="#">READ MORE</a>`);
        }
    }
})
