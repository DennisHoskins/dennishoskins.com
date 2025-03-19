import _DrhComponent from "./_drh_component.js";

export default class DrhJobListItem extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          width: 100%;
          display: flex;
          background: white;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);
          box-sizing: border-box;
          position: relative;
        }

        :host(:hover) { transform: scale(1.01); }

        :host(.border) { border: 5px solid white; }

        img { 
          width: 100%; 
          object-fit: cover;
        }

        span {
          display: none;
          position: absolute;
          -webkit-mask-image: linear-gradient(transparent,  black);
          mask-image: linear-gradient(transparent, black);          
          bottom: 0;
          left: 0;
          width: 100%;
          height: 7.5em;
          background: #0000004f;
          backdrop-filter: blur(5px);
        }

        div {
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          width: auto;
          height: auto;
          padding: 1em;
          box-sizing: border-box;
        }

        h2,
        h3 {
          color: white;
          text-shadow: 0px 0px 2.5px #0000008c;
          margin: 0;
          padding: 0;
        }

        h2 { border: none; }

        h3 { 
          padding-top: 0.5em; 
          line-height: 17.5px;
        }

        @media (min-width: 1200px) {
          span { display: block; }

          div { display: block; }
        }        
      </style>

      <img>
      <span></span>
      <div>
        <h2></h2>
        <h3></h3>
      </div>
    `);
  }

  set job(job) {
    const img = this.query("img");
    img.src = "images/work/" + job.url + "/" + job.img;
    img.alt = "Splash screen for " + job.title;
    this.query("h2").innerText = job.title;
    this.query("h3").innerText = job.subtitle;
    if (this.getAttribute("border")) this.classList.add("border");
  }

}

customElements.define("drh-job-list-item", DrhJobListItem);
