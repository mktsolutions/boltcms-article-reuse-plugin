ArticleEditor.add('plugin', 'leaders', {
    defaults: {
        url: window.location.origin,
        contentType: 'people'
    },
    start: async function() {
        const response = await fetch(`${this.opts.leaders.url}/api/contents?page=1&contentType=${this.opts.leaders.contentType}&status=published`)
        const dataJson = await response.json()
        const items = {}
        const selectOptions = {}
        
        for (const leader in dataJson) {
            console.log(dataJson[leader].fieldValues)
            const item = {
                id: dataJson[leader].id,
                title: dataJson[leader].fieldValues.name,
                description: dataJson[leader].fieldValues.description,
                photo: dataJson[leader].fieldValues.image.url,
                command: 'leaders.insert'
            }
            items[leader] = item
            selectOptions[leader] = `${dataJson[leader].fieldValues.name} - ${dataJson[leader].fieldValues.description}`
        }

        this.app.toolbar.add('leaders', {
            title: 'Leaders',
            icon: '<i class="fa fa-users"></i>',
            command: 'leaders.popup',
            blocks: {
                types: ['layer']
            },
            params: {
                items: items,
                selectOptions: selectOptions
            }
        })
    },
    popup: function(params, button) {
        this.app.popup.create('leaders', {
            width: '450px',
            footer: {
                save: {
                    title: 'Insert',
                    command: 'leaders.insert',
                    type: 'primary'
                },
                cancel: {
                    title: 'Cancel',
                    command: 'popup.close'
                }
            },
            form: {
                'leadersList': {
                    type: 'select',
                    label: 'Choose a leader to insert',
                    options: params.selectOptions
                }
            },
            leaders: params.items,
        })
        
        this.app.popup.open({ button: button })
    },
    insert: function(params, button, name) {
        this.app.popup.close()

        // get form data
        var data = params.getData()
        var ledaerPosition = data.leadersList

        this.app.editor.insertContent({
            html:  `
            <div class="item">
                <div class="item__image html-code" style="background-image: url('${params.params.leaders[ledaerPosition].photo}')">
                    <div class="social"><i class="icomoon-linkedin-logo"></i></div>
                </div>
                <div class="item__name html-code">
                    <h5>${params.params.leaders[ledaerPosition].title}</h5>
                    <p>${params.params.leaders[ledaerPosition].description}</p>
                </div>
                <div class="twig-code">{% setcontent leader = 'person/${params.params.leaders[ledaerPosition].id}' %}</div>
                <a href="{{ leader.contentlink }}" class="item__link twig-code">
                    <div class="item__image" style="background-image: url('{{ leader.image }}')">
                        <div class="social"><i class="icomoon-linkedin-logo"></i></div>
                    </div>
                    <div class="item__name">
                        <h5>{{ leader.name }}</h5>
                        <p>{{ leader.description }}</p>
                    </div>
                </a>
            </div>`
        })
    },
})