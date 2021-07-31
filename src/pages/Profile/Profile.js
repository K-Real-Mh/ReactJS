import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import Message from '../../components/Message/Message';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { toggleName } from '../../store/profile/actions';

export default function Profile() {
    const { showName, name } = useSelector(state => state.profile)
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleName);
    }, [dispatch])


    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={showName}
                            value={showName}
                            onChange={setShowName}
                            name="showName"
                            color="primary"
                        />
                    }
                    label="Show name"
                />
            </Grid>
            <Grid item xs={8}>
                {showName ? <Message text={name} /> : <Message text="Name hidden" />}
            </Grid>
        </Grid>
    );
}
