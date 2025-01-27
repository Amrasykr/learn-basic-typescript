import {sayHello} from "../src/say-hello";

describe('sayHello', () => {
    it('should be Hello Ammar', () => {
        expect(sayHello("Ammar")).toBe("Hello Ammar");
    });
})