class Modal extends HTMLElement {
    constructor() {
      super();
    }
    static get observedAttributes() {
      return ["name", "lastname", "email", "image"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "name") {
        this.name = newVal;
      }
      else if (attr === "lastname") {
        this.lastname = newVal;
      }
      else if (attr === "email") {
        this.email = newVal;
      }
      else if (attr === "image") {
        this.image = newVal;
      }
    }
    getTemplate() {
      const template = document.createElement("template");
      console.log("mos¿dal ", this.name);
      template.innerHTML = `
            <section class="overlay" id="overlay">
              <div class="modal">
                <button class="modal__close" onclick="handleClickCloseModal()">x</button>
                <div>
                    <h2>
                    Lindsay
                    </h2>
                    <h3>
                    Ferguson
                    </h3>
                    <h4>
                    lindsay.ferguson@reqres.in
                    </h4>
                </div>
                <img src="https://reqres.in/img/faces/8-image.jpg"/>
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
              position: absolute;
              top:0;
              display:none;
              background: rgba(0,0,0,0.85);
          }
          .overlay.active{
              display:block;
            }
          .modal{
            background: white;
          }
              .user-card{
              }
              h2 {

              }
              img{
                  width:100px;
              }
          </style>
          `;
    }
    render() {
      this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
      this.render();
    }
  }
  
  customElements.define("modal-user", Modal);