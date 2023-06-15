class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">

        <div class="footer-top">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-lg-5 col-md-12 footer-info">
                        <a href="index.html" class="logo d-flex align-items-center">
                            <img src="assets/img2/logo.png" alt="">
                            <span>Esos</span>
                        </a>
                        <p>ESOS Technologies is an emerging India based Software Development and IT Solutions Providing Company providing solutions into a wide spectrum of technologies.
          </p>
                       <br/>
                       <div class="subscribe">
                       <form action="https://script.google.com/macros/s/AKfycbyaisrD8RytC_6bssdySdAtkqaJDXoOFtru4e4sZiwqJ0bu7Ap1gNUtdFs3ALdZDC7s/exec" method="post" class="newsletter-form position-relative d-block d-lg-flex d-md-flex subscribe-form" id="SubscribeFormData">
                        <input type="text" name="Subscribe" class="input-newsletter form-control me-2" placeholder="Enter your email" required="" autocomplete="off" id="inputData">
                        <input type="submit" onclick="subscribeText()" value="Subscribe" data-wait="Please wait..." class="btn btn-primary mt-3 mt-lg-0 mt-md-0" id="subscriptionData">
                 
                        <div class="text-center" style="flex: auto;">
                            <div class="loading">Loading</div>
                            <div class="error-message">An error has occurred. Please try again later.</div>
                            <div class="sent-message">Thank you for subscribing!</div>
                         </div>
                    </form>
</div>
                       
                        <div class="ratting-wrap mt-4">
                            <h6 class="mb-0">Connect With Us!</h6>
                            <ul class="list-unstyled rating-list list-inline mb-0">
                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                                <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>
                            </ul>
                        </div>

                        <div class="social-links mt-3">
                            <a href="https://www.facebook.com/esostechnologies" class="facebook"><i class="bi bi-facebook"></i></a>
                            <a href="https://twitter.com/EsosTech" class="twitter"><i class="bi bi-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/esostechnologies" class="linkedin"><i class="bi bi-linkedin"></i></a>
                            <a href="https://www.instagram.com/esostechnologies" class="instagram"><i class="bi bi-instagram"></i></a>
                            <a href="https://www.youtube.com/@esostechnologies" class="youtube"><i class="bi bi-youtube"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="about-us.html">About us</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="services.html">Services</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="contact-us.html">Terms of service</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="contact-us.html">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i class="bi bi-chevron-right"></i> <a href="services.html">Web Design</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="services.html">Web Development</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="services.html">Product Management</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="services.html">Marketing</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="services.html">Graphic Design</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>
                            Meerut, <br>INDIA, IN 250001 <br><br>
                            <strong>Phone:</strong><a href="tel:+918445661716" style="color:unset;"> +91  844-566-1716</a><br>
                            <strong>Email:</strong> <a href="mailto:contact@esos.in" style="color:unset;"> contact@esos.in</a><br>
                        </p>

                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="copyright">
                &copy; 2017-2022 | <strong><span> Esos Technologies </span></strong>| All Rights Reserved
            </div>
            <div class="credits">
                Designed by <a href="https://www.esos.in/">Esos</a>
            </div>
        </div>
    </footer>
    <!-- End Footer -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        `
      
    }
  }
  
  customElements.define('main-footer', Footer);
