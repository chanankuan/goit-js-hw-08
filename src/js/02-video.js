import throttle from 'lodash.throttle';

const KEY_LS = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = JSON.parse(localStorage.getItem(KEY_LS));

const onPlay = function (data) {
  localStorage.setItem(KEY_LS, JSON.stringify(data.seconds));
};

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(onPlay, 1000));
