class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

      <!-- header -->
      <h1> helo header<h1>
        <!-- header -->
          `
    }
  }
  
 customElements.define('main-header', Header);
 