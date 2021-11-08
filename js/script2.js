//PRODUCTOS

class Productos {
  constructor(id, nombre, detalle, color, precio, precioUnidad, imagen, categoria, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.detalle = detalle;
    this.color = color;
    this.precio = precio;
    this.precioUnidad = precioUnidad;
    this.imagen = imagen;
    this.categoria = categoria;
    this.cantidad = cantidad;
  }

}

let productos = [];
productos.push(new Productos(1, "Guitarra Fender", "Guitarra Fender Stratocaster Standard Mex. Maple", "Negro", 220000, 220000, "images/guitarra1.jpg", "guitarras", 1));
productos.push(new Productos(2, "Bajo Hofner", "Bajo Hofner Hct-500/5 Contemporary President Bass Sb", "Marrón", 143600, 143600, "images/bajo1.jpg", "bajos", 1));
productos.push(new Productos(3, "Teclado Yamaha", "Teclado Piano Electrico Yamaha P45", "Negro", 60000, 60000, "images/piano1.jpg", "teclados", 1));
productos.push(new Productos(4, "Bateria Tama", "Bateria Tama Mr42tzs Sarclassic Maple Duracover 4 Cuerpos 22 Bombo", "Blue and White Oyster", 575927, 575927, "images/bateria1.jpg", "baterias", 1));
productos.push(new Productos(5, "Pandereta", "Pandereta Media Luna Knight Jb900 Bk 8 Sonajas", "Negro", 1500, 1500, "images/pandereta1.jpg", "percusión", 1));
productos.push(new Productos(6, "Microfono Shure", "Microfono Shure SM SM58 dinámico cardioide y unidireccional", "Negro", 5000, 5000, "images/microfono1.jpg", "audio", 1));
productos.push(new Productos(7, "Guitarra Epiphone", "Guitarra Electroacústica EpiPhone Aj210ce", "Vintage sunburst", 66499, 66499, "images/guitarra-epiphone.jpg", "guitarras", 1));
productos.push(new Productos(8, "Guitarra Ibanez", "Guitarra Ibanez Ps40 Paul Stanley Signature", "Negro", 72475, 72475, "images/guitarra-ibanez.jpg", "guitarras", 1));
productos.push(new Productos(9, "Bajo Spector", "Bajo Spector Performer 5 Cuerdas", "Negro", 91669, 91669, "images/bajo-spector.jpg", "bajos", 1));
productos.push(new Productos(10, "Bajo Squier", "Bajo Electrico Squier Affinity Jazz Bass", "Rojo", 63755, 63755, "images/bajo-squier.jpg", "bajos", 1));
productos.push(new Productos(11, "Cuerdas bajo", "Encordado Bajo Electrico Magma 045 Be170n 4 Cuerdas", "-", 3349, 3349, "images/encordado.jpg", "bajos", 1));
productos.push(new Productos(12, "Cuerdas guitarra", "Encordado Guitarra Eléctrica Ernie Ball Hybrid Slinky 09/46", "-", 1179, 1179, "images/cuerdas-guitar.jpg", "guitarras", 1));
productos.push(new Productos(13, "Bateria Ludwig", "Bateria Acustica Ludwig Vistalite 5 Cuerpos", "Ambar", 800240, 800240, "images/bateria-lug.jpg", "baterias", 1));
productos.push(new Productos(14, "Bateria Sonor", "Bateria Sonor Select Force Maple 6 Cpos Sin Fierros", "Negro", 423515, 423515, "images/bateria-sonor.jpg", "baterias", 1));
productos.push(new Productos(15, "Plug", "Cable Plug Plug Stagg", "Negro", 618, 618, "images/cable.jpg", "accesorios", 1));
productos.push(new Productos(16, "Guitarra Squier", "Guitarra Eléctrica Squier By Fender Bullet Telecaster", "Negro", 50664, 50664, "images/telecaster_squier.jpg", "guitarras", 1));
productos.push(new Productos(17, "Microfono Sennheiser", "Microfono Sennheiser E 835 dinámico cardioide", "Negro", 18214, 18214, "images/mic-sen.jpg", "audio", 1));
productos.push(new Productos(18, "Puas", "Pack X5 Puas Para Guitarra Magma accesorios bajo ", "Amarillo", 255, 255, "images/puas.png", "accesorios", 1));
productos.push(new Productos(19, "Guitarra Fender Telecaster", "Guitarra Elect. Fender Telecaster 60th Lite Rosewood", "Rosewood", 1245000, 124500, "images/fender_rosewood.jpg", "guitarras", 1));
productos.push(new Productos(20, "Amplificador vox bajo", "Vox Mini Super Beetle Bass Amplificador bajo", "Negro", 67000, 67000, "images/vox_bajo.jpg", "audio", 1));
productos.push(new Productos(21, "Amplificador vox guitarra", "Amplificador VOX Custom Series AC30C2 Valvular para guitarra de 30W", "negro", 168400, 168400, "images/vox_guitar.jpg", "audio", 1));
productos.push(new Productos(22, "Microfono Behringer", "Microfono Behringer C1 Condenser Cardioide", "gris", 13625, 13625, "images/mic_behringer.jpg", "audio", 1));
productos.push(new Productos(22, "Trompeta Yamaha", "Trompeta Yamaha Ytr2330 Bb Dorada", "dorado", 148900, 148900, "images/trompetayamaha.jpg", "vientos", 1));

