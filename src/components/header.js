class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
       <!--header section start-->
        <header class="main-header w-100 z-10">
            <nav class="navbar navbar-expand-xl navbar-light sticky-header">
                <div class="container d-flex align-items-center justify-content-lg-between position-relative">
                    <a href="index.html" class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
                        <img src="assets/img2/logo-white.png" alt="logo" class="img-fluid logo-white" style="max-height: 40px;" />
                        <img src="assets/img2/logo-color.png" alt="logo" class="img-fluid logo-color" style="max-height: 40px;" />
                        <span class="logo-white" style="color: #323a9e;">Esos</span>
                        <span class="logo-color" style="color: #323a9e;">Esos</span>
                    </a>

                    <a class="navbar-toggler position-absolute right-0 border-0" href="#offcanvasWithBackdrop" role="button">
                        <span
                  class="far fa-bars"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBackdrop"
                  aria-controls="offcanvasWithBackdrop"
                ></span>
                    </a>
                    <div class="clearfix"></div>
                    <div class="collapse navbar-collapse justify-content-center">
                        <ul class="nav col-12 col-md-auto justify-content-center main-menu">
                            <li><a href="index.html" class="nav-link">Home</a></li>
                        
                            <li><a href="services.html" class="nav-link">Services</a></li>
                           
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
                                <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                    <div class="dropdown-grid rounded-custom width-full">
                                        <div class="dropdown-grid-item">
                                            <h6 class="drop-heading">Useful Links</h6>
                                            <a href="about-us.html" class="dropdown-link px-0">
                                                <span class="me-2"><i class="far fa-fingerprint"></i></span>
                                                <div class="drop-title">About Us</div>
                                            </a>
                                            <a href="contact-us.html" class="dropdown-link px-0">
                                                <span class="me-2"
                              ><i class="far fa-address-book"></i
                            ></span>
                                                <div class="drop-title">Contact Us</div>
                                            </a>
                                            <a href="services.html" class="dropdown-link">
                                                <span class="me-2"><i class="far fa-code-branch"></i></span>
                                                <div class="drop-title">Services</div>
                                            </a>
                                        </div>
                                        <div class="dropdown-grid-item radius-right-side bg-light">
                                            <h6 class="drop-heading">Utility Pages</h6>
                                            <a href="support.html" class="dropdown-link">
                                                <span class="me-2"><i class="far fa-life-ring"></i></span>
                                                <div class="drop-title">Help Center</div>
                                            </a>
                                            <a href="support-single.html" class="dropdown-link">
                                                <span class="me-2"><i class="far fa-headset"></i></span>
                                                <div class="drop-title">Help Details</div>
                                            </a>
                                            <a href="request-demo.html" class="dropdown-link">
                                                <span class="me-2"><i class="far fa-laptop-code"></i></span>
                                                <div class="drop-title">Request for Demo</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
                        <a href="request-demo.html" class="btn btn-primary">Get Started</a>
                    </div>
                </div>
            </nav>
            <!--offcanvas menu start-->
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop">
                <div class="offcanvas-header d-flex align-items-center mt-4">
                    <a href="index.html" class="d-flex align-items-center mb-md-0 text-decoration-none">
                        <img src="assets/img/logo-color.png" alt="logo" class="img-fluid ps-2" />
                    </a>
                    <button type="button" class="close-btn text-danger" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class="far fa-close"></i>
                    </button>
                </div>
                <div class="offcanvas-body">
                    <ul class="nav col-12 col-md-auto justify-content-center main-menu">
                        <li><a href="index.html" class="nav-link">Home</a></li>
                     
                     <li><a href="services.html" class="nav-link">Services</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
                            <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                <div class="dropdown-grid rounded-custom width-full">
                                    <div class="dropdown-grid-item">
                                        <h6 class="drop-heading">Useful Links</h6>
                                        <a href="about-us.html" class="dropdown-link px-0">
                                            <span class="me-2"><i class="far fa-fingerprint"></i></span>
                                            <div class="drop-title">About Us</div>
                                        </a>
                                        <a href="contact-us.html" class="dropdown-link px-0">
                                            <span class="me-2"><i class="far fa-address-book"></i></span>
                                            <div class="drop-title">Contact Us</div>
                                        </a>
                                        <a href="services.html" class="dropdown-link">
                                            <span class="me-2"><i class="far fa-code-branch"></i></span>
                                            <div class="drop-title">Services</div>
                                        </a>
                                    </div>
                                    <div class="dropdown-grid-item radius-right-side bg-light">
                                        <h6 class="drop-heading">Utility Pages</h6>
                                        <a href="support.html" class="dropdown-link">
                                            <span class="me-2"><i class="far fa-life-ring"></i></span>
                                            <div class="drop-title">Help Center</div>
                                        </a>
                                        <a href="support-single.html" class="dropdown-link">
                                            <span class="me-2"><i class="far fa-headset"></i></span>
                                            <div class="drop-title">Help Details</div>
                                        </a>
                                        <a href="request-demo.html" class="dropdown-link">
                                            <span class="me-2"><i class="far fa-laptop-code"></i></span>
                                            <div class="drop-title">Request for Demo</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="action-btns mt-4 ps-3">
                        <a href="request-demo.html" class="btn btn-primary">Get Started</a>
                    </div>
                </div>
            </div>
            <!--offcanvas menu end-->
        </header>
        <!--header section end-->


          `
    }
  }
  
 customElements.define('main-header', Header);
 
