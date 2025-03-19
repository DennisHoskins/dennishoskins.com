import _DrhComponent from "../_drh_component.js";

export default class DrhWorkMain extends _DrhComponent {

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

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

       #hero-img {
          position: relative;
          display: inline-block;
          float: left;
          width: 7.5em;
          height: 7.5em;
          margin: 0 1em 0 0;
          border: 5px solid white;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);
        }

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
          padding-top: 2em;
        }

        @media (min-width: 800px) {
           #hero-img {
            width: 10em;
            height: 10em;
          }
        }        

        @media (min-width: 1200px) {
          drh-job-list { padding-top: 2.5em; }
        }
      </style>

      <div class="wrap">
        <div class="content">
          <h2 class="title">Skills to make the HTMLs</h2>
          <p>
            <span id="hero-img">
              <img src="images/work/work.jpg" alt="Work hero image">
              <span id="hero-gradient"></span>
            </span>
            I have worked all over the world on teams of every size, from neighborhood mom and pop shops to giant international corporations. 
            Every project was an opportunity to grow my skills and learn new things. 
            Each challenge taught me more about the value of teamwork, collaboration and communication.
            No matter the size or complexity of your project, I approach it with the same dedication to excellence and attention to detail. 
            <br><br>
            Ready to bring your ideas to life? <a href="#contact">Hit me up</a> and turn your concept into code.
          </p>
          <drh-job-list></drh-job-list>
        </div>
      </div>
    `);
    this.query("drh-job-list").appendChild(document.createElement("slot"));
  }

}

customElements.define("drh-work-main", DrhWorkMain);