//ORDENA LOS PRODUCTOS POR PRECIO 
productos.sort(function (a, b) {
  if (a.precio < b.precio) {
    return 1;
  }
  if (a.precio > b.precio) {
    return -1;
  }
  
  return 0;
});


//FUNCIÓN KEYUP ENTER PARA EJECUTAR LA FUNCION BUSCAR PRODUCTOS
const keyBoard = document.querySelector(".src");

keyBoard.addEventListener('keyup', e => {
  e.preventDefault();
  if (e.keyCode === 13) {

    buscarProductos();

  }
});

//FUNCIÓN KEYUP ENTER PARA SALTAR DE INPUTs Y ENVIAR FORMULARIO LOGIN

const enterInput = document.getElementById("email2");
const enterInput2 = document.getElementById("pass2");

enterInput.addEventListener('keyup', e => {
  e.preventDefault();
  if (e.keyCode == 13) {

    document.getElementById("pass2").focus();
  }
});

enterInput2.addEventListener('keyup', e => {
  e.preventDefault();
  if (e.keyCode == 13) {

    validarData();

  }
});


//FUNCIÓN KEYUP ENTER PARA SALTAR DE INPUTs Y ENVIAR FORMULARIO CREAR USUARIO

const enterInput3 = document.getElementById("email");
const enterInput4 = document.getElementById("nombre1");
const enterInput5 = document.getElementById("pass1");

enterInput3.addEventListener('keyup', e => {
  e.preventDefault();
  if (e.keyCode == 13) {

    document.getElementById("nombre1").focus();

  }
});

enterInput4.addEventListener('keyup', e => {
  e.preventDefault();
  if (e.keyCode == 13) {

    document.getElementById("pass1").focus();

  }
});
enterInput5.addEventListener('keyup', e => {
  e.preventDefault();
  if (e.keyCode == 13) {

    getData();

  }
});



//Función para poner el foco en el login al hacer click en ingresar

ingresar = document.getElementById("ingresar");

ingresar.addEventListener('click', e => {
  e.preventDefault();
  // document.getElementById("formulario2").style.display = "block";
  // document.getElementById("formulario1").style.display = "none";
  document.getElementById("email2").focus();

  ingresar2 = document.getElementById("anclaje");
  ingresar2.scrollIntoView();
})

ingresar2 = document.getElementById("crearCuenta");

ingresar2.addEventListener('click', e => {
  e.preventDefault();
  //  document.getElementById("formulario1").style.display = "block";
  //  document.getElementById("formulario2").style.display = "none";
  document.getElementById("email").focus();

  ingresar2 = document.getElementById("anclaje");
  ingresar2.scrollIntoView();
})


//FUNCIÓN BUSQUEDA DE PRODUCTOS

function buscarProductos() {
  let buscar = document.getElementById("buscar-1").value;
  unselect()
  if (buscar.length > 3 && buscar != Number) {
    //buscamos la palabra clave en la descripcion del producto(.detalle) 
    busqueda = productos.filter(producto => producto.detalle.toLowerCase().includes(buscar.toLowerCase()));
    if (busqueda.length != 0) {
      imprimir(busqueda);
      return;
    } else {
      // blanqueamos el input
      document.getElementById("buscar-1").value = "";
      imprimir(busqueda)
      //Mensaje de alerta 
      document.getElementById("cuadro").innerHTML = "<h3>No se encontraron resultados</h3>"
    }
  } else {
    busqueda = [];
    // blanqueamos el input
    document.getElementById("buscar-1").value = "";
    imprimir(busqueda)
    //Mensaje de alerta
    document.getElementById("cuadro").innerHTML = "<h3>No se encontraron resultados</h3>"
  }
}


//categorias 
function categorias(filtro) {
  categoria = productos.filter(producto => producto.categoria.includes(filtro));
  imprimir(categoria);
  
}

//funciones click mostrar por categorias
function selectorCategorias(idElement, NombreCategoria) {
  let ClickCategoria = document.getElementById(idElement)
  ClickCategoria.addEventListener("click", e => {
    categorias(NombreCategoria);
    
    
  });
}

