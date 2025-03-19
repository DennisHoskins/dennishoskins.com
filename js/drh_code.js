import _DrhComponent from "./_drh_component.js";

export default class DrhCode extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          position: fixed;
          width: 200%;
          height: 300%;
          top: -50%;
          animation: slide 100s linear infinite;        
        }

        div {
          width: 200%;
          height: 300%;
          background: url(images/code.png) 0% 0% repeat;
        }

        @keyframes slide {
          0% { transform: rotate(10deg) translateX(-500px); }
          100% { transform: rotate(10deg) translateX(-100%); }
        }
      </style>

      <div></div>
    `);
  }

}

customElements.define("drh-code", DrhCode);
