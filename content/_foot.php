    <span id="scripts">
      <?php
      scan("./js/", $writeJS, $code); 
      ?>
      <script type="text/javascript">
        window.onload = () => { 
          Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => { 
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
            const isMacOS = /Macintosh|Mac OS X/i.test(userAgent);
            const ios = isIOS || isMacOS;
            if (ios) {
              document.body.classList.add('ios');
              document.querySelector("drh-header").classList.add("ios");
              document.querySelector("#background").classList.add("ios");
              document.querySelector("drh-typewriter").classList.add("ios");
              document.querySelector("drh-gradient").classList.add("ios");
            }
            document.body.classList.add("ready"); 
            document.querySelector("#background").classList.add("ready");
            setTimeout(() => document.querySelector("drh-spinner").hide(), 250);
          }); 
          function scrollToAnchor() {
            const hash = window.location.hash;
            if (hash && document.querySelector(hash)) {
              setTimeout(function() {
                const target = document.querySelector(hash);
                const offsetPosition = target.offsetTop;
                const main = document.querySelector("main");
                main.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }, 10);
            }
          }
          window.addEventListener('load', scrollToAnchor);
          window.addEventListener('hashchange', scrollToAnchor);          
        }
      </script>
    </span>
  </body>
</html>