export const sortbysurname = () => {
    return (dispatch, getState) => {
        let users = getState().users;
        const sortType = getState().sort;
        users = users.sort((cur, next) => {
            if(sortType == "sort_by_surname_asc"){
                return cur.firstName > next.firstName ? 1 : -1;
            }
            else{
                return cur.firstName < next.firstName ? 1 : -1;
            }
        });
        dispatch(sortSurnames({
            users,
            sort: sortType == "sort_by_surname_asc" ? "sort_by_surname_desc" : "sort_by_surname_asc"
        }));
    }
}
const sortSurnames = payload => {
    console.log(payload);
    return {
        type: "SORT_BY_SURNAME",
        payload: {
            users: payload.users,
            sort: payload.sort
        }
    }
}