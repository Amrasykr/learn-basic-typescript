export enum CustomerType {
    REGULAR = "Regular",
    GOLD = "Gold",
    PLATINUM = "Platinum"
}

export type customer = {
    id : String,
    name : String,
    type : CustomerType
}