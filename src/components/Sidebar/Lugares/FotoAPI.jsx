import { imgurURL } from '../../../restURL'
import axios from 'axios'

const clientId = '525d2908a974303'


export default function uploadFoto() {
    var instance = axios.create({
        baseURL:  imgurURL + 'account/JanioXavier',
        headers : {
            authorization: 'Client-ID {'+ clientId + '}'
        }
    })
    axios.get(instance).then((d) => {
        console.log(d)
    }).catch((d) => {
        console.log(d)
    })
}
