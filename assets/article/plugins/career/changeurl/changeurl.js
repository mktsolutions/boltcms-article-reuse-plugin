const recordActions = document.getElementsByClassName('record-actions')

if (recordActions.length > 0) {
    recordActions.forEach(element => {
        const href = element.getElementsByTagName('a').item(0)
        const value = href.getAttribute('href')
        href.setAttribute('href', 'https://career.luxoft.com' + value) 
    })
}