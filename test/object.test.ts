describe("Object", () =>{
    it('should support ts', () => {

        const person: {id: String, name: String, hobbies?: string[]} = {
            id: "1",
            name : "Ammar"
        }

        console.info(person)

        person.id = "2";
        person.name = "syakur"

        console.info(person)
    });
})