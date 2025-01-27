describe('Any', function () {
    it('should support in ts', () => {
        const person: any = {
            id : 1,
            name : "ammar",
            age : 30
        }

        person.address = "indonesia"
        console.info(person)
    });
})