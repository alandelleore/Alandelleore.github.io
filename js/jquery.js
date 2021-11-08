/*
class Productos2 {
    constructor(nombre, detalle, color, precio, foto, precio2) {
        this.nombre = nombre;
        this.detalle = detalle;
        this.color = color;
        this.precio = precio;
        this.foto = foto;
        this.precio2 = precio2;
    }

}

let ofertas = [];
ofertas.push(new Productos2("Sintetizador Yamaha", "Sintetizador Mini Yamaha Reface Cs ", "blanco", 91253, "images/yamaha_sinte.jpg", 105000));
ofertas.push(new Productos2("Monitor Yamaha", "Monitores Activos Yamaha Hs8 Hs-8", "negro", 145500, "images/monitor_yamaha.jpg", 152000));
ofertas.push(new Productos2("Placa de sonido Mackie", "Placa De Sonido Mackie Onyx Artist 12 2 Entradas 2 Salidas", "Negro", 23900, "images/placa_audio.jpg", 25100));
ofertas.push(new Productos2("Microfono Behringer", "Microfono Behringer C1 Condenser Cardioide", "gris", 13625, "images/mic_behringer.jpg",15300));
ofertas.push(new Productos2("Amplificador Marshall guitarra", "Amplificador Bajo Marshall Mb15 15w Compresor 2ch", "negro", 35900, "images/ampli_marshall.jpg", 41250));
ofertas.push(new Productos2("Cuerdas Guitarra", "Encordado Ernie Ball 011 Electrica 2220", "-", 1200, "images/cuerdas-guitar2.jpg", 1680));
*/



//REMPLAZO EL LA CLASE CON EL CONSTRUCTOR POR UN JSON
$(document).ready(function() {

	const URLJSON = "js/datos2.json"
	$.getJSON(URLJSON, function(respuesta, estado) {
		if (estado === "success") {
			let misDatos = respuesta;
			misDatos.forEach((element) => {

				$('.contenedor-card').append(`
                <div class="card">
                    <img src=${element.imagen} class="btn-img">
                    <h5>$${element.precio2}</h5>
                    <h4>$<span>${element.precio}</span></h4>
                    <p>${element.detalle}</p>
                    <button class="btn-buy" data-id=${element.id}>Agregar</button>
                <div>`);


			});
			let btnBuy = document.querySelectorAll(".btn-buy");
            //MODAL IMAGENES PRODUCTOS 
			btnBuy.forEach((e) =>
				e.addEventListener("click", (e) => {
					enviarAlCarrito(e.target.parentElement);
				})
			);
            //CERRAR MODAL
			let btnImg = document.querySelectorAll(".btn-img");
			btnImg.forEach((e) => {
				e.addEventListener("click", (e) => {
					modal(e.currentTarget.src)
					console.log(e.currentTarget.src)
				})
			})
		}
	});


	//EFECTO ANIMADO MUESTRA EL TITULO OFERTAS QUE SE DESPLAZA HACIA LA DERECHA
	$('#main').prepend(`<h1>OFERTAS</h1>`);
	$('#main').css({
		"margin": 0,
		"display": "block"
	});

	$('h1').css({
		"display": "inline-block",
		"position": "relative",
		"color": "#f5efef"
	});

	$("#main").hover(function() {
		$('h1').css({
			"color": "#e94e1b"
		});
		$("h1").animate({
			left: '34%',
		});
		$('#main').css({
			"background-color": "white",
		});
	});

	//EFECTOS DE VISUALIZAR Y OCULTAR LA SECCION LOGIN Y CREAR USUARIO
	$('#ingresar').click(function(e) {
		e.preventDefault();
		$('#formulario2').fadeToggle("fast");
		$('#formulario1').hide("fast");
	});

	$('#crearCuenta').click(function(e) {
		e.preventDefault();
		$('#formulario1').fadeToggle("fast");
		$('#formulario2').hide("fast");
	})

	$('#carr').click(function(e) {
		e.preventDefault();
		if (productosCarrito != 0) {
			$('#operaciones').css({
				"height": "420px",
				"overflow-y": "scroll"
			})
			$('#operaciones').slideToggle("fast")

		} else {

			imprimirHtmlCarrito();
			$('#total').hide()
			$('#operaciones').css({
				"height": "130px",
			})

			$('#mensaje').text('Tu carrito está vacío')

			$('#operaciones').slideToggle("fast")
		}
	});
});



