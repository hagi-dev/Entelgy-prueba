class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
    this._attachEventHandlers();
  }

  static get observedAttributes() {
    return ["visible", "name", "lastname", "email", "avatar"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "name" && this.shadowRoot) {
      this.shadowRoot.querySelector(".name").textContent = newValue;
      console.log(name);
    }
    if (name === "lastname" && this.shadowRoot) {
      this.shadowRoot.querySelector(".lastname").textContent = newValue;
      console.log(name);
    }
    if (name === "email" && this.shadowRoot) {
      this.shadowRoot.querySelector(".email").textContent = newValue;
      console.log(name);
    }
    if (name === "avatar" && this.shadowRoot) {
        this.shadowRoot.querySelector(".avatar").src=newValue;
        console.log("img",newValue);
      }
    if (name === "visible" && this.shadowRoot) {
      if (newValue === null) {
        this.shadowRoot.querySelector(".wrapper").classList.remove("visible");
      } else {
        this.shadowRoot.querySelector(".wrapper").classList.add("visible");
      }
    }
  }

  _attachEventHandlers() {
    const cancelButton = this.shadowRoot.querySelector(".cancel");
    cancelButton.addEventListener("click", (e) => {
      this.dispatchEvent(new CustomEvent("cancel"));
      this.removeAttribute("visible");
    });
  }
  _render() {
    const wrapperClass = this.visible ? "wrapper visible" : "wrapper";
    const container = document.createElement("div");
    container.innerHTML = `
        <style>
          .wrapper {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.85);
            opacity: 0;
            visibility: hidden;
            transform: scale(1.1);
            transition: visibility 0s linear .25s,opacity .25s 0s,transform .25s;
            z-index: 1;
          }
          .visible {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
            transition: visibility 0s linear 0s,opacity .25s 0s,transform .25s;
          }
          .modal{
            background: white;
            width: 90%;
            max-width:600px;
            box-shadow: 0px 0px 6px 1px rgba(101, 100, 219, 1);
            height: auto;
            position: relative;
            border-radius: 20px;
            margin: 0 auto;
            margin-top: 3%;     
        }
        .modal .cancel{
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
        @media only screen and (max-width:800px){
            .modal .cancel{
                width: 8%;
                height:8%;
            }
        }
        .modal .cancel:focus{
            outline: none;
        }
        .modal .content{
            position: absolute;
            z-index: 99;
            left: 5%;
            bottom: 5%;
            font-family:"mulish";
        }
        .modal .name{
            width:100%;
            color: white;
            font-size: 1.8rem;
            letter-spacing: 2px;
            
        }
        .modal .lastname{
            width:100%;
            font-size: 1.5rem;
            color: #89D2DC;
            margin-bottom: 10%;
        }
        .modal .email{
            width:100%;
            text-decoration: none;
            font-size: 1.2rem;
            color: white;
            font-weight:200;
        }
        .modal .avatar{
            width: 100%;
            max-width: 600px;
            height: auto;
            margin: 0 auto;
            border-radius: 20px;
        }
        </style>
        <div class='${wrapperClass}'>
          <div class='modal'>
            <div class="modal_decoration"></div>
            <div class='content'>
                <h2 class='name'>${this.name}</h2>
                <h3 class='lastname'>${this.lastname}</h3>
                <h4 class='email'>${this.email}</h4>
            </div>
            <img class='avatar' src=""/>
            <button class="cancel" >x</button>
          </div>
        </div>`;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(container);
  }
}
window.customElements.define("user-modal", Modal);
