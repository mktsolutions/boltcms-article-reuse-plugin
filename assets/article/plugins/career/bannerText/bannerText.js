ArticleEditor.add("plugin", "bannerText", {
    start: function () {
        this.app.addbar.add("bannerText", {
            title: "Banner Text",
            icon: '<i class="fa fa-columns"></i>',
            command: "bannerText.popup",
        })
    },
    popup: function () {
        var stack = this.app.popup.add("bannerText", {
            title: "Banner Text",
            width: "400px",
            command: "addbar.popup",
            form: {
                elements: {
                    label: "Grey version? (default is white background)",
                    type: "select",
                    options: {
                        2: "Grey Background Version",
                        3: "White Background Version"
                    },
                },
            },
            footer: {
                insert: {
                    title: "Insert",
                    command: "bannerText.insert",
                    type: "primary",
                },
                cancel: { title: "Cancel", command: "popup.close" },
            },
        })

        stack.open({ focus: "bannerText" })
    },
    insert: function (stack) {
        var instance = this._buildInstance(stack)
    },
    _buildInstance: function (stack) {
        this.app.popup.close()

        var data = stack.getData()
        var version = data.elements
        var bannerTextContent = `
        <section class="banner-text ${version === '2' ? 'grey-background' : 'white-background'}">
            <div class="container">
                <h3>5 reasons to join Luxoft</h3>
                <div class="banner-text__wrapper">
                  <div class="banner-text__item">
                    <div class="banner-text__item__text">
                        <h5>Work-life balance</h5>
                        <p>We don't live to work; we work to live. Our talent is the heart of the company, which is why we seek to ensure that your life is in balance. We work for objectives, we have flexible leadership, and we promote personal care through various programs ranging from emotional intelligence, nutrition, life and career planning as well as self-care, among many others.</p>
                    </div>
                    <figure class="banner-text__item__image">
                        <img src="{{ asset('/theme/luxoft/assets/images/image-148.jpg') }}" alt="banner text plugin image">
                    </figure>
                </div>
                <div class="banner-text__item">
                    <figure class="banner-text__item__image">
                        <img src="{{ asset('/theme/luxoft/assets/images/image-148.jpg') }}" alt="banner text plugin image">
                    </figure>
                    <div class="banner-text__item__text">
                        <h5>Feel at home</h5>
                        <p>Our environment is flexible, all hair colors, t-shirts and slippers are welcome. Come and meet the Luxoft community and its different groups: Movie lovers, professional table gamers, video game cracks and grill masters. Work at your own pace and find time for yourself with personal time off, fun days and other benefits.</p>
                    </div>
                </div>
                <div class="banner-text__item">
                    <div class="banner-text__item__text">
                        <h5>We accompany you in your growth</h5>
                        <p>Grow your skills with experts from all over the world in our mentoring program or help others achieve their goals by participating as a trainer or mentor. Prepare for that certification you have been wanting with our learning program or join the Domain Chapters, which offer a career plan in specific technologies and personalized training.</p>
                    </div>
                    <figure class="banner-text__item__image">
                        <img src="{{ asset('/theme/luxoft/assets/images/image-148.jpg') }}" alt="banner text plugin image">
                    </figure>
                </div>
                <div class="banner-text__item">
                    <figure class="banner-text__item__image">
                        <img src="{{ asset('/theme/luxoft/assets/images/image-148.jpg') }}" alt="banner text plugin image">
                    </figure>
                    <div class="banner-text__item__text">
                        <h5>Challenge your potential</h5>
                        <p>Work with an elite team of engineers on projects that improve the lives of millions of users through cutting-edge technology. Feel satisfied knowing that your talent will be used to improve the user experience of leading international brands. Use your creativity to shape the future.</p>
                    </div>
                </div>
                <div class="banner-text__item">
                    <div class="banner-text__item__text">
                        <h5>Don't stop learning</h5>
                        <p>The sky is the limit. At Luxoft, you define where you want to go. We have free trainings and programs in different technologies and soft skills as well as a wide range of certifications. Our Internal Mobility program offers you the opportunity to change your line of business or place yourself in a new role that fits your aspirations.</p>
                    </div>
                    <figure class="banner-text__item__image">
                        <img src="{{ asset('/theme/luxoft/assets/images/image-148.jpg') }}" alt="banner text plugin image">
                    </figure>
                </div>
                </div><div class="banner-text__dots"><p>Pagination</p></div><button class="btn-normal banner-text__button">Apply now</button></div>
            </section>`

        this.app.editor.insertContent({
            html: bannerTextContent
        })
    }
})
