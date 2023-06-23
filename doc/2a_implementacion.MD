# Fundamentos de Ingeniería de Software - Obligatorio 2

## Plantilla para informe académico entrega 2

| Identificación |
| -------- |
| Fundamentos de Ingeniería de Software     |
| M4B - Docentes: Gerardo Matturro, Alejando Adorjan |
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
1.  Ver que menú se ofrece en cada fecha, si no hay menú muestra un mensaje de no disponibilidad.
2.  Ingresar como padre y visualizar toda la informacion del mismo en el botón (información padre).
3. Ver una lista o historial de menús comprados.
4. Compra de tickets para la compra de menús.
5. Comprar un menú.
6. Comentar y evaluar un menu.
7. Observar comentarios realizados a cada menú.
*Imagen de funcionalidad 1:*
![](https://hackmd.io/_uploads/BkEN4VXO3.png)
*Imagen de funcionalidad 2,3:*
![](https://hackmd.io/_uploads/B1Cp-4QOn.png)
*Imagen de funcionalidad 4:*
![](https://hackmd.io/_uploads/HyiUf4Qdn.png)
*Imagen de funcionalidad 5:*
![](https://hackmd.io/_uploads/B1USX4m_2.png)
*Imagen de funcionalidad 6:*
![](https://hackmd.io/_uploads/HyRd7N7uh.png)
*Imagen de funcionalidad 7:*
![](https://hackmd.io/_uploads/Sye6XNQ_3.png)

**Funcionalidades de usuario directora**
1. Agregar un menú al calendario para la fecha deseada, que este disponible (sin menú ya cargado).
2. Crear un menu desde cero, personalizando su nombre, descripción, información nutricional y alergenos.
3. Puede visualizar los comentarios y evaluaciones de cada menú ya cargado realizado por los padres.
*Imagen de funcionalidad 1:*
![](https://hackmd.io/_uploads/SkLpVNXO2.png)
*Imagen de funcionalidad 2:*
![](https://hackmd.io/_uploads/rkAkHV7_3.png)
*Imagen de funcionalidad 3:*
![](https://hackmd.io/_uploads/B1_VS4mO3.png)


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

![](https://hackmd.io/_uploads/BymRsNXd2.png)
El proyecto dispone de las siguientes carpetas en la carpeta fuente:

1. **Dominio:** Contiene las clases del código y la carpeta test con los test unitarios de cada clase.
Cada archivo es una clase.
2. **Interfaz:** Contiene el css (estilos.css), imagenes, javascript (index.js) y datos precargados del (DatosPreCargados.js) index.html.
3. El index.html nuestra página afuera de ambas carpetas.

**Otras carpetas:**
Luego estan las carpetas docs (No contiene el software si no la documentación), coverage (informe de la cobertura de los test unitarios) y out (la documentación de jsdocs).

# Interfaz de usuario

## Diseño UI
Para la realización de la interfaz de usuario nos basamos en los bocetos de los requerimientos, y en otros principios de usabilidad, utilizamos un diseño limpio y minimalista para que quede lo mas claro posible como funciona cada componente, otro principio que desarrollamos es que cada acción que realiza el usuario tiene una retroalimentación (se visualizan mensajes para todo acción del usuario).

## Responsividad
Tambien aplicamos responsibidad a nuestro proyecto para que la interfaz sea adecuada en todas las resoluciones de pantalla.
*Responsividad pantallas grandes mayor a 1500px de ancho:*
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/ResponsiveGrande.PNG></img>
*Responsividad pantallas medias menor a 1000px de ancho:*
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/ResponsiveMedia.PNG></img>
*Responsividad pantallas pequeñas menor a 800px de ancho:*
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/ResponsiveChica.PNG></img>

## Accesibilidad
Nuestro proyecto cumple con los principios de accesibilidad WCAG lo comprobamos con la extensión wave.
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/WaveDespues.PNG></img>

El único error que tuvimos de contraste no lo podemos arreglar ya que es por las estrellas de el css de una libreria externa.
Reportamos el issue https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/issues/4

# Codificación

## Estilo de codificación
La codificación la realizamos en el IDE Visual Studio Code, respetando el estandar de codificación 'google style' el cual comprobamos con esLint, para cada código de js.
**Eslint con 0 errores para las clases del dominio:**
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/eslintDominio.PNG></img>

**Eslint para el codigo index.js:**
<img src=https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/eslintindex.PNG></img>
Reporte de issue por lineas muy largas: https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/issues/5

## Buenas practicas de OOP

Separamos las clases del dominio, en 5 archivos de javascript cada uno es una clase (Comentario.js, Dia.js, Menu.js, Padre.js, Sistema.js). Así modificar y actualizar el codigo es mucho mas fácil y comodo de realizar.
Para el código de la interfaz utilizamos dos archivos de javascript por un lado DatosPreCargados.js que son todos los datos que queriamos precargar en el sitio web, y otro llamado index.js que tiene todos los eventos y funciones de la interfaz. Consideramos que poner los datos precargados en otro archivo de javascript era buena practica ya que son muchas líneas que dificultarian la visualización de todo el resto de código si se pusiera todo junto, aparte que al modificar dichos datos de prueba no nos preocupamos si borramos alguna función importante del sistema por error.

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
