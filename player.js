class Video {
    constructor(options) {
        this.$parentId = document.querySelector(options.parentId);
    }

    get controlsPanel() {
        return ` <div class="video-player-controls">
                    <button class="but-play">play</button>
                 </div>`
    }

    addVideo() {
        let player = document.createElement('video');
        player.src = this.$parentId.dataset.src;
        this.$parentId.prepend(player);
    }

    addControls() {
        this.$parentId.append(this.controlsPanel);
    }


    init() {
        this.addVideo();
        this.addControls();
    }
}

const video = new Video({
    parentId: '#video'
}).init();