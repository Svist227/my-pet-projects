const rootSelector  = '[data-js-video-player]'

class VideoPlayer{
   selectors = {
    root: rootSelector,
    video: '[data-js-video-player-video]',
    playButton: '[data-js-video-player-play-button]'
   }

   stateClasses = {
    isActive: 'is-active',
   }

   constructor(rootElement) {
    this.rootElement = rootElement
    this.videoElement = this.rootElement.querySelector(this.selectors.video)
    this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton)
    this.bindEvents()
}

    onPlayButtonClick = () => {
        this.videoElement.play()  // встроенный метод запуска видео ( по клику по кнопке)
        this.videoElement.requestFullscreen() // открытие полного экрана видео
        this.videoElement.controls = true // отображение элемента плеера
        this.playButtonElement.classlist.remove(this.stateClasses.isActive)
    }
    
    onVideoPause = () => {
    this.videoElement.controls = false // скрытие эелементов плеера
    this.playButtonElement.classlist.add(this.stateClasses.isActive)                                                  
    }

    onVideoFullScrennChange =() => {
        const isFullScrennEnabled = document.fullscreenElement === this.videoElement
        if (!isFullScrennEnabled){
            this.videoElement.pause()
        }
    }

   bindEvents(){
    this.playButtonElement.addEventListener('click', this.onPlayButtonClick)
    this.videoElement.addEventListener('pause', this.onVideoPause)
    this.videoElement.addEventListener('fullscreenchange',this.onVideoFullScrennChange )
   }
}
class VideoPlayerCollection {
    constructor(){
        this.init()
    }

    init(){
        document.querySelectorAll(rootSelector).forEach((element, index) =>{
            new VideoPlayer(element)

        })
    }

}

export default VideoPlayerCollection