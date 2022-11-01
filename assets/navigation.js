if (document.getElementById('navigation-edit-form')) {
    const editNavigationForm = document.getElementById('navigation-edit-form')
    editNavigationForm.dataset.action = `${window.location.origin}/bolt/navigation/save`
}
