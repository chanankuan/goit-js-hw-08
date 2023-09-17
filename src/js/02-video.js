import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const KEY_LS = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(KEY_LS, JSON.stringify(data.seconds));
};

const getCurrentTime = function () {
  return JSON.parse(localStorage.getItem(KEY_LS));
};

player.setCurrentTime(getCurrentTime());
player.on('timeupdate', throttle(onPlay, 1000));
