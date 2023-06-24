# Fundamentos de Ingeniería de Software - Obligatorio 2

## Plantilla para informe académico entrega 2

| Identificación |
| -------- |
| Fundamentos de Ingeniería de Software     |
| M4B - Docentes: Gerardo Matturro, Alejandro Adorjan |
| Ana Kadessian, Jorge Sapelli |
| 26/06/2023 |
| https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian |

# Construccion

## Instalacion y iniciación del proyecto

Descargar y instalar la ultima versión de Node.JS
> https://nodejs.org/

Una vez clonado este repositorio en su máquina, abra una terminal y posicionesé en la primer carpeta "/Kadessian-Sapelli" y ejecutar los siguientes comandos:

```
npm install
```
Para ejecutar el proyecto en la misma ruta de la terminal ejecuté esté comando

```
npm run start
```
Luego de esto dirijasé al localhost:3000 de su explorador web
> http://localhost:3000/

Es importante que NO se cambie la configuracion de puertos


Para correr pruebas jest ingrese en la misma terminal de comandos
```
npm run test
```

## Objetivos
Nuestro objetivo fue completar los requerimientos de mayor importancia definidos en la elicitacion del proycto. 

### UML
Creamos un diagrama de clases para poder visualizar mejor el esqueleto del sistema y tener en claro que clases eran necesarias crear para el funcionamiento de la pagina web.
<img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/UML.png">

### Funciones del Sistema
Al no tener login en nuestro sistema, el sistema contara con un usuario predefinido.

**Funcionalidades del usuario padre**
1. Ver que menú se ofrece en cada fecha, si no hay menú muestra un mensaje de no disponibilidad.
2. Ingresar como padre y visualizar toda la informacion del mismo en el botón (información padre).
3. Ver una lista o historial de menús comprados.
4. Compra de tickets para la compra de menús.
5. Comprar un menú.
6. Comentar y evaluar un menu.
7. Observar comentarios realizados a cada menú.

**Funcionalidades de usuario directora**
1. Agregar un menú al calendario para la fecha deseada, que este disponible (sin menú ya cargado).
2. Crear un menu desde cero, personalizando su nombre, descripción, información nutricional y alergenos.
3. Puede visualizar los comentarios y evaluaciones de cada menú ya cargado realizado por los padres.

## Librerias utilizadas

Utilizamos las siguientes dependencias en el package.json las cuales contienen jsDoc (para documentación del codigo), esLint (para analizis de estilo de código) y jest para test unitarios configurados.
```
  "devDependencies": {
    "eslint": "^8.43.0",
    "eslint-config-google": "^0.14.0",
    "jest": "^29.5.0",
    "jsdoc": "^4.0.2"
  },
  "directories": {
    "doc": "doc"
  }
```
Para que los test unitarios (jest) corran adecuadamente tubimos que configurar el package.json con el tipo module ya que por defecto no se genera este atributo.
```
  "type": "module",
```
Ademas realizamos una configuración de un server en node para enrutar el proyecto en el puerto 3000.
(Importante solo deben usarse notación tipo modulo(export/import) en dicha configuración ya que si no generara conflictos con otras dependencias).
Dicha configuración la realizamos en el archivo app.mjs (la extensión mjs significa modules js).
```
/* Esta función establece la raíz (por eso el /) allí en http://localhost:3000 se cargará el "index.html" */ 
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "fuente/interfaz/index.html"));
});

/* Manda el server al puerto 3000 */
app.listen(3000, () => {
  console.log("server listening on port", 3000);
});
```
Con estas dos funciones enrutamos el archivo index.html al puerto 3000 de nuestro local host.
Aquí reportamos un issue ya que no encontramos forma de configurar un server con una dispoción de carpetas deseada, aquí el link a dicho reporte:
https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/issues/3#issue-1771661121

<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/carpetas.png></img>
El proyecto dispone de las siguientes carpetas en la carpeta fuente:

1. **Dominio:** Contiene las clases del código y la carpeta test con los test unitarios de cada clase.
Cada archivo es una clase.
2. **Interfaz:** Contiene el css (estilos.css), imagenes, javascript (index.js) y datos precargados del (DatosPreCargados.js) index.html.
3. El index.html nuestra página afuera de ambas carpetas.

**Otras carpetas:**
Luego estan las carpetas docs (No contiene el software si no la documentación), coverage (informe de la cobertura de los test unitarios) y out (la documentación de jsdocs).

# Interfaz de usuario

## Diseño IU

Para desarrollar la interfaz de usuario, nos inspiramos en los bocetos de los requerimientos y aplicamos principios de usabilidad, como las heurísticas de Nielsen. Adoptamos un enfoque de diseño limpio y minimalista, siguiendo el principio número 8 de Estética y Diseño Minimalista. Nuestro objetivo era proporcionar una experiencia clara y comprensible, donde cada componente de la interfaz reflejara su función de manera evidente.

Además, nos esforzamos por implementar el principio número 1 de Visibilidad del Estado del Sistema. Para ello, aseguramos que cada acción realizada por el usuario tuviera una respuesta visual, como mensajes informativos o indicadores de progreso. Esto permitió que los usuarios tuvieran una retroalimentación clara sobre sus acciones y el estado del sistema en todo momento.

En cuanto al principio número 9 de Ayudar a reconocer, diagnosticar y solucionar problemas, nos aseguramos de que cualquier acción errónea realizada por el usuario generara un mensaje de error explicativo. De esta manera, los usuarios podían comprender rápidamente qué salió mal y cómo resolver el problema.

Buscamos crear una experiencia intuitiva y satisfactoria para los usuarios, donde cada interacción fuera claramente comprendida y respaldada por una retroalimentación adecuada.

## Responsividad

