function isAdult(age:number):boolean{
   return age>=18
}
console.log(isAdult(25));

type user={
    userName:string,
    email:string,
    address:{
        street:string,
        city:string,
        postalCode:number
    }
}

type EmployeeDetails={
    name:string
}

type Product={
    name:string,
    price:number
}

let data=[
    {name:"cofee Mug",price:20},
    {name:"notebook",price:15.50},
    {name:"cofee Mug",price:17.30}
]
function getTotal(data:Array<Product>):number{
    return data.reduce((acc,cv)=>acc+cv.price,0)
}


console.log(getTotal(data));
