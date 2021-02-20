export default (query) => {
    return (dispatch) => {
        fetch("/users.json")
            .then(res => res.json())
            .then(data => {
                const users = data.filter(user => {
                    return user.firstName.includes(query) || user.lastName.includes(query) || user.userID.includes(query);
                })
                console.log(users);
                dispatch(search({
                    users,
                    query
                }));
            });
    }


}
const search = (payload) => {
    return {
        type: "SEARCH",
        payload: {
            users: payload.users,
            search: payload.query
        }
    }
}