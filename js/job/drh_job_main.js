import _DrhComponent from "../_drh_component.js";

export default class DrhJobMain extends _DrhComponent {

  #observer = null;

  constructor() { 
    super(`
      <style>
        :host {
          margin-top: 53.5vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .content { position: relative; }

        h2 { margin: 0; }

        drh-job-skills { margin: 1em 0 1em 0; }

        #links { display: flex; }

        a { 
          margin-top: 1em;
          margin-bottom: 2em;
          font-weight: bold;
          background: yellow;
          color: gray;
          width: auto;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);        
          float: left;
          margin-right: 1em;
          display: inline-block;
          transition: all 0.25s ease;
        }

        a::after {
          content: '⧉';
          color: gray;
          margin: -0.25em 0 0 0.5em;
        }

        a:hover { transform: scale(1.05); }

        a:hover span { text-decoration: underline; }

        ul {
          width: calc(100% - 2em);
          max-width: var(--max-width);
          align-self: center;
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          flex-flow: column wrap;          
          align-content: space-between;          
        }

        ul::before,
        ul::after {
          content: "";
          flex-basis: 100%;
          width: 0;
          order: 2;
        }

        ::slotted(li) { width: 32%; }        

        ::slotted(:nth-child(3n+1)) { order: 1; }

        ::slotted(:nth-child(3n+2)) { order: 2; }

        ::slotted(:nth-child(3n)) { order: 3; }

        @media (min-width: 1200px) {
          .content { padding-bottom: 2.5em; }

          a { 
            margin-top: 2em; 
            margin-bottom: 0;
          }
        }
      </style>

      <div class="wrap">
        <div class="content">
          <h2></h2>
          <drh-job-skills></drh-job-skills>
          <p><img id="main-hero" alt="Project hero image"></p>
          <span id="links"></span>
        </div>
        <ul></ul>
      </div>
    `);
    this.query("ul").appendChild(document.createElement("slot"));
    this.job = JSON.parse(this.getAttribute("job"));
    this.hero = this.query("img");
    this.hero.src = "images/work/" + this.job.url + "/" + this.job.img;
    this.hero.onclick = () => { this.#modal(); }
    this.query("h2").innerHTML = this.job.subtitle;
    this.query("p").innerHTML += this.job.details.replaceAll("^", "'");
    if (this.job.links) {
      this.job.links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        const span = document.createElement("span");
        span.innerText = link.text;
        a.appendChild(span);
        a.classList.add("button");
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
        this.query("#links").appendChild(a);
      });
    }
    this.query("drh-job-skills").skills = this.job.skills.split(",");
    window.addEventListener("resize", () => this.#resize());
  }

  connectedCallback() { setTimeout(() => { this.#resize(); }, 2500); }

  #resize() {
    const ul = this.query("ul");
    ul.style.height = "3000px";
    const jobimgs = Array.from(document.querySelectorAll("drh-job-img"));
    let max = 0;
    jobimgs.forEach(jobimg => {
      const foo = jobimg.offsetHeight;
      const h = jobimg.offsetTop + jobimg.clientHeight;
      if (h > max) max = h;
    });
    const top = ul.offsetTop;
    const height = max - top + 100;
    ul.style.height = height + "px";
  }

  #modal() { document.querySelector("drh-modal").show(this.getBoundingClientRect(), new DrhJobImgModal(this.hero), 0); }

}

customElements.define("drh-job-main", DrhJobMain);
