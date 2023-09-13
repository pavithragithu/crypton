import "./hero.css"


function Hero (){
    return(
        <>
        <div className="container">
            <div className="row hero">
                <div className="col-md-6 ">
                    <div className="text">
                    <h1>Slick. Modern.</h1>
                      <h1>   Awesome.</h1>
                    <h2>50% off</h2>
                    </div>
                <div style={{textAlign:"center"}}>
                <button className="btn btn-dark" style={{marginTop:"5%",textAlign:"center"}}>  shop collection</button>
                </div>
                </div>
                <div className="col-md-6">
                   
                   <img src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/hero.png" className="img-fluid" alt=""/>
                </div>

            </div>

        </div>
        </>
    )
}
export default Hero