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
## Objetivos
Nuestro objetivo fue completar los requerimientos de mayor importancia definidos en la elicitacion del proycto. 

### UML
Creamos un diagrama de clases para poder visualizar mejor el esqueleto del sistema y tener en claro que clases eran necesarias crear para el funcionamiento de la pagina web.
<img src="https://github.com/ORT-FIS-2022S2/Sapelli-Kadessian/blob/dev/imagenes/UML.png">

### Funciones del Sistema
Al no tener login en nuestro sistema, el sistema contara con un usuario predefinido.

**Funciones del usuario**
- Ingresar como padre y visualizar toda la informacion del mismo
- Poder comprar tickets para la compra de menus
- Comprar un menu
- Comentar y evaluar un menu

**Funciones de directora**
- Agregar menu al calendario
- Crear un menu desde cero
- Editar un menu

<br>

# Interfaz de Usuario

## Instalacion y iniciación del proyecto

Descargar e instalar la ultima versión de Node.JS
> https://nodejs.org/

Una vez clonado este repositorio en su máquina, abra una terminal y posicionesé en la primer carpeta "/Kadessian-Sapelli" y ejecute los siguientes comandos:

```
npm init
```
```
npm install
```
Para ejecutar el proyecto en la misma ruta de la terminal ejecuté esté comando

```
node app.mjs
```
Luego de esto dirijasé al localhost:3000 de su explorador web
> http://localhost:3000/

Es importante que NO se cambie la configuracion de puertos

<br>

Para correr pruebas jest ingrese en la misma terminal de comandos
```
npm run test
```

