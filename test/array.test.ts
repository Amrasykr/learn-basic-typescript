describe("Array", () =>{
    it('should same with javascript', () => {
        const name: string[] = ["Ammar", "Asysyakur"];
        const values: number[] = [21, 22];

        console.info(name);
        console.info(values);
    });

    it('should same readonly array', () => {
        const hobbies: ReadonlyArray<string> = ["baca", "nulis"];

        // error cuz readonly array
        // hobbies[0] = "turu"

        console.info(hobbies[0]);
        console.info(hobbies[1]);
    });

    it('should support tubple', () => {
        const person: readonly [string,string,number] = ["ammar" ,"asysyakur", 21]

        // error cuz readonly tuple
        // person[0] = "turu"

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
})