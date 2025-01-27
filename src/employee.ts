export interface Employee {
    id : String,
    name : String,
    division : String
}

export interface Manager extends Employee {
    numberOfEmployees : number
}