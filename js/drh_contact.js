import _DrhComponent from "./_drh_component.js";

export default class DrhContact extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          width: 100%;
          display: flex;
          position: relative;
          background: white;
        }

        .wrap {
          opacity: 1;
          transition: opacity 0.25s ease;
        }

        :host(.fadeout) .wrap { opacity: 0; }

        #contact-wrap {
          display: flex;
          flex-direction: column;
          margin-top: 1.5em;
          min-height: 15em;
        }

        #contact-social {
          width: 100%;
          box-sizing: border-box;
          display: flex;
          order: 2;
          padding: 0;
          margin: 1em 0 1em 0;
        }

        :host(.sent) #contact-social {
          width: 100%;
          border: none;
          padding: 0;
          margin: 0;
        }

        form { 
          order: 1;
          width: 100%; 
          display: flex;
          opacity: 1;
          flex-direction: column;
          transition: opacity 0.25s ease;
          padding: 1em 0 2em 0;
        }

        form.hide { display: none; }

        label {
          margin: 0;
          padding: 0 0 0 0;
          color: var(--color-label);
        }

        label,
        input,
        textarea { 
          overflow: hidden;
          width: 100%; 
        }

        input { 
          padding: 1em 0 0.5em 0;
          margin-bottom: 0;
        } 

        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active { -webkit-box-shadow: 0 0 0 30px white inset !important; }      

        input, textarea {
          border: none;
          outline: none;
          background: #f6f6f6;
          background: transparent;
          padding: 1em 0 0.5em 0;
          border-bottom: 1px solid var(--color-border);
        }

        input::placeholder, 
        textarea::placeholder {
          color: #b5b5b5;
        }

        input:hover::placeholder, 
        textarea:hover::placeholder {
          color: #9b9b9b;
        }

        .nope { 
          width: 0;
          height: 0; 
          padding: 0;
          margin: 0;
        }

        textarea { 
          padding: 0;
          overflow-x: hidden;
          overflow-y: auto;        
          min-height: 1.75em;
          max-height: 25em;
          flex-grow: 1;
        }

        .textarea-wrap { 
          display: grid; 
          margin: 1em 0 1.25em 0;
        }

        .textarea-wrap::after {
          content: attr(data-replicated-value) " ";
          white-space: pre-wrap;
          visibility: hidden;
        }

        .textarea-wrap > textarea {
          resize: none;
          overflow: hidden;
        }

        .textarea-wrap > textarea,
        .textarea-wrap::after {
          grid-area: 1 / 1 / 2 / 2;
        }      

        button {
          align-self: start;
          margin-top: 0.5em;
          background: gray;
          color: #b5b5b5;
          height: 3.5em;
          width: 12em;
          pointer-events: none;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);        
        }

        button svg {
          margin-top: -0.1em;
          margin-left: 0.5em;
          width: 1.25em;
          stroke-width: 1;
          stroke: #b5b5b5;
          fill: #b5b5b5;
        }

        button.ok {
          pointer-events: all;
          cursor: pointer;
          color: white;
          font-weight: bold;
        }

        button.ok svg { 
          fill: white; 
          stroke-width: 2.5;
          stroke: white;
        }

        button.ok:hover { 
          color: gray;
          background: yellow; 
          transform: scale(1.05); 
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);
        }

        button.ok:hover svg { 
          fill: gray;
          stroke: gray;  
        }

        #error {
          height: 10px;
          font-size: 8px;
          font-weight: bold;
          color: red;
          margin-bottom: 2.5em;
        }

        .error-text { 
          font-size: 12px;
          line-height: 12px;
          font-weight: bold;
        }

        @media (min-width: 1024px) {
          .mobile-only { display: none; }
        }

        @media (min-width: 1200px) {
          #contact-wrap { flex-direction: row; }

          #contact-social {
            order: 1;
            width: 40%;
            border-right: 1px solid var(--color-border);
            padding-right: 3em;
            margin: 0 3em 0 0;
          }

          form { 
            order: 2;
            width: 60%; 
          }
        }        
      </style>

      <div class="wrap">
        <div class="content">
          <h2>Let's Get In Touch</h2>
          <p id="text">
            I'm always open to discuss new projects, creative collaborations, or opportunities to solve interesting problems.
            <br class="mobile-only"><br class="mobile-only">
            Maybe we can create something amazing together? Fill out the form below and I will get back to you.
          </p>
          <div id="contact-wrap">
            <div id="contact-social">
              <drh-social></drh-social>
            </div>
            <form>
              <label>Email Address</label>
              <input id="email" name="email" type="email" autocomplete="email" placeholder="tell me who you are" />
              <p id="error"></p>
              <label class="nope">Subject</label>
              <input id="subject" name="subject" type="text" class="nope" placeholder="nope" />
              <label>Enter Your Message</label>
              <div class="textarea-wrap">
                <textarea id="message" name="message" placeholder="what do you want to talk about?" rows="1"></textarea>
              </div>
              <button>
                SEND MESSAGE
                <svg viewBox="0 0 75.294 75.294" xml:space="preserve"><g>
                  <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
                    c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
                    H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
                    c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
                    c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
                    c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
                    c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"/>
                  </g>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    `);
  }

  #title = null;
  #text = null;
  #social = null;
  #form = null;
  #error = null;
  #button = null;
  #email = null;
  #subject = null;
  #message = null;
  #sent = false;

  connectedCallback() {
    this.#title = this.query("h2");
    this.#text = this.query("#text");
    this.#social = this.query("#contact-social");
    this.#form = this.query("form");
    this.#sent = this.getAttribute("sent");
    if (this.#sent && false) {
      this.classList.add("sent");
      this.query("drh-social").classList.add("inline");
      this.#form.remove();
      this.#form = null;
      this.#title.innerText = "Message Sent";
      this.#text.innerHTML = "Thanks for reaching out! Your message has been sent. I will get back to you as soon as I can."; 
    } else {
      this.#error = this.query("#error");
      this.#button = this.query("button");
      this.#button.onclick = (e) => this.#submit(e);
      this.#email = this.query("#email");
      this.#email.addEventListener('input', () => {
        this.#validate()
        this.#error.innerText = "";
      });
      this.#email.addEventListener('blur', () => this.#validateEmail());
      this.#subject = this.query("#subject");
      this.#message = this.query("#message");
      this.#message.addEventListener('input', () => {
        this.#message.parentNode.dataset.replicatedValue = this.#message.value;;
        this.#validate();
      });
    }
  }

  #validate() {
    if (!this.#email.value || !this.#message.value || this.#error.innerText.length) this.#button.classList.remove("ok");
    else this.#button.classList.add("ok");
  }

  #validateEmail() {
    const email = this.#email.value;
    var re = /\S+@\S+\.\S+/;
    if (re.test(email)) this.#error.innerText = "";
    else this.#error.innerText = "you need to enter a real email address so I can message you back"
  }

  #submit(e) {
    e.preventDefault();
    if (this.#error.innerText.length) return;
    this.query("form").classList.add("hide");
    document.querySelector("drh-gradient").scroll();
    const spinner = document.querySelector("drh-spinner");
    spinner.show();
    fetch("content/_contact.php", {
      method: "POST",
      body: JSON.stringify({
        email: this.#email.value,
        subject: this.#subject.value,
        message: this.#message.value
      }),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((response) => response.json())
    .then((json) => {
      setTimeout(() =>{
        spinner.hide();
        if (json.message == "success") return this.#success();
        this.#title.innerText = "Uh Oh. Something Went Wrong :(";
        this.#text.innerHTML = "There was a problem sending your message. Please try again later.";
        this.#form.classList.remove("hide");
        this.#sent = false;
      });        
    });    
  }

  #success() {
    this.classList.add("fadeout");
    setTimeout(() => {
      this.classList.add("sent");
      this.query("drh-social").classList.add("inline");
      this.#title.innerText = "Email Sent Successfully";
      this.#text.innerText = "Thanks for reaching out! Your message has been sent. I will get back to you as soon as I can.";
      this.#sent = true;
      this.classList.remove("fadeout");
      document.querySelector("drh-gradient").scroll();
    }, 250);
  }

}

customElements.define("drh-contact", DrhContact);
