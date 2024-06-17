const elementsWithSpecificClass = document.querySelectorAll('.record-actions')
const singleSpecificClassElements = Array.from(elementsWithSpecificClass).filter(element => element.classList.length === 1)

singleSpecificClassElements.forEach(element => {
    const links = element.querySelectorAll('a:not(.action-remove-collection-item)')

    links.forEach(link => {
        const href = link.getAttribute('href')
        if (href) {
            const newHref = href.startsWith('https://') 
                ? href.replace('https://career-admin.luxoft.com', 'https://career.luxoft.com') 
                : 'https://career.luxoft.com' + href

            link.setAttribute('href', newHref)
        }
    })
})