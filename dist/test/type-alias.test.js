describe('Type Alias', () => {
    it('should be support in typescript', () => {
        const category = {
            id: 1,
            name: "electronic"
        };
        const product = {
            id: "1",
            name: "Samsung S25 Ultra",
            price: 30000000,
            category: category,
            description: "hp baru dari samsung thn 2025"
        };
        console.info(category);
        console.info(product);
    });
});
export {};
