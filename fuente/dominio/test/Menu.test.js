import { Menu } from "../Menu.js";

describe('Test de clase Menu', () => {

  test("Obtener el nombre del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    let nombre = menu.getNombre();
    expect(nombre).toBe("Nombre del Menú");
  });

  test("Obtener la descripción del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    let descripcion = menu.getDescripcion();
    expect(descripcion).toBe("Descripción del Menú");
  });

  test("Obtener la imagen del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    let imagen = menu.getImagen();
    expect(imagen).toBe("imagen.jpg");
  });

  test("Obtener las calorías del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    let calorias = menu.getCalorias();
    expect(calorias).toBe(500);
  });

  test("Obtener el hierro del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    let hierro = menu.getHierro();
    expect(hierro).toBe(2);
  });

  test("Obtener las grasas del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    let grasas = menu.getGrasas();
    expect(grasas).toBe(10);
  });

  test("Obtener las proteínas del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    let proteinas = menu.getProteinas();
    expect(proteinas).toBe(20);
  });

  test("Obtener la vitamina C del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    let vitaminaC = menu.getVitC();
    expect(vitaminaC).toBe(30);
  });

  test("Obtener los carbohidratos del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    let carbohidratos = menu.getCarbohidratos();
    expect(carbohidratos).toBe(40);
  });

  test("Obtener el sodio del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    let sodio = menu.getSodio();
    expect(sodio).toBe(50);
  });

  test("Establecer los alérgenos del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    let alergenos = ["huevos", "gluten", "lacteos"];
    menu.setAlergenos(alergenos);

    let alergenosObtenidos = menu.getAlergenos();
    expect(alergenosObtenidos).toEqual(alergenos);
  });
  test('Establecer el nombre del menú', () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    const nuevoNombre = 'Nuevo nombre del menú';
    menu.setNombre(nuevoNombre);

    const nombreObtenido = menu.getNombre();
    expect(nombreObtenido).toBe(nuevoNombre);
  });

  test('Establecer la descripción del menú', () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    const nuevaDescripcion = 'Nueva descripción del menú';
    menu.setDescripcion(nuevaDescripcion);

    const descripcionObtenida = menu.getDescripcion();
    expect(descripcionObtenida).toBe(nuevaDescripcion);
  });

  test('Establecer la imagen del menú', () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    const nuevaImagen = 'nueva-imagen.jpg';
    menu.setImagen(nuevaImagen);

    const imagenObtenida = menu.getImagen();
    expect(imagenObtenida).toBe(nuevaImagen);
  });

  test('Establecer las calorías del menú', () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    const nuevasCalorias = 600;
    menu.setCalorias(nuevasCalorias);

    const caloriasObtenidas = menu.getCalorias();
    expect(caloriasObtenidas).toBe(nuevasCalorias);
  });

  test('Establecer el contenido de hierro del menú', () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    const nuevoHierro = 15;
    menu.setHierro(nuevoHierro);

    const hierroObtenido = menu.getHierro();
    expect(hierroObtenido).toBe(nuevoHierro);
  });

  test('Establecer las grasas del menú', () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    const nuevasGrasas = 25;
    menu.setGrasas(nuevasGrasas);

    const grasasObtenidas = menu.getGrasas();
    expect(grasasObtenidas).toBe(nuevasGrasas);
  });

  test('Establecer las proteínas del menú', () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    const nuevasProteinas = 35;
    menu.setProteinas(nuevasProteinas);

    const proteinasObtenidas = menu.getProteinas();
    expect(proteinasObtenidas).toBe(nuevasProteinas);
  });

  test('Establecer la vitamina C del menú', () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    const nuevaVitaminaC = 45;
    menu.setVitC(nuevaVitaminaC);

    const vitaminaCObtenida = menu.getVitC();
    expect(vitaminaCObtenida).toBe(nuevaVitaminaC);
  });

  test('Establecer los carbohidratos del menú', () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    const nuevosCarbohidratos = 55;
    menu.setCarbohidratos(nuevosCarbohidratos);

    const carbohidratosObtenidos = menu.getCarbohidratos();
    expect(carbohidratosObtenidos).toBe(nuevosCarbohidratos);
  });

  test('Establecer el sodio del menú', () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );

    const nuevoSodio = 65;
    menu.setSodio(nuevoSodio);

    const sodioObtenido = menu.getSodio();
    expect(sodioObtenido).toBe(nuevoSodio);
  });
  test('Intentar establecer el nombre del menú con un valor no válido', () => {
    expect(() => {
      let menu = new Menu(
        "Nombre del Menú",
        "Descripción del Menú",
        "imagen.jpg",
        500, // Calorías
        2,   // Hierro
        10,  // Grasas
        20,  // Proteínas
        30,  // Vitamina C
        40,  // Carbohidratos
        50   // Sodio
      );  
      menu.setNombre(null);
    }).toThrow('El nombre del menú no es válido.');
  });

  test('Intentar establecer la descripción del menú con un valor no válido', () => {
    expect(() => {
      let menu = new Menu(
        "Nombre del Menú",
        "Descripción del Menú",
        "imagen.jpg",
        500, // Calorías
        2,   // Hierro
        10,  // Grasas
        20,  // Proteínas
        30,  // Vitamina C
        40,  // Carbohidratos
        50   // Sodio
      );  
      menu.setDescripcion(undefined);
    }).toThrow('La descripción del menú no es válida.');
  });

  test('Intentar establecer la imagen del menú con un valor no válido', () => {
    expect(() => {
      let menu = new Menu(
        "Nombre del Menú",
        "Descripción del Menú",
        "imagen.jpg",
        500, // Calorías
        2,   // Hierro
        10,  // Grasas
        20,  // Proteínas
        30,  // Vitamina C
        40,  // Carbohidratos
        50   // Sodio
      );
      menu.setImagen('');
    }).toThrow('La URL de la imagen no es válida.');
  });

  test('Intentar establecer las calorías del menú con un valor no válido', () => {
    expect(() => {
      let menu = new Menu(
        "Nombre del Menú",
        "Descripción del Menú",
        "imagen.jpg",
        500, // Calorías
        2,   // Hierro
        10,  // Grasas
        20,  // Proteínas
        30,  // Vitamina C
        40,  // Carbohidratos
        50   // Sodio
      );  
      menu.setCalorias('');
    }).toThrow('Las calorías del menú no son válidas.');
  });

  test('Intentar establecer el contenido de hierro del menú con un valor no válido', () => {
    expect(() => {
      let menu = new Menu(
        "Nombre del Menú",
        "Descripción del Menú",
        "imagen.jpg",
        500, // Calorías
        2,   // Hierro
        10,  // Grasas
        20,  // Proteínas
        30,  // Vitamina C
        40,  // Carbohidratos
        50   // Sodio
      );  
      menu.setHierro('');
    }).toThrow('El valor de hierro no es válido.');
  });

  test('Intentar establecer las grasas del menú con un valor no válido', () => {
    expect(() => {
      let menu = new Menu(
        "Nombre del Menú",
        "Descripción del Menú",
        "imagen.jpg",
        500, // Calorías
        2,   // Hierro
        10,  // Grasas
        20,  // Proteínas
        30,  // Vitamina C
        40,  // Carbohidratos
        50   // Sodio
      );
  
      menu.setGrasas(true);
    }).toThrow('El valor de grasas no es válido.');
  });

  test('Intentar establecer las proteínas del menú con un valor no válido', () => {
    expect(() => {
      let menu = new Menu(
        "Nombre del Menú",
        "Descripción del Menú",
        "imagen.jpg",
        500, // Calorías
        2,   // Hierro
        10,  // Grasas
        20,  // Proteínas
        30,  // Vitamina C
        40,  // Carbohidratos
        50   // Sodio
      );  
      menu.setProteinas('');
    }).toThrow('El valor de proteínas no es válido.');
  });

  test('Intentar establecer la vitamina C del menú con un valor no válido', () => {
    expect(() => {
      let menu = new Menu(
        "Nombre del Menú",
        "Descripción del Menú",
        "imagen.jpg",
        500, // Calorías
        2,   // Hierro
        10,  // Grasas
        20,  // Proteínas
        30,  // Vitamina C
        40,  // Carbohidratos
        50   // Sodio
      );  
      menu.setVitC('');
    }).toThrow('El valor de vitamina C no es válido.');
  });

  test('Intentar establecer los carbohidratos del menú con un valor no válido', () => {
    expect(() => {
      let menu = new Menu(
        "Nombre del Menú",
        "Descripción del Menú",
        "imagen.jpg",
        500, // Calorías
        2,   // Hierro
        10,  // Grasas
        20,  // Proteínas
        30,  // Vitamina C
        40,  // Carbohidratos
        50   // Sodio
      );  
      menu.setCarbohidratos(false);
    }).toThrow('El valor de carbohidratos no es válido.');
  });

  test('Intentar establecer el sodio del menú con un valor no válido', () => {
    expect(() => {
      let menu = new Menu(
        "Nombre del Menú",
        "Descripción del Menú",
        "imagen.jpg",
        500, // Calorías
        2,   // Hierro
        10,  // Grasas
        20,  // Proteínas
        30,  // Vitamina C
        40,  // Carbohidratos
        50   // Sodio
      );  
      menu.setSodio('');
    }).toThrow('El valor de sodio no es válido.');
  });

  test("Obtener representación en cadena del menú", () => {
    let menu = new Menu(
      "Nombre del Menú",
      "Descripción del Menú",
      "imagen.jpg",
      500, // Calorías
      2,   // Hierro
      10,  // Grasas
      20,  // Proteínas
      30,  // Vitamina C
      40,  // Carbohidratos
      50   // Sodio
    );
    let esperado = 'Nombre del Menú';
    expect(menu.toString()).toBe(esperado);
  });
  
});