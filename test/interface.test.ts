import {Seller} from "../src/seller";
import {Employee, Manager} from "../src/employee";
import {Person} from "../src/person";


describe("Interface", () => {
    it('should support in typescript', () => {

        const seller: Seller = {
            id : 1,
            name: "Ammar",
            address : "poncab",
            nim: "1111"
        }

        // gak bisa diubah
        // seller.nim = "313131"
        console.info(seller)
    });

    it('should support function interface', () => {

        interface addFunction {
            (value1: number, value2: number): number
        }

        const add: addFunction =  (value1: number, value2: number): number => {
            return value1 + value2
        }

        expect(add(2,2)).toBe(4)
    });

    it('should support indexable interface', () => {

        interface StringArray {
            [index: number] : string
        }

        const names: StringArray = ["Ammar", "Asysyakur"];

        console.info(names)
    });

    it('should support indexable interface for non number index', () => {

        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            name : "Ammar",
            address : "indonesia"
        }

        expect(dictionary["name"]).toBe("Ammar")
    });

    it('should support extend inteface', () => {
        const employee: Employee = {
            id : "1",
            name : "Ammar",
            division : "IT"
        }

        const manager: Manager = {
            id : "1",
            name : "Ammar",
            division : "IT",
            numberOfEmployees : 10
        }

        console.info(employee)
        console.info(manager)

    });

    it('should support function in interface', () => {


        const person: Person = {
            name : "Ammar",
            sayHello(name: String): String {
                return `Hello ${name} , my Name is ${this.name}`
            }
        }

        console.info(person.sayHello("Latif"))
    });

    it('should support intersection type', () => {
        interface hasName {
            name: String
        }

        interface hasId {
            id : String
        }

        type Domain = hasId & hasName

        const domain: Domain = {
            id : "1",
            name : "Ammar"
        }

        console.info(domain)
    });

    it('should support type assertions', () => {
        const person: any = {
            name: "Ammar",
            age : 21
        }

        const person2: Person = person as Person

        console.info(person2)
    });
})