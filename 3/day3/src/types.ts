export interface User {
    username:string,
    id:string,
    balance:number,
    orders:Array<string>
}

export interface Product {
    name: string,
    id: string,
    price: number,
    needsorder: boolean
}