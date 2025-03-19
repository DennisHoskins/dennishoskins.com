import _DrhComponent from "./_drh_component.js";

export default class DrhJob extends _DrhComponent {

  constructor(job) { 
    super(`
      <style>
        :host { 
          display: flex; 
          flex-direction: column;
        }

        #title { 
          display: flex; 
          align-items: center;
          margin-bottom: 0.5em;
        }

        h2 {
          padding: 0;
          margin: 0; 
          flex-grow: 1;
          border: none;
        }

        h3 { 
          margin: 0;
          border: none; 
        }

        p { 
          flex-grow: 1;
          margin-bottom: 1em;
          overflow: hidden;
          mask-image: linear-gradient(to bottom, white 80%, transparent);
         }

        a { 
          margin-bottom: 1em; 
          font-weight: bold;
        }

        .no-mobile { display: none; }

        @media (min-width: 1200px) {
          .no-mobile { display: block; }

          h2 { margin-bottom: 0.25em; }

          drh-job-skills { margin: 1em 0 1em 0; }

          a { margin: 1.5em 0 0 0; }
        }
      </style>

      <div id="title">
        <h2>Title</h2>
      </div>
      <h3>Subtitle</h3>
      <drh-job-skills></drh-job-skills>
      <p>details</p>
      <a>Read more about</a>
    `);
    this.job = job ? job : JSON.parse(this.getAttribute("job"));
  }

  set job(job) {
    if (!job) return;
    this.query("h2").innerText = job.title;
    this.query("h3").innerText = job.subtitle;
    const a = this.query("a");
    a.href = "job.php?" + job.url;
    a.innerHTML += " " + job.title;
    this.query("p").innerHTML = job.details.replaceAll("^", "'");
    if (job.skills) this.query("drh-job-skills").skills = job.skills.split(",");
  }

}

customElements.define("drh-job", DrhJob);
