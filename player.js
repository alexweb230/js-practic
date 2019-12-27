class Video {
    constructor(options) {
        this.$parentId = document.querySelector(options.parentId);
    }

    video;
    controlElement = {
        btnPlay: '<button class="but-play">play</button>',
        small: '<small> </small>'
    };

    addVideo() {
        let player = document.createElement('video');
        player.src = this.$parentId.dataset.src;
        this.$parentId.prepend(player);
        this.video = player;
    }

    addControls() {
        let controls = document.createElement('div');
        controls.className = 'video-player-controls';
        let control;
        for (let it in this.controlElement) {
            control = this.controlElement[it];
            console.log(control);
        }
         controls.innerHTML = control;

        this.$parentId.append(controls);


    }


    playVideo() {
        console.log(this.controlElement)
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