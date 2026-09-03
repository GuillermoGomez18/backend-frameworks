¿Cuál es la función de Node.js en este proyecto?
Node.js se encarga de ejecutar el codigo javascript fuera del navegador y proporciona las APIs necesarias para interactuar con el entorno del servidor

¿Qué errores ayuda a detectar TypeScript antes de ejecutar la aplicación?
TypeScript añade tipos al codigo lo que permite detectar errores antes de que el programa se ejecute, por ejemplo señalara si intentas omitir una propiedad obligatoria o si utilizas un tipo de dato incorrecto en una interfaz

¿Por qué se separaron models, data, services y utils?
Para dividir el programa por responsabilidades para facilitar el mantenimiento de este, caada carpeta tiene un rol claro: models define la forma de los datos, data mantiene la coleccion en memoria, services concentra las reglas de negocio y las operaciones, y utils reune funciones auxiliares reutilizables

¿Qué diferencia existe entre una función síncrona y una función async?
Una función sincrona ejecuta el codigo de forma inmediata y secuencial mientras que una función async maneja operaciones cuyo resultado llegara en el futuro ,declarar una función como async permite utilizar la palabra clave await para esperar a que esa promesa se resuelva antes de continuar con la ejecución

¿Por qué findTaskById devuelve Task | undefined?
Devuelve Task | undefined porque se debe contemplar la posibilidad de que la búsqueda falle y no exista ninguna tarea que coincida con el ID proporcionado en la colección

¿Qué ventaja aporta leer APP_NAME desde process.env?
La principal ventaja es que permite separar la configuración del codigo fuente haciendo posible modificar el comportamiento del programa mediante variables de entorno sin tener que editar el código directamente

¿Qué diferencia observó entre pnpm start y la secuencia pnpm build + pnpm serve?
El comando pnpm start ejecuta directamente el archivo TypeScript una sola vez utilizando el ejecutor en la etapa de desarrollo, la secuencia pnpm build + pnpm serve realiza un proceso de dos pasos: primero compila el código TypeScript para generar archivos JavaScript en la carpeta dist y posteriormente ejecuta ese código ya compilado utilizando Node.js

¿Qué parte de este proyecto podrá reutilizarse cuando se construya la API con Express?
Se podra reutilizar toda la lógica base desarrollada (modelo, datos, reglas de los servicios y utilidades). Esta estructura servirá para concentrarse unicamente en el framework exponiendo estas operaciones a través de rutas HTTP con Express en lugar de tener que reescribir las reglas del negocio
