import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'
import ChatsContainer from '../ChatsContainer';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ChatsContainer tests', function () {
    it('should matches snapshot', function () {

        const initialState = {
            messages: {
                messageList: {
                    id0: [
                        {
                            id: 'id00',
                            text: 'asdaaaa',
                            author: 'you'
                        },
                        {
                            id: 'id01',
                            text: 'hello, my friend!',
                            author: 'Han Solo'
                        },
                    ],
                    id1: [
                        {
                            id: 'id00',
                            text: 'hello !',
                            author: 'you'
                        },
                        {
                            id: 'id01',
                            text: 'hello, my friend!',
                            author: 'Han Solo'
                        },
                    ],
                }
            },
            chats: {
                chatList: [
                    {
                        id: 'id0',
                        name: 'Han Solo'
                    },
                    {
                        id: 'id1',
                        name: 'Vasya'
                    },
                ],
            }

        }
        const store = mockStore(initialState)

        const component = render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['chats/id0']}>
                    <Route path="chats/:chatId">
                        <ChatsContainer/>
                    </Route>
                </MemoryRouter>
            </Provider>
        );


        expect(component).toMatchSnapshot();
    });
});
