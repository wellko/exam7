import {MouseEventHandler} from "react";

export interface ButtonObj {
    name:string,
    image:string,
    desc:string,
    id:number,
    price: number,
    add?: MouseEventHandler
}
