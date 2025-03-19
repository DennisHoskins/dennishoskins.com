import _DrhComponent from "../_drh_component.js";

export default class DrhJobImageModal extends _DrhComponent {

  #img = null;
  #imgs = [];


  constructor(img) { 
    super(`
      <style>
        :host {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%; 
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :host(.fade-in) { 
          opacity: 0;
          animation: fade-in 0.25s linear forwards; 
        }

        @keyframes fade-in { 100% { opacity: 1; } }

        :host(.fade-out) { 
          opacity: 1;
          animation: fade-out 0.25s linear forwards; 
        }

        @keyframes fade-out { 100% { opacity: 0; } }

        :host * { transition: all 0.5s ease; }

        button {
          outline: none;
          border: none;
          color: #c1c1c1;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
        }

        button.showing { opacity: 1; }

        button:hover { 
          color: #919191;
          transform: scale(1.01); 
        }

        button:hover span, 
        button:hover i {  transform: scale(1.5); }

        button:hover i { border-color: #919191; }

        button i { border-color: #c1c1c1; }

        #close {
          position: absolute;
          top: 0.5em;
          right: 0.5em;
          right: 0.5em;
          z-index: 1;
          font-size: var(--font-size-med)
        }

        #prev {
          position: absolute;
          left: 0.5em;
          top: 50%;
        }

        #prev i::before {
          position: relative;
          content: "";
          display: inline-block;
          top: 1px;
          width: 0.75em;
          height: 0.75em;
          border-right: 0.2em solid;
          border-top: 0.2em solid;
          transform: rotate(-135deg);
        }

        #next {
          position: absolute;
          right: 0.5em;
          top: 50%;
        }

        #next i::before {
          position: relative;
          content: "";
          display: inline-block;
          top: 1px;
          width: 0.75em;
          height: 0.75em;
          border-right: 0.2em solid;
          border-top: 0.2em solid;
          transform: rotate(45deg);
        }

        img { 
          object-fit: contain;      
          object-position: center top;    
          position: relative;
          width: auto;
          max-width: 100%;
          max-height: 100%;
          margin: 10px;
          box-sizing: border-box;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);
          transition: all 0.25s ease;
        }

        img.grow {
          transform: scale(1.05);
          animation: shrink 0.25s linear forwards; 
        }

        @keyframes shrink { 100% { transform: scale(1); } }

        @media (min-width: 800px) {
          button { 
            width: 30px;
            height: 30px;
          }

          #close {
            top: 0.5em;
            right: 0.5em;
          }

          #prev i::before {
            top: -1px;
            width: 0.4em;
            height: 0.4em;
          }

          #next i::before {
            top: -1px;
            width: 0.4em;
            height: 0.4em;
          }
        }
      </style>

      <img>
      <button id="close"><span>&#x2715;</span></button>
      <button id="prev"><i></i></button>
      <button id="next"><i></i></button>
    `);
    this.#img = img;
    this.query("img").src = this.#img.src;
    this.#imgs = Array.from(document.querySelectorAll(".job-img"));
    this.query("#close").onclick = () => this.hide();
    this.query("#prev").onclick = (e) => this.#prev(e);
    this.query("#next").onclick = (e) => this.#next(e);
    document.querySelector("drh-modal").mode = "img";
    this.onclick = (e) => {
      const rect = this.query("img").getBoundingClientRect();
      if (e.clientX >= rect.x && e.clientX <= rect.x + rect.width) {
        if (e.clientY >= rect.y && e.clientY <= rect.y + rect.height) {
          return;
        }
      }
      this.hide();
    }
  }

  show() { 
    const i = this.query("img"); 
    const w = i.naturalWidth;
    const h = i.naturalHeight;
    const dw = document.body.clientWidth - (document.body.clientWidth / 10);
    const dh = document.body.clientHeight - (document.body.clientHeight / 10);
    const scale = Math.min(dw / w, dh / h);
    const newwidth = w * scale;
    const newheight = h * scale;
    i.style.width = newwidth + "px";
    i.style.height = newheight + "px";
    setTimeout(() => this.queryAll("button").forEach(b => b.classList.add("showing")), 500); 
  }

  hide() { 
    this.queryAll("button").forEach(b => b.classList.remove("showing"));
    this.parent.hide();  
  }

  #prev(e) {
    const index = this.#imgs.indexOf(this.#img);
    this.#crossfade(this.#imgs[index == 0 ? this.#imgs.length - 1 : index - 1]);
    e.stopPropagation();
  }

  #next(e) {
    const index = this.#imgs.indexOf(this.#img);
    this.#crossfade(this.#imgs[index == this.#imgs.length - 1 ? 0 : index + 1]);
    e.stopPropagation();
  }

  #crossfade(img) {
    const modal = new DrhJobImageModal(img);
    modal.parent = this.parent;
    this.parent.wrap.appendChild(modal);
    modal.classList.add("showing");
    modal.classList.add("fade-in");
    modal.query("img").classList.add("grow");
    modal.queryAll("button").forEach(b => b.classList.add("showing"));
    modal.show();
    this.classList.add("fade-out");
    setTimeout(() => this.remove(), 250);
  }

}

customElements.define("drh-job-img-modal", DrhJobImageModal);
