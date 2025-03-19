import _DrhComponent from "../_drh_component.js";

export default class DrhIndexWorkJobModal extends _DrhComponent {

  parent = null;
  #job = null;
  #jobs = null;

  constructor(job) { 
    super(`
      <style>
        :host {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%; 
          display: flex;
          flex-direction: column;
          background: white;
        }

        :host(.fade) { 
          opacity: 0;
          animation: fade 0.25s linear forwards; 
        }

        @keyframes fade { 100% { opacity: 1; } }

        :host * { transition: all 0.5s ease; }

        #details-wrap { 
          height: 0;
          transition: all 0.5s ease; 
        }

        :host #details-wrap * { transition: all 0.5s ease; }

        a {
          width: 100%;
          height: 100%;
          display: block;
          overflow: hidden;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
        }

        :host(.showing) a { height: 55%; }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.25s ease;
        }

        img.grow {
          transform: scale(1.05);
          animation: shrink 0.25s linear forwards; 
        }

        @keyframes shrink { 100% { transform: scale(1); } }

        :host(.showing) #details-wrap { height: 45%; }

        #details {
          width: 100%; 
          height: 0;
          opacity: 0;
          transition: all 0.5s ease;
          overflow: hidden;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        #details * { 
          opacity: 0; 
          transition: all 0.25s ease;
        }

        drh-job { height: 100%; }

        :host(.showing) #details { 
          height: 100%;
          opacity: 1;
          padding: 1em;
        }

        :host(.showing) #details-title { 
          display: flex; 
          align-items: center;
          margin-bottom: 1.25em;
          padding-bottom: 1em;
          border-bottom: 1px solid var(--color-border);
        }

        :host(.showing.details) #details * { opacity: 1; }

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

        :host(.showing.details) button { opacity: 1; }

        button:hover { 
          color: #919191;
          transform: scale(1.01); 
        }

        #close {
          position: absolute;
          top: 0.5em;
          right: 0.5em;
          right: 0.5em;
          z-index: 1;
          font-size: var(--font-size-med)
        }

        #controls {
          flex-grow: 1;
          width: calc(100% - 1em);
          padding: 0 0.5em 0 0.5em;
          align-items: end;
          display: flex;
        }

        #controls button:hover { transform: scale(1.1); }

        #controls span {
          width: 100%;
          display: block;
        }

        #controls button span { display: none; }

        #prev,
        #next { 
          position: absolute;
          top: calc(50% - 2.5em);
        }

        #prev { left: 0.5em; }

        #prev i::before {
          position: relative;
          content: "";
          display: inline-block;
          top: 1px;
          width: 1em;
          height: 1em;
          border-right: 0.2em solid;
          border-top: 0.2em solid;
          transform: rotate(-135deg);
        }

        #next { right: 0.5em; }

        #next i::before {
          position: relative;
          content: "";
          display: inline-block;
          top: 1px;
          width: 1em;
          height: 1em;
          border-right: 0.2em solid;
          border-top: 0.2em solid;
          transform: rotate(45deg);
        }

        #controls span i { border-color: #c1c1c1; }

        button:hover i { border-color: #919191; }

        @media (min-width: 800px) {
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

        @media (min-width: 1200px) {
          :host { flex-direction: row; }

          :host(.showing) a { 
            width: 70%; 
            height: 100%;
          }

          #details-wrap {
            display: flex;
            flex-direction: column;
            width: 0;
          }

          :host(.showing) #details-wrap { 
            width: 30%; 
            height: 100%; 
          }

          #details { width: 0; }

          :host(.showing) #details { 
            width: 100%; 
            height: calc(100% - 5em);
            opacity: 1;
            padding: 1em;
          }

          button { 
            width: 50px;
            height: auto;
            background: transparent;
            box-shadow: none;
            font-weight: normal;
          }

          #close {
            top: 0;
            right: 0;
            font-size: var(--font-size);
          }

          #controls {
            flex-grow: 0;
            width: 0;
            height: 5em;
            align-items: end;
            display: flex;
          }

          :host(.showing) #controls { width: calc(100% - 1em); }

          #controls button span { 
            width: auto;
            display: block; 
          }

          #prev,
          #next { position: relative; }

          #prev { float: left; }

          #prev i::before {
            top: -1px;
            width: 0.4em;
            height: 0.4em;
            margin-right: 0.5em;
          }

          #next { float: right; }

          #next i::before {
            top: -1px;
            width: 0.4em;
            height: 0.4em;
            margin-left: 0.5em;
          }
        }
      </style>

      <a><img></a>
      <span id="details-wrap">
        <div id="details">
          <button id="close">&#x2715;</button>
          <drh-job job='` + JSON.stringify(job.job) + `'></drh-job>
        </div>
        <div id="controls">
          <span>
            <button id="prev"><i></i><span>PREV</span></button>
            <button id="next"><span>NEXT</span><i></i></button>
          </span>
        </div>
      </span>
    `);
    this.#job = job;
    this.a = this.query("a");
    this.a.href = "job.php?" + this.#job.job.url;
    this.query("img").src = "images/work/" + this.#job.job.url + "/" + this.#job.job.img;
    this.#jobs = Array.from(document.querySelectorAll("drh-index-work-job"));
    this.query("#close").onclick = () => this.hide();
    this.query("#prev").onclick = () => this.#prev();
    this.query("#next").onclick = () => this.#next();
    document.querySelector("drh-modal").mode = "";
  }

  show() {
    setTimeout(() => {
      this.classList.add("showing");
      this.#details();
    }, 250);
  }

  #details() { setTimeout(() => this.classList.add("details"), 500); }

  #prev() {
    const index = this.#jobs.indexOf(this.#job);
    this.#crossfade(this.#jobs[index == 0 ? this.#jobs.length - 1 : index - 1]);
  }

  #next() {
    const index = this.#jobs.indexOf(this.#job);
    this.#crossfade(this.#jobs[index == this.#jobs.length - 1 ? 0 : index + 1]);
  }

  #crossfade(job) {
    const modal = new DrhIndexWorkJobModal(job);
    modal.parent = this.parent;
    modal.classList.add("details");
    modal.classList.add("fade");
    modal.classList.add("showing");
    modal.query("img").classList.add("grow");
    this.parent.wrap.appendChild(modal);
    setTimeout(() => this.remove(), 250);
  }

  hide() { this.parent.hide();  }

}

customElements.define("drh-index-work-job-modal", DrhIndexWorkJobModal);
