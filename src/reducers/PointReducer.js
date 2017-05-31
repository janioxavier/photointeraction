export default function reducer(state = {
    points: [],
    feching: false,
    feched: false,
    error: null
}, action) {

    switch (action.type) {
        case "FETCH_POINTS": {
            return { ...state, feching: true }
        }
        case "FETCH_POINTS_REJECTED": {
            return { state, feching: false, error: action.payload }
        }
        case "FETCH_POINTS_FULFILLED": {
            return {
                ...state,
                feching: false,
                feched: true,
                points: action.payload,
            }
        }
        case "ADD_POINT": {
            return {
                ...state,
                points: [...state.points, action.payload],
            }
        }
        // ADICIONAR ATUALIZAR E DELETAR        
    }
    return state;
}