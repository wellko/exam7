import {OrderObj} from "../../types";
import React from "react";
import Total from "../Total/Total";
import './Order.css';

interface OrderProps {
    props: OrderObj[]
}

const Order: React.FC<OrderProps> = (props) => {
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

    const price = () => {
        return orderCheck.reduce<number>((acc, oneOrder) => {
            if (oneOrder.name === 'Bottle of Juice') {
                return acc + (oneOrder.count * 60)
            } else if (oneOrder.name === 'Fresh juice') {
                return acc + (oneOrder.count * 80)
            } else if (oneOrder.name === 'Milk') {
                return acc + (oneOrder.count * 50)
            } else if (oneOrder.name === 'Smoothie') {
                return acc + (oneOrder.count * 120)
            } else if (oneOrder.name === 'Yogurt') {
                return acc + (oneOrder.count * 100)
            }else if (oneOrder.name === 'VegSmoothie') {
                return acc + (oneOrder.count * 70)
            }
            return acc
        }, 0)
    }


    if (orderCheck.length === 0) {
        return (<div className='OrderInner'> You didnt ordered anything yet</div>)
    } else {
        return (
            <div className='OrderInner'>{orderTrue}
                <Total count={price()}/>
            </div>
        )
    }
}

export default Order