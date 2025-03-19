import _DrhComponent from "./_drh_component.js";

export default class DrhSpinner extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
        }

        :host(.showing) {
          background: #a8a98e54;
          z-index: 9999;
          opacity: 1;
          backdrop-filter: blur(5px);
        }

        :host span { 
          position: absolute;
          z-index: 10000;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          opacity: 1;
          display: flex;
        }

        #logo {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
        }

        #logo::after {
          content: '';        
          box-sizing: border-box;
          border-radius: 50%;
          border: 10px solid #e4edf9;
          border-top: 10px solid yellow;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 99;
          width: 100%;
          height: 100%;
          animation: spinner 1s linear infinite;
          -webkit-filter: drop-shadow(0px 0px 10px rgb(0 0 0 / 25%));
          filter: drop-shadow(0px 0px 10px rgb(0 0 0 / 25%));          
        }

        @keyframes spinner {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        #logo drh-icon {
          object-position: center center;
          width: 75%;
          height: 75%;
        }
      </style>

      <span>
        <div id="logo">
          <drh-icon></drh-icon>
        </div>
      </span>
    `);
    if (this.getAttribute("showing")) this.classList.add("showing");
  }

  show() { this.classList.add("showing"); }

  hide() { this.classList.remove("showing"); }

}

customElements.define("drh-spinner", DrhSpinner);
