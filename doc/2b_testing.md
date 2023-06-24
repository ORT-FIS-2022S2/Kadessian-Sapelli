# Test de sistema
Una vez realizado nuestro proyecto, se nos asigno un proyecto de otro equipo para realizar pruebas exploratorias. Estas pruebas son un enfoque flexible para descubrir problemas en el software mediante la exploración activa y la toma de decisiones durante el proceso de prueba. El equipo que nos toco testear es el de Collazo, Ricca y Salgado. 

El proyecto puede ser encontrado en el siguiente repositorio: 
```
https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado.git
```
## Sesiones de Prueba
A continuacion se realizaron las sessiones de prueba del sistema. Para documentar estas pruebas se escribe el Bloque de tiempo que duro la prueba. Estos bloques pueden Corta (30 minutos), Media (60 minutos) o Larga (90-120 minutos).

Luego se definen objetivos en donde se plantean elementos a teastear y la idea que se tiene de la prueba. 

A lo ultimo se escriben las conclusiones obtenidas luego de realizar la prueba con los resultados obtenidos.

### Sesion de prueba exploratoria 1
*Bloque de tiempo:* 60 minutos (Media)
*Fecha:*23/6/2023
*Nombre del tester:* Jorge Sapelli
*Objetivos:* 
- Validar que se agregué un Comensal al sistema correctamente

- Verificar que se notifique cuando se haya agregado

- Chequear casos donde el usuario ya este creado

- Analizar la interfaz de usuario

- Probar que la web sea responsive y funcione con un movil (iPhone 8 en nuestro test)

- Concluir mejoras o bugs

*Notas:* Se notaron varios errores e inconsistencias al momento de hacer la prueba. En primer lugar el sistema no notifica al usuario cuando un comensal fue agregado al sistema por mas de que lo haya agregado correctamente. Luego, realizamos un caso donde se intento agregar al mismo Comensal en donde el sistema mostro el correcto mensaje de error. Se revisaron casos borde en donde se inserto un comensal con edad 0 y el sistema lo agrego correctamente, el sistema no muestra una edad minima pero para futuras mejoras recomendamos insertar una. Viendo la interfaz, no logramos distinguir correctamente los "Datos precargados" ya que el color de estos caracteres son muy similares al color de los datos ingresados por el usuario. Por ultimo, vimos que el sistema no se adapta correctamente al tamaño de la pantalla. Primero, con un determinado zoom en la pestaña chrome, el boton "Agregar Comensal" no aparece en pantalla y dado que hay un footer, el sistema no permite visualizar correctamente el boton, haciendo imposible agregar el comensal deseado. Luego se realizo un test con la extension "MobileView" de Visual Studio Code lo cual permite ver el sistema desde un determinado celular. Hicimos la prueba con un iPhone 8 y los resultados fueron los siguientes:

| <img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestHistorial_iPhone8.png" width="250"> | <img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestComensal_iPhone8.png" width="250"> |

Como se puede ver, la informacion del footer queda cortado y no podemos visualizar el boton de "Agregar Comensal" como hemos mencionado anteriormente

### Sesion de prueba exploratoria 2
*Bloque de tiempo:* 30 minutos (Corta)
*Fecha:*23/6/2023
*Nombre del tester:* Ana Betina Kadessian
*Objetivos:* 
- Validar que la grámatica y ortografia se correcta.

- Validar consistencia de los mensajes y señales que emite el sitio web.

