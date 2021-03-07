import React , {useState, useEffect} from 'react'; 
import './App.css';


function ItemDetail ({match}) {
 
  useEffect(() => {
    fetchItem();
     //console.log("shop");
    //  console.log(match);
      
  }, []);

  const [item , setItem] = useState({});  


  const fetchItem = async () => {
      const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`); 
      const item = await fetchItem.json() ;
      setItem(item);
      console.log(item)
      
  };




  return (
    <div className="box-item">

        <div className="titleItem">
      <h1 >  {item.title} </h1>
      </div>
      <div className="photo">
      <img src={item.image} alt="item" />
      </div>
      <div className="itemDescription">
      <p > {item.description} </p>
      </div>
     
      </div>
        
      ) 


   
  
}

export default ItemDetail;
