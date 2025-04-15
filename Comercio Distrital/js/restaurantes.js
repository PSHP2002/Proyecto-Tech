// restaurantes.js

// Datos de ejemplo: podrías reemplazar esto con datos que vengan desde una API o base de datos
const restaurantes = [
    {
      nombre: "Italiano",
      tipo: "Italian",
      estrellas: "4.1",
      votos: 1426,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/66/Margherita_Originale.jpg"
    },
    {
      nombre: "Taqueria",
      tipo: "Mexican",
      estrellas: "4.0",
      votos: 875,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tacos_de_carnitas.jpg"
    },
    {
      nombre: "Sushi Master",
      tipo: "Japanese",
      estrellas: "4.5",
      votos: 1020,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg"
    },
    {
      nombre: "Burgers&Brews",
      tipo: "American",
      estrellas: "4.3",
      votos: 950,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg"
    }
  ];
  
  // Función que crea el HTML de cada tarjeta de restaurante
  function crearTarjeta(restaurante) {
    return `
      <div class="card">
        <img src="${restaurante.imagen}" alt="${restaurante.nombre}">
        <h3>${restaurante.nombre}</h3>
        <p>${restaurante.tipo}</p>
        <div class="stars">⭐ ${restaurante.estrellas} (${restaurante.votos})</div>
      </div>
    `;
  }
  
  // Función que renderiza todos los restaurantes en el contenedor especificado
  function renderRestaurantes(contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;
  
    const html = restaurantes.map(crearTarjeta).join("");
    contenedor.innerHTML = html;
  }
  
  // Exporta la función para que puedas usarla en otros archivos
  export { renderRestaurantes };
  
  