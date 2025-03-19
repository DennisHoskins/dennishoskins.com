import _DrhComponent from "./_drh_component.js";

export default class DrhFooter extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          width: 100%;
          display: flex;
          justify-content: center;
          background: #414141;
          height: auto;
          position: relative;
        }

        :host > div {
          width: 100%;
          max-width: var(--max-width);
          display: flex;
          justify-content: center;
        }

        p {
          margin: 0;
          padding: 0.25em 0 0.25em 0;
          font-size: var(--font-size-small);
          display: inline-flex;
          align-items: center;
          color: #6f6f6f;
        }

        i {
          padding: 5px;
          font-size: 8px;
        }

        svg {
          display: block;
          width: 2.5em;
          fill: #6f6f6f;
        }

        @media (min-width: 768px) {
          :host > div { justify-content: end; }

          p {
            float: right;
            text-align: right;
          }
        }
      </style>

      <div class="container">
        <p>
          dennis hoskins 2025
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24""><path d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2 2 6.579 2 12s4.579 10 10 10zm0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8-8-3.663-8-8 3.663-8 8-8z"></path><path d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5z"></path></svg></i>
          made with love
          <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg></i>
          hug your mom
        </p>
      </div>
    `);
  }

}

customElements.define("drh-footer", DrhFooter);