selectorCategorias('guitar', 'guitarras');
selectorCategorias('bajos', 'bajos');
selectorCategorias('baterias', 'baterias');
selectorCategorias('teclados', 'teclados');
selectorCategorias('percusión', 'percusión');
selectorCategorias('audio', 'audio');
selectorCategorias('vientos', 'vientos');
selectorCategorias('accesorios', 'accesorios');


//Selector de categorias que se muestra con select/option
function seleccionCategorias2 () {
  let listadoResponsive = document.getElementById('listadoResponsive');
  let categoriaSeleccionada = listadoResponsive.value;
  
  categorias(categoriaSeleccionada);
}


//Selector rango precio (precio maximo)
const price = document.querySelector('#price')
const output = document.querySelector('.price-output')

output.textContent = price.value

price.addEventListener('input', function() {
  output.textContent = price.value
  
  rangoPrecios(price.value)
  unselect()
});

function rangoPrecios(precioMax) {
  categoriaPrecios = productos.filter(producto => producto.precio <= precioMax);
  
  imprimir(categoriaPrecios);
}

/// DESELECCIONAR PRODUCTO DE LA LISTA CUANDO SE BUSCA POR RANGO DE PRECIOS
function unselect() {
  document.querySelectorAll('[name=cate]').forEach((x) => x.checked = false);
}

//Borrar contenido previo al imprimir 
function borrarContenido(nombreContenedor) {
  while (nombreContenedor.firstChild) {
    nombreContenedor.removeChild(nombreContenedor.firstChild);
  }
}

//IMPRIME DINAMICAMENTE LAS TARJETAS
function imprimir(array) {
  document.getElementById("main").innerHTML = "<h3><h3/>"
  const productList = document.getElementById('cuadro');

  borrarContenido(productList);

  array.forEach((element) => {

    const productList = document.getElementById('cuadro');
    const element2 = document.createElement('div')
    element2.innerHTML = `
              <div class="card">
                  <img src=${element.imagen} class="btn-img">
                  <h4>$<span>${element.precio}</span></h4>
                  <p>${element.detalle}</p>
                  <button class="btn-buy" data-id=${element.id}>Agregar</button>
              <div>`;
    productList.appendChild(element2);

  });
  let btnBuy = document.querySelectorAll(".btn-buy");

  btnBuy.forEach((e) =>
    e.addEventListener("click", (e) => {
      enviarAlCarrito(e.target.parentElement);
    })
  );
  //MODAL IMAGENES PRODUCTOS 
  let btnImg = document.querySelectorAll(".btn-img");
  btnImg.forEach((e) =>{
      e.addEventListener("click", (e) => {
          modal(e.currentTarget.src)
          console.log(e.currentTarget.src)
      })

  })  

 //CERRAR MODAL 
let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
let modal = document.getElementById('myModal'); 
modal.style.display = "none";
}

  // blanqueamos el input
  document.getElementById("buscar-1").value = "";

  //scroll a resultado de la busqueda
  let element = document.getElementById("anclaje");

  element.scrollIntoView();

}

//MODAL 
function modal(imgModal) {
  let modal = document.getElementById('myModal');
  let modalImg = document.getElementById("img01");
  modal.style.display = "block";
  modalImg.src = imgModal;
}

//ENVIAR PRODUCTOS SELECCIONADOS AL CARRITO
let misCompras = [];
let productosCarrito = [];
let totalcar;
let sidebar = document.querySelector("#operaciones");


const enviarAlCarrito = (datosProductos) => {
  let productoAlCarrito = {
    imagen: datosProductos.querySelector("img").src,
    nombre: datosProductos.querySelector("p").textContent,
    precioPorUnidad: Number(datosProductos.querySelector("h4 span").textContent),
    precioTotal: Number(datosProductos.querySelector("h4 span").textContent),
    id: datosProductos.querySelector("button").getAttribute("data-id"),
    cantidad: 1,
  };

  let existeProducto = productosCarrito.some(
    (element) => element.id === productoAlCarrito.id);

  if (existeProducto) {
    productosCarrito = productosCarrito.map((element) => {
      if (element.id === productoAlCarrito.id) {
        element.cantidad++;
        element.precioTotal = element.precioPorUnidad * element.cantidad;
        return element;
      } else {
        return element;
      }
    });
  } else {
    productosCarrito.push(productoAlCarrito);
  }
  totalDelCarrito()
  imprimirHtmlCarrito();
  renderCarrito();
};

