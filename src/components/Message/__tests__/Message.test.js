import { render } from '@testing-library/react';
import Message from '../Message';

describe('Message tests', function () {
    it('should return correct text without author', function () {
        const component = render(<Message text={'hello!'}/>)

        const expected = 'hello!';

        const received = component.baseElement.textContent;

        expect(received).toEqual(expected);
    });

    it('should return correct text with author', function () {
        const component = render(<Message text={'hello!'} author={'John Doe'}/>)

        const expected = 'John Doe: hello!';

        const received = component.baseElement.textContent;

        expect(received).toEqual(expected);
    });
});
