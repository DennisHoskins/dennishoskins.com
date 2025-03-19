import _DrhComponent from "../_drh_component.js";

export default class DrhUglyMain extends _DrhComponent {

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

        #no-scroll {
          position: absolute;
          left: 0;
          top: 0;
          width: 120%;
          height: 100%;
          background: #eaeaea;
          z-index: 0;
        }

        :host(.no-scroll) #no-scroll {
          display: block;
        }

        .wrap { 
          z-index: 1;
          background: white; 
        }

        .content { 
          padding-bottom: 2em; 
          display: flex;
          flex-direction: column;
        }

        .margin-bottom { margin-bottom: 1em; }

        .flex { display: flex; }

        h3 { 
          margin-top: 1.5em; 
          font-size: var(--font-size-med-large);
        }

        span { display: inline-block; }

        video {
          display: inline-block;
          width: 7.5em;
          height: 7.5em;
          object-fit: cover;
          box-sizing: border-box;
          border: 5px solid white;
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);
        }

        video.video-wide {
          width: 16em;
          height: 10em;
        }

        span.video-wide { 
          width: 16em; 
          flex-wrap: wrap;
        }

        .full { width: 100%; }

        .double { 
          width: 100%;
          height: auto;
          aspect-ratio: 1;
          flex-grow: 1;
        }

        .triple { 
          width: calc(33% - 2em);
          height: auto;
          aspect-ratio: 1;
          flex-grow: 1;
        }

        .short { height: 12.5em; }

        #hero-video {
          float: left;
          margin: 0 1em 1em 0;
        }

        .video-left { 
          float: left; 
          margin: 0 1em 1em 0;
        }

        .video-right { 
          float: right; 
          margin: 0 0 1em 1em;
        }

        .video-right:first-of-type { margin-right: 0; }

        .no-margin-right { margin-right: 0; }

        iframe {
          border: none;
          width: 100%;
          height: 25em;
          margin-top: 2em;
          position: relative;
          z-index: 2;
          border: 1px solid var(--color-border);
          box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.333);
        }

        #hero-video { height: 10.5em; }

        #intro { margin-top: 1.25em; }

        #how-it-started { flex-wrap: wrap; }

        #how-it-started video { width: calc(50% - 1em); }

        #how-it-started video:first-of-type { margin-left: 0; }

        #how-it-started p {
          order: 3;
          width: 100%;
          margin: 0;
        }

        #hypothetical-third-dimension { flex-wrap: wrap; }

        #hypothetical-third-dimension video { margin-bottom: 0; }

        #hypothetical-third-dimension p { margin-top: 1em; }

        #putting-it-all-together video { height: auto; }

        #putting-it-all-together video:last-of-type { margin-bottom: 0; }

        #ugly-studio { flex-wrap: wrap; }

        #ugly-studio p { margin-bottom: 1em; }

        #ugly-studio span.video-wide { width: 100%; } 

        #ugly-studio span.video-wide span { width: 100%; } 

        #ugly-studio span.video-wide video { width: calc(50% - 0.5em); } 

        #ugly-studio span.video-wide video:first-of-type { margin-left: 0; } 

        #ugly-studio span.video-wide video.video-wide { 
          width: 100%; 
          height: auto;
          margin-bottom: 0;
        } 

        #future-is-ugly video { 
          margin-top: 1em;
          width: 100%; 
          height: auto;
        }

        @media (min-width: 800px) {
           video {
            width: 12em;
            height: 15em;
          }

          video.video-wide {
            width: 25em;
            height: 15em;
          }

          .video-right { margin: 0 0 1.5em 1.25em; }

          .video-right:first-of-type { margin-right: 0; }

          span.video-wide { width: 27em; }

          .double { width: calc(50% - 1em); }

          .short { height: 25em; }

          #hero-video { 
            height: 13em; 
            margin-right: 1.25em;
          }

          #how-it-started p { margin: 0; }

          #how-it-started video { flex-grow: 1; }

          #hypothetical-third-dimension { flex-wrap: nowrap; }

          #hypothetical-third-dimension video { 
            margin-right: 1.25em;
            margin-bottom: 0;
            height: 100%; 
            object-position: center left;
          }

          #hypothetical-third-dimension p { margin-top: 0; }

          #ugly-studio span.video-wide video { height: 25em; } 
        }        

        @media (min-width: 1024px) {
          #intro { margin-top: 0; }
        }

        @media (min-width: 1200px) {
          .content { padding-bottom: 2.5em; }

          video { height: 20em; }

          .video-right { margin: 0 0 1em 1em; }

          video.video-wide {
            width: 16em;
            height: 16em;
          }

          #hero-video { 
            height: 11.5em; 
            margin-right: 1em;
          }

          #hypothetical-third-dimension p { margin-top: 0; }

          #hypothetical-third-dimension video { height: 27.5em; } 

          iframe { height: 40em; }
        }
      </style>

      <div id="no-scroll"></div>
      <div class="wrap">
        <div class="content">
          <h2 class="title">Ugly Game Loves You</h2>
          <p>
            <video preload="auto" autoplay loop muted playsinline id="hero-video">
              <source src="images/index/ugly/ugly.webm" type="video/webm">
              <source src="images/index/ugly/ugly.mp4" type="video/mp4">
            </video>

            <a href="https://uglylittlegames.com" rel="noopener" target="_blank">UGLY</a> is a vanilla JavaScript 2.5D game engine and development environment I'm building.
            An equal mix of art and imagination and tech, it really is a labor of love for me. Making it makes me happy.
            <br><br>
            UGLY is also a huge learning experience.
            None of this stuff is easy, and some of it really pushed my limits.
            I had to become a better programmer to bring my ideas to life.
            It took years of experiments and testing out different approaches, trying and failing over and over, until eventually I found the things that work.
          </p>

          <p id="intro">
            My original code is a bit of a mess and I'm currently rebuilding it from the ground up.
            I can't wait until I can show my finished vision to people.
            Until then, here is some information about the beginning and background of the project.
          </p>

          <h3>How It Started</h3>
          <p class="margin-bottom">
            I was writing some code for a client web project and they needed custom programmable 2D graphics for something or another.
            I looked around and <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D" target="_blank" rel="noopener">Canvas2D</a> was the right solution,
            and I liked working with it right away.
            It is easy to code to, very light weight, and built into pretty much every web browser everywhere, so it's massively available.
            It has a few <a href="https://stackoverflow.com/questions/19319963/how-to-avoid-seams-between-filled-areas-in-canvas" target="_blank" rel="noopener">quirks</a> that seem like dealbreakers,
            but I eventually figured out a bunch of stackable tricks to get around most limitations.
            <br><br>
            I'm an <a href="job.php?design" target="_blank">artist</a> and a <a href="https://youtu.be/HwqJ6ByKCK4" target="_blank" rel="noopener">musician</a>, and a lifelong gamer.
            I learned to love code by writing simple games when I was a kid.
            For a very long time since then I have dreamed of making something bigger and more engaging, the kind of thing I would love to play myself.
            After I spent some time learning the Canvas API, those creaky old wheels in my head started turning again: <strong>I should make a game</strong>.
          </p>

          <span id="how-it-started" class="flex">
            <p class="video-left">
              I have a solid 2D graphics background so it didn't take long to achieve fun results.
              Simple, colorful little blocks moving around in a world with gravity and basic collision physics proved to be surprisingly satisfying.
              Even more so after I gave those blocks distinctive looks and tiny bits of personality.
              When I showed people, they chose favorites and showed signs of attachment right away.
              Pretty cool and very encouraging.
            </p>

            <video autoplay loop muted playsinline class="video-right">
              <source src="images/ugly/ugly_0.webm" type="video/webm">
              <source src="images/ugly/ugly_0.mp4" type="video/mp4">
            </video>

            <video autoplay loop muted playsinline class="video-right">
              <source src="images/ugly/ugly_1.webm" type="video/webm">
              <source src="images/ugly/ugly_1.mp4" type="video/mp4">
            </video>
          </span>

          <h3>UGLY Evolves</h3>
          <p class="margin-bottom">
            With the building blocks in place, I spent a lot of time making things look and feel nice. 
            I developed code to smoothly join all those smaller blocks into organic looking shapes, and more code to join those shapes into organic looking levels and items and characters.
            I added procedural textures and random decorations to keep the world feeling fresh.
            I wrote a keyframe lerping animation system that brings everything to life.
          </p>

          <span class="flex">
            <video autoplay loop muted playsinline class="video-left triple">
              <source src="images/ugly/ugly_2.webm" type="video/webm">
              <source src="images/ugly/ugly_2.mp4" type="video/mp4">
            </video>

            <video autoplay loop muted playsinline class="video-left triple">
              <source src="images/ugly/ugly_3.webm" type="video/webm">
              <source src="images/ugly/ugly_3.mp4" type="video/mp4">
            </video>

            <video autoplay loop muted playsinline class="video-left triple no-margin-right">
              <source src="images/ugly/ugly_4.webm" type="video/webm">
              <source src="images/ugly/ugly_4.mp4" type="video/mp4">
            </video>
          </span>

          <p id="ugly-evolves">
            I was working on the math to add convincing parallax to the background layers and I had a dumb idea: <strong>What if I added single vanishing point perspective?</strong>
            Once I thought of it, I couldn't stop thinking about it.
            After all, it would add a certain depth to the world that I felt it was currently missing. How hard could it be? 
          </p>

          <h3>The Hypothetical Third Dimension</h3>

          <p class="margin-bottom">
            Moving from 2D to 3D. Sounds easy. It's just one more D, right?
            Well, Canvas2D has no <a href="https://en.wikipedia.org/wiki/Z-buffering" target="_blank" rel="noopener">Z Buffer</a>, so it turns out that it isn't easy. At all.
            In fact, it's a pretty unsolved problem in the world of computer graphics, one of the many reasons GPUs are a thing, and why nobody does this the way I am doing it. 
          </p>

          <span id="hypothetical-third-dimension" class="flex">
            <video autoplay loop muted playsinline class="video-left double">
              <source src="images/ugly/ugly_7.webm" type="video/webm">
              <source src="images/ugly/ugly_7.mp4" type="video/mp4">
            </video>

            <p>
              Many (much smarter) people before me have tried to figure this out, and research brought me to the <a href="https://en.wikipedia.org/wiki/Painter%27s_algorithm" target="_blank" rel="noopener">Painter's Algorithm</a>,
              which can be summed up like this: Draw the scene from the back to the front.
              Seems obvious, but that isn't so easy either.
              <br><br>
              Before they can be rendered, geometries need to be divided into non-overlapping and non-intersecting chunks or else you get a ton of nasty overdrawing and z fighting.
              I don't want to think about polygon sorting rules when I'm designing levels,
              so I wrote a set of pre-compilers that automatically do all the tedious polysplitting (and reassembling) for me.
              Every draw call counts, so the fewer polygons the better.
              It took a while, but I eventually landed on a system that builds and sorts and runs fast. 
            </p>
          </span>

          <h3>Putting It All Together</h3>
          <span id="putting-it-all-together">
            <p class="margin-bottom">
              A bit (ok a lot) more work later and I merged my codebases and brought both worlds together.
              All my little 2D cartoon guys now had a perspective correct 3D playground to run around in.
              They seem to like it so far.
            </p>

            <video autoplay loop muted playsinline class="video-left full short no-margin-right">
              <source src="images/ugly/ugly_5.webm" type="video/webm">
              <source src="images/ugly/ugly_5.mp4" type="video/mp4">
            </video>

            <p class="margin-bottom">
              I'm a sucker for a nice tilt shift, 
              so I added a dynamic, progressive field of view blur that obscures and fades things in the distance and immediate foreground.
              It adds an unexpected cinematic feel, and prevents things from looking too much like circa 2005 Flash games.
              I also like how it forces you to focus on the action, with the tantalizing knowledge that something else is going on in the background, a whole world to explore off in the distance.
              It makes me want to know more.
            </p>

            <video autoplay loop muted playsinline class="video-left full short no-margin-right">
              <source src="images/ugly/ugly_6.webm" type="video/webm">
              <source src="images/ugly/ugly_6.mp4" type="video/mp4">
            </video>
          </span>

          <h3>UGLY Studio</h3>
          <span id="ugly-studio" class="flex">
            <p>
              You need a good set of tools to make things, and UGLY is no different.
              Console logs and breakpoints can only take you so far.
              You need to be able to catch errors that don't throw exceptions.
              You need to be able to spot runaway memory leaks no matter how deep they hide themselves.
              For this project I wrote way more development and utility code than actual engine code, and it was worth every keypress.
              <br><br>
              UGLY Studio is my secret weapon that makes everything possible.
              It's a custom development and debugging environment that wraps and extends the UGLY core and gives me real-time insights into what is happening at every level of the game architecture.
              I can inspect and change runtime parameters while it runs, 
              enable and disable data viewers and debuggers,
              add, remove and edit level geometries in real time, and much more.
            </p>

            <span class="video-wide">
              <span class="flex">
                <video autoplay loop muted playsinline class="video-right">
                  <source src="images/ugly/ugly_8.webm" type="video/webm">
                  <source src="images/ugly/ugly_8.mp4" type="video/mp4">
                </video>

                <video autoplay loop muted playsinline class="video-right">
                  <source src="images/ugly/ugly_9.webm" type="video/webm">
                  <source src="images/ugly/ugly_9.mp4" type="video/mp4">
                </video>
              </span>

              <video autoplay loop muted playsinline class="video-right video-wide">
                <source src="images/ugly/ugly_10.webm" type="video/webm">
                <source src="images/ugly/ugly_10.mp4" type="video/mp4">
              </video>
            </span>
          </span>

          <h3>The Future Is UGLY</h3>
          <span id="future-is-ugly">
            <p>
              The first version of my code is so nasty from all the experiments and merges and band aids and just plain broken stuff from when I was learning how to make everything, 
              so in 2025 I started a line zero rewrite focused on cleanliness, performance and extendability.
              It's going very well, but I still have a lot of work ahead of me.
              <br><br>
              Right now, the engine framework is complete.
              It loads and builds and updates and renders level data faster than ever.
              The new camera and DOF blur system is working like a charm, as is the user input code (now with game controller support!).
              UGLY Studio is more flexible and powerful than ever before.
              I still need to reimplement physics and collisions, envirnoment, weather, level details, and everything to do with characters and animation.
              <br><br>
              So yeah, a ton of work left to do.
              But it's OK, I love this stuff. 
              I really do.
              Making it is most of the fun.
            </p>

            <video autoplay loop muted playsinline>
              <source src="images/ugly/ugly_zero.webm" type="video/webm">
              <source src="images/ugly/ugly_zero.mp4" type="video/mp4">
            </video>
          </span>
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

customElements.define("drh-ugly-main", DrhUglyMain);
