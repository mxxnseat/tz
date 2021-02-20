export const sortbyname = () => {
    return (dispatch, getState) => {
        let users = getState().users;
        const sortType = getState().sort;
        users = users.sort((cur, next) => {
            if(sortType == "sort_by_name_asc"){
                return cur.firstName > next.firstName ? 1 : -1;
            }
            else{
                return cur.firstName < next.firstName ? 1 : -1;
            }
        });
        dispatch(sortNames({
            users,
            sort: sortType == "sort_by_name_asc" ? "sort_by_name_desc" : "sort_by_name_asc"
        }));
    }
}
const sortNames = payload => {
    console.log(payload);
    return {
        type: "SORT_BY_NAME",
        payload: {
            users: payload.users,
            sort: payload.sort
        }
    }
}