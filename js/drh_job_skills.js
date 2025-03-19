import _DrhComponent from "./_drh_component.js";

export default class DrhJobSkills extends _DrhComponent {

  constructor(skills) { 
    super(`
      <style>
        :host {
          padding: 0;
          margin: 0.25em 0 0.5em 0;
          list-style: none;
        }

        span {
          display: inline-block;
          background: #c1c1c1;
          color: white;
          text-shadow: 0px 0px 10px rgb(0 0 0 / 15%);
          font-family: var(--font-title);
          font-size: 10px;
          font-weight: bold;
          width: auto;
          padding: 0.15em 0.75em 0.15em 0.75em;
          border-radius: 10px;
          margin-right: 0.5em;
          margin-bottom: 0.25em;
        }
      </style>
    `);
    this.skills = skills ? skills : this.getAttribute("skills") ? JSON.parse(this.getAttribute("skills")).split(",") : null;
  }

  set skills(skills) {
    if (!skills) return;
    this.innerHTML = "";
    skills.forEach(skill => {
      const span = document.createElement("span");
      span.innerText = skill;
      this.add(span);
    });
  }

}

customElements.define("drh-job-skills", DrhJobSkills);
