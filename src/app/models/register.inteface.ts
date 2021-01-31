export interface registerAccount{
    firstName:string,
    lastName:string,
    userName:string,
    email:string,
    phoneNumber:number,
    password:string,
    address: Address[]
}

export interface Address{
    country:string,
    county:string,
    city:string,
    street:string,
    number?:number,
    postalCode?:number,

}