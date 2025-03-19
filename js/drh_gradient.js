import _DrhComponent from "./_drh_component.js";
import DrhHeader from "./drh_header.js";
import DrhTypewriter from "./drh_typewriter.js";

export default class DrhGradient extends _DrhComponent {

  #main = null;

  constructor() { 
    super(`
      <style>
        :host {
          pointer-events: none;
          position: absolute;
          left: 0;
          top: 0;
          width: 100vw;
          height: calc(100vh + 200px);
          mix-blend-mode: multiply;
          animation: huerotate 5s linear infinite;
          background-image: radial-gradient(circle farthest-corner at 0 0, rgba(225, 243, 97, 1) 0%, rgba(225, 243, 97, 0) 50%), 
                            radial-gradient(circle farthest-corner at 100% 100%, rgba(60, 255, 60, 1) 0%, rgba(60, 255, 60, 0) 33%), 
                            radial-gradient(circle farthest-corner at 100% 0, rgba(204, 104, 119, 1) 0%, rgba(204, 104, 119, 0) 50%), 
                            radial-gradient(circle at 50% 100%, rgba(155, 221, 240, 1) 0%, rgba(155, 221, 240, 0) 80%)        
        }

        @keyframes huerotate {
          0% { filter: hue-rotate(0); }
          100% { filter: hue-rotate(360deg); }  
        }
      </style>
    `);
    this.#main = document.querySelector("main");
    this.#main.addEventListener("scroll", () => this.scroll());
    window.addEventListener("resize", () => this.scroll());
  }

  scroll() { 
    let height = 0;
    const children = Array.from(this.#main.children);
    children.forEach(child => {
      if (child instanceof DrhHeader) return;
      if (child instanceof DrhGradient) return;
      if (child instanceof DrhTypewriter) return;
      if (!height) height = child.offsetTop;
      height += child.clientHeight
    });
    const foot = document.querySelector("drh-footer");
    const fh = foot.offsetTop - 100;
    if (this.#main.scrollTop > this.offsetTop) {
      if (this.offsetTop + this.clientHeight >= height) {
        if (height > fh) height = fh;
        this.style.top = (height - this.clientHeight) + "px";
        return;
      }
    }
    if (this.#main.scrollTop + this.clientHeight > fh) this.style.top = (fh - this.clientHeight) + "px";
    else this.style.top = (this.#main.scrollTop - 100) + "px"; 
  }

}

customElements.define("drh-gradient", DrhGradient);
