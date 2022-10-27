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
            layer: {
                'black-version': {
                    title: 'Insert classes for the BLACK version of OUR TEAM',
                    classname: 'bd-black'
                },
                'white-version': {
                    title: 'Insert classes for the WHITE version of OUR TEAM',
                    classname: 'bd-white'
                },
                'why-luxoft': {
                    title: 'Insert classes for WHY LUXOFT section',
                    classname: 'container-why-luxoft'
                },
                'how-we-can-help': {
                    title: 'Insert classes for HOW WE CAN HELP section',
                    classname: 'container-how-we-help'
                },
                'key-points': {
                    title: 'Insert classes for KEY POINTS section',
                    classname: 'container-key-points'
                },
                'section-icons-with': {
                    title: 'Insert classes for SECTION WITH ICONS',
                    classname: 'container-section-icons'
                },
                'video-left': {
                    title: 'Insert classes for VIDEO ON THE LEFT',
                    classname: 'container-video-left'
                },
                'video-right': {
                    title: 'Insert classes for VIDEO ON THE RIGHT',
                    classname: 'container-video-right'
                },
                'partnership': {
                    title: 'Insert classes for PARTNERSHIP section',
                    classname: 'container-partnership'
                },
                'partnership-alt': {
                    title: 'Insert classes for the ALT version of PARTNERSHIP',
                    classname: 'container-partnership-alt'
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