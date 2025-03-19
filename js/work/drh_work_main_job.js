import _DrhComponent from "../_drh_component.js";

export default class DrhWorkMainJob extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          width: 100%;
          display: flex;
        }
      </style>

      <a><drh-job-list-item></drh-job-list-item></a>
    `);
    this.job = JSON.parse(this.getAttribute("job"));
    this.query("drh-job-list-item").job = this.job;
    const a = this.query("a");
    a.href = "job.php?" + this.job.url;
    a.setAttribute("aria-label", "Read more about " + this.job.title);
    this.onclick = () => document.location.href = "job.php?" + this.job.url;
  }

}

customElements.define("drh-work-main-job", DrhWorkMainJob);
