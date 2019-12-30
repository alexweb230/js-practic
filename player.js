class Video {
    constructor(options) {
        this.$parentId = document.querySelector(options.parentId);
    }

    arrBuild(arg) {
        return Array.from(arg);
    }

    video;

    controlTemplate = ` <button class="but-play is-paused">sss</button>
                    <small>sss</small>
                    <small>sss</small>
                    <small>sss</small>
                     <div>sss</div>`;


    addVideo() {
        let player = document.createElement('video');
        player.src = this.$parentId.dataset.src;
        this.$parentId.prepend(player);
        this.video = player;
    }

    addControls() {
        let controls = document.createElement('div');
        controls.className = 'video-player--controls';
        controls.innerHTML = this.controlTemplate;
        this.$parentId.append(controls);
    }


    play() {
         this.$parentId.addEventListener('click', e => {
             let target = e.target;
             if(target === this.video){
                 this.video.play();
                 console.log(this)
             }

         });
    }




    init() {
        this.addVideo();
        this.addControls();
        this.play();
    }
}

const video = new Video({
    parentId: '#video'
}).init();