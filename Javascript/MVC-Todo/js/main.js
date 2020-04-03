class Model {
	cosntructor () {
		this.todo = [
			{id: 1, text: 'Learn to code', complete: false},
			{id: 2, text: 'Read a book', complete: false},
		]
	}
}

class View {
	cosntructor() {

	}
}

class Controller {
	cosntructor(model, view) {
		this.model = model;
		this.view = view;
	}
}

const app = new Controller(new Model(), new View());