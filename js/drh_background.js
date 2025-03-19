import _DrhComponent from "./_drh_component.js";

export default class DrhBackground extends _DrhComponent {

  constructor() { 
    super(`
      <style>
        :host {
          position: absolute;
          top: -20vh;
          width: 110vw;
          transform: translateZ(0.5px) rotate(-7.5deg) scale(2);
        }

        :host(.ios) { 
          top: -40vh;
          transform: rotate(-7.5deg) scale(1); 
        }

        div { 
          aspect-ratio: 1; 
          position: relative;
          display: flex;
          width: 100%;
        }

        #bg {
          width: 200vw;
          height: auto;
          margin-top: 20%;
          margin-left: -75%;
          flex-direction: column;
        }

        :host(.ios) #bg { 
          width: 175vw; 
          margin-left: -75%;
          margin-top: 55%;
        }

        #row-top,
        #row-bottom { height: 40%; }

        img { 
          aspect-ratio: 1; 
          width: 100%;
          object-fit: contain;
        }

        .hero-keyboard {
          transform: translateX(-2500px);
          animation-delay: 0.25s;
          width: 100%;
        }

        :host(.ready) .hero-keyboard { animation: animateX 0.5s ease-in-out forwards; }

        .hero-mouse { 
          transform: translateX(1500px);
          animation-delay: 0.5s;
          width: 15%;
        }

        :host(.ready) .hero-mouse { animation: animateX 0.5s ease-in-out forwards; }

        #row-bottom {
          margin-top: -5%;
          margin-left: 0%;
          justify-content: end;
        }

        :host(.ios) #row-bottom { margin-left: 20%; }

        .hero-controller { 
          transform: translateY(1500px);
          animation-delay: 0.25s;
          width: 55%;
          height: auto;
        }

        :host(.ready) .hero-controller { animation: animateY 0.5s ease-in-out forwards; }

        @keyframes animateX { 100% { transform: translateX(0px); } }
        @keyframes animateY { 100% { transform: translateY(0px); } }

        @media (min-width: 768px) {
          #bg { margin-top: -2.5%; }

          :host(.ios) #bg { 
            width: 200vw;
            margin-top: 35%;
          }

          :host(.ios) #row-bottom { margin-top: -10%; }
        }

        @media (min-width: 1024px) {
          #bg { margin-top: 5%; }

          :host(.ios) #bg { 
            margin-top: 25%; 
            margin-left: -85%; 
          }

          :host { top: -17.5vh; }

          :host(.ios) { transform: rotate(-7.5deg) scale(1); }
        }

        @media (min-width: 1024px) and (orientation: landscape) {
          :host { 
            top: -75vh;
            left: 10%;
            transform: translateZ(0.5px) rotate(-7.5deg) scale(1.25); 
          }
        }

        @media (min-width: 1200px) {
          :host(.ios) #bg { 
            width: 200vw;
            margin-top: -25%;
          }
        }

        @media (min-width: 1500px) {
          :host { 
            top: -20vh;
            left: -5%;
            width: 110vw;
            transform: translateZ(0.5px) rotate(-7.5deg) scale(1.75);
          }

          :host(.ios) { transform: rotate(-7.5deg) scale(1); }

          #bg { 
            width: 110vw;
            left: 0;
            margin-top: -2.5%; 
            margin-left: -5%; 
          }

          #row-bottom {
            margin-top: -7.5%;
            margin-left: 2.5%;
          }
        }
      </style>

      <div id="bg">
        <div id="row-top">
          <img class="hero-keyboard" src="./images/hero/hero-keyboard.png" alt="Picture of a computer keyboard">
          <img class="hero-mouse" src="./images/hero/hero-mouse.png" alt="Picture of a computer mouse">
        </div>
        <div id="row-bottom">
          <img class="hero-controller" src="./images/hero/hero-controller.png" alt="Picture of a video game controller">
        </div>
      </div>
    `);
  }
}

customElements.define("drh-background", DrhBackground);
