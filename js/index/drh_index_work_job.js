import _DrhComponent from "../_drh_component.js";
import DrhIndexWorkJobModal from "./drh_index_work_job_modal.js";

export default class DrhIndexWorkJob extends _DrhComponent {

  constructor() { 
    super(`<drh-job-list-item border="true"></drh-job-list-item>`);
    this.job = JSON.parse(this.getAttribute("job"));
    this.query("drh-job-list-item").job = this.job;
    this.onclick = () => this.#modal();
  }

  #modal() { document.querySelector("drh-modal").show(this.getBoundingClientRect(), new DrhIndexWorkJobModal(this), 5); }

}

customElements.define("drh-index-work-job", DrhIndexWorkJob);
