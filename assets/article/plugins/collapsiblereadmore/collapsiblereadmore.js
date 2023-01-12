// Icon
ArticleEditor.iconCollapsible = '<i class="fas fa-angle-up"></i>'
//<i class="fa-solid fa-angles-up"></i>
// Plugin
ArticleEditor.add('plugin', 'collapsibleReadMore', {
    translations: {
        en: {
            "blocks": {
                "collapsibleReadMore": "Collapsible read-more"
            }
        }
    },
    start: function() {
        this.app.addbar.add('collapsibleReadMore', {
            title: '## blocks.collapsibleReadMore ##',
            icon: ArticleEditor.iconCollapsible,
            command: 'collapsibleReadMore.insert'
        })
    },
    insert: function() {
        this.app.popup.close()
        var id = Math.floor(Math.random() * 9999)

        var collapsibleHtml = `<div class="collapsible-read-more">
                                    <div class="btn-container">
                                        <a class="btn btn-text btn-icon focus" data-bs-toggle="collapse" href="#collapseBtn${id}" role="button" aria-expanded="false" aria-controls="collapseBtn${id}">
                                            <div class="text-container">
                                                <div class="text">read more</div>
                                                <div class="arr-offering">
                                                    <i class="arr-small one"></i>
                                                    <i class="arr-small two"></i>
                                                    <i class="arr-small three"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="collapse" id="collapseBtn${id}">
                                        <div class="card card-body">
                                            Some placeholder content for the collapse component.
                                        </div>
                                    </div>                        
                                </div>`

        this.app.editor.insertContent({
			html: collapsibleHtml
		})
    }
})