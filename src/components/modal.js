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
                <div class="modal_decoration"></div>
                <div class="modal__content">
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
                background: rgba(0,0,0,0.85);
                margin: 0 auto;
                flex-wrap:wrap;
                display:none !important;
                
            }
            .overlay.active{
                display:block !important;
            }
            .modal{
                background: white;
                width: 90%;
                max-width:600px;
                height: auto;
                position: relative;
                border-radius: 20px;
                margin: 0 auto;
                margin-top: 5%;     
            }
            .modal .modal__close{
                position: absolute;
                background: rgba(255,255,255,0.3);
                width: 5%;
                height:5%;
                color: rgba(0,0,0,0.85);
                border-radius: 50%;
                transition: all 0.3s;
                z-index:100;
                top: 2%;
                font-size: 1.5rem;
                cursor: pointer;
                right: 3%;
                border: none;
            }
            .modal_decoration{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                z-index: 9;
                background: rgb(16,29,66);
                background: linear-gradient(180deg, rgba(16,29,66,0) 65%, rgba(0,0,0,1) 100%);
            }
            @media screen and(max-width:700px){
                .modal .modal__close{
                    width: 8%;
                    height:8%;
                }
            }
            .modal modal__close:focus{
                outline: none;
            }
            .modal .modal__content{
                position: absolute;
                z-index: 99;
                left: 5%;
                bottom: 5%;
                font-family:"mulish";
            }
            .modal .modal__content h2{
                width:100%;
                color: white;
                font-size: 1.8rem;
                letter-spacing: 2px;
                
            }
            .modal .modal__content h3{
                width:100%;
                font-size: 1.5rem;
                color: #89D2DC;
                margin-bottom: 10%;
            }
            .modal .modal__content h4{
                width:100%;
                text-decoration: none;
                font-size: 1.2rem;
                color: white;
                font-weight:200;
            }
            .modal img{
                width: 100%;
                max-width: 600px;
                height: auto;
                margin: 0 auto;
                border-radius: 20px;
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