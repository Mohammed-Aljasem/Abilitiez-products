import React,{useState, useEffect} from 'react';
import RecipeReviewCard from './card'
import '../App.css';
import axios from 'axios';



export default function NestedGrid() {
  const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('./data/products.json')
        .then(response => {
            console.log(response)
            setProducts(response.data)
        })
    },[])


    const listItems = products.map((x) =>
    // Correct! Key should be specified inside the array.
    <RecipeReviewCard index={x.product_id} title={x.name} price={x.price}  description={x.description} stock={x.stock_amount}/>
  );

  return (
    <div className="card-container">

{listItems}
     
    </div>
  );
}
