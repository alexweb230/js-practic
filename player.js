class Video {
    constructor(options) {
        this.$parentId = document.querySelector(options.parentId);
    }

    addVideo(){

        console.log('add')
    }


    init() {
        this.addVideo();
    }
}

const video = new Video({
    parentId: '#video'
}).init();