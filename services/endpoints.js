const url = `https://crud-api-euguene.azurewebsites.net/`
const urlLogin = `${url}login?useCookies=true`
const urlRegister = `${url}register`
const urlForm = `${url}api/form`
const urlFormId = (id) => `${url}api/form/${id}`

export {url, urlLogin, urlRegister, urlForm, urlFormId}