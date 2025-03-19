import _DrhComponent from "./_drh_component.js";

export default class DrhTypewriter extends _DrhComponent {

  #cursor = "<span class='cursor'></span>";
  #delay = async (delay) => await new Promise(resolve => setTimeout(resolve, delay));

  constructor() { 
    super(`
      <style>
        :host {
          position: absolute;
          z-index: 100;
          bottom: 43.5vh;
          width: 100%;
          height: 100%;
          display: flex;
          pointer-events: none;
          justify-content: center;
          transform: translateZ(0.15px) scale(0.85); 
        }

        :host(.ios) { 
          bottom: 50vh;
          transform: scale(1); 
        }

        :host(.main) { bottom: 5em; }

        #trypewriter {
          width: calc(100% - 2em);
          max-width: var(--max-width);
          position: absolute;
          bottom: 0;
        }

        h1 {
          font-family: var(--font-title);;
          font-size: var(--font-size-subhero);
          line-height: var(--font-size-subhero-space);
          margin: 0;
          padding-bottom: 5px;
          font-weight: bold;
          color: white;
          float: left;
          position: relative;
          text-shadow: 0px 0px 10px rgb(0 0 0 / 15%);
          opacity: 0;
          text-transform: uppercase;
        }

        :host(.main) h1 {
          font-size: var(--font-size-hero);
          line-height: var(--font-size-hero-space);
        }

        hr {
          border: 2px solid white;
          margin: 0;
          float: left;
          width: 100%;
          margin-bottom: 5px;
          text-shadow: 0px 0px 10px rgb(0 0 0 / 15%);
        }

        .cursor {
          display: inline-block;
          vertical-align: top;
          height: calc(var(--font-size-subhero) * 0.7);
          margin-top: calc(var(--font-size-subhero) * 0.05);
          margin-left: 5px;
          animation-timeline: auto;
          animation-range-start: normal;
          animation-range-end: normal;
          border-right: 3px solid white;
          display: inline-block;
          animation: 0.5s steps(2, start) 0s infinite normal none running cursor-blink;
          text-shadow: 0px 0px 10px rgb(0 0 0 / 15%);          
        }

        :host(.main) .cursor {
          height: calc(var(--font-size-hero) * 0.7);
          margin-top: calc(var(--font-size-hero) * 0.05);
        }

        @keyframes cursor-blink { 100% { display: none; } }

        a {
          color: white;
          font-weight: bold;
          text-decoration: none;
          font-family: var(--font-title);
          float: left;
          font-size: var(--font-size-med);
          pointer-events: all;
          text-shadow: 0px 0px 10px rgb(0 0 0 / 15%);
        }

        #message { 
          float: right; 
          display: flex;
          align-items: center;
        }

        #message a { align-self: end; }

        svg {
          fill: white;
          height: var(--font-size-large);
          margin-left: 0.5em;
          margin-top: -0.15em;
        }

        @media (min-width: 768px) {
          :host(.main) { bottom: 2.5em; }

          :host(.ios.main) { bottom: 5em; }
          
          a { font-size: var(--font-size-large); }
        }

        @media (min-width: 1024px) and (orientation: landscape) {
          :host(.ios) { bottom: 55vh; }
        }

        @media (min-width: 1200px) {
          :host { bottom: 48vh; }
        }
      </style>

      <div id="trypewriter">
        <h1></h1>
        <hr>
        <a href="index.php">DENNIS HOSKINS</a>
        <div id="message">
          <a href="#contact">MESSAGE ME</a>
          <svg viewBox="0 0 75.294 75.294" xml:space="preserve"><g><path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"/></g></svg>
        </div>
      </div>
    `);
  }

  connectedCallback() {
    const main = this.getAttribute("main");
    if (main) this.classList.add("main");
    const text = this.getAttribute("text");
    this.h1 = this.shadowRoot.querySelector("h1");
    this.h1.dataset.text = text;
    this.h1.innerHTML = this.#cursor;
    this.h1.style.opacity = 1;
    setTimeout(() => this.#type(), 1500);
  }

  async #type() {
    const lines = this.h1.dataset.text.split("<br>");
    let html = "";
    for (let m = 0, mm = lines.length; m < mm; m++) {
      const line = lines[m];
      for (let l = 0, ll = line.length; l < ll; l++) {
        const letter = line.charAt(l);
        await this.#delay(100);
        this.h1.innerHTML = html += letter
        if (l < ll - 1) this.h1.innerHTML += this.#cursor
      }
      if (m < mm - 1) html = this.h1.innerHTML += "<br> "
    }
    this.h1.innerHTML += this.#cursor      
  }

}

customElements.define("drh-typewriter", DrhTypewriter);
