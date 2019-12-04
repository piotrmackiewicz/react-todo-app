import Api from 'Libs/Api'

const getPing = () => Api.get('/ping')

export { getPing };