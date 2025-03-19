import _DrhComponent from "../_drh_component.js";

export default class DrhUglyBackground extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          position: absolute;
          top: -10vh;
          width: 120vw;
          height: 65vh;
          transform: translateZ(0.5px) scale(1.5);
          background: yellow;
        }

        :host(.ios) { 
          top: -5vh;
          transform: scale(1); 
        }

        iframe {
          border: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 65%;
        }

        :host(.ios) iframe { top: 10vh; }

        @media (min-width: 1024px) {
          iframe { height: 75%; }
        }

        @media (min-width: 1200px) {
          iframe { height: 95%; }
        }

        @media (min-width: 1500px) {
          iframe { height: 100%; }
        }
      </style>
      <iframe src="content/ugly/gang" title="UGLY Gang"></iframe>
    `);
  }

}

customElements.define("drh-ugly-background", DrhUglyBackground);
