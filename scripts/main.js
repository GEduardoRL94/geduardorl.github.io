

var tagTitulo = document.querySelector('h1');
var tagImagen = document.querySelector('img');

tagTitulo.innerHTML = 'Fruta: ';
tagImagen.setAttribute('alt', 'Cambiar fruta');
tagImagen.setAttribute('width', '256');
tagImagen.setAttribute('height', '256');


function seleccionarFruta(){
	var fruta = prompt('Ingresar fruta: (Mango, Fresa, Banana, Manzana, Cereza, Durazno, Naranja, Pera)');
	localStorage.setItem('localFruta', fruta);
	var imgFruta;
	switch(fruta){
		case 'Mango':
			localStorage.setItem('localImagen', 'fruits/mango_256.png');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
		case 'Fresa':
			localStorage.setItem('localImagen', 'fruits/strawberry_256.png');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
		case 'Banana':
			localStorage.setItem('localImagen', 'fruits/banana_256.png');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
		case 'Manzana':
			localStorage.setItem('localImagen', 'fruits/apple_256.png');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
		case 'Cereza':
			localStorage.setItem('localImagen', 'fruits/cherry_256.png');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
		case 'Durazno':
			localStorage.setItem('localImagen', 'fruits/peach_256.png');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
		case 'Naranja':
			localStorage.setItem('localImagen', 'fruits/orange_256.png');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
		case 'Pera':
			localStorage.setItem('localImagen', 'fruits/pear_256.png');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
		case 'Sandia':
			localStorage.setItem('localImagen', 'fruits/watermelon_256.png');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
		case 'Mandarina':
			localStorage.setItem('localImagen', 'fruits/tangerine_256.png');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
		case 'Manzana Verde':
			localStorage.setItem('localImagen', 'fruits/apple_green_256.png');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
		default:
			localStorage.setItem('localImagen', '');
			imgFruta = localStorage.getItem('localImagen');
			tagImagen.setAttribute('src', imgFruta);
			break;
	}
	tagTitulo.innerHTML = 'Fruta: ' + fruta;
}

if(!localStorage.getItem('localFruta')){
	seleccionarFruta();
}else{
	var storedFruit = localStorage.getItem('localFruta');
	var storedImagen = localStorage.getItem('localImagen');
	tagTitulo.innerHTML = 'Fruta: ' + storedFruit;
	tagImagen.setAttribute('src', storedImagen);
}

var tagBoton = document.querySelector('button');

tagBoton.onclick = function(){
	seleccionarFruta();
}
