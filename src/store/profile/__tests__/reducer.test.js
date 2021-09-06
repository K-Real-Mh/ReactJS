import profileReducer from '../reducer';
import { changeIsAuthed, changeName } from '../actions';

describe('reducer profile tests', () => {
    const initialState = {
        name: 'John Doe',
        isAuthed: true,
    }

    it('return state with changed name', function () {
        const expected = {
            name: 'test name',
            isAuthed: true,
        }

        const received = profileReducer(initialState, changeName('test name'));

        expect(received).toEqual(expected);
    })

    it('should return state with changed authorization', function () {
        const expected = {
            name: 'John Doe',
            isAuthed: false,
        }

        const received = profileReducer(initialState, changeIsAuthed(false));

        expect(received).toEqual(expected);
    });
})
