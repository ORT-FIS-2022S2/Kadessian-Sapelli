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
*Bloque de tiempo:* 30 minutos (Corta)

*Objetivos:* 
- Agregar un Comensal al sistema

-Verificar que se notifique cuando se haya agregado

-Chequear casos donde el usuario ya este creado

-Analizar la interfaz de usuario

-Probar que la web sea responsive y funcione con un movil (iPhone 8 en nuestro test)

-Concluir mejoras o bugs

*Notas:* Se notaron varios errores e inconsistencias al momento de hacer la prueba. En primer lugar el sistema no notifica al usuario cuando un comensal fue agregado al sistema por mas de que lo haya agregado correctamente. Luego, realizamos un caso donde se intento agregar al mismo Comensal en donde el sistema mostro el correcto mensaje de error. Se revisaron casos borde en donde se inserto un comensal con edad 0 y el sistema lo agrego correctamente, el sistema no muestra una edad minima pero para futuras mejoras recomendamos insertar una. Viendo la interfaz, no logramos distinguir correctamente los "Datos precargados" ya que el color de estos caracteres son muy similares al color de los datos ingresados por el usuario. Por ultimo, vimos que el sistema no se adapta correctamente al tamaño de la pantalla. Primero, con un determinado zoom en la pestaña chrome, el boton "Agregar Comensal" no aparece en pantalla y dado que hay un footer, el sistema no permite visualizar correctamente el boton, haciendo imposible agregar el comensal deseado. Luego se realizo un test con la extension "MobileView" de Visual Studio Code lo cual permite ver el sistema desde un determinado celular. Hicimos la prueba con un iPhone 8 y los resultados fueron los siguientes:

<img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestHistorial_iPhone8.png">
<img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestComensal_iPhone8.png">

Como se puede ver, la informacion del footer queda cortado y no podemos visualizar el boton de "Agregar Comensal" como hemos mencionado anteriormente

