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
                        2: 'Text+icon button',
                        3: 'Filled button Centered',
                        4: 'Outlined button Centered',
                        5: 'Text+icon button Centered',
                    }
                }
            }
        })
        
        this.app.popup.open({ button: button })
    },
    insert: function(params, button, name) {
        this.app.popup.close()

        var data = params.getData()
        var btnVersion = parseInt(data.ctaList)

        var ctaClass = (btnVersion === 0 && btnVersion === 3) ? 'btn' : (btnVersion === 1 && btnVersion === 4) ? 'btn btn-outline' : 'btn btn-text btn-icon focus'

        var instance = this.app.block.get();
        var htmlButton = ``

        if (btnVersion === 0 || btnVersion === 1) {
            htmlButton = `<div><a class="${ctaClass}" href="#">READ MORE</a></div>`
        } else if (btnVersion === 3 || btnVersion === 4) {
            htmlButton = `<div class="align-center"><a class="${ctaClass}" href="#">READ MORE</a></div>`
        } else if (btnVersion === 2) {
            htmlButton = `<div>
                            <a class="${ctaClass}" href="#">
                                <div class="text-container">
                                    <div class="text">read more</div>
                                    <div class="arr-offering">
                                        <i class="arr-small one"></i>
                                        <i class="arr-small two"></i>
                                        <i class="arr-small three"></i>
                                    </div>
                                </div>
                            </a>
                        </div>`
        } else {
            htmlButton = `<div class="align-center">
                            <a class="${ctaClass}" href="#">
                                <div class="text-container">
                                    <div class="text">read more</div>
                                    <div class="arr-offering">
                                        <i class="arr-small one"></i>
                                        <i class="arr-small two"></i>
                                        <i class="arr-small three"></i>
                                    </div>
                                </div>
                            </a>
                        </div>`
        }

        if(instance.isEmpty()) {
            this.app.editor.insertContent({
                html: htmlButton
            })
        } else {
            instance.setHtml(htmlButton);
        }
    }
})
