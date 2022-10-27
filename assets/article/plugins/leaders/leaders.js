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
            const item = {
                id: dataJson[leader].id,
                title: dataJson[leader].fieldValues.name,
                description: dataJson[leader].fieldValues.description,
                link: dataJson[leader].fieldValues.contentlink,
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
            <div class="col">
                <div class="card h-100 html-code">
                    <img src="${params.params.leaders[ledaerPosition].photo}" class="card-img-top" alt="leader image">
                    <a class="linkedin" href="${params.params.leaders[ledaerPosition].link}"></a>
                    <div class="card-body bd-gray-20">
                        <h5 class="card-title text-16 bold mb-2">${params.params.leaders[ledaerPosition].title}</h5>
                        <p class="card-text text-14 regular mb-2">${params.params.leaders[ledaerPosition].description}</p>
                    </div>
                </div>
                <div class="twig-code">{% setcontent leader = 'person/${params.params.leaders[ledaerPosition].id}' %}</div>
                <div class="card h-100 twig-code">
                    <img src="{{ leader.image }}" class="card-img-top" alt="leader image">
                    <a class="linkedin" href="{{ leader.contentlink }}"></a>
                    <div class="card-body bd-gray-20">
                        <h5 class="card-title text-16 bold mb-2">{{ leader.name }}</h5>
                        <p class="card-text text-14 regular mb-2">{{ leader.description }}</p>
                    </div>
                </div>
            </div>`
        })
    },
})