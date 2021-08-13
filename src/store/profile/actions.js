export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const CHANGE_IS_AUTHED = 'PROFILE::CHANGE_IS_AUTHED';

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName
})

export const changeIsAuthed = (isAuthed) => ({
    type: CHANGE_IS_AUTHED,
    payload: {
        isAuthed
    }
})