*Notas:* Luego de explorar y leer detenidamente cada sección no se encontrarón errores ortograficos ni inconsistencias gramaticales que mejorar.
Se encontrarón inconsitencias con los mensajes que emite el sitio web, en la sección agregar comensal se ve como placeholder en los inputs (sin haber ingresado nada) los datos de una persona llamada Santiago Molinari como se ve en la imagen:
| <img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestMensajes.png"> |
Esto me parece inadecuado porque se confunde con un dato ya ingresado, lo mejor sería especificar que tipo de dato requiere dicho input por ejemplo en edad, en vez de 12 poner edad.
Por otro lado en la página "historial de pedidos", la inconsitencia esta en que hay total ausencia de indicaciones claras de que efectua cada botón, simplemente hay cinco botones que contienen un número el cual hay que adivinar que hace, a pesar de esto no pude evaluar del todo los mensajes en dicha página ya que no funcionan los botones con números de dicha sección.
| <img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/testmensajebotones.png"> |
Otro defecto encontrado en dicha página es que la descripción del menú solo aparece cuando el comensal pidio dicho menú, (el número del boton aparece mayor a 0 intuyo que significa eso), pero tendría mas logica ver la descripción independientemente de que haya pedido el comensal.
Concluimos que se revise el código nuevamente y se vea en que se falla para que el sitio web pueda funcionar correctamente.


<br>

### Sesion de prueba exploratoria 3
*Bloque de tiempo:* 30 minutos (Corta).
*Fecha:*23/6/2023
*Nombre del tester:* Jorge Sapelli
*Objetivos:* 
- Verificar que se pueda seleccionar un mes y un comensal de forma sencilla

- Ver que hayan datos en el historias 

- Ver si hay historial para un comensal agregado por el usuario (No precargado)


*Notas:* En esta prueba, no habia mucho por probar ya que las funcionalidades son acotadas. Se encontro un error al principio cuando no se selecciona ningun mes y tenemos a enero como default, no nos aparece para seleccionar ningun comensal. Luego cuando seleccionamos el mes de mayo y junio, nos aparecen comensales pregargados pero no el que acabamos de agregar. Cuando se selecciona un comensal precargado (Que se encuentran precargados en pocos meses) se ve el historial con el menu de ciertos dias especificas. Se ve un numero junto al dia que nunca especifica que quiere decir ese numero. La selección del mes y del comensal (sí lo hay) son claras y muy sencillas.

Al no haber muchas funcionalidades en el sistema, solo se lograron realizar estas tres pruebas exploratorias. 

<br>

## Test de caja negra
Realizamos el test de caja negra de particiones equivalentes en la página de agregar comensal ya que es la única en la que observamos una entrada y salida de datos.

**Definimos las siguientes clases de equivalencia:**

| Entrada / Variable | Clases válidas                                 | Clases inválidas                          |
| ------------------ | ---------------------------------------------- | ----------------------------------------- |
| Nombre             | Una cadena de texto no vacía.(1)               | Una cadena de texto vacía.(4)                |
| Apellido           | Una cadena de texto no vacía.(2)               | Una cadena de texto vacía.(5)              |
| Edad               | Un número entero mayor a cero y menor a 18.(3) | Un número menor igual a cero(6).Un número mayor igual a 18(7) |

 <img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestParticionEquivalente.png"> 

Encontramos errores en el ingreso de la edad, ya que la aplicación permite cualquier edad incluso 0 y mayor a 18, el resto de las pruebas las paso correctamente.

# Evaluación global de la calidad

### Cálidad de codigo
    Se evaluo la calidad del codigo de javaScript y encontramos los siguiente problemas:

    -En main.js hay eventos inecesarios (lineas 40 al 53) dichos eventos que te redirigen a otra página al apretar un botón se pueden añadir como atributo en una etiqueta html "href", por lo que son inecesarios.
    -Con respecto al estilo de códificación se observo que tienen líneas muy largas lo que nos dificulta el analizis del código, las cuales se podrian fragmentar en variables mas pequeñas con nombres nemotecnicos.
    -Utilizan let en constantes (lineas 12 al 28,82,83,163,171,179).
    -No hay un estándar de utilización de comillas en strings, utilizan "" y '' mezcladas.
    -Los nombres de los archivos de la clase comensal.js , lista_comensal.js, lista_pedido.js no son consistentes con el nombre de la clase, los cuales deberian ser Comensal.js, ListaComensal.js, ListaPedido.js respectivamente.
    -Falta jsDocs lo que nos dificulta entender de que tipo es cada variable y retorno, aparte podrian incluir mas comentarios especificando que hace cada función.
    -Hay funciones que deberian ser métodos pertenecientes a su clase.
    -Tienen demasiada cantidad de líneas en funciones y eventos que se podrían reducir en bloques mas pequeños para facilitar la lectura de código y reutilización del mismo.
    Por lo cual concluimos que la calidad de este código es muy baja.

    link del issue report : https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado/issues/4
