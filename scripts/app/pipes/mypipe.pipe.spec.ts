import {MyPipe} from './mypipe.pipe';

describe('Example test class', () => {
    let target: MyPipe;

    beforeEach(() => target = new MyPipe());

    it('returns the original value + wibble', () => {
        const actual = target.transform('hello world');
        expect(actual).toEqual('hello world wibble');
    });
});