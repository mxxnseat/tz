import { useDispatch } from "react-redux"
import search from "../store/actions/search";

export default ()=>{
    const dispatch = useDispatch();

    const handler = (e)=>{
        const value = e.target.value;
        dispatch(search(value));
    }

    return (
        <input type="text" placeholder="search query" onChange={handler} />
    )
}