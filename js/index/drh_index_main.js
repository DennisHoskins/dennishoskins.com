import _DrhComponent from "../_drh_component.js";

export default class DrhIndexMain extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          margin-top: 100vh;
          width: 100%;
          display: flex;
          position: relative;
        }

        p a { display: inline-block; }

        img { object-position: center top; }

        #confetti { position: relative; }
      </style>

      <div class="wrap">
        <div class="content">
          <h2 class="title">Oh Hey. I'm Dennis.</h2>
          <p>
            <img id="main-hero" src="images/DennisHoskins.png" alt="Picture of Dennis Hoskins">
            Full-stack web designer/developer specializing in clean UI and crispy UX.
            I really dig <a href="https://github.com/DennisHoskins" target="_blank" rel="noopener" aria-label="Go to my Github">Web Components</a> and super love <a href="#" id="confetti"><drh-confetti></drh-confetti>Web Animation</a>.
            While you're here, check out some of the <a href="work.php">jobs I have worked on</a> and a fun project called <a href="ugly.php">Ugly Little Games</a> I'm making.
            <br><br>
            See anything you like? Wanna collab? I got the skills to make the HTMLs.
            Send me a <a href="#contact">message</a> and we can talk.
          </p>
        </div>
      </div>
    `);
    this.query("#confetti").onclick = (e) => this.query("drh-confetti").confetti(e);
  }

}

customElements.define("drh-index-main", DrhIndexMain);
