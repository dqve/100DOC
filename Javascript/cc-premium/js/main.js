
/* ======= Model ======= */

var model = {
    currentCat: null,
    adminMode: false,
    cats: [
        {
			name: "Panny",
			clickCount: 0,
			imgSrc: "https://cdn2.thecatapi.com/images/MTg5NjAzMw.jpg"
		},
		{
			name: "Johny",
			clickCount: 0,
			imgSrc: "https://cdn2.thecatapi.com/images/MTYxMDIwNw.jpg"
		},
		{
			name: "Devan",
			clickCount: 0,
			imgSrc: "https://cdn2.thecatapi.com/images/blr.jpg"
		},
		{
			name: "Deren",
			clickCount: 0,
			imgSrc: "https://cdn2.thecatapi.com/images/ch1.gif"
		},
		{
			name: "Dolan",
			clickCount: 0,
			imgSrc: "https://cdn2.thecatapi.com/images/79o.jpg"
		}
    ]
};


/* ======= Octopus ======= */

var octopus = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0]

        // tell our views to initialize
        catListView.init()
        catView.init()
        adminView.init()
    },

    getCurrentCat: function() {
        return model.currentCat
    },

    getCats: function() {
        return model.cats
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++
        catView.render()
    },

    adminMode: function() {
    	model.adminMode = !model.adminMode
    	adminView.render()
    },

    cancelAdd: function() {
    	model.adminMode = !model.adminMode
    	adminView.notRender()
    },

    addCat: function () {
    	var aNewCat = adminView.addNewCat()
    	model.cats.push(aNewCat)
    	catView.render()
    	catListView.render()
    }
};


/* ======= View ======= */

var adminView = {

    init: function() {
        
        // store admin pointers to our DOM elements for easy access later
        this.admin = document.getElementById('admin')
        this.newcatNameElem = document.getElementById('newName')
        this.newcatImageElem = document.getElementById('newUrl')
        this.newCountElem = document.getElementById('newCount')
        this.addNew = document.getElementById('addNew')
        this.cancelAdd = document.getElementById('cancelAdd')
        this.adminMode = document.getElementById('adminMode')

        this.admin.style.display = "none"

        // on click, display admin box
        this.adminMode.addEventListener('click', function(){
            octopus.adminMode()
        })

        // on click, cancel admin box
        this.cancelAdd.addEventListener('click', function(event){
        	event.preventDefault()
            octopus.cancelAdd()
        })

        // on click, save data
        this.addNew.addEventListener('click', function(event){
        	event.preventDefault()
            octopus.addCat()
        })

        // render this view (update the DOM elements with the right values)
        this.render()
        this.notRender()

    },

    addNewCat: function() {
        var newCat = {
        	name: this.newcatNameElem.value,
        	clickCount: this.newCountElem.value,
        	imgSrc: this.newcatImageElem.value
        }	
        return newCat
    },

    render: function() {
        // update the DOM elements with values from the current cat
        // var currentCat = octopus.getCurrentCat()
        // this.countElem.textContent = currentCat.clickCount
        // this.catNameElem.textContent = currentCat.name
        this.admin.style.display = ""
    },

    notRender: function() {
        this.admin.style.display = "none"
    }
};

var catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cats')
        this.catNameElem = document.getElementById('catName')
        this.catImageElem = document.getElementById('catImage')
        this.countElem = document.getElementById('catCount')


        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter()
        })

        // render this view (update the DOM elements with the right values)
        this.render()
    },

    render: function() {
        // update the DOM elements with values from the current cat
        var currentCat = octopus.getCurrentCat()
        this.countElem.textContent = currentCat.clickCount
        this.catNameElem.textContent = currentCat.name
        this.catImageElem.src = currentCat.imgSrc
    }
};

var catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list')

        // render this view (update the DOM elements with the right values)
        this.render()
    },

    render: function() {
        var cat, elem, i
        // get the cats we'll be rendering from the octopus
        var cats = octopus.getCats()

        // empty the cat list
        this.catListElem.innerHTML = ''

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i]

            // make a new cat list item and set its text
            elem = document.createElement('li')
            elem.textContent = cat.name

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy)
                    catView.render()
                }
            })(cat))

            // finally, add the element to the list
            this.catListElem.appendChild(elem)
        }
    }
};

// make it go!
octopus.init()