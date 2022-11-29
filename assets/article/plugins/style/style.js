ArticleEditor.add('plugin', 'style', {
    translations: {
        en: {
            "style": {
                "style": "Style",
                "remove-style": "Remove classes"
            }
        }
    },
    defaults: {
        styles: {
            list: {
                'default-ul': {
                    title: 'Insert the DEFAULT UNSORTED LIST class',
                    classname: 'default-ul'
                },
            },
            paragraph: {
                'sub02': {
                    title: 'Insert the SUB02 class',
                    classname: 'sub02'
                },
            },
            layer: {
                'black-version': {
                    title: 'Insert classes for the BLACK version of OUR TEAM',
                    classname: 'bd-black'
                },
                'white-version': {
                    title: 'Insert classes for the WHITE version of OUR TEAM',
                    classname: 'bd-white'
                },
                'container': {
                    title: 'Insert the CONTAINER class',
                    classname: 'container'
                },
                'container-fluid': {
                    title: 'Insert the CONTAINER-FLUID class',
                    classname: 'container-fluid'
                },
                'col': {
                    title: 'Insert the COL class',
                    classname: 'col-12 col-lg-6'
                },
                'row': {
                    title: 'Insert the ROW class',
                    classname: 'row'
                },
                'highlighted-paragraph': {
                    title: 'Insert the HIGHLIGHTED PARAGRAPH (DIVIDER) class',
                    classname: 'highlighted-paragraph'
                },
                'gray-column': {
                    title: 'Insert the GRAY COLUMN class',
                    classname: 'gray-column'
                },
                'radius--base': {
                    title: 'Insert the RADIUS--BASE class',
                    classname: 'radius--base'
                },
                'radius--top': {
                    title: 'Insert the RADIUS--TOP class',
                    classname: 'radius--top'
                },
                'radius--top-left': {
                    title: 'Insert the RADIUS--TOP-LEFT class',
                    classname: 'radius--top-left'
                },
                'radius--top-right': {
                    title: 'Insert the RADIUS--TOP-RIGHT class',
                    classname: 'radius--top-left'
                },
                'radius--right': {
                    title: 'Insert the RADIUS--RIGHT class',
                    classname: 'radius--right'
                },
                'radius--bottom': {
                    title: 'Insert the RADIUS--BOTTON class',
                    classname: 'radius--bottom'
                },
                'radius--bottom-left': {
                    title: 'Insert the RADIUS--BOTTON-LEFT class',
                    classname: 'radius--bottom-left'
                },
                'radius--bottom-right': {
                    title: 'Insert the RADIUS--BOTTON-RIGHT class',
                    classname: 'radius--bottom-right'
                },
                'radius--separate': {
                    title: 'Insert the RADIUS--SEPARATE class',
                    classname: 'radius--separate'
                },
                'radius--separate-top': {
                    title: 'Insert the RADIUS--SEPARATE-TOP class',
                    classname: 'radius--separate-top'
                },
                'radius--separate-bottom': {
                    title: 'Insert the RADIUS--SEPARATE-BOTTOM class',
                    classname: 'radius--separate-bottom'
                },
                'radius--left': {
                    title: 'Insert the RADIUS--LEFT class',
                    classname: 'radius--left'
                }
            },
            grid: {
                'black-version': {
                    title: 'Insert classes for the BLACK version of OUR TEAM',
                    classname: 'bd-black'
                },
                'white-version': {
                    title: 'Insert classes for the WHITE version of OUR TEAM',
                    classname: 'bd-white'
                },
                'container': {
                    title: 'Insert the CONTAINER class',
                    classname: 'container'
                },
                'container-fluid': {
                    title: 'Insert the CONTAINER-FLUID class',
                    classname: 'container-fluid'
                },
                'col': {
                    title: 'Insert the COL class',
                    classname: 'col-12 col-lg-6'
                },
                'row': {
                    title: 'Insert the ROW class',
                    classname: 'row'
                },
                'highlighted-paragraph': {
                    title: 'Insert the HIGHLIGHTED PARAGRAPH (DIVIDER) class',
                    classname: 'highlighted-paragraph'
                },
                'gray-column': {
                    title: 'Insert the GRAY COLUMN class',
                    classname: 'gray-column'
                },
                'radius--base': {
                    title: 'Insert the RADIUS--BASE class',
                    classname: 'radius--base'
                },
                'radius--top': {
                    title: 'Insert the RADIUS--TOP class',
                    classname: 'radius--top'
                },
                'radius--top-left': {
                    title: 'Insert the RADIUS--TOP-LEFT class',
                    classname: 'radius--top-left'
                },
                'radius--top-right': {
                    title: 'Insert the RADIUS--TOP-RIGHT class',
                    classname: 'radius--top-left'
                },
                'radius--right': {
                    title: 'Insert the RADIUS--RIGHT class',
                    classname: 'radius--right'
                },
                'radius--bottom': {
                    title: 'Insert the RADIUS--BOTTON class',
                    classname: 'radius--bottom'
                },
                'radius--bottom-left': {
                    title: 'Insert the RADIUS--BOTTON-LEFT class',
                    classname: 'radius--bottom-left'
                },
                'radius--bottom-right': {
                    title: 'Insert the RADIUS--BOTTON-RIGHT class',
                    classname: 'radius--bottom-right'
                },
                'radius--separate': {
                    title: 'Insert the RADIUS--SEPARATE class',
                    classname: 'radius--separate'
                },
                'radius--separate-top': {
                    title: 'Insert the RADIUS--SEPARATE-TOP class',
                    classname: 'radius--separate-top'
                },
                'radius--separate-bottom': {
                    title: 'Insert the RADIUS--SEPARATE-BOTTOM class',
                    classname: 'radius--separate-bottom'
                },
                'radius--left': {
                    title: 'Insert the RADIUS--LEFT class',
                    classname: 'radius--left'
                }
            },
        },
        icon: '<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 1c-3.5955345 2.88454776-5.25146525 9.6241453-7.87485347 9.6241453h-2.6253419l-2.62495116 4.3758547h-.87485347c1.75009768-5.25102559 6.33028189-14 14-14z"/></svg>'
    },
    init: function() {},
    start: function() {
        if (typeof this.opts.style.styles === 'undefined') return;
        var keys = Object.keys(this.opts.style.styles)
        if (keys.length === 0) return

        this.app.toolbar.add('style', {
            title: '## style.style ##',
            icon: this.opts.style.icon,
            blocks: {
                types: keys
            },
            command: 'style.popup'
        })
    },
    popup: function(params, button) {
        var instance = this.app.block.get()
        var type = instance.getType()
        var classes = this._getClasses(type)
        var items = this._buildItems(this.opts.style.styles[type], instance)

        // popup
        this.app.popup.create('style', {
            width: '450px',
            items: items 
        })

        this.app.popup.open({ button: button })
    },
    toggle: function(params) {
        this._toggle(params, false)
    },
    remove: function() {
        this._toggle()
    },

    // private
    _toggle: function(params, remove) {
        this.app.popup.close()

        var instance = this.app.block.get()
        var type = instance.getType()
        var $block = instance.getBlock()

        // remove
        this._removeStyles(instance, type)

        // set
        if (remove === false) {
            $block.addClass(params.classname)
        }

        // ui
        this.app.control.updatePosition()
    },
    _buildItems: function(styles, instance) {
        var items = {}
        var active = false
        for (var key in styles) {
            items[key] = {
                title: styles[key].title,
                command: 'style.toggle',
                params: { classname: styles[key].classname }
            }

            if (this._hasClasses(instance, styles[key].classname)) {
                active = key
            }
        }

        if (active) {
            items[active].active = true
        }

        items['remove'] = {
            title: '## style.remove-style ##',
            divider: 'top',
            command: 'style.remove',
            hidden: (active === false)
        }

        return items
    },
    _hasClasses: function(instance, classname) {
        var classes = classname.split(' ')
        return instance.hasClass(classes)
    },
    _getClasses: function(type) {
        var styles = this.opts.style.styles[type]
        var classes = []
        for (var key in styles) {
            classes.push(styles[key].classname)
        }

        return classes
    },
    _removeStyles: function(instance, type) {
        var classes = this._getClasses(type)
        var $block = instance.getBlock()

        $block.removeClass(classes.join(' '))
    }
})
