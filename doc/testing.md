# Test de sistema
Una vez realizado nuestro proyecto, se nos asigno un proyecto de otro equipo para realizar pruebas exploratorias. Estas pruebas son un enfoque flexible para descubrir problemas en el software mediante la exploración activa y la toma de decisiones durante el proceso de prueba. El equipo que nos toco testear es el de Collazo, Ricca y Salgado. 

El proyecto puede ser encontrado en el siguiente repositorio: 
```
https://github.com/ORT-FIS-2022S2/Obligatorio1-Collazo-Ricca-Salgado.git
```

<br>

## Sesiones de Prueba
A continuacion se realizaron las sessiones de prueba del sistema. Para documentar estas pruebas se escribe el Bloque de tiempo que duro la prueba. Estos bloques pueden Corta (30 minutos), Media (60 minutos) o Larga (90-120 minutos).

Luego se definen objetivos en donde se plantean elementos a teastear y la idea que se tiene de la prueba. 

A lo ultimo se escriben las conclusiones obtenidas luego de realizar la prueba con los resultados obtenidos.

<br>

### Sesion de prueba exploratoria 1
*Bloque de tiempo:* 30 minutos (Corta)

*Objetivos:* 
- Agregar un Comensal al sistema

- Verificar que se notifique cuando se haya agregado

- Chequear casos donde el usuario ya este creado

- Analizar la interfaz de usuario

- Probar que la web sea responsive y funcione con un movil (iPhone 8 en nuestro test)

- Concluir mejoras o bugs

*Notas:* Se notaron varios errores e inconsistencias al momento de hacer la prueba. En primer lugar el sistema no notifica al usuario cuando un comensal fue agregado al sistema por mas de que lo haya agregado correctamente. Luego, realizamos un caso donde se intento agregar al mismo Comensal en donde el sistema mostro el correcto mensaje de error. Se revisaron casos borde en donde se inserto un comensal con edad 0 y con edad 1000 y el sistema lo agrego correctamente. El sistema no muestra una edad minima ni maxima pero para futuras mejoras recomendamos insertar una. Tambien recomendamos agregar un campo para agregar alguna otra dieta especial por si la que tiene el comensal es poco comun y no se encuentra dentro de las opciones. Viendo la interfaz, no logramos distinguir correctamente los "Datos precargados" ya que el color de estos caracteres son muy similares al color de los datos ingresados por el usuario. Por ultimo, vimos que el sistema no se adapta correctamente al tamaño de la pantalla. Primero, con un determinado zoom en la pestaña chrome, el boton "Agregar Comensal" no aparece en pantalla y dado que hay un footer, el sistema no permite visualizar correctamente el boton, haciendo imposible agregar el comensal deseado. Luego se realizo un test con la extension "MobileView" de Visual Studio Code lo cual permite ver el sistema desde un determinado celular. Hicimos la prueba con un iPhone 8 y los resultados fueron los siguientes:

| <img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestHistorial_iPhone8.png" width="250"> | <img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/TestComensal_iPhone8.png" width="250"> |

Como se puede ver, la informacion del footer queda cortado y no podemos visualizar el boton de "Agregar Comensal" como hemos mencionado anteriormente

<br>

### Sesion de prueba exploratoria 2
*Bloque de tiempo:* 30 minutos (Corta)

*Objetivos:* 
- Poder seleccionar un mes y un comensal de forma sensilla

- Ver que hayan datos en el historias 

- Ver si hay historial para un comensal agregado por el usuario (No precargado)

- Corregir faltas de ortografia y erorres de typeo

*Notas:* En esta prueba, no habia mucho por probar ya que las funcionalidades son acotadas. Se encontro un error al principio cuando no se selecciona ningun mes y tenemos a enero como default, no nos aparece para seleccionar ningun comensal. Luego cuando seleccionamos un mes, nos aparecen comensales pregargados pero no el que acabamos de agregar. Cuando se selecciona un comensal pregarcago (Que se encuentran precargados en pocos meses) se ve el historial con el menu de ciertos dias especificas. Se ve un numero junto al dia que nunca especifica que quiere decir ese numero. En los menus, hay varias faltas de ortografia pero son mas que nada errores de typeo a corregir para el futuro. La seleccion del mes y del comensal (Si lo hay) son claras y muy sencillas.

Al no haber muchas funcionalidades en el sistema, solo se lograron realizar estas dos pruebas exploratorias. 

<br>

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

# Reporte de calidad del sistema

Luego del testing del sistema y del reporte de los issues, se llego a que el sistema cuenta con:

- 3 Errores
- 6 Mejoras a futuro
- 2 invalidez

<br>

Ya habiendo visto esto, podemos decir que es necesario que se vea el codigo y funcionamiento ya que hay importantes errores como la posibilidad de seleccionar comensales y el poder ver el historial del comensal agregado por el usuario. Tambien se añadieron varias recomendaciones pero importantes mejoras a futuro para hacer que el trabajo de los compañeros sea aun mas efectivo y amigable para el usuario, ya que estas issues van a hacer que el trabajo de los compañeros se destaque mas.

Como conclusion, el sistema hecho por los compañeros esta simple pero hace lo que debe hacer. Para un primer release es muy buen proyecto y creemos que va bien encaminado para ser un excelente sistema para cualquier usuario que desee utilizarlo. 
