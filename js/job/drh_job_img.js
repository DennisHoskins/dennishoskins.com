import _DrhComponent from "../_drh_component.js";
import DrhJobImgModal from "./drh_job_img_modal.js";

export default class DrhJobImage extends _DrhComponent {

  #src = null;

  constructor() { 
    super(`
      <style>
        :host {
          width: 100%;
          padding: 0;
          margin-bottom: 10px;
          display: flex;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        :host(:hover) { transform: scale(1.01); }

        img {
          width: 100%;
          object-fit: cover;
          object-position: top left;
        }

        @media (min-width: 1024px) {
          :host { margin-bottom: 25px; }
        }
      </style>

      <img alt="Example project image">
    `);
    if (this.src) this.query("img").src = this.src;
    else this.query("img").src = this.src = this.getAttribute("src");
    this.onclick = () => this.#modal();
  }

  load(src) { 
    this.src = src;
    this.query("img").src = this.src;
  }

  #modal() { document.querySelector("drh-modal").show(this.getBoundingClientRect(), new DrhJobImgModal(this), 0); }

}

customElements.define("drh-job-img", DrhJobImage);
