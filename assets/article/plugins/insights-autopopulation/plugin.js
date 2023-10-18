// Plugin
ArticleEditor.add('plugin', 'insightsAutopopulation', {
    start: function() {
        this.app.addbar.add('insightsAutopopulation', {
            title: 'Insights Autopopulation',
            icon: '<i class="fa fa-gift"></i>',
            command: 'insightsAutopopulation.popup'
        })
    },
    popup: function() {
        var stack = this.app.popup.add('insightsAutopopulation', {
            title: 'Insights Autopopulation',
            width: '400px',
            command: 'addbar.popup',
            form: {
                'select': { 
                    label: 'Select the Industries:',
                    type: 'input'
                },
                'industry-banking': {
                    type: 'checkbox',
                    text: 'Banking and Capital Markets'
                },
                'industry-insurance': {
                    type: 'checkbox',
                    text: 'Insurance'
                },
                'industry-automotive': {
                    type: 'checkbox',
                    text: 'Automotive'
                },
                'industry-healthcare': {
                    type: 'checkbox',
                    text: 'Healthcare and Life Sciences'
                },
                'industry-telecom': {
                    type: 'checkbox',
                    text: 'Telecom, Media and Technologies'
                },
                'industry-consumer-goods': {
                    type: 'checkbox',
                    text: 'Consumer Goods'
                },
                'industry-energy-utilities': {
                    type: 'checkbox',
                    text: 'Energy and Utilities'
                },
                'industry-manufacturing': {
                    type: 'checkbox',
                    text: 'Manufacturing'
                },
                'industry-oil-gas': {
                    type: 'checkbox',
                    text: 'Oil and Gas'
                },
                'industry-retail-ecommerce': {
                    type: 'checkbox',
                    text: 'Retail and E-commerce'
                },
                'industry-travel-hospitality': {
                    type: 'checkbox',
                    text: 'Travel and Hospitality'
                },
                'industry-transportation-logistics': {
                    type: 'checkbox',
                    text: 'Transportation and Logistics'
                },
                'select2': { 
                    label: 'Select the Categories:',
                    type: 'input'
                },
                'category-as-a-service': {
                    type: 'checkbox',
                    text: 'As-a-service'
                },
                'category-cloud': {
                    type: 'checkbox',
                    text: 'Cloud'
                },
                'category-advanced-analytics': {
                    type: 'checkbox',
                    text: 'Advanced Analytics'
                },
                'category-insurance': {
                    type: 'checkbox',
                    text: 'Insurance'
                },
                'category-regtech': {
                    type: 'checkbox',
                    text: 'Regtech'
                },
                'category-software-engineering': {
                    type: 'checkbox',
                    text: 'Software engineering'
                },
                'category-core-banking': {
                    type: 'checkbox',
                    text: 'Core Banking'
                },
                'version': {
					label: "Choose the design you want to use:",
					type: "select",
					options: {
						simple: "Simple",
						fancy: "Fancy",
						mixed: "Mixed",
					},
				}
            },
            footer: {
                insert: { title: 'Insert', command: 'insightsAutopopulation.insert', type: 'primary' },
                cancel: { title: 'Cancel', command: 'popup.close' }
            }
        })

        stack.open({ focus: 'insightsAutopopulation' })
    },
    insert: function(stack) {
        var instance = this._buildInstance(stack)
    },
    _buildInstance: function(stack) {
        this.app.popup.close()

        var data = stack.getData()
        var insightsVersion = data.version;
        console.log(data)
        const industries = []
        const categories = []

        for (const [key, field] of Object.entries(data)) {
            if (key.includes('industry-') && field) {
                industries.push(key.substring(9))
            }
            
            if (key.includes('category-') && field) {
                categories.push(key.substring(9))
            }
        }
        
        var htmlStructure = `<div class="insights-autopopulation-records">
                                <p>
                                {% setcontent records = 'pr,videos,blog,case-studies,whitepapers' where { industries_t: '${industries.join(' || ')}', content_categories_t: '${categories.join(' || ')}' } limit 3 latest %}
                                </p>
                            </div>`;
		var htmlItems = ``;
   
        if (insightsVersion === 'simple') {
            htmlItems += `{% if records is not empty %}
                            {% for item in records %}
                                {% if item is not empty %}
                                    {{ include('@theme/partials/_featured_insights_simple.twig') }}
                                {% endif %}
                            {% endfor %}
                        {% endif %}`


            htmlStructure += `<section class="container-featured">
                        <div class="title">
                            <h4 class="fs-2">Featured insights - simple</h4>
                        </div>
                        <div class="row">
                          ${htmlItems}
                        </div>
                      </section>`
        } else if (insightsVersion === 'fancy') {
            htmlItems += `{% for item in records %}
                            {% if item is not empty %}
                                {{ include('@theme/partials/_featured_insights_fancy.twig') }}
                            {% endif %}
                        {% endfor %}`

        htmlStructure += `<section class="featured container-xxl"><div class="container">
                            <div class="row">
                                <h4 class="featured__title fs-2">Featured insights - fancy</h4>
                            </div>
                            <div class="container-xxl js-stack-cards">
                              ${htmlItems}
                            </div>
                          </div></section>`
        } else if (insightsVersion === 'mixed') {
            htmlItems += `{% for item in records %}
                            {% if item is not empty %}
                                {{ include('@theme/partials/_featured_insights_mixed.twig') }}
                            {% endif %}
                        {% endfor %}`

            htmlStructure += `<section class="container-insights">
                        <div class="title">
                            <p class="fs-2">
                                Key insights and featured news - mixed
                            </p>
                        </div>
                          <div class="row">
                            ${htmlItems}
                          </div>
                      </section>`
        }

        this.app.editor.insertContent({
			html: htmlStructure,
		})
    }
})