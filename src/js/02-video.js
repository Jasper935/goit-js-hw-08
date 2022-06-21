import Player from '@vimeo/player'
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlayer = function (data) {

    localStorage.setItem('videoplayer-current-time', data.seconds)
}
player.on('timeupdate', throttle(onPlayer), 1000)

const timeFromStorage =localStorage.getItem('videoplayer-current-time')
if(timeFromStorage){

    player.setCurrentTime(timeFromStorage)
}