Tambien aplicamos responsibidad a nuestro proyecto para que la interfaz sea adecuada en todas las resoluciones de pantalla.

*Responsividad pantallas grandes mayor a 1500px de ancho:*
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/ResponsiveGrande.png></img>

*Responsividad pantallas medias menor a 1000px de ancho:*
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/ResponsiveMedia.png>

*Responsividad pantallas pequeñas menor a 800px de ancho:*
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/ResponsiveChica.png>

## Accesibilidad
Nuestro proyecto cumple con los principios de accesibilidad WCAG lo comprobamos con la extensión wave.
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/WaveDespues.png >

El único error que tuvimos de contraste no lo podemos arreglar ya que es por las estrellas de el css de una libreria externa.
Reportamos el issue https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/issues/4

# Codificación

## Estilo de codificación
La codificación la realizamos en el IDE Visual Studio Code, respetando el estandar de codificación 'google style' el cual comprobamos con esLint, para cada código de js.
**Eslint con 0 errores para las clases del dominio:**
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/eslintDominio.png></img>

**Eslint para el codigo index.js:**
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/eslintindex.png></img>
Reporte de issue por lineas muy largas: https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/issues/5

## Buenas practicas de OOP

Separamos las clases del dominio, en 5 archivos de javascript cada uno es una clase (Comentario.js, Dia.js, Menu.js, Padre.js, Sistema.js) en la carpeta dominio. Así modificar y actualizar el codigo es mucho mas fácil y comodo de realizar.
Para el código de la interfaz (carpeta interfaz) utilizamos dos archivos de javascript por un lado DatosPreCargados.js que son todos los datos que queriamos precargar en el sitio web, y otro llamado index.js que tiene todos los eventos y funciones de la interfaz. Consideramos que poner los datos precargados en otro archivo de javascript era buena practica ya que son muchas líneas que dificultarian la visualización de todo el resto de código si se pusiera todo junto, aparte que al modificar dichos datos de prueba no nos preocupamos si borramos alguna función importante del sistema por error.

## Buenas practicas de codificación

Tratamos de implementar las siguientes buenas practicas de codificación en nuestro código:

- Parámetros cortos.
- Líneas menores a 80 carácteres.
- Métodos y funciones con poca cantidad de líneas.
- Código envolvente.
- Reutilización de código.
- Variables nemotécnicas con nombres simples y en español.
- Indentación de 2 espacios.
- En los métodos las variables son privadas, por lo que controlamos el acceso a dichos datos de manera adecuada.
- Comentarios en todas las funciones para que se entienda lo que hace cada cosa (jsdocs).

# Test unitario

Realizamos test unitario en todas las clases del dominio, con jest y alcanzamos una cobertura del 100% para todas las clases. Cada clase del dominio tiene una clase en la carpeta test que la prueba , la cual contiene pruebas que son independientes entre sí de cada método.

**Pruebas con cobertura 100% :**
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/jest100.png></img>

Para ejecutar las pruebas en la terminal en la carpeta Sapelli-Kadessian ingresar:
> npm run test

# Reflexión

## Detalle del trabajo individual

### Betina Kadessian

En este proyecto realizé la configuración del server con node.js, codigos de javascript, css y html.
Este proyecto nos brindó la oportunidad de aplicar buenas prácticas de codificación, aprender técnicas de testing y mejorar nuestras habilidades en la documentación del código. Estas habilidades son fundamentales en nuestra carrera profesional, ya que nos permiten desarrollar software de alta calidad, fácil de mantener y colaborar de manera efectiva en equipos de desarrollo.
Espero seguir aplicando lo que hemos aprendido en futuros proyectos y continuar avanzando en mi crecimiento profesional en el campo de la programación.

### Jorge Sapelli 


## Técnicas aplicadas y aprendizajes

**Las técnologias que aplicamos y los aprendizajes que obtuvimos son los siguientes:**

-Git: Sistema de control de versiones que utilizamos para gestionar y mantener el historial de cambios en nuestro proyecto.

-GitHub: Plataforma basada en la nube que utilizamos para almacenar nuestro repositorio de código, colaborar con otros miembros del equipo y revisar y aprobar cambios.

-Node.js: Entorno de ejecución de JavaScript en el servidor que utilizamos para construir la aplicación web.

-JavaScript: Lenguaje de programación principal utilizado para desarrollar la lógica del lado del cliente y del servidor en nuestro proyecto.

-HTML: Lenguaje de marcado utilizado para estructurar y crear la interfaz de usuario de nuestra página web.

-CSS: Lenguaje utilizado para dar estilo y diseño a nuestra página web, controlando la apariencia de los elementos.

-Frameworks de CSS: Utilizamos frameworks como Flowbite y Bootstrap para acelerar el desarrollo y aplicar estilos predefinidos a nuestras aplicaciones.

-ESLint: Herramienta que nos ayudó a mantener un código limpio y consistente, siguiendo las mejores prácticas y evitando errores comunes.

-Jest: Framework de pruebas unitarias utilizado para asegurar la calidad y el correcto funcionamiento de nuestro código.

-Testing exploratorio: Técnica de prueba en la que los desarrolladores exploran el software de manera informal para descubrir errores y problemas.

-Testing de caja negra: Técnica de prueba que se enfoca en probar la funcionalidad del software sin conocer su estructura interna.

-JSDoc: Sistema de documentación en JavaScript que utilizamos para proporcionar descripciones detalladas de nuestras funciones, parámetros y valores de retorno.

## Presentación en clase
Nuestra exposición abarcó los fundamentos de la elicitación y la ingeniería de requerimientos, resaltando su importancia y algunas mejores prácticas.
Link con nuestra presentación:

> https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/Elicitaci%C3%B3n%20-%20priorizaci%C3%B3n%20de%20requerimientos.pptx

## Video de el software construido