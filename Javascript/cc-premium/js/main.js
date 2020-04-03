var model = {

	cats: [
		{
			name: "Panny",
			catCount: 0,
			imgSrc: "https://cdn2.thecatapi.com/images/MTg5NjAzMw.jpg"
		},
		{
			name: "Johny",
			catCount: 0,
			imgSrc: "https://cdn2.thecatapi.com/images/MTYxMDIwNw.jpg"
		},
		{
			name: "Devan",
			catCount: 0,
			imgSrc: "https://cdn2.thecatapi.com/images/blr.jpg"
		},
		{
			name: "Deren",
			catCount: 0,
			imgSrc: "https://cdn2.thecatapi.com/images/ch1.gif"
		},
		{
			name: "Dolan",
			catCount: 0,
			imgSrc: "https://cdn2.thecatapi.com/images/79o.jpg"
		}
	],

	currentCat: null


};

var catView = {
	init: function (){
			this.catItem  = document.getElementById('catItem');
			this.catName  = document.getElementById('catName');
			this.catCount = document.getElementById('catCount');
			this.catImage = document.getElementById('catImage');

			this.catImage.addEventListener('click', function(e){
				controller.incrementCounter();
			});
			this.render();
	},

	render: 

};

var controller = {

};