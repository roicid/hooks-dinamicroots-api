import React , {useState, useEffect} from 'react'; 
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems()
   
  }, []);

  const [items , setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products?limit=10');
    const items = await data.json() 
   
    setItems(items) 
    console.log(items);
  }


  return (
    <div className="shop">
    <div className="shop-title">
      <h1 > SHOP </h1>
      </div>
      <div className="shop-p">
      <p> Please select an item to see more infomation </p>
      </div>
     
      {items.map(item => (

        <h1 key={item.id}> 
        <Link to={`/shop/${item.id}`}>
        {item.title} 
        </Link> 
        </h1>
        
      ))}


    </div>
  );
}

export default Shop;
