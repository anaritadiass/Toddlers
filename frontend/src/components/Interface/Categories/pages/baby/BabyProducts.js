//import logo from './logo.svg';
//import './assets/css/all.min.css';
import './assetsBaby/css/bootstrap.css';
import './assetsBaby/css/responsive.css';
//import './assets/css/ui.modules.css';
import { useNavigate } from 'react-router-dom'

function Baby() {
    let navigate= useNavigate()
  return (
    <div className="App">
     <header className="section-header">

        <section className="header-main border-bottom">
            <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-2 col-4">
            <img width="100px" src="/toddLaranja.svg" />
            </div>
            <div className="col-lg-6 col-sm-12">
                <form action="#" className="search">
                    <div className="input-group w-100">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                    </div>
                </form> 
            </div> 
            <div className="col-lg-4 col-sm-6 col-12">
                <div className="widgets-wrap float-md-right">
                    <div className="widget-header  mr-3">
                        <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
                        <span className="badge badge-pill badge-danger notify">0</span>
                    </div>
                    <div className="widget-header icontext">
                        <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user"></i></a>
                        <div className="text">
                            <span className="text-muted">Welcome, Leonardo!</span>
                            <div> 
                                <a href="#">Sign in</a> !
                                <a href="#"> Register</a>
                            </div>
                        </div>
                    </div>

                </div> 
            </div> 
        </div> 
            </div> 
        </section>
        </header> 



       
        <section className="section-pagetop bg">
        <div className="container">
            <h2 className="title-page">Category products</h2>
            <nav>
            <ol className="breadcrumb text-white">
                <li className="breadcrumb-item"><a href="#" onClick={() => navigate(`/`)}>Landing Page</a></li>
                <li className="breadcrumb-item active" aria-current="page">Recently added</li>
            </ol>  
            </nav>
        </div> 
        </section>
      
        <section className="section-content padding-y">
        <div className="container">

        <div className="row">
            <aside className="col-md-3">
                
        <div className="card">
            <article className="filter-group">
                <header className="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">Product type</h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_1">
                    <div className="card-body">
                        <form className="pb-3">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search" />
                          <div className="input-group-append">
                            <button className="btn btn-light" type="button"><i className="fa fa-search"></i></button>
                          </div>
                        </div>
                        </form>
                        
                        <ul className="list-menu">
                          <li><a href="#">Tshirts  </a></li>
                          <li><a href="#">Skirts </a></li>
                          <li><a href="#">Shoes  </a></li>
                          <li><a href="#">Jackets  </a></li>
                          <li><a href="#">Sweatshirts </a></li>
                        </ul>

                    </div> 
                </div>
            </article>
            <article className="filter-group">
                <header className="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">Age </h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_2">
                    <div className="card-body">
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <div className="custom-control-label">1 year
                              <b className="badge badge-pill badge-light float-right">30</b>  </div>
                        </label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <div className="custom-control-label">2 years
                              <b className="badge badge-pill badge-light float-right">30</b>  </div>
                        </label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <div className="custom-control-label">3 years
                              <b className="badge badge-pill badge-light float-right">30</b>  </div>
                        </label>
            </div> 
                </div>
            </article>  
        </div> 

            </aside> 
            <main className="col-md-9">


        <div className="row">
            <div className="col-md-4">
                <figure className="card card-product-grid">
                    <div className="img-wrap"> 
                        <span className="badge badge-danger"> NEW </span>
                        <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                        <img src="/assets/images/items/1.jpg" width="220" height="200"/>
                    </div> 
                    <figcaption className="info-wrap">
                        <div className="fix-height">
                            <a href="#" className="title">BabyGrow black and white</a>
                        </div>
                        <a href="#" className="btn btn-block btn-primary">Add to cart </a>
                    </figcaption>
                </figure>
            </div> 

            <div className="col-md-4">
                <figure className="card card-product-grid">
                    <div className="img-wrap">
                        <span className="badge badge-danger"> NEW </span> 
                        <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                        <img src="/assets/images/items/2.jpg" width="220" height="200"/>
                    </div>
                    <figcaption className="info-wrap">
                        <div className="fix-height">
                            <a href="#" className="title">Disney Beauty and the Beast Dress</a>
                        </div>
                        <a href="#" className="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div className="col-md-4">
                <figure className="card card-product-grid">
                    <div className="img-wrap">
                        <span className="badge badge-danger"> NEW </span>  
                        <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                        <img src="/assets/images/items/3.jpg" width="220" height="200"/>
                    </div> 
                    <figcaption className="info-wrap">
                        <div className="fix-height">
                            <a href="#" className="title">Multi-colored dress with drawings</a>
                        </div>
                        <a href="#" className="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div className="col-md-4">
                <figure className="card card-product-grid">
                    <div className="img-wrap">
                        <span className="badge badge-danger"> NEW </span>   
                        <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                        <img src="/assets/images/items/4.jpg" width="220" height="200"/>
                    </div> 
                    <figcaption className="info-wrap">
                        <div className="fix-height">
                            <a href="#" className="title">Sweatshirt green with a car</a>
                        </div>
                        <a href="#" className="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div className="col-md-4">
                <figure className="card card-product-grid">
                    <div className="img-wrap"> 
                        <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                        <img src="/assets/images/items/5.jpg" width="220" height="200"/>
                    </div> 
                    <figcaption className="info-wrap">
                        <div className="fix-height">
                            <a href="#" className="title">Sweatshirt Hello Kitty pink and blue</a>
                        </div>
                        <a href="#" className="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div className="col-md-4">
                <figure className="card card-product-grid">
                    <div className="img-wrap"> 
                        <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                        <img src="/assets/images/items/6.jpg" width="220" height="200"/>
                    </div> 
                    <figcaption className="info-wrap">
                        <div className="fix-height">
                            <a href="#" className="title">Sweatshirt pink with cat</a>
                        </div>
                        <a href="#" className="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div className="col-md-4">
                <figure className="card card-product-grid">
                    <div className="img-wrap"> 
                        <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                        <img src="/assets/images/items/7.jpg" width="220" height="200"/>
                    </div> 
                    <figcaption className="info-wrap">
                        <div className="fix-height">
                            <a href="#" className="title">Unisex baby fleece hat</a>
                        </div>
                        <a href="#" className="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 
            <div className="col-md-4">
                <figure className="card card-product-grid">
                    <div className="img-wrap"> 
                        <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                        <img src="/assets/images/items/9.jpg" width="220" height="200"/>
                    </div> 
                    <figcaption className="info-wrap">
                        <div className="fix-height">
                            <a href="#" className="title">Sweatshirt baby with airplanes</a>
                        </div>
                        <a href="#" className="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 
        </div> 


        <nav className="mt-4" aria-label="Page navigation sample">
          <ul className="pagination">
            <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>

            </main>

        </div>

        </div> 
        </section>
        
        <footer className="section-footer border-top padding-y">
            <div className="container">
                <p className="float-md-right"> 
                    &copy; Copyright 2021 All rights reserved
                </p>
                <p>
                    <a href="#">Terms and conditions</a>
                </p>
            </div>
        </footer>
       
     
    </div>
  );
}

export default Baby;
