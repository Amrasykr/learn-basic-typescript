export type Id = string | number

export type Category = {
    id : Id,
    name : String,
    description? : String
}

export type Product = {
    id : Id,
    name : String,
    price : Number,
    category : Category,
    description? : String
}