import {customer, CustomerType} from "../src/enum";

describe('Enum', () => {
    it('should be enum', () => {
        const customer: customer = {
            id : "1",
            name: "Ammar",
            type : CustomerType.GOLD
        }

        console.info(customer)
    });
})