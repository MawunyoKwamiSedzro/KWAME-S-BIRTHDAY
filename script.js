<script>

const song = document.getElementById('song');

const btn = document.getElementById('playBtn');

const status = document.getElementById('status');
 
btn.addEventListener('click', async () => {

  try {

    if (song.paused) {

      await song.play();

      btn.textContent = '⏸ Pause Song';

      status.textContent = 'Your birthday song is playing ♥';

    } else {

      song.pause();

      btn.textContent = '🎵 Click to Play';

      status.textContent = 'Song paused — tap to continue.';

    }

  } catch (e) {

    status.textContent = 'Tap the button again to start the song.';

  }

});

song.addEventListener('ended', () => {

  btn.textContent = '🎵 Play Again';

  status.textContent = 'Your birthday song has finished. ♥';

});
</script>
</body>
</html>

 