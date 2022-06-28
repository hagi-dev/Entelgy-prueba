class Modal extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
      return ["name", "lastname", "email", "image"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "name") {
        this.name = newVal;
      }
      if (attr === "lastname") {
        this.lastname = newVal;
      }
      if (attr === "email") {
        this.email = newVal;
      }
      if (attr === "image") {
        this.image = newVal;
      }
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
            <section class="overlay">
              <div class="modal">
                <div>
                    <h2>
                    ${this.name}
                    </h2>
                    <h3>
                    ${this.lastname}
                    </h3>
                    <h4>
                    ${this.email}
                    </h4>
                </div>
                <img src=${this.image}/>
              </div>
            </section>
            ${this.getStyles()}
          `;
      return template;
    }
    getStyles() {
      return `
          <style>
          .overlay{
              width:100vw;
              height:100vh;
              z-index:999;
          }
          .modal{

          }
          .user-card{
              background: blue
          }
              .user-card{
                  margin: 15px;
              }
              h2 {
              color: red;
              }
              img{
                  width:100px;
              }
          </style>
          `;
    }
    render() {
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
      this.render();
    }
  }
  
  customElements.define("modal-user", Modal);