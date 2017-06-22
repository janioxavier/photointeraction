import axios from 'axios'
import restURL from '../../../restURL'


const api = restURL + '/point'


export default function getLugar(id) {
    return axios(api + '/' + id)
}

export function getEndereco(id) {
    var reqURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
    return getLugar(id).then((response) => {
        const latlng = response.data.lat + ',' + response.data.lng
        return latlng
    }).then((latlng) => {
        console.log(latlng)
        return axios.get(reqURL + latlng).then((response) => {
            console.log(response.data)
            return response.data.results[0].formatted_address
        })
    })
}


