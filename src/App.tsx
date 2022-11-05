import React, {useState} from 'react';
import './App.css';
import {ButtonObj, OrderObj} from "./types";
import Botled_juice from './assets/Botled_juice.png';
import Fresh_juice from './assets/Fresh_juice.png';
import Milk from './assets/Milk.png';
import Smoothie from './assets/Smoothie.png';
import Yogurt from './assets/Yogurt.png';
import Veg_smoothie from './assets/Veg_smoothie.png';
import Menu from "./Components/Menu/Menu";
import Order from "./Components/Order/Order";


const MENU: ButtonObj[] = [
  {name: 'Bottle of Juice' , image: Botled_juice, id:1 , desc:'Bottle of delicious juice' , price: 60},
  {name: 'Fresh juice' , image: Fresh_juice, id:2 , desc:'Cup of Fresh juice' , price: 80},
  {name: 'Milk' , image: Milk, id:3 , desc:'Cup of Milk ' , price: 50},
  {name: 'Smoothie' , image: Smoothie, id:4 , desc:'Smoothies from berries' , price: 120},
  {name: 'Yogurt' , image: Yogurt, id:5 , desc:'Fresh and homemade yogurt' , price: 100},
  {name: 'VegSmoothie' , image: Veg_smoothie, id:6 , desc:'Vegetable smoothie ' , price: 70}
]

function App() {
   const [order, setOrder] = useState<OrderObj[]>([
     {name: 'Bottle of Juice' , count: 0,  id:1 , price: 60},
     {name: 'Fresh juice' ,  count: 0, id:2 , price: 80},
     {name: 'Milk' ,  count: 0, id:3 , price: 50},
     {name: 'Smoothie' ,  count: 0, id:4 , price: 120},
     {name: 'Yogurt' ,  count: 0, id:5 , price: 100},
     {name: 'VegSmoothie' ,  count: 0, id:6 , price: 70},
   ]);

    const addOrder = (index:number) => {
        setOrder(prev => prev.map(item => {
                if (item.id === index){
                    return{
                        ...item,
                        count: item.count++
                    }
                }
                return item
            })
        )}

    const delOrder = (index:number) => {
        setOrder(prev => prev.map(item => {
                if (item.id === index){
                    return{
                        ...item,
                        count: 0
                    }
                }
                return item
            })
        )}

   const PropsForBtns = () => {
        const menuCopy = [...MENU]
       menuCopy.map((item, index) => {
            menuCopy[index].add = () => addOrder(item.id)
       }
       )
       return menuCopy
   }

    const PropsForOrder = () => {
        const orderCopy = [...order]
        orderCopy.map((item, index) => {
            orderCopy[index].del = () => delOrder(item.id)
        })
        return orderCopy
    }



  return (
    <div className="App">
      <Menu props={PropsForBtns()}/>
        <Order props={PropsForOrder()}/>
    </div>
  );
}

export default App;
