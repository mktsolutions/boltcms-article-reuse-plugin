ArticleEditor.add('plugin', 'globalButtons', {
    start: function() {
        this.app.addbar.add('globalButtons', {
            title: 'Buttons',
            icon: '<i class="fa fa-puzzle-piece"></i>',
            command: 'globalButtons.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('globalButtons', {
            title: 'Buttons',
            width: '500px',
            command: 'addbar.popup',
            form: {
                'style1': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/career/globalButtons/version-1.png">'
                },
                'style2': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/career/globalButtons/version-2.png">'
                },
                'style3': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/career/globalButtons/version-3.png">'
                },
                'style4': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/career/globalButtons/version-4.png">'
                },
                'aligned': { 
                    label: 'Select an alignment:',
                    type: 'select',
                    options: {
                        'center': 'Aligned to the center',
                        'left': 'aligned to the left '
                    }
                },
            },
            footer: {
                insert: { title: 'Insert', command: 'globalButtons.insert', type: 'primary' },
                cancel: { title: 'Cancel', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'globalButtons' })
    },
    insert: function(stack) {
        var instance = this._buildInstance(stack)
    },
    _buildInstance: function(stack) {
        this.app.popup.close()

        var data = stack.getData()
        var aligned = data.aligned
        var [style1, style2, style3, style4] = [data.style1, data.style2, data.style3, data.style4]
        var alignedClass = data.aligned === 'center' ? 'btn-wrapper btn-wrapper--center' : 'btn-wrapper btn-wrapper--left'

        var htmlContent = `<div class="${alignedClass}">`

        if (style1) {
            htmlContent += `<a class="btn-normal" href="#">Button text</a>`
        }

        if (style2) {
            htmlContent += `<a class="btn-normal outline" href="#">Button text</a>`
        }

        if (style3) {
            htmlContent += `<a class="btn-arrow-ghost--purple filled" href="#">Button text
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewbox="0 0 24 25" fill="none"><path d="M16.2581 8.2417L6.96777 17.532" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path><path d="M10 7.5L16.95 7.549L17 14.5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path></svg>
                            </a>`
        }

        if (style4) {
            htmlContent += `<a class="btn-arrow-ghost--purple" href="#">Button text
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewbox="0 0 24 25" fill="none"><path d="M16.2581 8.2417L6.96777 17.532" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path><path d="M10 7.5L16.95 7.549L17 14.5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path></svg>
                            </a>`
        }

        htmlContent += `</div>` 

        this.app.editor.insertContent({
            html: htmlContent
        })
    }
})
