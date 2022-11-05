import {MouseEventHandler} from "react";

export interface ButtonObj {
    name:string,
    image:string,
    desc:string,
    id:number,
    price: number,
    add?: MouseEventHandler
}


export interface OrderObj {
    name:string,
    id: number,
    price: number,
    count: number,
    del?: MouseEventHandler
}