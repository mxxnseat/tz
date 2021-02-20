
import { useDispatch, useSelector } from 'react-redux';

import { users } from '../store/actions/users';

export default () => {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.page);
    const pagination = (action) => {
        switch (action) {
            case 'next': {
                dispatch(users(page + 1));
                break;
            }
            case 'prev': {
                dispatch(users(page - 1));
                break;
            }
        }
    }

    return (
        <div className="pagination">
            <div className="prev" onClick={() => pagination("prev")}>Previous Page</div>
            <div className="next" onClick={() => pagination("next")}>Next Page</div>
        </div>
    )
}