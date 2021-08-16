import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { profileNameSelector } from '../../store/profile/selectors';
import  { FormPure } from '../../components/Form/Form';
import { changeName } from '../../store/profile/actions';

export default function Profile() {
    const name = useSelector(profileNameSelector, shallowEqual)
    const dispatch = useDispatch();

    const setName = useCallback((newName) => {
        dispatch(changeName(newName))
    }, [dispatch]);

    return (
        <>
            <div>
                <h1>Profile</h1>
            </div>
            <div>
                <h2>{name}</h2>
            </div>
            <FormPure onSubmit={setName} label="Change name" btnLabel="Change"/>
        </>
    );
}
