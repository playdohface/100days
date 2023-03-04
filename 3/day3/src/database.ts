// here we will put the code that communicates with our backend. 
// for now just some Mock Data

import type { User, Product} from './types';


export function getUser(id = ""): User | null {
    for (let user of users) {
        if (user.id === id) {
            return user;
        } 
    }
    return null;
}

export function getProduct(id = "") {
    for (let product of products) {
        if (product.id===id) {
            return product;
        } 
    }
    return null;
}

const products:Product[] = [
    {
        "name" : "Salat",
        "id" : "1",
        "needsorder" : false,
        "price" : 400
    },
    {
        "name" : "Vegane Bolognese",
        "id" : "12",
        "needsorder" : true,
        "price" : 800
    },
    {
        "name" : "Apfelkompott",
        "id" : "10",
        "needsorder" : true,
        "price" : 300
    },
    {
        "name" : "Wirsingsalat",
        "id" : "3",
        "needsorder" : true,
        "price" : 700
    },
]

const users:User[] = [
    {
        "username" : "Peter",
        "id" : "1234",
        "orders" : ["12", "10"],
        "balance" : 1000
    },
    {
        "username" : "Paul",
        "id" : "4321",
        "orders" : ["12", "10"],
        "balance" : 0
    },
    {
        "username" : "Heike",
        "id" : "1111",
        "orders" : ["3"],
        "balance" : 12399
    },

]