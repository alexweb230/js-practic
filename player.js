class Video {
    constructor(options) {
        this.$parentId = document.querySelector(options.parentId);
    }

    get buttonPlay(){
        return document.querySelector(`${this.$parentId}`);
    }



    addVideo() {
        let player = document.createElement('video');
        player.src = this.$parentId.dataset.src;
        this.$parentId.prepend(player);
    }

    addControls() {
        let controls = document.createElement('div');
        controls.className = 'video-player-controls';
        controls.innerHTML = '<button class="but-play">play</button>';

        this.$parentId.append(controls);

        console.log(this.buttonPlay)

    }

    playVideo(){
        this.$parentId.addEventListener('click',  e => {
            let target = e.target;
            if(target === this.buttonPlay){
                console.log('test');
            }
        })
    }


    init() {
        this.addVideo();
        this.addControls();
        // this.playVideo();
    }
}

const video = new Video({
    parentId: '#video'
}).init();