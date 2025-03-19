import _DrhComponent from "../_drh_component.js";

export default class DrhIndexBackground extends _DrhComponent {

  #src = null;
  #cat = null;
  #angle = -45;
  #delay = {
    min: 2500,
    max: 5000
  };
  #animationTap = { name : "tap", animations : ["movein", "tap", "moveout"] };
  #animationBap = { name : "bap", animations : ["movein", "bap", "bap", "tap", "moveout"] };
  #animationHover = { name : "hover", animations : ["movein", "hover", "tap", "moveout"] };
  #animations = [
    this.#animationTap,
    this.#animationTap,
    this.#animationTap,
    this.#animationTap,
    this.#animationBap,
    this.#animationBap,
    this.#animationHover
  ];
  #used = ["./images/index/video/ugly_gang.webm"];
  #timer = null;
  #busy = false;

  constructor() { 
    super(`
      <style>
        :host {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
        }

        #src { display: none; }

        div { 
          aspect-ratio: 1; 
          position: relative;
          width: 100%;
        }

        img { 
          aspect-ratio: 1; 
          width: 100%;
          object-fit: contain;
        }

        #bg {
          width: 350vw;
          height: auto;
          margin-top: 5%; 
          margin-left: -35%; 
          display: flex;
          flex-direction: column;
          transform: translateZ(0.5px) rotate(-7.5deg) scale(1.25);
        }

        :host(.ios) #bg { 
          width: 250vw;
          transform: rotate(-7.5deg); 
        }

        #row-top,
        #row-middle,
        #row-bottom { 
          height: 40%; 
          display: flex;
          flex-direction: row;
        }

        #row-top { margin-left: -5%; }

        :host(.ios) #row-top { margin-left: 20%; }

        #row-middle { 
          margin-top: 5%;
          margin-left: -20%; 
        }

        :host(.ios) #row-middle { margin-top: 12.5%; }

        #row-bottom { margin-top: 2.5%; }

        .hero-video { 
          position: relative; 
          overflow: hidden;
        }

        .hero-video > * { position: absolute; }

        video { 
          object-position: center center;
          background: gray; 
          object-fit: cover;
        }

        .mask {
          display: block;
          background: yellow;
          opacity: 0;
          transition: opacity 500ms ease;
        }

        .mask.showing { opacity: 1; }

        .hero-video img { 
          left: 0;
          top: 0;
          height: 100%;
          object-position: left bottom;
          object-fit: contain;
        }

        @keyframes animateY { 100% { transform: translateY(0); } }
        @keyframes animateX { 100% { transform: translateX(0); } }

        .hero-glasses { 
          opacity: 0;
          width: 12.5%; 
          height: 80%;
          margin-top: 12.5%;
          transform: translateX(-2500px); 
          animation-delay: 0.25s;
        }

        :host(.ios) .hero-glasses { 
          margin-top: -5%;
          margin-right: -30%; 
        }

        :host(.ready) .hero-glasses { animation: animateX 0.5s ease-in-out forwards; }

        .hero-screen { 
          height: 125%;
          top: -20%; 
          left: 5%;
          transform: translateY(-2500px) scale(1.25); 
        }

        :host(.ios) .hero-screen { 
          height: 175%;
          margin-top: -10%;
          margin-left: -10%;
          transform: translateY(-2500px); 
        }

        :host(.ready) .hero-screen { animation: animateYScreen 0.5s ease-in-out forwards; }

        @keyframes animateYScreen { 100% { transform: translateY(0) scale(1.25) } }

        :host(.ready.ios) .hero-screen { animation: animateY 0.5s ease-in-out forwards; }

        .hero-screen > * { width: 155%; }

        .hero-screen video { object-position: -200px center; }

        .hero-screen video,
        .hero-screen .mask { 
          left: 5%;
          top: 4.5%;
          width: 90%;
          height: 87.5%;
        }

        .hero-keyboard {
          width: 90%; 
          margin-left: -30%;
          transform: translateX(-2500px);
          animation-delay: 0.15s;
        }

        :host(.ready) .hero-keyboard { animation: animateX 0.5s ease-in-out forwards; }

        .hero-glasses-mobile  {
          position: absolute;
          width: 30%;
          left: 57.5%;
          top: -20%;
          transform: translateX(2500px) rotate(90deg);
        }

        :host(.ready) .hero-glasses-mobile { animation: animateXGlassesMobile 0.5s ease-in-out forwards; }

        @keyframes animateXGlassesMobile { 100% { transform: translateX(0) rotate(90deg); } }

        .hero-mouse { 
          width: 15%; 
          height: 80%;
          margin-top: 10%;
          transform: translateX(2500px);
          animation-delay: 0.25s;
        }

        :host(.ready) .hero-mouse { animation: animateX 0.5s ease-in-out forwards; }

        .hero-phone {
          width: 25%;
          height: 100%;
          margin-top: -2.5%;
          margin-left: -7.5%;
          transform: translateX(-2500px);
        }

        :host(.ready) .hero-phone { animation: animateX 0.5s ease-in-out forwards; }

        .hero-phone video,
        .hero-phone .mask { 
          left: 50%;
          top: 5%;
          width: 29%;
          height: 85%;
          object-position: center center;
        }

        .hero-tablet { 
          top: 45%;
          left: 5%;
          width: 45%;
          height: 80%;
          transform: rotate(15deg) scale(1.25) translateY(2500px); 
        }

        :host(.ready) .hero-tablet { animation: animateYTablet 0.5s ease-in-out forwards; }

        @keyframes animateYTablet { 100% { transform: rotate(15deg) scale(1.25) translateY(0) } }

        .hero-tablet video,
        .hero-tablet .mask { 
          left: 5%;
          top: 5%;
          width: 82.5%;
          height: 87.5%;
        }

        .hero-controller {
          margin-top: -30%;
          margin-left: -10%;
          width: 40%;
          transform: rotate(15deg) translateX(2500px);
        }

        :host(.ready) .hero-controller { animation: animateX 0.5s ease-in-out forwards; }

        #cat {
          position: absolute;
          transform-origin: bottom center;
          z-index: 999;
          top: 2.5%;
          right: 20%;
          width: 40%;
          transform: rotate(-55deg) translateX(150%);
          filter: drop-shadow(-13px 23px 10px rgba(0, 0, 0, 0.333)) blur(1.5px);
        }

        :host(.ios) #cat { right: 15%; }

        @media (min-width: 768px) {
          #bg { 
            width: 200vw;
            margin-top: 30%; 
            margin-left: 32.5%;
            transform: translateZ(0.5px) rotate(-7.5deg) scale(1.5); 
          }

          :host(.ios) #bg { 
            width: 200vw;
            height: auto;
            margin-top: 20%; 
            margin-left: -45%; 
            transform: rotate(-7.5deg); 
          }

          :host(.ios) #row-top { 
            margin-top: -10%; 
            margin-left: 30%; 
          }

          :host(.ios) #row-middle { 
            margin-top: 1.5%;
            margin-left: 5%; 
          }

          :host(.ios) #row-bottom { margin-left: 20%; }

          video { object-position: center center; }

          .hero-glasses { 
            opacity: 1;
            width: 12.5%; 
            height: 80%;
            margin-top: 12.5%;
            transform: translateX(-2500px); 
            animation: animateY 0.5s ease-in-out forwards;
          }

          :host(.ios) .hero-glasses { 
            margin-left: -10%;
            margin-right: -22.5%;
            margin-top: 10%;
          }

          .hero-glasses-mobile  { display: none; }

          .hero-screen { 
            height: 100%;
            top: -10%; 
            left: 10%; 
            transform: translateY(-2500px) scale(1.25); 
          }

          :host(.ready) .hero-screen { animation: animateYScreen 0.5s ease-in-out forwards; }

          :host(.ios) .hero-screen { 
            width: 80%;
            left: 30%;
            top: -40%;
            transform: translateY(-2500px); 
          }

          :host(.ready.ios) .hero-screen { animation: animateY 0.5s ease-in-out forwards; }

          .hero-mouse { margin-top: 2.5%; }

          #row-middle { 
            margin-top: 0;
            margin-left: -15%; 
          }

          .hero-phone video,
          .hero-phone .mask { 
            left: 15%;
            width: 60%;
          }

          #cat { 
            width: 40%;
            top: -2.5%;
          }

          :host(.ios) #cat { 
            top: -5%; 
            right: -5%;
          }
        }

        @media (min-width: 1024px) {
          #bg { 
            width: 200vw;
            margin-top: -5%; 
            margin-left: 5%;
            transform: translateZ(0.5px) rotate(-7.5deg) scale(1.25); 
          }

        .hero-screen video { object-position: center center; }

          #row-middle { margin-left: -7.5%; }

          #row-bottom { margin-top: 0; }

          #cat { 
            width: 40%;
            top: 2.5%;
            right: 0;
          }
        }

        @media (min-width: 1024px) and (orientation: landscape) {
          :host(.ios) #bg { 
            width: 150vw;
            height: auto;
            margin-top: 5%; 
            margin-left: -35%; 
            transform: rotate(-7.5deg); 
          }

          :host(.ios) #row-middle { margin-left: 20%; }

          :host(.ios) #cat { right: -20%; }
        }

        @media (min-width: 1200px) {
          #bg { 
            margin-top: -20%; 
            margin-left: -25%;
            transform: translateZ(0.5px) rotate(-7.5deg) scale(1); 
          }

          :host(.ios) #bg { 
            width: 150vw;
            height: auto;
            margin-top: 5%; 
            margin-left: -35%; 
            transform: rotate(-7.5deg); 
          }

          #row-top { margin-left: 0; }

          #row-middle { margin-left: 0;  }
        }

        @media (min-width: 1500px) {
          #bg { 
            margin-top: -42.5%; 
            transform: translateZ(0.5px) rotate(-7.5deg) scale(1); 
          }

          :host(.ios) #bg { 
            width: 150vw;
            height: auto;
            margin-top: 5%; 
            margin-left: -35%; 
            transform: rotate(-7.5deg); 
          }

          video { object-position: left center; }

          .hero-screen { 
            top: 10%; 
            left: -5%; 
          }

          @keyframes animateYScreen { 100% { transform: translateY(0) scale(0.9) } }

          #row-top { margin-left: 0; }

          #cat {
            top: 7.5%;
            width: 30%;
          }
        }
      </style>

      <div id="bg">
        <img id="cat" src="images/index/cat.png" alt="Picture of a cat's paw">
        <span id="src"></span>
        <div id="row-top">    
          <img class="hero-glasses" src="images/hero/hero-glasses.png" alt="Picture of a pair of black thick-frame nerd glasses">
          <div class="hero-screen hero-video">
            <video autoplay loop muted playsinline class="main">
              <source class="slideshow-slide-alt-webm" src="./images/index/video/ugly_gang.webm" type="video/webm">
              <source class="slideshow-slide-alt-mp4" src="./images/index/video/ugly_gang.mp4" type="video/mp4">
            </video>
            <span class="mask"></span>
            <img src="images/hero/hero-screen-wide.png" alt="Picture of a computer screen">
          </div>
        </div>
        <div id="row-middle">
          <img class="hero-keyboard" src="images/hero/hero-keyboard.png" alt="Picture of a computer keyboard">
          <img class="hero-glasses-mobile" src="images/hero/hero-glasses.png" alt="Picture of a pair of black thick-frame nerd glasses">
          <img class="hero-mouse" src="images/hero/hero-mouse.png" alt="Picture of a computer mouse">
        </div>
        <div id="row-bottom">
          <div class="hero-phone hero-video">
            <video autoplay loop muted playsinline class="main">
              <source class="slideshow-slide-alt-webm" src="./images/index/video/ugly/ugly.webm" type="video/webm">
              <source class="slideshow-slide-alt-mp4" src="./images/index/video/ugly/ugly.mp4" type="video/mp4">
            </video>
            <span class="mask"></span>
            <img src="images/hero/hero-phone.png" alt="Picture of a mobile phone screen">
          </div>
          <div class="hero-tablet hero-video">
            <video autoplay loop muted playsinline class="main">
              <source class="slideshow-slide-alt-webm" src="./images/index/video/ugly_gang.webm" type="video/webm">
              <source class="slideshow-slide-alt-mp4" src="./images/index/video/ugly_gang.mp4" type="video/mp4">
            </video>
            <span class="mask"></span>
            <img src="images/hero/hero-screen.png" alt="Picture of a tablet screen">
          </div>
          <img class="hero-controller" src="images/hero/hero-controller.png" alt="Picture of a computer gaming controller">
        </div>
      </div>
    `);
    this.query("#src").appendChild(document.createElement("slot"));
    this.#cat = this.query("#cat");
    this.#src = Array.from(this.querySelectorAll("source"));
    this.onclick = () => {
      if (this.#busy) return;
      this.#crossfade("tap", 1);
    }
    this.#crossfade("tap", 3000);
  }

  connectedCallback() {
    const videos = this.queryAll('video');
    videos.forEach(video => {
      video.load();
      video.play().catch(e => console.log('Video play error:', e));
    });              
  }

  async #crossfade(animationname = "", delay = 0) { 
    if (this.#timer) clearTimeout(this.#timer);
    const d = delay ? delay : Math.floor(Math.random() * (this.#delay.max - this.#delay.min + 1) + this.#delay.min);
    this.#timer = setTimeout(async () => {
      if (!document.body.classList.contains("ready")) return this.#crossfade(animationname, d);
      await this.#animate(animationname);
      this.#crossfade();
    }, d);
  }

  async #animate(animationname = "") {
    this.#busy = true;
    return new Promise(async resolve => {
      const animation = animationname ? this.#animations.find(a => a.name === animationname) : this.#animations[Math.floor(Math.random() * this.#animations.length)];
      await this.#run(animation);
      this.#busy = false;
      resolve();
    });
  }

  async #run(animation) { for (let i = 0, t = animation.animations.length; i < t; i++) await this["_" + animation.animations[i]](); }

  async #wait(time) { return new Promise(resolve => setTimeout(() => resolve(), time)); }

  async _movein() {
    const speed =  Math.floor(Math.random() * (300 - 250 + 1) + 250)
    this.#animatecatArm(
      { transform: "translateX(100%)" },
      { transform: "translateX(0)" },
      { duration: speed, easing: "linear", fill: "forwards" }
    );
    const speedwait =  Math.floor(Math.random() * (300 - 250 + 1) + 250)
    return this.#wait(speedwait);
  }

  async _hover() {
    this.#animatecatArm(
      { transform: "" },
      { transform: "scale(1.1)" },
      { duration: 300, easing: "linear" }
    );
    this.#animatecatShadow(
      { filter: "drop-shadow(-17px 27px 15px rgba(0, 0, 0, 0.1))" },
      { filter: "drop-shadow(-13px 23px 10px rgba(0, 0, 0, 0.333))" },
      { duration: 300, easing: "linear" }
    );
    this.#animatecatArm(
      { transform: "scale(1.1)" },
      { transform: "" },
      { duration: 300, easing: "linear" }
    );
    this.#animatecatShadow(
      { filter: "drop-shadow(-13px 23px 10px rgba(0, 0, 0, 0.333))" },
      { filter: "drop-shadow(-17px 27px 15px rgba(0, 0, 0, 0.1))" },
      { duration: 300, easing: "linear" }
    );
    return this.#wait(300);
  }

  async _tap() {
    const speedin =  Math.floor(Math.random() * (400 - 200 + 1) + 200)
    this.#animatecatArm(
      { transform: "" },
      { transform: "scale(0.9)" },
      { duration: speedin, easing: "linear" }
    );
    this.#animatecatShadow(
      { filter: "drop-shadow(-13px 23px 10px rgba(0, 0, 0, 0.333))" },
      { filter: "drop-shadow(-10px 15px 5px rgba(0, 0, 0, 0.5))" },
      { duration: speedin, easing: "linear" }
    );
    this.#swap();
    const speedout =  Math.floor(Math.random() * (400 - 200 + 1) + 200)
    this.#animatecatArm(
      { transform: "scale(0.9)" },
      { transform: "" },
      { duration: speedout, easing: "linear" }
    );
    this.#animatecatShadow(
      { filter: "drop-shadow(-10px 15px 5px rgba(0, 0, 0, 0.5))" },
      { filter: "drop-shadow(-13px 23px 10px rgba(0, 0, 0, 0.333))" },
      { duration: speedout, easing: "linear" }
    );
    const speedwait =  Math.floor(Math.random() * (800 - 600 + 1) + 600)
    return this.#wait(speedwait);
  }

  async _bap() {
    const speedbap =  Math.floor(Math.random() * (100 - 50 + 1) + 50)
    this.#animatecatArm(
      { transform: "" },
      { transform: "scale(0.9)" },
      { duration: speedbap, easing: "linear" }
    );
    this.#animatecatShadow(
      { filter: "drop-shadow(-13px 23px 10px rgba(0, 0, 0, 0.333))" },
      { filter: "drop-shadow(-10px 15px 5px rgba(0, 0, 0, 0.5))" },
      { duration: speedbap, easing: "linear" }
    );
    this.#animatecatArm(
      { transform: "scale(0.9)" },
      { transform: "" },
      { duration: speedbap, easing: "linear" }
    );
    this.#animatecatShadow(
      { filter: "drop-shadow(-10px 15px 5px rgba(0, 0, 0, 0.5))" },
      { filter: "drop-shadow(-13px 23px 10px rgba(0, 0, 0, 0.333))" },
      { duration: speedbap, easing: "linear" }
    );
    const speedwait =  Math.floor(Math.random() * (100 - 50 + 1) + 50)
    return this.#wait(100);
  }

  async _moveout() {
    this.#animatecatArm(
      { transform: "translateX(0)" },
      { transform: "translateX(100%)" },
      { duration: 150, easing: "linear", fill: "forwards" }
    );
    return this.#wait(150);
  }

  #animatecatArm(start, end, options) { 
    start.transform += " rotate(" + this.#angle + "deg)";
    const na = Math.floor(Math.random() * (20 - 1) + 1);
    this.#angle = -65 + na;
    end.transform += " rotate(" + this.#angle + "deg)";
    this.#cat.animate([start, end], options); 
  }

  #animatecatShadow(start, end, options) { 
    start.filter += " blur(1.5px)";
    end.filter += " blur(1.5px)";
    this.#cat.animate([start, end], options); 
  }

  #animatecat(start, end, options) { this.#cat.animate([start, end], options); }

  #swap() {
    const current = this.query("video source").getAttribute("src");
    let next = null;
    while(true) {
      next = this.#src[Math.floor(Math.random() * this.#src.length)].getAttribute("src");
      if (!this.#used.includes(next)) break;
    }
    if (this.#used.length === this.#src.length - 1) this.#used.length = 0;
    this.#used.push(next);
    const name = next.split(".")[1];
    const video = this.query("video");
    video.parentElement.querySelector(".mask").classList.add("showing");
    setTimeout(() => {
      video.querySelectorAll("source").forEach(src => {
        const type = src.getAttribute("src").split(".")[2];
        src.src = "." + name + "." + type;        
      });
      video.load();
      const p = video.play();
      if (p !== undefined) {
        p.then(_ => {})
         .catch(error => {});
      }
      video.parentElement.querySelector(".mask").classList.remove("showing");
    }, 250);
  }

}

customElements.define("drh-index-background", DrhIndexBackground);
