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
                'style5': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/career/globalButtons/version-5.png">'
                },
                'style6': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/career/globalButtons/version-6.png">'
                },
                'style7': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/career/globalButtons/version-7.png">'
                },
                'style8': {
                    type: 'checkbox',
                    text: '<img src="/assets/article/plugins/career/globalButtons/version-8.png">'
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
        var alignedClass = data.aligned === 'center' ? 'btn-wrapper btn-wrapper--center' : 'btn-wrapper btn-wrapper--left'

        var htmlContent = `<div class="${alignedClass}">`

        if (data.style1) {
            htmlContent += `<a class="btn-normal" href="#">Button text</a>`
        }

        if (data.style2) {
            htmlContent += `<a class="btn-normal outline" href="#">Button text</a>`
        }

        if (data.style3) {
            htmlContent += `<a class="btn-arrow-ghost--purple filled" href="#">Button text
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewbox="0 0 24 25" fill="none"><path d="M16.2581 8.2417L6.96777 17.532" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path><path d="M10 7.5L16.95 7.549L17 14.5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path></svg>
                            </a>`
        }

        if (data.style4) {
            htmlContent += `<a class="btn-arrow-ghost--purple" href="#">Button text
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewbox="0 0 24 25" fill="none"><path d="M16.2581 8.2417L6.96777 17.532" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path><path d="M10 7.5L16.95 7.549L17 14.5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path></svg>
                            </a>`
        }

        if (data.style5) {
            htmlContent += `<a class="btn-normal btn-normal--rich-black" href="#">Button text</a>`
        }

        if (data.style6) {
            htmlContent += `<a class="btn-normal btn-normal--rich-black outline" href="#">Button text</a>`
        }

        if (data.style7) {
            htmlContent += `<a class="btn-arrow-ghost--rich-black filled" href="#">Button text
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewbox="0 0 24 25" fill="none"><path d="M16.2581 8.2417L6.96777 17.532" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path><path d="M10 7.5L16.95 7.549L17 14.5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path></svg>
                            </a>`
        }

        if (data.style8) {
            htmlContent += `<a class="btn-arrow-ghost--rich-black" href="#">Button text
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewbox="0 0 24 25" fill="none"><path d="M16.2581 8.2417L6.96777 17.532" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path><path d="M10 7.5L16.95 7.549L17 14.5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path></svg>
                            </a>`
        }

        htmlContent += `</div>` 

        this.app.editor.insertContent({
            html: htmlContent
        })
    }
})
