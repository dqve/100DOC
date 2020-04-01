// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

	event.preventDefault();
// Your code goes here!
  
const h = Number(document.querySelector('#inputHeight').value);
const w  = Number(document.querySelector('#inputWidth').value);
const imageTable = document.querySelector('#pixelCanvas');
  
	 while (imageTable.firstChild) {
        imageTable.removeChild(imageTable.firstChild);
    }

for (let i = 0; i < h; i++) { 
  const row = document.createElement('tr');  
  for (let j=0; j<w; j++) {
    const cell = document.createElement('td');    
    cell.addEventListener('click', function(){
    const shade = document.querySelector('input#colorPicker').value;
    cell.style.backgroundColor = shade;     
      });
    cell.addEventListener('dblclick', function () {
                cell.style.backgroundColor = 'white' ;
            });
      row.appendChild(cell);
    }
   imageTable.appendChild(row) 
  }
 

      console.log(`The size is ${h}*${w} and color is ${shade}`);
}
 
 const setParams = document.querySelector('form#sizePicker');
 setParams.addEventListener('submit', makeGrid);