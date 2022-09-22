ArticleEditor.add('plugin', 'leaders', {
    defaults: {
        url: window.location.origin,
        contentType: 'people'
    },
    start: async function() {
        const response = await fetch(`${this.opts.leaders.url}/api/contents?page=1&contentType=${this.opts.leaders.contentType}&status=published`)
        const dataJson = await response.json()
        console.log(dataJson)
        const items = {}
        
        for (const leader in dataJson) {
            console.log(dataJson[leader].fieldValues)
            const item = {
                id: dataJson[leader].id,
                title: dataJson[leader].fieldValues.name,
                description: dataJson[leader].fieldValues.description,
                image: dataJson[leader].fieldValues.image.url,
                command: 'leaders.insert'
            }
            items[leader] = item
        }

        this.app.toolbar.add('leaders', {
            title: 'Leaders',
            icon: '<i class="fa fa-users"></i>',
            command: 'leaders.popup',
            blocks: {
                types: ['layer']
            },
            params: items
        })
    },
    popup: function(params, button) {
        this.app.popup.create('leaders', {
            items: params,
        })
        
        this.app.popup.open({ button: button })
    },
    insert: function(params, button, name) {
        this.app.popup.close()

        var $nodes = this.dom('#entry');
        var $spans = $nodes.find('#first-leader')
        console.log($spans)

        this.app.editor.insertContent({
            html:  `
            <div class="item">
                <div class="item__image html-code" style="background-image: url('${button.params.image}')">
                    <div class="social"><i class="icomoon-linkedin-logo"></i></div>
                </div>
                <div class="item__name html-code">
                    <h5>${button.params.title}</h5>
                    <p>${button.params.description}</p>
                </div>
                <div class="twig-code">{% setcontent leader = 'person/${button.params.id}' %}</div>
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