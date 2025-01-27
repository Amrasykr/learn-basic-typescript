describe("Optional Parameter", () =>{
    it('should support null and undifined', () => {

        const sayHello = (name?: string | null ) => {
            if (name) {
                console.info(`Hello ${name}`)
            } else {
                console.info(`Hello`)
            }
        }


        sayHello("Ammar")
        const name : undefined | string = undefined
        // undifined data
        sayHello(name)

        // null data
        sayHello(null)
    });
})