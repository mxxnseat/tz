export const users = page => {
    return (dispatch, getState) => {
        fetch("/users.json")
            .then(res => res.json())
            .then(data => {
                if(getState().search.trim()) return;
                if (page <= 0 || page > data.length / 50) return;
                data = data.splice((page - 1) * 50, page * 50);
                dispatch(setUser({
                    users: data,
                    page: page
                }));
            })
    }
}
const setUser = payload => {
    return {
        type: "SET_USERS",
        payload: {
            page: payload.page,
            users: payload.users
        }
    }
}