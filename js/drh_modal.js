import _DrhComponent from "./_drh_component.js";

export default class DrhModal extends _DrhComponent {

  main = null;
  pad = 0;
  content = null;
  #element = null;

  constructor() { 
    super(`
      <style>
        :host {
          position: absolute;
          overflow: hidden;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #a8a98e54;
          backdrop-filter: blur(5px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }

        :host(.showing) {
          pointer-events: all;
          opacity: 1;
        }

        #modal-main { 
          position: absolute;
          z-index: 10000;
          opacity: 1;
          background: white;
          border: 5px solid white;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);
          display: flex;
          overflow: hidden;
        }

        #modal-main.img {
          background: transparent;
          border: none;
          box-shadow: none;
        }

        #modal-main.grow { transition: all 0.5s ease, height 0.5s ease; }
      </style>

      <div id="modal-main">
        <div class="modal-wrap"></div>
      </div>
    `);
    this.main = this.query("#modal-main");
    this.wrap = this.query(".modal-wrap");
    this.onclick = (e) => {
      const rect = this.main.getBoundingClientRect();
      if (e.clientX >= rect.x && e.clientX <= rect.x + rect.width) {
        if (e.clientY >= rect.y && e.clientY <= rect.y + rect.height) {
          return;
        }
      }
      this.hide();
    }
  }

  set mode(mode) { 
    if (mode) this.query("#modal-main").classList.add(mode); 
    else this.query("#modal-main").classList = "";
  }

  show(rect, element, pad = 0) {
    this.pad = pad;
    this.#element = element;
    this.#element.parent = this;
    this.wrap.innerHTML = "";
    this.wrap.appendChild(this.#element);
    this.main.style.left = rect.x + "px";
    this.main.style.top = rect.y + "px";
    this.main.style.width = rect.width + "px";
    this.main.style.height = rect.height + "px";
    this.classList.add("showing"); 
    setTimeout(() => this.#grow(), 100);
  }

  #grow() { 
    this.main.classList.add("grow");
    this.#resize();
    document.body.onresize = () => this.#resize();
    this.#element.show();
  }

  hide() { 
    this.classList.remove("showing"); 
    setTimeout(() => { this.main.classList.remove("grow"); }, 250);
  }

  #resize() {
    const modal = document.querySelector("drh-modal");
    const width = document.body.clientWidth - (document.body.clientWidth / 10);
    const height = document.body.clientHeight - (document.body.clientHeight / 20);
    const x = (document.body.clientWidth - width) / 2;
    const y = (document.body.clientHeight - height) / 2;
    modal.main.style.top = y + "px";
    modal.main.style.left = (x - this.pad) + "px";
    modal.main.style.width = width + "px";
    modal.main.style.height = height + "px";
  }
  
}

customElements.define("drh-modal", DrhModal);
