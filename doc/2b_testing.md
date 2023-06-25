# Test de sistema
Una vez realizado nuestro proyecto, se nos asignó un proyecto de otro equipo para realizar pruebas exploratorias. Estas pruebas son un enfoque flexible para descubrir problemas en el software mediante la exploración activa y la toma de decisiones durante el proceso de prueba. El equipo que nos tocó testear es el de Collazo, Ricca y Salgado. 

El proyecto puede ser encontrado en el siguiente repositorio: 
```
https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado.git
```
## Sesiones de Prueba
A continuación, se realizaron las sesiones de prueba del sistema. Para documentar estas pruebas se escribe el Bloque de tiempo que duro la prueba. Estos bloques pueden ser Corta (30 minutos), Media (60 minutos) o Larga (90-120 minutos).

Luego se definen objetivos en donde se plantean elementos a testear y la idea que se tiene de la prueba. 

A lo último se escriben las conclusiones obtenidas luego de realizar la prueba con los resultados obtenidos.

<br>

### Sesión de prueba exploratoria 1
*Bloque de tiempo:* 60 minutos (Media)

*Fecha:* 23/6/2023

*Nombre del tester:* Jorge Sapelli

*Objetivos:* 
- Validar que se agregué un Comensal al sistema correctamente

- Verificar que se notifique cuando se haya agregado

- Chequear casos donde el usuario ya este creado

- Analizar la interfaz de usuario

- Probar que la web sea responsive y funcione con un móvil (iPhone 8 en nuestro test)

- Concluir mejoras o bugs

*Notas:* Se notaron varios errores e inconsistencias al momento de hacer la prueba. En primer lugar, el sistema no notifica al usuario cuando un comensal fue agregado al sistema por más de que lo haya agregado correctamente. Luego, realizamos un caso donde se intentó agregar al mismo Comensal en donde el sistema mostro el correcto mensaje de error. Se revisaron casos bordes en donde se insertó un comensal con edad 0 y el sistema lo agrego correctamente, el sistema no muestra una edad mínima pero para futuras mejoras recomendamos insertar una. Viendo la interfaz, no logramos distinguir correctamente los "Datos precargados" ya que el color de estos caracteres es muy similar al color de los datos ingresados por el usuario. Por último, vimos que el sistema no se adapta correctamente al tamaño de la pantalla. Primero, con un determinado zoom en la pestaña Chrome, el botón "Agregar Comensal" no aparece en pantalla y dado que hay un footer, el sistema no permite visualizar correctamente el botón, haciendo imposible agregar el comensal deseado. Luego se realizo un test con la extensión "MobileView" de Visual Studio Code lo cual permite ver el sistema desde un determinado celular. Hicimos la prueba con un iPhone 8 y los resultados fueron los siguientes:

<p> <img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestHistorial_iPhone8.png" width="250">  <img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestComensal_iPhone8.png" width="250"> </p>

Como se puede ver, la información del footer queda cortado y no podemos visualizar el botón de "Agregar Comensal" como hemos mencionado anteriormente

<br>

### Sesión de prueba exploratoria 2
*Bloque de tiempo:* 30 minutos (Corta)

*Fecha:* 23/6/2023

*Nombre del tester:* Ana Betina Kadessian

*Objetivos:* 
- Validar que la gramática y ortografía se correcta.

- Validar consistencia de los mensajes y señales que emite el sitio web.

*Notas:* Luego de explorar y leer detenidamente cada sección se encontraron errores ortográficos en la descripción del menú lunes.
Se encontraron inconsistencias con los mensajes que emite el sitio web, en la sección agregar comensal se ve como placeholder en los inputs (sin haber ingresado nada) los datos de una persona llamada Santiago Molinari como se ve en la imagen:

<p><img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestMensajes.png"></p>

Esto me parece inadecuado porque se confunde con un dato ya ingresado, lo mejor sería especificar qué tipo de dato requiere dicho input por ejemplo en edad, en vez de 12 poner edad.
Por otro lado, en la página "historial de pedidos", la inconsistencia está en que hay total ausencia de indicaciones claras de que efectúa cada botón, simplemente hay cinco botones que contienen un número el cual hay que adivinar que hace, a pesar de esto no pude evaluar del todo los mensajes en dicha página ya que no funcionan los botones con números de dicha sección.

