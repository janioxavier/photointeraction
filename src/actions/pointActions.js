
export function fetchPoints() {
    return {
        type: "FETCH_POINS_FULFILLED",
        payload: {
            name: "Will"
        }
    }
}

export function addPoint(point) {
    console.log(point)
    return {
        type : "ADD_POINT",
        payload: point
    }
}