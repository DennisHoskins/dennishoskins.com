import _DrhComponent from "./_drh_component.js";

export default class DrhSocial extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          width: 100%;
          display: flex;
          flex-direction: row;
        }

        :host(.inline) { flex-direction: row; }

        a {
          display: flex;
          flex-direction: column;
          width: 33%;
          color: var(--color-label);
          align-items: center;
          justify-content: end;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        span { display: none; }

        :host(.inline) a { 
          width: auto;
          justify-content: center;
          height: 1.5em;
          padding-right: 1.5em;
          margin-right: 1.5em;
          border-right: 1px solid var(--color-border);
        }

        :host(.inline) a:last-of-type { border: none; }

        a:hover { transform: scale(1.01); }

        a svg {
          width: 2.25em;
          fill: var(--color-label);
        }

        @media (min-width: 1200px) {
          :host { 
            flex-direction: column; 
            max-height: 15em;
          }

          a { 
            width: auto;
            height: 33%; 
            flex-direction: row;
          }

          span { display: block; }

          a svg {
            width: 1.5em;
            margin-left: 1em;
          }
        }
      </style>

      <a href="https://www.linkedin.com/in/dennishoskins/" target="_blank" rel="noopener" aria-label="Go to my Linkedin">
        <span>dennishoskins</span>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"/></svg>
      </a>
      <a href="https://github.com/DennisHoskins" target="_blank" rel="noopener" aria-label="Go to my Github">
        <span>dennishoskins</span>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-84.000000, -7399.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" ></path></g></svg>
      </a>
      <a href="https://instagram.com/dennis__dennis__dennis/" target="_blank" rel="noopener" aria-label="Go to my Instagram">
        <span>dennis__dennis__dennis</span>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g><path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8 c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"/><polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346"/><path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157 c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"/><path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,374.7v104.8 c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157 c27.3,0,49.5,22.2,49.5,49.5V374.7z"/></g></svg>
      </a>
    `);
  }

}

customElements.define("drh-social", DrhSocial);
