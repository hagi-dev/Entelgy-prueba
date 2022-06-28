class User extends HTMLElement {
    constructor() {
      super();
    }
    static get observedAttributes() {
      return ["first_name", "last_name", "email", "avatar","idd"];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
      if (attr === "first_name") {
        this.first_name = newVal;
      }
      if (attr === "last_name") {
        this.last_name = newVal;
      }
      if (attr === "email") {
        this.email = newVal;
      }
      if (attr === "avatar") {
        this.avatar = newVal;
      }
      if (attr === "idd") {
        this.idd = newVal;
      }
    }
    cambio(e){
        console.log(e)
    }
    getTemplate() {
      const template = document.createElement("template");
      template.innerHTML = `
            <section class="user-card" id="${this.idd}" onclick="handleClickOpenModal(${this.idd})">
            <img src=${this.avatar}>
            <div class="user-card__decoration"></div>
              <div class="user-card__content">
                  <h2>
                  ${this.first_name}
                  </h2>
                  <h3>
                  ${this.last_name}
                  </h3>
                  <a>
                  ${this.email}
                  </a>
              </div>
            </section>
            ${this.getStyles()}
          `;
      return template;
    }
    getStyles() {
      return `
          <style>
            .user-card{
                width: 250px;
                height: 270px;
                background: rgb(16,29,66);
                background: linear-gradient(45deg, rgba(16,29,66,1) 0%, rgba(35,46,209,1) 100%);
                margin: 15px;
                padding: 20px;
                padding-top: 20px;
                box-sizing:border-box;
                overflow: hidden;
                display:flex;
                flex-wrap:wrap;
                justify-content: center;
                cursor: pointer;
                border-radius: 10px;
                position:relative;
                box-shadow: 0px 0px 6px 1px rgba(101, 100, 219, 1);
            }

            .user-card .user-card__decoration{
                width:15px;
                height:15px;
                border-radius:50%;
                position: absolute;
                background: #0D1317;
                top: 5%;
                right: 5%;
                border: 3px solid rgba(255,255,255,0.5);
            }
            .user-card .user-card__content{
                width:100%;
                text-align: center;
                font-family: "mulish";
                margin-top: 5%;
                padding: 3%;
                background: rgba(0,0,0,0.5);
                border-radius:10px;
            }
            .user-card .user-card__content h2{
                width:100%;
                color: white;
                font-size: 1.2rem;
                letter-spacing: 2px;
                opacity: 0;
                
            }
            .user-card .user-card__content h3{
                width:100%;
                font-size: 1rem;
                color: #89D2DC;
                margin-bottom: 5%;
                opacity: 0;
            }
            .user-card .user-card__content a{
                width:100%;
                text-decoration: none;
                font-size: 0.87rem;
                color: white;
                font-weight:200;
                cursor: pointer;
                margin.top: 2%;
            }
            .user-card img{
                width: 220px;
                height: 220px;
                border-radius: 50%;
                transition: all 0.8s;
            }

            .user-card:hover{
                padding-top: 20px;
            }
            .user-card:hover img{
                width: 150px;
                height: 150px;
                border-radius: 50%;  
            }
            .user-card:hover h2{
                opacity: 1;
            }
            .user-card:hover h3{
                opacity: 1;
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
  
  customElements.define("user-card", User);
  