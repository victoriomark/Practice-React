import { useEffect, useState } from "react";

function App() {
  const [Items, SetItems] = useState([]);
  const[CountItem,SetCountItem] = useState(1)



  // declaring the usEffect
  useEffect(() => {
    //function for Api call
    const Product = async () => {
      const res = await fetch(`https://fakestoreapi.com/products?limit=${CountItem}`);
      const Item = await res.json();
      //Set the value of items to SetItems
      SetItems(Item);
    };
    Product();
  }, [CountItem]);
  const HandleIncrement = () =>{
    return SetCountItem(CountItem + 1)
 }
const HandleDecrement = () =>{
    CountItem > 1 ? SetCountItem(CountItem -1) : CountItem
}
   

  return (
    <>
       <div className="container-fluid d-flex flex-column   justify-content-center ">
        <div className="container d-flex  justify-content-center  align-items-center gap-3 p-3">
          <button onClick={HandleIncrement} className="btn btn-primary ">
           Increment Product
          </button>
          <button onClick={HandleDecrement} className="btn btn-warning ">
           Decrement Product
          </button>
        </div>
          <div className="row justify-content-center p-1 gap-1  ">
            {
              Items.map(({image,description,title,id,price}) =>{
                 return(
                    <>
                      <div key={id} className="card col-lg-2 col-md-5 col-md-2">
                           <img className="card-img-top" src={image} alt="" />
                            <div className="card-title">
                               {title}
                            </div>
                            <p className="text-secondary">{description}</p>
                            <div className="container d-flex justify-content-between align-items-center p-1  ">
                              <button className="btn btn-primary">
                                Add Cart
                              </button>
                              <p className="text-primary">${price}</p>  
                            </div>
                      </div>
                    </>
                 )
              })
            }
          </div>
       </div>
     
    </>
  );
}

export default App;



