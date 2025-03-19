import _DrhComponent from "../_drh_component.js";
import DrhIndexWorkJob from "./drh_index_work_job.js";

export default class DrhIndexWork extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          width: 100%;
          display: flex;
          position: relative;
          background: #a8a98e54;
          backdrop-filter: blur(5px);
        }

        .wrap { background: transparent;  }

        .content { padding-bottom: 0; }

        h2 {
          color: white; 
          text-shadow: 0px 0px 10px rgb(0 0 0 / 15%);
          border: none;
          padding: 0;
        }

        h2::after { background: yellow; }

        drh-index-projects-project { box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333); }

        #work-buttons {
          width: 100%;
          display: flex;
          align-self: center;
          gap: 10px;
        }

        .button {
          margin-top: 2em;
          align-self: center;
          background: yellow;
          color: gray;
          width: auto;
          flex-grow: 1;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);        
        }

        .button svg {
          margin-top: -0.15em;
          margin-left: 0.5em;
          width: 1.25em;
          stroke-width: 1;
          stroke: gray;
          fill: gray;
          transition: all 0.25s ease;
        }

        .button:first-of-type svg { 
          margin-top: 0.1em;
          transform: rotate(90deg); 
        }

        .button:hover { 
          transform: scale(1.05); 
          background: gray;
          color: yellow;
        }

        .button:hover svg {
          fill: yellow;
          stroke: yellow;
        }

        @media (min-width: 1200px) {
          #work-buttons { width: auto; }

          .button { 
            width: 12.5em;
            margin-top: 2.5em; 
          }

          .button:first-of-type { margin-right: 25px; }
        }        
      </style>

      <div class="wrap">
        <div class="content">
          <h2>My Work</h2>
          <drh-job-list></drh-job-list>
          <div id="work-buttons">
            <a href="doc/dennis_hoskins_cv.pdf" target="_blank" class="button">
              DOWNLOAD MY CV
              <svg viewBox="0 0 1024 1024" version="1.1"><path d="M470.016 96l-10.016 8.992L243.008 320H64v512h539.008c45.12 0 84.48-31.872 93.984-76L750.016 512H864c52.64 0 96-43.36 96-96s-43.36-96-96-96H520l6.016-24c6.496-4.992 10.624-7.136 20-20 14.976-20.48 29.984-52.256 29.984-95.008C576 135.36 534.72 96 483.008 96z m22.976 67.008c13.504 2.624 19.008 8.128 19.008 17.984 0 28.896-8.736 46.752-16.992 58.016-8.256 11.232-14.016 13.984-14.016 13.984l-11.008 6.016-3.968 12.992-19.008 72-10.016 40H864c18.112 0 32 13.888 32 32 0 18.112-13.888 32-32 32h-166.016l-5.984 24.992-56.992 270.016c-3.264 14.976-16.768 24.992-32 24.992H288V364.992zM128 384h96v384H128z"></path></svg>
            </a>
            <a href="work.php" class="button">
              SEE MORE WORK
              <svg viewBox="0 0 1024 1024" version="1.1"><path d="M470.016 96l-10.016 8.992L243.008 320H64v512h539.008c45.12 0 84.48-31.872 93.984-76L750.016 512H864c52.64 0 96-43.36 96-96s-43.36-96-96-96H520l6.016-24c6.496-4.992 10.624-7.136 20-20 14.976-20.48 29.984-52.256 29.984-95.008C576 135.36 534.72 96 483.008 96z m22.976 67.008c13.504 2.624 19.008 8.128 19.008 17.984 0 28.896-8.736 46.752-16.992 58.016-8.256 11.232-14.016 13.984-14.016 13.984l-11.008 6.016-3.968 12.992-19.008 72-10.016 40H864c18.112 0 32 13.888 32 32 0 18.112-13.888 32-32 32h-166.016l-5.984 24.992-56.992 270.016c-3.264 14.976-16.768 24.992-32 24.992H288V364.992zM128 384h96v384H128z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    `);
    this.query("drh-job-list").appendChild(document.createElement('slot'));
  }

}

customElements.define("drh-index-work", DrhIndexWork);