//IMPRIMIR PRODUCTOS AÑADIDOS AL CARRITO
const imprimirHtmlCarrito = () => {
  sidebar.innerHTML = `<table class="tablaBase">
                          <tr>
                              <th>Producto</th>
                              <th>Subtotal</th>
                              <h2 id="total">Total: $${totalcar}</h2>    
                          </tr>
                        </table>
                      <hr>
                      <p id="mensaje"></p>`;
  productosCarrito.forEach((element) => {
    let {
      imagen,
      nombre,
      precioTotal,
      id,
      cantidad
    } = element;
    sidebar.innerHTML += `
    <table class="tabla">
    <tr>
        <th>
        <img src=${imagen}>
        <p class="cantidad"><span class="btn-menos" data-id=${id}> - </span>${cantidad}<span class="btn-mas" data-id=${id}> + </span></p>
        </th>
        <th>
        <p>${nombre}</p>
        </th>
        <th>
        <h5>$${precioTotal}</h5><img src='../images/eliminar.png' id="eliminarCarrito" class="btn-borrar" data-id=${id}>
        </th>
    </tr>
</table>
 <hr>`;
  });
};

//RESTAR PRODUCTOS 
const restarProducto = (e) => {
  let idProducto = Number(e.target.getAttribute("data-id"));

  productosCarrito = productosCarrito.map((element) => {
    if (element.id == idProducto) {
      element.cantidad--;
      element.precioTotal = element.precioTotal - element.precioPorUnidad;
      if (element.cantidad === 0) {
        element.cantidad = 1;
        element.precioTotal = element.precioPorUnidad;
      }
      return element;
    } else {
      return element;
    }
  });
  totalDelCarrito()
  imprimirHtmlCarrito();
  renderCarrito();
};

///SUMAR PRODUCTOS
const sumarProducto = (e) => {
  let idProducto = Number(e.target.getAttribute("data-id"));

  productosCarrito = productosCarrito.map((element) => {
    if (element.id == idProducto) {
      element.cantidad++;
      element.precioTotal = element.precioTotal + element.precioPorUnidad;
      if (element.cantidad === 0) {
        element.cantidad = 1;
        element.precioTotal = element.precioPorUnidad;
      }
      return element;
    } else {
      return element;
    }
  });
  totalDelCarrito()
  imprimirHtmlCarrito();
  renderCarrito();
};


///BORRAR PRODUCTOS
const borrarCarrito = (e) => {
  let idProducto = Number(e.target.getAttribute("data-id"));
  productosCarrito = productosCarrito.filter((element) => element.id != idProducto);

  totalDelCarrito()
  imprimirHtmlCarrito();
  renderCarrito();

  return
};


//FUNCION SUMAR TOTAL DEL CARRITO
function totalDelCarrito() {
  totalcar = productosCarrito.reduce((a, i) => a + i.precioTotal, 0);
  console.log(totalcar);
  return;
}

//FUNCION PARA SABER LA CANTIDAD DE PRODUCTOS EN CARRITO
function UnidadesCarrito() {
  cantidadEnCarrito = productosCarrito.reduce((a, i) => a + i.cantidad, 0);
  return;
}


//DELEGACION DE EVENTOS
sidebar.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-menos")) {
    restarProducto(e);
  }
  if (e.target.classList.contains("btn-borrar")) {
    borrarCarrito(e);
  }
  if (e.target.classList.contains("btn-mas")) {
    sumarProducto(e);
  }
});
console.log(productosCarrito)



//Muestra en numero de productos que hay en el carrito.
function renderCarrito(){
  UnidadesCarrito()
  if (cantidadEnCarrito == 0) {
    document.getElementById("carr").src = "images/comprar.png";
    document.getElementById("cantidadCarr").textContent = "";
  } else {
    document.getElementById("carr").src = "images/carritounid.png";
    document.getElementById("cantidadCarr").textContent = cantidadEnCarrito;
  }
  console.log(cantidadEnCarrito)  
}


///CARRUSEL AUTOMATICO Y MANUAL
window.addEventListener('load', function() {
  let contenedor = document.querySelector('.contenedor');
  let imagenes = [];
  let cont = 0;
  imagenes[0] = 'images/Erniebanner.png';
  imagenes[1] = 'images/yamahabanner.png';
  imagenes[2] = 'images/marshall.png'
  imagenes[3] = 'images/voxbanner.jpg';

  let indiceImagenes = 0;

  function cambiarImagenes() {
    document.slider.src = imagenes[indiceImagenes];

    if (indiceImagenes < 3) {
      indiceImagenes++;
    } else {
      indiceImagenes = 0
    }
  }

  contenedor.addEventListener('click', e => {
    let atras = contenedor.querySelector('.atras'),
      adelante = contenedor.querySelector('.adelante'),
      img = contenedor.querySelector('img'),
      tgt = e.target;

    if (tgt == atras) {
      if (cont > 0) {
        img.src = imagenes[cont - 1];
        cont--;
      } else {
        img.src = imagenes[imagenes.length - 1];
        cont = imagenes.length - 1;
      }
    } else if (tgt == adelante) {
      if (cont < imagenes.length - 1) {
        img.src = imagenes[cont + 1];
        cont++;
      } else {
        img.src = imagenes[0];
        cont = 0;
      }
    }

  });
  setInterval(cambiarImagenes, 3000)
});



