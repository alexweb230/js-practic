class Video {
    constructor(options) {
        this.$parentId = document.querySelector(options.parentId);
        this.width = options.width;
        this.maxheight = options.maxheight;
        this.maxwidth = options.maxwidth;
        this.mute = options.mute = false;
    }

    // метод  преоброзование из колекции в массив
    static arrBuild(arg) {
        return Array.from(arg);
    }

    //еллементы  разметки DOM
    get videoPlayer() {
        return document.querySelector(`#${this.$parentId.id} .video`);
    }

    get playPaused() {
        return document.querySelector(`#${this.$parentId.id} .but-play`);
    }

    get progressBar() {
        return document.querySelector(`#${this.$parentId.id} .progress`);
    }

    get curtimetext() {
        return document.querySelector(`#${this.$parentId.id} .time .current-time`);
    }

    get durtimetext() {
        return document.querySelector(`#${this.$parentId.id} .time .duration-time`);
    }

    get range() {
        return document.querySelector(`#${this.$parentId.id} .range-box`);
    }

    //шаблон разметки
    controlTemplate = ` 
                        <button class="but-play"></button>
                        <div class="volume">
                            <button class="btn-volume"></button>
                            <div class="range-box hidden">
                                <div class="range"></div>
                            </div>
                        </div>
                        <div class="time">
                           <small class="current-time"></small> 
                           &nbsp;/&nbsp;
                           <small class="duration-time"></small>
                        </div>
                        <div class="progress-bar">
                            <div class="progress"></div>
                        </div>
                         <div>sss</div>
                    `;

    //добавление и настройки плеера
    addVideo() {
        let player = document.createElement('video');
        player.className = 'video';
        player.src = this.$parentId.dataset.src;
        this.$parentId.prepend(player);
        this.$parentId.style.width = this.width;
        this.$parentId.style.maxHeight = this.maxheight;
        this.$parentId.style.maxWidth = this.maxwidth;

    }

    // добавляет разметку контрольной панели
    addControls() {
        let controls = document.createElement('div');
        controls.className = 'video-player--controls';
        controls.innerHTML = this.controlTemplate;
        this.$parentId.append(controls);
    }

    // кнопки play
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

    // прогресс бар
    progress() {

        this.videoPlayer.addEventListener('canplay', () => {
            this.canPlayVideo();
        });

        this.videoPlayer.addEventListener('timeupdate', () => {
            let prog = this.videoPlayer.currentTime / this.videoPlayer.duration;
            this.progressBar.style.width = `${prog * 100}%`;
            if (this.videoPlayer.ended) {
                this.playPaused.classList.remove('is--played');
                this.$parentId.classList.remove('is--played');
            }
            this.canPlayVideo();

        });

        this.scrub();
    }

    // таймер
    canPlayVideo() {
        let curmins = Math.floor(this.videoPlayer.currentTime / 60),
            cursecs = Math.floor(this.videoPlayer.currentTime - curmins * 60),
            durmins = Math.floor(this.videoPlayer.duration / 60),
            dursecs = Math.floor(this.videoPlayer.duration - durmins * 60);
        if (cursecs < 10) {
            cursecs = '0' + cursecs;
        }
        if (dursecs < 10) {
            dursecs = '0' + dursecs;
        }
        this.curtimetext.innerHTML = curmins + ':' + cursecs;
        this.durtimetext.innerHTML = durmins + ':' + dursecs;
    }

    //перетягивание ползунка
    scrub() {
        let progress = this.progressBar.parentNode;
        let mouse = false;
        let scb = e => {
            let scrubTime = (e.offsetX / progress.offsetWidth) * this.videoPlayer.duration;
            this.videoPlayer.currentTime = scrubTime;
        }
        progress.addEventListener('click', scb);
        progress.addEventListener('mousemove', e => mouse && scb(e));
        progress.addEventListener('mousedown', () => mouse = true);
        progress.addEventListener('mouseup', () => mouse = false);
    }

    //volume
    volume() {
        let btnMove = this.range.querySelector('.range');
        let btnVol = this.$parentId.querySelector('.btn-volume');
        let mouse = false;
        this.videoPlayer.volume = '0.6';
        btnVol.dataset.vol = 'middle';
        btnMove.style.height = '60%';
        if(this.mute){
            btnVol.dataset.vol = 'low';
            btnMove.style.height = '0';
            this.videoPlayer.volume = '0';
        }

        let rangeMove = e => {
            let offset = this.range.offsetHeight;
            let different = `${((offset - e.offsetY) / offset) * 100}`;
            mouse = true;
            btnMove.style.height = `${different}%`;

            let num = different / 100;
            let vol = this.videoPlayer.volume = num.toFixed(1);

            if (vol == 0.1) {
                btnVol.dataset.vol = "low";
            } else if (vol == 0.6) {
                btnVol.dataset.vol = "middle";
            } else if (vol  == 0.9) {
                btnVol.dataset.vol = "large";
            }
        }

        this.range.addEventListener('mousedown', rangeMove);
        this.range.addEventListener('mousemove', e => mouse && rangeMove(e));
        this.range.addEventListener('mouseup', () => mouse = false);
        this.range.addEventListener('mouseout', () => mouse = false);

        btnVol.addEventListener('click', () => this.range.classList.toggle('hidden'));
    }

    // инит  плеера
    init() {
        this.addVideo();
        this.addControls();
        this.play();
        this.progress();
        this.volume();
    }
}

// инит  плеера
const video = new Video({
    parentId: '#video',
    width: '100%',
    maxwidth: '1000px',
    maxheight: '500px',
    mute: false

}).init();
// инит  плеера 2
// const video2 = new Video({
//     parentId: '#video-2',
//     width: '100%',
//     maxwidth: '1000px',
//     maxheight: '500px',
//     volume:'0.5'
//
// }).init();










