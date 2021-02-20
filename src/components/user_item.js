import "../scss/users.scss";

export default ({userID,firstName, lastName})=>{
    const name = `${firstName} ${lastName}`;
    return (
        <tr className="user">
            <td className="user__name">{name}</td>
            <td className="user__website">{userID}</td>
        </tr>
    );
}