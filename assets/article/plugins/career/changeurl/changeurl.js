const elementsWithSpecificClass = document.querySelectorAll('.record-actions')
const singleSpecificClassElements = Array.from(elementsWithSpecificClass).filter(element => element.classList.length === 1)

singleSpecificClassElements.forEach(element => {
    const links = element.querySelectorAll('a:not(.action-remove-collection-item)')
    const host = window.location.host
    let strToReplace = 'https://www-admin.luxoft.com/'
    let replaceWith = 'https://www.luxoft.com/'
    
    if (host.includes('career')) {
        strToReplace = 'https://career-admin.luxoft.com'
        replaceWith = 'https://career.luxoft.com'
    }

    links.forEach(link => {
        const href = link.getAttribute('href')
        if (href) {
            const newHref = href.startsWith('https://') 
                ? href.replace(strToReplace, replaceWith) 
                : replaceWith + href

            link.setAttribute('href', newHref)
        }
    })
})