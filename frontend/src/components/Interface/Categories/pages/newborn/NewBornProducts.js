//import logo from './public/toddlersLogo.svg';
//import './assets/ui.module.css';
//import './assets/css/all.min.css';
import './assetsNewBorn/css/bootstrap.css';
import './assetsNewBorn/css/responsive.css';
//import './assets/css/ui.modules.css';
//import './Interface/'
import { useNavigate } from 'react-router-dom';

export function NewBorn() {
    let navigate= useNavigate()
  return (
    <div className="App">
     <header className="section-header">
        <section className="header-main border-bottom">
            <div className="container">
        <div className="row align-items-center">
           
                <img width="140px" src="/toddLaranja.svg" />
           
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
                                <a href="#">Sign in</a> |  
                                <a href="#" onClick={() => navigate(`/SignUp`)}> Register</a>
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
                <li className="breadcrumb-item active" aria-current="page">New Born</li>
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
                          <div className="custom-control-label">0 months  
                              <b className="badge badge-pill badge-light float-right">120</b>  </div>
                        </label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <div className="custom-control-label">1 month 
                              <b className="badge badge-pill badge-light float-right">15</b>  </div>
                        </label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <div className="custom-control-label">3 months
                              <b className="badge badge-pill badge-light float-right">2</b> </div>
                        </label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <div className="custom-control-label">6 months
                              <b className="badge badge-pill badge-light float-right">2</b> </div>
                        </label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <div className="custom-control-label">9 months 
                              <b className="badge badge-pill badge-light float-right">1</b>  </div>
                        </label>
                        <label className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" />
                          <div className="custom-control-label">1 year
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
                            <a href="#" className="title">Babygrow stripes</a>
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
                            <a href="#" className="title">Babygrow blue</a>
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
                            <a href="#" className="title">Babygrow pink</a>
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
                            <a href="#" className="title">Babygrow car</a>
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
                            <a href="#" className="title">Babygrow w/ bee</a>
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
                            <a href="#" className="title">Babygrow Batman</a>
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
                            <a href="#" className="title">Babygrow bear</a>
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
                            <a href="#" className="title">Babygrow w/ snowman</a>
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


export default NewBorn;