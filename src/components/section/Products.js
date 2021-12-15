import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'


export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
       
        
        return (
            
            <div className="product">
              
                
                {
                products.map(product =>(
                    
                    <div className="card" key={product._id}>
                        
                            <img src={product.src} alt=""style={{backgroundColor:product.colors}}/>
                            
                            
                        
                        <div className="content">
                            <h3>
                                {product.title}
                            </h3>
                            
                            <p>{product.description}</p>
                            <span>${product.price}</span>
                            <Link to={"/Cart"}><button onClick={()=> addCart(product._id)}>ADD TO CART</button></Link>
                        </div>
                    </div>
                ))
            }
                
            
            </div>
                
               
           
        )
    }
}

export default Products