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
                link: dataJson[leader].fieldValues.linkedin_url,
                photo: (window.location.hostname === '127.0.0.1') ? 'https://www.luxoft.com/upload/resize_cache/iblock/303/400_0_1/RinoAriganello.jpg' : dataJson[leader].fieldValues.image.url,
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
                types: ['layer', 'column']
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
            html:  `<div class="col">
                        <div class="card html-code">
                            <img src="${params.params.leaders[ledaerPosition].photo}" alt="leader image">
                            <a href="${params.params.leaders[ledaerPosition].link}"></a>
                            <div class="card-body">
                                <h5 class="card-title">${params.params.leaders[ledaerPosition].title}</h5>
                                <p class="card-text">${params.params.leaders[ledaerPosition].description}</p>
                            </div>
                        </div>
                        <div class="twig-code">{% setcontent leader = 'person/${params.params.leaders[ledaerPosition].id}' %}</div>
                        <div class="card twig-code">
                            <img src="{{ leader.image }}" alt="leader image">
                            <a class="linkedin" href="{{ leader.linkedin_url }}">
                                <img src="/theme/luxoft/assets/images/icon/linkedin.svg" alt="linkedin icon">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">{{ leader.name }}</h5>
                                <p class="card-text">{{ leader.description }}</p>
                            </div>
                        </div>
                    </div>`
        })
    },
})