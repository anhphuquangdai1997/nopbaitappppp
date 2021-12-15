import React, { Component } from 'react'
import {DataContext} from '../Context'
import Deletess from '../svg/trash.png'
import Plus from '../svg/plus.png'
import Minus from '../svg/minus.png'

import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Giỏ hàng trống</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <div className='top'>
                                    <p>Your Cart</p>
                                    <span><h3> ${total}</h3></span>
                                </div>
                                <div className='main'>
                                    <div className='right'><img src={item.src} alt="" width="150" height="150" id="anh" style={{backgroundColor:item.colors}}/></div>
                                    
                                    <div className="box">
                                        <div className="row">
                                            <h2>{item.title}</h2>
                                            <span>${item.price * item.count}</span>
                                            
                                        </div>
                                    
                                        <div className="amount">
                                            <button className="count" onClick={() => reduction(item._id)}><img src={Minus} alt="" width="20" height="20"/></button>
                                            <button style={{backgroundColor:'white'}}>{item.count}</button>
                                            <button className="count" onClick={() => increase(item._id)}><img src={Plus} alt="" width="20" height="20"/></button>
                                            <button className="delete" onClick={() => removeProduct(item._id)} style={{backgroundColor:'yellow'}}><img src={Deletess} alt="" width="30"/></button>
                                        </div>
                                        
                                    </div>
                                    
                                   
                                </div>
                                

                                
                            </div>
                           
                        ))
                    }
                    
                   
                </>
                )
            }
        }
}

export default Cart
