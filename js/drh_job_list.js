import _DrhComponent from "./_drh_component.js";

export default class DrhJobList extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          width: 100%;
          display: flex;
        }

        ul { 
          width: 100%;
          height: auto;
          padding: 0;
          margin: 0;
          list-style: none;
          display: grid;
          grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }

        ::slotted(:nth-child(1)) {
          grid-row-start: 1;
          grid-column-start: 1;
          grid-row-end: 3;
          grid-column-end: 3;
        }

        ::slotted(:nth-child(2)) {
          grid-row-start: 1;
          grid-column-start: 3;
          grid-row-end: 2;
          grid-column-end: 4;
        }

        ::slotted(:nth-child(3)) {
          grid-row-start: 2;
          grid-column-start: 3;
          grid-row-end: 3;
          grid-column-end: 4;
        }

        ::slotted(:nth-child(4)) {
          grid-row-start: 3;
          grid-column-start: 3;
          grid-row-end: 4;
          grid-column-end: 3;
        }

        ::slotted(:nth-child(5)) {
          grid-row-start: 3;
          grid-column-start: 2;
          grid-row-end: 4;
          grid-column-end: 2;
        }

        ::slotted(:nth-child(6)) {
          grid-row-start: 3;
          grid-column-start: 1;
          grid-row-end: 4;
          grid-column-end: 2;
        }

        ::slotted(:nth-child(7)) {
          grid-row-start: 4;
          grid-column-start: 2;
          grid-row-end: 6;
          grid-column-end: 4;
        }

        ::slotted(:nth-child(8)) {
          grid-row-start: 4;
          grid-column-start: 1;
          grid-row-end: 5;
          grid-column-end: 2;
        }

        ::slotted(:nth-child(9)) {
          grid-row-start: 5;
          grid-column-start: 1;
          grid-row-end: 5;
          grid-column-end: 2;
        }        

        @media (min-width: 1200px) {
          ul { gap: 25px; }
        }
      </style>

      <ul></ul>
    `);
    this.query("ul").appendChild(document.createElement('slot'));
  }

}

customElements.define("drh-job-list", DrhJobList);
