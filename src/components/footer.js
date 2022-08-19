class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
        `
          <!-- Footer -->
<h1> helo footer<h1>
  <!-- Footer -->
  
        `
      
    }
  }
  
  customElements.define('main-footer', Footer);