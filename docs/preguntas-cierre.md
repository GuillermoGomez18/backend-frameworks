• ¿Qué diferencia existe entre abrir un archivo y abrir un workspace?
Al abrir un archivo en visual code solo abres ese mismo archivo y solo podras ejecutar lo que hay dentro de el sin usar las dependencias que este tenga, en cambio si abres un workspace o carpeta puedes ejecutar ese mismo archivo con todas sus dependencias y hojas de estilo

• ¿Para qué sirve package.json?
Es el archivo principal de node, donde guarda todo como el nombre del proyecto, los scripts, dependencias y versiones

• ¿Qué ventaja ofrece pnpm dev?
Ejecuta el programa y se actualiza automaticamente cuando se guardan cambios, por lo que no necesitamos detener el programa y volverlo a correr para ver reflejado cambios

• ¿Para qué se utiliza un breakpoint?
Es como una pausa en el codigo que permite dettener la ejecucion de un porograma y revisar el proceso paso a paso cuando llega al breakpoint que hayamos puesto

• ¿Por qué node_modules no debe almacenarse en Git?
Porque tiene muchisimos archivos y pesa demasiado, tambien pueden haber conflictos al subirlo cuando se necesite actualizar las dependencias

• ¿Qué configuraciones deben compartirse con el equipo?
Si esta pregunta se refiere a que reglas base debe tener el proyecto a la hora de compartirlo con otra gente para hacer equipo, diria que la carpeta entera de .vscode debido a que ahi estan los formatos, las reglas y las extensiones