### Funcionalidad
    Lamentablemente no se pudierón evaluar funcionalidades ya que no funciona correctamente el sitio web.

### Accesibilidad
    Se evaluo la accesibilidad del sitio con la extensión wave y no se encontrarón errores graves, solo dos alertas sobre el texto alternativo de unos logos.
    Por lo que dentro de los parametros el sitio web cumple con los estandares de accesibilidad.

### Portabilidad
    Se probo en pruebas exploratorios desde diversos dispositivos y al cambiar la resolución de pantalla se esconden los botones y queda inutilizable por lo que este sitio web no es portable para equipos mobiles.

# Reporte de issues
Luego de estas dos pruebas exploratorias, reportamos 11 issues y definimos los siguientes lables pasa estos.

Error: Algo no funciona

Mejora a futuro: Elementos que se podrian incluir/arreglar del sistema para que el usuario entienda mejor o facilite el uso del sistema

Invalidez: Datos invalidos ingresados y que fueron aceptados

<br>

### Estos fueron los issues reportados: 
__Error:__
- No se permite seleccionar comensal en el mes de enero al no seleccionar un mes pero apareciendo ese mes como default
- No se puede visualizar el comensal agregado por el usuario dentro de las opciones al elegir comensal en el historial de pedidos
- Hay errores de ortografia y de typeo

__Mejora a futuro:__
- Agregar informacion de alguna forma sobre los numero que aparecen debajo de cada dia en el   historial de pedidos
- Realizar una interfaz web responsive que se adapte al tamaño de la pantalla del dispositivo
- Aclarar la tonalidad del color del texto de los datos puestos como default en los campos de Agregar  Comensal asi no es confundible con los datos ingresados
- Agregar un campo para que el usuario ingrese una dieta especial que no este dentro de las opciones
- Agregar una advertencia con la edad minima y maxima para agregar un comensal
- Agregar un mensaje de confirmacion cuando se agrega un comensal


__Invalidez:__
- Se agrego un comensal con edad 0
- Se agrego un comensal con edad 1000

<br>

Estos son los 11 issues que se realizaron en el github del repositorio de Collazo, Ricca y Salgado. 
En github, los lables automaticos son bug, enhancement e invalid. Pero para que se entienda mejor, modificamos los labels de github. 

Para cada una de ellas se aplico buenas practicas de reporte asi se entienden lo mejor posible. 

Por esta razon, para cada label se le asigno prioridad, su label correspondiente y fotos mostrando a lo que se hace referencia.

<br>
# Sumario de issues

Luego del testing del sistema y del reporte de los issues, se llego a que el sistema cuenta con:

- 3 Errores
- 6 Mejoras a futuro
- 2 invalidez

<br>

Ya habiendo visto esto, podemos decir que es necesario que se vea el codigo y funcionamiento ya que hay importantes errores como la posibilidad de seleccionar comensales y el poder ver el historial del comensal agregado por el usuario. Tambien se añadieron varias recomendaciones pero importantes mejoras a futuro para hacer que el trabajo de los compañeros sea aun mas efectivo y amigable para el usuario, ya que estas issues van a hacer que el trabajo de los compañeros se destaque mas.

Como conclusion, el sistema hecho por los compañeros esta simple pero hace lo que debe hacer. Para un primer release es muy buen proyecto y creemos que va bien encaminado para ser un excelente sistema para cualquier usuario que desee utilizarlo. 