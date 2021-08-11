import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { catsListSelector, statusSelector } from '../../store/cats/selectors';
import { fetchCats } from '../../store/cats/actions';
import { useCallback, useEffect } from 'react';
import { IMG_URL } from '../../constants';
import { CATS_REQUEST_STATUS } from '../../store/cats/reducer';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Button, CircularProgress } from '@material-ui/core';
import './Cats.css'

export default function Cats() {
    const dispatch = useDispatch();

    const status = useSelector(statusSelector, shallowEqual);
    const catsList = useSelector(
        catsListSelector,
        (prev, next) => prev.length === next.length
    );

    const requestFetchCats = () => {
        dispatch(fetchCats());
    }

    useEffect(() => {
        requestFetchCats();
    }, [])

    const renderCats = useCallback(cat => {
        return (
            <li key={cat.id} className="cats__item">
                <img loading="lazy" src={`${IMG_URL}${cat.id}`} alt={cat.tags[0]}/>
            </li>
        );
    }, [])

    if (status === CATS_REQUEST_STATUS.LOADING) {
        return <div className="cats__loading"><CircularProgress/></div>;
    }

    if (status === CATS_REQUEST_STATUS.ERROR) {
        return (
            <div className="cats__error">
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>check it out!</strong>
                </Alert>
                <Button fullWidth color="secondary" onClick={requestFetchCats}>Retry</Button>
            </div>
        );
    }

    return <ul className="cats">{catsList.map(renderCats)}</ul>
}
