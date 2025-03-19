import _DrhComponent from "../_drh_component.js";

export default class Drh404Main extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          margin-top: 52.5vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .content { padding-bottom: 2em; }

        #hero-gradient {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          mix-blend-mode: multiply;
          animation: huerotatehero 5s linear infinite;
          background-image: radial-gradient(circle farthest-corner at 0 0, rgba(225, 243, 97, 1) 0%, rgba(225, 243, 97, 0) 50%), 
                            radial-gradient(circle farthest-corner at 100% 100%, rgba(60, 255, 60, 1) 0%, rgba(60, 255, 60, 0) 33%), 
                            radial-gradient(circle farthest-corner at 100% 0, rgba(204, 104, 119, 1) 0%, rgba(204, 104, 119, 0) 50%), 
                            radial-gradient(circle at 50% 100%, rgba(155, 221, 240, 1) 0%, rgba(155, 221, 240, 0) 80%)
        }

        @keyframes huerotatehero {
          0% { filter: hue-rotate(0); }
          100% { filter: hue-rotate(360deg); }  
        }

        drh-job-list {
          max-width: var(--max-width);
          align-self: center;
        }

        @media (min-width: 1200px) {
          .content { padding-bottom: 2.5em; }
        }
      </style>

      <div class="wrap">
        <div class="content">
          <h2 class="title">Page Not Found</h2>
          <p>
            <span id="main-hero">
              <span id="hero-gradient"></span>
              <drh-icon></drh-icon>
            </span>
            The page you're looking for doesn't live on this server. 
            Are you sure you have the right address? 
            These things can occasionally be quite tricky.
            <br><br>
            In the meantime, why don't you check out some of the <a href="work.php">pojects</a> I have worked on.
            I also have a cool thing called <a href="work.php">UGLY</a> that I'm pretty proud of.
            <br><br>
            You can always <a href="#contact">Contact Me</a> if you want to talk about it.
          </p>
        </div>
        <drh-job-list></drh-job-list>
      </div>
    `);
    this.query("drh-job-list").appendChild(document.createElement("slot"));
  }

}

customElements.define("drh-404-main", Drh404Main);
