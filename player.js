class Video {
    constructor(options) {
        this.$parentId = document.querySelector(options.parentId);
        this.width = options.width;
        this.maxheight = options.maxheight;
        this.maxwidth = options.maxwidth;
    }

    static arrBuild(arg) {
        return Array.from(arg);
    }

    get videoPlayer() {
        return document.querySelector(`#${this.$parentId.id} .video`);
    }

    get playPaused() {
        return document.querySelector(`#${this.$parentId.id} .but-play`);
    }

    get progressBar() {
        return document.querySelector(`#${this.$parentId.id} .progress`);
    }
    get time() {
        return document.querySelector(`#${this.$parentId.id} .time`);
    }


    controlTemplate = ` <button class="but-play"></button>
                        <div class="time"></div>
                        <div class="progress-bar">
                            <div class="progress"></div>
                        </div>
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
        this.$parentId.addEventListener('click', e => {
            let target = e.target;
            if (target === this.videoPlayer || target === this.playPaused) {
                if (this.videoPlayer.paused) {
                    this.videoPlayer.play();
                    this.playPaused.classList.add('is--played');
                    this.$parentId.classList.add('is--played');
                } else if (this.videoPlayer.played) {
                    this.videoPlayer.pause();
                    this.playPaused.classList.remove('is--played');
                    this.$parentId.classList.remove('is--played');
                }

            }

        });
    }

    progress() {
        this.time.textContent = this.videoPlayer.currentTime;

        this.videoPlayer.addEventListener('timeupdate', () => {
            let prog = this.videoPlayer.currentTime / this.videoPlayer.duration;
            this.progressBar.style.width = `${prog * 100}%`;
            if (this.videoPlayer.ended) {
                this.playPaused.classList.remove('is--played');
                this.$parentId.classList.remove('is--played');
            }
            this.time.textContent = Math.floor(this.videoPlayer.currentTime);
            console.log(this.time);
        });
    }


    init() {
        this.addVideo();
        this.addControls();
        this.play();
        this.progress();

    }
}

const video = new Video({
    parentId: '#video',
    width: '100%',
    maxwidth: '1000px',
    maxheight: '500px'

}).init();