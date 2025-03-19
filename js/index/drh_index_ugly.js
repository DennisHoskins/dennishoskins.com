import _DrhComponent from "../_drh_component.js";

export default class DrhIndexUgly extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          width: 100%;
          display: flex;
          position: relative;
        }

        .wrap { flex-direction: column; }

        .content { padding-bottom: 0; }

        #ugly-main {
          margin-top: 1em;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        #ugly-main a {
          width: 100%;
          height: 7.5em;
          overflow: hidden;
          transition: all 0.25s ease;
          background: yellow;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);        
        }

        #ugly-main a:hover { transform: scale(1.01); }

        video { 
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        #ugly-main #ugly-0,
        #ugly-main #ugly-3 { height: auto; }

        #ugly-main #ugly-1 { width: calc(75% - 10px); }

        #ugly-main #ugly-2 { width: 25%; }

        @media (min-width: 768px) {
          #ugly-main { gap: 25px; }

          #ugly-main a { height: 15em; }

          #ugly-main #ugly-1 { width: calc(75% - 25px); }
        }

        @media (min-width: 1200px) {
          #ugly-main { margin-top: 2em; }

          #ugly-main a { height: 20em; }
        }        
      </style>

      <div class="wrap">
        <div class="content">
          <h2>Ugly Game Loves You</h2>
          <p>
            UGLY is a vanilla JavaScript 2.5D game engine I'm building using the very cool HTML Canvas element. 
            I have <a href="https://uglylittlegames.com" rel="noopener" target="_blank">big plans</a> for these ugly little guys when I finish coding the tech.
            Wanna know more? <a href="ugly.php">Click Here</a>
          </p>
          <div id="ugly-main">
            <a href="ugly.php" id="ugly-0" aria-label="Read more about UGLY Game">
              <video autoplay loop muted playsinline>
                <source src="images/index/ugly/gang.webm" type="video/webm">
                <source src="images/index/ugly/gang.mp4" type="video/mp4">
              </video>
            </a>
            <a href="ugly.php" id="ugly-1" aria-label="Read more about UGLY Game">
              <video autoplay loop muted playsinline>
                <source src="images/index/ugly/game.webm" type="video/webm">
                <source src="images/index/ugly/game.mp4" type="video/mp4">
              </video>
            </a>
            <a href="ugly.php" id="ugly-2" aria-label="Read more about UGLY Game">
              <video autoplay loop muted playsinline>
                <source src="images/index/ugly/ugly.webm" type="video/webm">
                <source src="images/index/ugly/ugly.mp4" type="video/mp4">
              </video>
            </a>
            <a href="ugly.php" id="ugly-3" aria-label="Read more about UGLY Game">
              <video autoplay loop muted playsinline>
                <source src="images/index/ugly/trashcat.webm" type="video/webm">
                <source src="images/index/ugly/trashcat.mp4" type="video/mp4">
              </video>
            </a>
          </div>
        </div>
      </div>
    `);
  }

  connectedCallback() {
    const videos = this.queryAll('video');
    videos.forEach(video => {
      video.load();
      video.play().catch(e => console.log('Video play error:', e));
    });              
  }
  
}

customElements.define("drh-index-ugly", DrhIndexUgly);
