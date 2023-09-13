
// import '.../node_modules/bootstrap/dist/css/bootstrap.css'
import './hero.css'
function Body(){
    return(
        <>
        <div className="container">
       <div  className="row d-flex m-4 ">
        {/* <div className="col-md-3"> */}
        <div className="col-md-3 card" >
  <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a.jpg" className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <p className="card-text">T-Shirt Name 5 </p>
    <a href="#" className="btn btn-primary">add cart</a>
  </div>
</div>
<div className="col-md-3 card" >
  <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-08-a.jpg" className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <p className="card-text">T-Shirt Name 7 </p>
    <a href="#" className="btn btn-primary">add cart</a>
  </div>
</div>
<div className="col-md-3 card" >
  <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-a.jpg" className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <p className="card-text">T-Shirt Name 3 </p>
    <a href="#" className="btn btn-primary">add cart</a>
  </div>
</div> 
<div class=" col-md-3 card " >
  <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-02-a.jpg" className="card-img-top img-fluid" alt="..."/>
  <div className="card-body">
    <p className="card-text">T-Shirt Name 4 </p>
    <a href="#" className="btn btn-primary">add cart</a>
  </div>
</div>
        </div>

       </div>
        {/* </div> */}
        
        </>
    )
}
export default Body