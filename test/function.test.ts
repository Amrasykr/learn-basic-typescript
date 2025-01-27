describe("Function", () =>{
    it('should support in typescript', () => {

        const sayHello = (name:string = "Guest"): string =>{
            return `Hello ${name}`
        }

        expect(sayHello("Ammar")).toBe("Hello Ammar")
        expect(sayHello()).toBe("Hello Guest")

        const printHello= (name: String) : void => {
            console.info(`Hello ${name} from printHello`)
        }

        printHello("Ammar")
    });

    it('should support rest parameter', () => {

        const sum = (...values: number[]): number =>{
            let total = 0
            for(const value of values) {
                total += value
            }
            return total
        }

        expect(sum(1,2,3,4,5)).toBe(15)
    });

    it('should support optional parameter', () => {

        const sayHello = (firstname: String, lastName?: String): String => {
            if (lastName) return `Hello ${firstname} ${lastName}`
            return `Hello ${firstname}`

        }

        expect(sayHello("Ammar")).toBe("Hello Ammar")
        expect(sayHello("Ammar", "Asysyakur")).toBe("Hello Ammar Asysyakur")

    });

    it('should support function overloading', () => {
        function callme  (value: String): String;
        function callme  (value: Number): Number;
        function callme  (value: any): any {
            if (value === String) return `Hello ${value}`
            return value * 10
        }
    });

    it('should support function parameter', () => {

        const sayHello = (name: String, filter: (name:String) => String): String => {
            return `Hello ${filter(name)}`
        }

        const toUpper = (name: String): String => {
            return name.toUpperCase()
        }

        expect(sayHello("Ammar", toUpper)).toBe("Hello AMMAR")
    });
})