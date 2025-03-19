import _DrhComponent from "./_drh_component.js";

export default class DrhHeader extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          position: absolute;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          transform: translateZ(-0.5px);
        }

        :host(.ios) { transform: translateZ(0); }
      </style>
    `);
    this.add(document.createElement('slot'));
  }

}

customElements.define("drh-header", DrhHeader);
