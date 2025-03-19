import _DrhComponent from "./_drh_component.js";

export default class DrhNavbar extends _DrhComponent {

  #sub = false;
  #main = null;

  constructor() { 
    super(`
      <style>
        :host {
          position: fixed;
          z-index: 999;
          top: 0;
          left: 0;
          width: 100vw;
          height: 3em;
          padding: 0.5em 0 0.5em 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          transition: background 1s ease;
          opacity: 0;
          animation: 0.25s ease 0.25s forwards fade;
        }

        @keyframes fade { 100% { opacity: 1; } }

        :host(.scroll) { 
          background: white; 
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);
        }

        ul {
          list-style :none;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 0;
          margin: 0 0 0 -0.5em;
          width: calc(100vw - 2em);
          max-width: var(--max-width);
        }

        li { 
          padding:  0 25px 0 25px;
          text-align: center; 
          position: relative;
          border-right: 1px solid white;
        }

        li:first-of-type,
        li:last-of-type { border: none; } 

        li:first-of-type { padding-left: 0; }

        li:last-of-type { padding-right: 0; }

        a {
          display: block;
          font-size: 17.5px;
          font-weight: bold;
          font-family: var(--font-title);;
          color: white;
          text-decoration: none;
          text-shadow: 0px 0px 10px rgb(0 0 0 / 15%);
          transition: all 0.5s ease;
        }

        :host(.scroll) a {
          text-shadow: none;
          color: var(--color-title);
        }

        #home {
          display: flex;
          align-items: center;
          flex-grow: 1;
        }

        #home a { font-size: 20px; }

        #home a drh-icon { 
          width: 1.5em;
          height: 1.5em;
          transform: translateY(-0.15em);
          float: left;
        }

        #home a span { 
          pointer-events: none;
          float: left;
          margin: 0 0 0 0.25em;
          display: none;
          opacity: 0;
        }
        
        :host(.scroll) li { border-color: #e8e8e8; } 

        :host(.scroll) #home a span { 
          pointer-events: all;
          opacity: 1; 
        }

        @media (min-width: 768px) {
          :host { height: 5em; }

          a {
            padding: 0;
            margin: 0;
            border: none;
            font-size: 25px;
          }

          #home a { font-size: 35px; }

          :host(.scroll) #home a span { display: block; }
        }
      </style>

      <ul>
        <li id="home"><a href="index.php" aria-label="Go to home page"><drh-icon></drh-icon><span>Dennis Hoskins</span></a></li>
        <li><a href="work.php">Work</a></li>
        <li><a href="ugly.php">UGLY</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    `);
  }

  connectedCallback() {
    const url = window.location.href;
    if (url.includes(".php") && !url.includes("index.php")) this.#sub = true;
    this.#main = document.querySelector("main");
    this.#main.addEventListener("scroll", () => this.#scroll());
  }  

  #scroll() {
    if (this.#main.scrollTop > 150) {
      this.classList.add("scroll");
      this.query("drh-icon").classList.add("scroll");
      return;
    }
    this.classList.remove("scroll");
    this.query("drh-icon").classList.remove("scroll");
  }

}

customElements.define("drh-navbar", DrhNavbar);
