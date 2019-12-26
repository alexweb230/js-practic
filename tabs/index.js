class Tabs {
    constructor(options){
        this.event = options.event;
        this.parent = options.parent;
    }
    get navItem(){
        return document.querySelectorAll(`${this.parent} .tabs-nav li`);
    }
    get  tabsBox(){
        return document.querySelectorAll(`${this.parent} .tabs-box .tabs-box--item`);
    }
    events(){

        this.navItem.forEach((item, index, array) => {
            item.addEventListener(this.event, e => {
                e.preventDefault();
                array.forEach(ar => ar.classList.remove('is--active'));
                item.classList.add('is--active');

                this.tabsBox.forEach((t, ind) => {
                    t.classList.remove('is--active');
                    if(index === ind){
                        t.classList.add('is--active');
                    }
                });

            });

        });

    }
    init(){
        this.events();
    }
}

const tabs = new Tabs({
    event: 'click',
    parent: '#tabs'
});
tabs.init();


const tabs2 = new Tabs({
    event: 'mouseover',
    parent: '#tabs2'
});
tabs2.init();
















