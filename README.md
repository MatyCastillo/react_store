# Proyecto E-commerce en ReactJs 

Para CODERHOUSE.

## Dependencias extras

El proyecto se encuentra desallorado con las siguiente dependecias que no se dieron en el curso:

### `Yarn`

### `MaterialUI`

## Acerca del Proyecto

En el siguiente proyecto se implementó el inicio de un e-commerce. 
Por el momento está desarrollado el NavBar, compuesto por el logo y nombre de la tienda, que al hacer click en algunos de ellos el usuario es redirigido a la pantalla inicial, un listado de categorías, en el que se encuentran las categorías y muestran los artículos pertinentes al clickear sobre alguna categoría, y un carrito de compras, el cual no se encuentra implementado aún. Esta navbar se mantiene en todas las secciones. 

La pantalla inicial(home) es un catálogo en el cual se disponen todos los artículos disponibles en la tienda, cada producto es una Card en la cual se muestra el título, el id, el precio, una descripción corta del producto y un contador de productos que permite seleccionar la cantidad de artículos para luego agregarlos al carrito con el botón que se encuentra debajo del mismo.

Al hacer click en un producto se ingresa a los detalles del producto, donde se puede encontrar una vista más detallada del producto que incluye además del título, el id y el precio, la categoría a la cual corresponde y la descripción completa. Del mismo modo que la card, se puede seleccionar la cantidad y agregarlo al carrito.

## Enfoque y Decisiones

Opté por un enfoque orientado a una base de e-commerce el cual se puede adaptar a cualquier uso, me pareció bueno que al finalizar el proyecto obtenga un template que pueda ser usado en cualquier ámbito.

Decidí utilizar MaterialUI porque es una librería que está pensada para react, además que su diseño es el nativo de android que esta tan afirmado en los usuarios finales.
