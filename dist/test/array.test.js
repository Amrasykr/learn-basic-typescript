"use strict";
describe("Array", () => {
    it('should same with javascript', () => {
        const name = ["Ammar", "Asysyakur"];
        const values = [21, 22];
        console.info(name);
        console.info(values);
    });
    it('should same readonly array', () => {
        const hobbies = ["baca", "nulis"];
        // error cuz readonly array
        // hobbies[0] = "turu"
        console.info(hobbies[0]);
        console.info(hobbies[1]);
    });
    it('should support tubple', () => {
        const person = ["ammar", "asysyakur", 21];
        // error cuz readonly tuple
        // person[0] = "turu"
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
});
