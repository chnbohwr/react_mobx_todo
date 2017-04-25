import { observable } from 'mobx';

class App {
    @observable todoList = [];
}

const store = new App();

export default store;
