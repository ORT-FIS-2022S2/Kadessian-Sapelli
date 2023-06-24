# Test de sistema
Una vez realizado nuestro proyecto, se nos asigno un proyecto de otro equipo para realizar pruebas exploratorias. Estas pruebas son un enfoque flexible para descubrir problemas en el software mediante la exploración activa y la toma de decisiones durante el proceso de prueba. El equipo que nos toco testear es el de Collazo, Ricca y Salgado. 

El proyecto puede ser encontrado en el siguiente repositorio: 
```
https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado.git
```
## Sesiones de Prueba
A continuacion se realizaron las sessiones de prueba del sistema. Para documentar estas pruebas se escribe el Bloque de tiempo que duro la prueba. Estos bloques pueden ser Corta (30 minutos), Media (60 minutos) o Larga (90-120 minutos).

Luego se definen objetivos en donde se plantean elementos a teastear y la idea que se tiene de la prueba. 

A lo ultimo se escriben las conclusiones obtenidas luego de realizar la prueba con los resultados obtenidos.

### Sesion de prueba exploratoria 1
*Bloque de tiempo:* 60 minutos (Media)

*Fecha:* 23/6/2023

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

*Fecha:* 23/6/2023

*Nombre del tester:* Ana Betina Kadessian

*Objetivos:* 
- Validar que la grámatica y ortografia se correcta.

- Validar consistencia de los mensajes y señales que emite el sitio web.

*Notas:* Luego de explorar y leer detenidamente cada sección no se encontrarón errores ortograficos ni inconsistencias gramaticales que mejorar.
Se encontrarón inconsitencias con la emisión de mensajes que emite el sitio web, en la sección agregar comensal se ve como placeholder en los inputs (sin haber ingresado nada) los datos de una persona llamada Santiago Molinari como se ve en la imagen:
| <img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestMensajes.png" width="250"> |
Esto me parece inadecuado porque se confunde con un dato ya ingresado, lo mejor sería especificar que tipo de dato requiere dicho input por ejemplo en edad en vez de 12 poner edad.
Por otro lado en la página "historial de pedidos", la inconsitencia esta en que hay total ausencia de indicaciones claras de que efectua cada botón, simplemente hay cinco botones que contienen un número el cual hay que adivinar que hace, a pesar de esto no pude evaluar del todo los mensajes en dicha página ya que no funcionan ni los botones ni los select.
| <img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/testmensajebotones.png" width="250"> |
Concluimos que se revise el código nuevamente y se vea en que se falla para que el sitio web pueda funcionar correctamente.

## Evaluación global de la calidad

### Cálidad de codigo
    Se evaluo la calidad del codigo de javaScript y encontramos los siguiente problemas:

    -En main.js hay eventos inecesarios (lineas 40 al 53) dichos eventos que te redirigen a otra página al apretar un botón se pueden añadir como atributo en una etiqueta html "href", por lo que son inecesarios.
    -Con respecto al estilo de códificación se observo que tienen lineas muy largas lo que nos dificulta el analizis del código, las cuales se podrian fragmentar en variables mas pequeñas con nombres nemotecnicos.
    -Utilizan let en constantes (lineas 12 al 28,82,83,163,171,179).
    -No hay un estándar de utilización de comillas en strings, utilizan "" y '' mezcladas.
    -Los nombres de los archivos de la clase comensal.js , lista_comensal.js, lista_pedido.js no son consistentes con el nombre de la clase, los cuales deberian ser Comensal.js, ListaComensal.js, ListaPedido.js respectivamente.
    -Falta jsDocs lo que nos dificulta entender de que tipo es cada variable y retorno, aparte podrian incluir mas comentarios especificando que hace cada función.
    -Hay funciones que deberian ser métodos pertenecientes a su clase.
    -Tienen demasiada cantidad de lineas en funciones y eventos que se podrían reducir en bloques mas pequeños para facilitar la lectura de código y reutilización del mismo.
    Por lo cual concluimos que la calidad de este código es muy baja.

### Funcionalidad
    Lamentablemente no se pudierón evaluar funcionalidades ya que no funciona correctamente el sitio web.

### Accesibilidad
    Se evaluo la accesibilidad del sitio con la extensión wave y no se encontrarón errores graves, solo dos alertas sobre el texto alternativo de unos logos.
    Por lo que dentro de los parametros el sitio web cumple con los estandares de accesibilidad.

### Portabilidad
    Se probo en pruebas exploratorios desde diversos dispositivos y al cambiar la resolución de pantalla se esconden los botones y queda inutilizable por lo que este sitio web no es portable para equipos mobiles.