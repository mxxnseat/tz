const initialState = {
    users: [],
    page: 1,
    sort: '',
    search: ''
}

export default (state = initialState, {type, payload})=>{
    switch(type){
        case 'SET_USERS': return {
            ...state,
            users: payload.users,
            page: payload.page
        }
        case 'SORT_BY_NAME': {
            return {
                ...state,
                users: [...payload.users],
                sort: payload.sort
            }
        }
        case 'SORT_BY_SURNAME': {
            return {
                ...state,
                users: [...payload.users],
                sort: payload.sort
            }
        }
        case 'SEARCH':{
            return {
                ...state,
                users: payload.users,
                search: payload.search
            }
        }

        default: return state;
    }
}