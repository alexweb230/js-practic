class Video {
    constructor(options) {
        this.$parentId = document.querySelector(options.parentId);
        this.width = options.width;
        this.maxheight = options.maxheight;
        this.maxwidth = options.maxwidth;
    }

    arrBuild(arg) {
        return Array.from(arg);
    }

    videoPlayer;


    controlTemplate = ` <button class="but-play">sss</button>
                    <small>sss</small>
                    <small>sss</small>
                    <small>sss</small>
                     <div>sss</div>`;


    addVideo() {
        let player = document.createElement('video');
        player.className = 'video';
        player.src = this.$parentId.dataset.src;
        this.$parentId.prepend(player);
        this.$parentId.style.width = this.width;
        this.$parentId.style.maxHeight = this.maxheight;
        this.$parentId.style.maxWidth = this.maxwidth;

    }

    addControls() {
        let controls = document.createElement('div');
        controls.className = 'video-player--controls';
        controls.innerHTML = this.controlTemplate;
        this.$parentId.append(controls);
    }


    play() {
        this.videoPlayer = document.querySelector(`#${this.$parentId.id} .video`);
        let btn = document.querySelector(`#${this.$parentId.id} .but-play`);
        this.$parentId.addEventListener('click', e => {
            let target = e.target;
            if (target === this.videoPlayer && this.videoPlayer.paused || target === btn && this.videoPlayer.paused) {
                this.videoPlayer.play();
                btn.classList.add('is--played');
                this.$parentId.classList.add('is--played');
            } else {
                this.videoPlayer.pause();
                btn.classList.remove('is--played');
                this.$parentId.classList.remove('is--played');
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
    parentId: '#video',
    width: '100%',
    maxwidth: '1000px',
    maxheight: '500px'

}).init();