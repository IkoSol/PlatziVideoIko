const reducer = (state, action) => {
    switch (action.type){
        case 'SET_FAVORITE':
            return{
                ...state,
                //myList: [...state.myList, action.payload]
                myList: [...state.myList].find((item) => item.id === action.payload.id) ? state.myList : [...state.myList, action.payload],
            }
        case 'DELETE_FAVORITE': 
            return{
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload)) // item => significa que va a iterar por cada elemento, item.id === Number(action.payload) es que si coinciden estos, hará algo
                    || state.original.find(item => item.id === Number(action.payload))
                    || []
            }
        case 'FILTER_VIDEOS':
            let listFiltered = []

            if (action.payload.length > 0){
                listFiltered = state.trends.filter(list =>{
                    return list.title.toLowerCase().includes(action.payload.toLowerCase())
                }) || state.original.filter(list => {
                    return list.title.toLowerCae().includes(action.payload.toLowerCase())
                })
            }

            return {
                ...state,
                filteredList: listFiltered
            }
        default:
            return state
    }
}

export default reducer