<p><img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/testmensajebotones.png"></p>

Otro defecto encontrado en dicha página es que la descripción del menú solo aparece cuando el comensal pidió dicho menú, (el número del botón aparece mayor a 0 intuyo que significa eso), pero tendría más lógica ver la descripción independientemente de que haya pedido el comensal.
Concluimos que se revise el código nuevamente y se vea en que se falla para que el sitio web pueda funcionar correctamente.

<br>

### Sesión de prueba exploratoria 3
*Bloque de tiempo:* 30 minutos (Corta).

*Fecha:* 23/6/2023

*Nombre del tester:* Jorge Sapelli

*Objetivos:* 

- Verificar que se pueda seleccionar un mes y un comensal de forma sencilla

- Ver que hayan datos en el historias 

- Ver si hay historial para un comensal agregado por el usuario (No precargado)

*Notas:* En esta prueba, no había mucho por probar ya que las funcionalidades son acotadas. Se encontró un error al principio cuando no se selecciona ningún mes y tenemos a enero como default, no nos aparece para seleccionar ningún comensal. Luego cuando seleccionamos el mes de mayo y junio, nos aparecen comensales precargados, pero no el que acabamos de agregar. Cuando se selecciona un comensal precargado (Que se encuentran precargados en pocos meses) se ve el historial con el menú de ciertos días específicos. Se ve un numero junto al día que nunca especifica que quiere decir ese número. La selección del mes y del comensal (sí lo hay) son claras y muy sencillas.

Al no haber muchas funcionalidades en el sistema, solo se lograron realizar estas tres pruebas exploratorias. 

<br>

## Test de caja negra
Realizamos el test de caja negra de particiones equivalentes en la página de agregar comensal ya que es la única en la que observamos una entrada y salida de datos.

**Definimos las siguientes clases de equivalencia:**

| Entrada / Variable | Clases válidas                                 | Clases inválidas                          |
| ------------------ | ---------------------------------------------- | ----------------------------------------- |
| Nombre             | Una cadena de texto no vacía.**(1)**               | Una cadena de texto vacía.**(4)**                |
| Apellido           | Una cadena de texto no vacía.**(2)**               | Una cadena de texto vacía.**(5)**              |
| Edad               | Un número entero mayor a cero y menor a 18.**(3)** | Un número menor igual a cero.**(6)** Un número mayor igual a 18.**(7)** |

 <p><img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestParticionEquivalente.png"> </p>

Encontramos errores en el ingreso de la edad, ya que la aplicación permite cualquier edad incluso 0 y mayor a 18, el resto de las pruebas las paso correctamente.



# Reporte de issues
Luego de estas dos pruebas exploratorias, reportamos 12 issues y definimos los siguientes lables pasa estos.

Error: Algo no funciona.

Mejora a futuro: Elementos que se podrian incluir/arreglar del sistema para que el usuario entienda mejor o facilite el uso del sistema.

Invalidez: Datos inválidos ingresados y que fueron aceptados.

<br>

## Estos fuerón los issues reportados:

__Error:__
Se reportarón 4 bugs:

> 1. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/4
> 2. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/5
> 3. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/6
> 4. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/7

- No se permite seleccionar comensal en el mes de enero al no seleccionar un mes pero apareciendo ese mes como default.
- No se puede visualizar el comensal agregado por el usuario dentro de las opciones al elegir comensal en el historial de pedidos.
- Hay errores de ortografía y de typeo.

__Mejora a futuro:__

Se reportarón 6 improvements:

> 1. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/10
> 2. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/11
> 3. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/12
> 4. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/13
> 5. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/14
> 6. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/15

- Agregar información de alguna forma sobre los numero que aparecen debajo de cada día en el   historial de pedidos.
- Realizar una interfaz web responsive que se adapte al tamaño de la pantalla del dispositivo.
- Aclarar la tonalidad del color del texto de los datos puestos como default en los campos de Agregar Comensal así no es confundible con los datos ingresados.
- Agregar un campo para que el usuario ingrese una dieta especial que no esté dentro de las opciones.
- Agregar una advertencia con la edad mínima y máxima para agregar un comensal.
- Agregar un mensaje de confirmación cuando se agrega un comensal.

