     function playSound(e) {
          const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
          const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
          console.log(key);
          console.log(audio);
          if(!audio) return;
          audio.currentTime = 0;
          audio.play();
          key.classList.add('playing');
     };

     function removeTransition(e) {
          console.log(e.propertyName);
          if (e.propertyName !== 'transform') return;
          e.target.classList.remove('playing');
     }

     const keys = document.querySelectorAll('.key');
     keys.forEach(key => key.addEventListener('transitionend', removeTransition));
     window.addEventListener("keydown", playSound);