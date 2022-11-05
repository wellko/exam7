import {OrderObj} from "../../types";
import React from "react";

interface OrderProps {
    props: OrderObj[]
}

const Order:React.FC<OrderProps> = (props) => {
    const orderCheck = props.props.filter(orders => orders.count > 0)
    const orderTrue = (
       orderCheck.map(item => (
            <div className='orderFlex' key={item.id}>
                <span>{item.name}</span>
                <div>
                    <span>x {item.count}</span>
                    <button className='deleteBtn' onClick={item.del}>X</button>
                </div>
            </div>
        )))

    if (orderCheck.length === 0 ){
        return (<div> You didnt ordered anything yet</div>)
    } else {
        return (
            <div>{orderTrue}</div>
        )}}

export default Order