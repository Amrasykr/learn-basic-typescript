describe('Union', function () {
    it('should support in ts', () => {
        let sample: number | string | boolean = "ammar"
        console.info(sample)

        sample = true
        console.info(sample)

        sample = 21
        console.info(sample)
    });

    it('should be typof operator', () => {
        const process = (value: number | string | boolean) => {
            if (typeof value === "string") {
                return value.toUpperCase()
            } else if (typeof value === "number") {
                return value + 2
            } else{
                return !value
            }
        }

        expect(process("Ammar")).toBe("AMMAR")
        expect(process(20)).toBe(22)
        expect(process(true)).toBe(false)
    });
})