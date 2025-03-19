export default class _DrhComponent extends HTMLElement {

  #template = `
    <style>
      :host {
        --max-width: calc(100vw - 50px);
        --color-title: #5e5e5e;
        --color-subtitle: gray;
        --color-label: gray;
        --color-text: #b0b0b0;
        --color-link: #8ba8df;
        --color-border: #e8e8e8;
        --font-title: "Oxygen", sans-serif;
        --font-text: "Urbanist", sans-serif;
        --font-size-hero: 50px;
        --font-size-hero-space: 40px;
        --font-size-subhero: 30px;
        --font-size-subhero-space: 25px;
        --font-size-large: 20px;
        --font-size-large-space: 25px;
        --font-size-med-large: 17.5px;
        --font-size-med: 15px;
        --font-size-med-space: 20px;
        --font-size: 12.5px;
        --font-size-space: 22px;
        --font-size-small: 10px;
      }

      .hidden { display: none !important; }

      .wrap { 
        width: 100%;
        height: auto;
        padding: 1.5em 0 2em 0;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .content {
        width: calc(100% - 2em);
        max-width: var(--max-width);
        height: auto;
        display: flex;
        flex-direction: column;
        align-self: center;        
      }

      picture,
      picture img { object-fit: cover; }

      img { width: 100%; }

       #main-hero {
        float: left;
        width: 7.5em;
        height: 7.5em;
        margin: 0 1em 0.5em 0;
        object-fit: cover;
        background: yellow;
        border: 5px solid white;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);
        position: relative;
      }

      h2 {  
        font-family: var(--font-title);
        font-size: var(--font-size-large);
        line-height: var(--font-size-large-space);
        font-weight: bold;
        margin: 0 0 0.25em 0;
        color: var(--color-title);
        position: relative;
      }

      h2.title { margin-bottom: 0.5em; }

      h3 {  
        font-family: var(--font-title);
        font-size: var(--font-size-med);
        line-height: var(--font-size-med-space);
        margin: 0 0 0.5em 0;
        padding: 0;
        font-weight: bold;
        color: var(--color-subtitle);
        position: relative;
      }

      p {
        font-family: var(--font-text);
        font-size: var(--font-size);
        line-height: var(--font-size-space);
        color: var(--color-text);
        margin: 0;
        padding: 0;
      }

      a { 
        font-family: var(--font-text);
        color: var(--color-link);
        font-weight: bold; 
      }

      p a { transition: all 0.25s ease; }

      p a:hover { transform: scale(1.025); }      

      label { 
        font-weight: bold;
        font-family: var(--font-title);;
        font-size: 15px;
      }

      .button,
      button {
        display: block;
        text-decoration: none;
        font-family: var(--font-title);;
        font-size: var(--font-size-small);
        font-weight: bold;
        padding: 1em 0.75em 1em 0.75em;
        width: 11em;
        height: 1.5em;
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all ease 0.25s;
        cursor: pointer;
      }

      input, textarea { font-family:  var(--font-title); }

      @media (min-width: 800px) {
        :host { 
          --max-width: 900px;
          --font-size-hero: 100px;
          --font-size-hero-space: 80px;
          --font-size-subhero: 60px;
          --font-size-subhero-space: 50px;
          --font-size-large: 32px;
          --font-size-large-space: 30px;
          --font-size-med: 15px;
          --font-size-med-space: 20px;
          --font-size: 20px;
          --font-size-space: 29px;
          --font-size-small: 12px;
        }

        .button,
        button {
          width: 12.5em;
          height: 1.75em;
        }

         #main-hero {
          width: 10em;
          height: 10em;
        }
      }

      @media (min-width: 1200px) {
        :host { --max-width: 1000px; }

        .wrap { padding: 5em 0 5em 0; }

        .button,
        button { 
          width: 15em; 
          font-size: var(--font-size-med);
        }
      }
    </style>
  `;
  #shadow = null;
  #el = null;

  constructor(html = null) { 
    super();
    this.#shadow = this.attachShadow({ mode: 'open' });
    this.#el = document.createElement("template");
    this.#el.innerHTML = this.#template;
    this.#shadow.appendChild(this.#el.content);
    if (html) this.append(html);
  }

  append(html) {
    this.#el.innerHTML = html;
    this.#shadow.appendChild(this.#el.content);
  }

  add(html, element = null) { 
    if (element) this.#shadow.querySelector(element).appendChild(html)
    else this.#shadow.appendChild(html); 
  }

  query(sel) { return this.#shadow.querySelector(sel); }

  queryAll(sel) { return this.#shadow.querySelectorAll(sel); }

}

customElements.define("drh-component", _DrhComponent);
