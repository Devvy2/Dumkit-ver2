let playlist = [
  { name: "clap", src: "sounds/clap.wav", key: "a" },
  { name: "hihat", src: "sounds/hihat.wav", key: "s" },
  { name: "kick", src: "sounds/kick.wav", key: "d" },
  { name: "openhat", src: "sounds/openhat.wav", key: "f" },
  { name: "ride", src: "sounds/ride.wav", key: "q" },
  { name: "snare", src: "sounds/snare.wav", key: "w" },
  { name: "tink", src: "sounds/tink.wav", key: "e" },
  { name: "tom", src: "sounds/tom.wav", key: "r" },
];

function playSound(soundSrc) {
  var audio = new Audio(soundSrc);
  audio.play();
}

function createSoundButtons() {
  const soundButtonsDiv = document.getElementById("soundButtons");

  playlist.forEach((sound) => {
    const button = document.createElement("button");
    button.textContent = `${sound.name} (${sound.key.toUpperCase()})`;
    button.addEventListener("click", () => playSound(sound.src));
    soundButtonsDiv.appendChild(button);

    document.addEventListener("keydown", (event) => {
      if (event.key === sound.key) {
        playSound(sound.src);
      }
    });
  });
}

createSoundButtons();
