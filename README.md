
# CRUD Ecommerce

Bienvenidos! Aqui una breve descripcion del backend de mi app


# CRUD Ecommerce

Bienvenidos! Aqui una breve descripcion del backend de mi app


## Aclaraciones

#### ¿Que falta?

Implementar dos acciones, 'Ver' y 'Editar'. Y realizar un test end to end con cypress.

#### ¿Errores detectados?

Cuando se intenta eliminar una marca la peticion no se ejecuta correctamente, esto es raro porque tiene la misma logica que cuando eliminamos un producto

#### ¿Por qué sucedieron?
Principalmente por falta de tiempo, creo que en 3 dias podria solucionarlos correctamente y agregar algunas mejoras como tests con Jest.

#### ¿Que haria?
La seccion de 'Editar' seria facilmente terminada ya que con el componente 'BrandForm' y 'ProductForm' podria hacerlo, solo deberia cambiar la prop de la api y method. Ademas de implementar una lectora del Producto o Marca que se quiera editar para que el usuario conozca en todo momento los datos que tienen establecidos.

Con la seccion de 'Ver' tengo que tomarme el tiempo de releer la documentacion de Next.js 13 sobre el manejo de rutas ya que mi mayor impedimento fue poder usar el 'id' depositado en la URL como parametro en el llamado a la Api y así obtener el producto/marca que se requeria.


## Deploy

El deploy es en https://ecommerce-jolx7d65z-valenn0101.vercel.app/
    
## Funcionalidades

1) Login de usuarios: Mediante un login el usuario puede acceder a ciertas funcionalidades de la pagina como el poder Editar, Crear y Eliminar productos y marcas.

2) Doble Seguridad: El usuario que no se encuentre logeado, un cliente, no tendra habilitado los botones para realizar las acciones CRUD. Pero si insiste en dirigirse a esa URL esta detectara que no inicio sesion y mandara un mensaje de alerta.

3) Crear, Editar y Elimitar: La aplicacion permite realizar estas acciones con dos elementos, 'products' y 'brands'



## Librerias Utilizadas

- axios (versión 1.4.0): Una librería para hacer solicitudes HTTP desde el navegador o Node.js.
- bootstrap (versión 5.2.3): Un framework de diseño front-end que proporciona estilos predefinidos y componentes para construir interfaces web responsivas.
- enzyme (versión 3.11.0): Una utilidad de prueba para React que facilita la manipulación y el análisis de componentes en las pruebas unitarias.
- eslint (versión 8.39.0): Una herramienta de linting que ayuda a identificar y corregir problemas en el código JavaScript.
- eslint-config-next (versión 13.3.4): Una configuración específica para ESLint que se utiliza con Next.js, un framework de React para el desarrollo de aplicaciones web.
- js-cookie (versión 3.0.5): Una librería que facilita el manejo de cookies en JavaScript.
- next (versión 13.3.4): Un framework de React que permite construir aplicaciones web del lado del servidor (SSR) y del lado del cliente.
- react (versión 18.2.0): Una biblioteca de JavaScript para construir interfaces de usuario interactivas basadas en componentes.
- react-bootstrap (versión 2.7.4): Una biblioteca que combina Bootstrap con React para facilitar la creación de componentes de interfaz de usuario.
- react-dom (versión 18.2.0): Proporciona los métodos específicos del DOM para la manipulación y renderizado de componentes React.
- react-icons (versión 4.8.0): Una librería que proporciona iconos de diversas fuentes populares como FontAwesome, Material Icons, entre otras.

