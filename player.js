class Video {
    constructor(options) {
        this.$parentId = document.querySelector(options.parentId);
        this.width = options.width;
    }

    arrBuild(arg) {
        return Array.from(arg);
    }


    controlTemplate = ` <button class="but-play is-paused">sss</button>
                    <small>sss</small>
                    <small>sss</small>
                    <small>sss</small>
                     <div>sss</div>`;


    addVideo() {
        let player = document.createElement('video');
        player.className = 'video';
        player.src = this.$parentId.dataset.src;
        this.$parentId.prepend(player);
        player.style.width = this.width;

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
            let btn = document.querySelector(`#${this.$parentId.id} .but-play`);
            let player = document.querySelector(`#${this.$parentId.id} .video`);

            if (target === player || target === btn) {
                player.play();
                console.log(btn)
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
    width: '100%'

}).init();