__Invalidez:__

Se reportarón 2 issues:

> 1. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/9
> 2. https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/8

- Se agrego un comensal con edad 0.
- Se agrego un comensal con edad 1000.

<br>

Estos son los 12 issues que se realizaron en el github del repositorio de Collazo, Ricca y Salgado. 
En github, los lables automáticos son bug para Error, enhancement para Mejora a Futuro, e invalid para Invalidez. 

Para cada una de ellas se aplicó buenas prácticas de reporte asi se entienden lo mejor posible. 

Por esta razón, para cada label se le asigno prioridad, su label correspondiente y fotos mostrando a lo que se hace referencia.

<br>

## Sumario de issues

Luego del testing del sistema y del reporte de los issues, se llego a que el sistema cuenta con:

- 4 Errores
- 6 Mejoras a futuro
- 2 invalidez

<br>

# Evaluación Global de la Calidad

## Calidad de código
Se evaluó la calidad del código de javaScript y encontramos los siguiente problemas:

- En main.js hay eventos innecesarios (lineas 40 al 53) dichos eventos que te redirigen a otra página al apretar un botón se pueden añadir como atributo en una etiqueta html "href", por lo que son innecesarios.
- Con respecto al estilo de codificación se observó que tienen líneas muy largas lo que nos dificulta el análisis del código, las cuales se podrían fragmentar en variables mas pequeñas con nombres nemotécnicos.
- Utilizan let en constantes (líneas 12 al 28,82,83,163,171,179).
- No hay un estándar de utilización de comillas en strings, utilizan "" y '' mezcladas.
- Los nombres de los archivos de la clase comensal.js , lista_comensal.js, lista_pedido.js no son consistentes con el nombre de la clase, los cuales deberían ser Comensal.js, ListaComensal.js, ListaPedido.js respectivamente.
- Falta jsDocs lo que nos dificulta entender de que tipo es cada variable y retorno, aparte podrían incluir más comentarios especificando que hace cada función.
- Hay funciones que deberían ser métodos pertenecientes a su clase.
- Tienen demasiada cantidad de líneas en funciones y eventos que se podrían reducir en bloques más pequeños para facilitar la lectura de código y reutilización del mismo.

Por lo cual concluimos que la calidad de este código es muy baja.

Link del issue report: 

    https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/4

<br>

## Funcionalidad

Lamentablemente no se pudieron evaluar funcionalidades mas que la de agregar un comensal y ver un historial precargado, ya que no funciona correctamente el sitio web y no hay mas funcionalidades.

<br>

## Accesibilidad

Se evaluó la accesibilidad del sitio con la extensión Wave y se encontraron errores, dos alertas sobre el texto alternativo de unos logos y 2 errores de que faltan labels.
Por lo que dentro de los parámetros el sitio web no cumple con los estándares de accesibilidad y debería mejorar.

<img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/Wave-Collazo-Ricca-Salgado.png" width="350"> 

<br>

## Portabilidad

Se probo en pruebas exploratorios desde diversos dispositivos y al cambiar la resolución de pantalla se esconden los botones y queda inutilizable por lo que este sitio web no es portable para equipos móviles.

# Conclusión

Ya habiendo visto esto, podemos decir que es necesario que se vea el código y funcionamiento ya que hay importantes errores como la posibilidad de seleccionar comensales y el poder ver el historial del comensal agregado por el usuario. También se añadieron varias recomendaciones, importantes mejoras a futuro para hacer que el trabajo de los compañeros sea aún más efectivo y amigable para el usuario, ya que estas issues van a hacer que el trabajo de los compañeros se destaque más.

Como conclusión, el sistema hecho por los compañeros esta simple, pero hace lo que debe hacer. Para un primer reléase es muy buen proyecto y creemos que va bien encaminado para ser un excelente sistema para cualquier usuario que desee utilizarlo.
