class Tabs {
    constructor(options){
        this.event = options.event
        this.parent = options.parent
    }
    get navItem(){
        return document.querySelectorAll(`#${this.parent} .tabs-nav li`);
    }
    events(){

        this.navItem.forEach((item, index, array) => {
            item.addEventListener(this.event, e => {
                e.preventDefault();
                array.forEach(ar => ar.classList.remove('is--active'));
                item.classList.add('is--active');
            });

        });

    }
    init(){
        this.events();
    }
}

const tabs = new Tabs({
    event: 'click',
    parent: 'tabs'
});
tabs.init();