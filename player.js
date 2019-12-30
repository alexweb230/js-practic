class Video {
    constructor(options) {
        this.$parentId = document.querySelector(options.parentId);
    }

    video;
    controls;

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
        this.controls = document.createElement('div');
        this.controls.className = 'video-player--controls';
        this.controls.innerHTML = this.controlTemplate;
        this.$parentId.append(this.controls);
    }

    get controlElements(){
        return document.querySelector(`${this.$parentId}`);

    }






    playVideo() {
        this.controlElements;
    }


    init() {
        this.addVideo();
        this.addControls();
        this.playVideo();
    }
}

const video = new Video({
    parentId: '#video'
}).init();