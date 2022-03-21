# Java_Bootcamp_Splai_UD37_Rick_And_Morty

@Author :  Isabel Calzadilla

UD37-38-41 : Inicio de API con interfaz gráfica de Rick and Morty



                                                                  ENUNCIADO
                                                                  
                                                                  
 T37 - Rick & Morty Frontend App

  Rick & Morty Frontend App
  
  
 -  A partir del archivo database.json adjunto a la tarea realiza las consultas GET necesarias para pintar la información de varios personajes en tu vista web. 

Añade tres enlaces en la parte superior de la página (puedes utilizar un navbar). El primero dará acceso a la pantalla de bienvenida (Home). El segundo mostrará un 

listado de personajes aleatorio. Y el tercer enlace debe mostrar mediante otra ruta el nombre del programador, versión y fecha de desarrollo (about us). Configura correctamente el sistema de enrutado de angular.

Ejemplo de diseño:



                                                                  DISEÑO
                                                                  
                                                                  
   ![image](https://user-images.githubusercontent.com/36207623/158378640-d8445617-7c39-4c63-947b-d38190f5a5f2.png)
   
   
                                                                 RESULTADOS
                                                                 
                                                                 
 - Componente Inicio :


![image](https://user-images.githubusercontent.com/36207623/158378868-48964524-0f8e-4433-bca4-8a2b7fe12b6f.png)


- Componente Personajes : 


![image](https://user-images.githubusercontent.com/36207623/158379051-85ecace8-e3b0-49e5-a33e-d7568e063fbd.png)


- Componente Sobre Nosotros : 


![image](https://user-images.githubusercontent.com/36207623/158379230-d4261bee-1231-4ba8-ab34-d13b601bb183.png)



                                                          EDIT : SEGUNDA EDICIÓN DEL PRINCIPAL
                                                          
                                                          
                                                          
- Enunciado : Agregar un componente indexado al de personajes, que al clicar sobre la tarjeta del mismo, nos envie al componente nuevo con la ubicación por ID del personaje y viceversa.



                                                             COMPONENTE : PERSONAJE (NUEVO)
                                                                  
                                                                  
  
  ![image](https://user-images.githubusercontent.com/36207623/158885155-89ed5471-8899-4e4d-8500-8edff5954066.png)
  
  
  - Path específico desde la url :


![image](https://user-images.githubusercontent.com/36207623/158885320-951370ad-4d57-45cf-a961-8bebf3fd694e.png)



                                                            REDISEÑO DE COMPONENTES ANTIGUOS
                                                            
                                                            
 ![image](https://user-images.githubusercontent.com/36207623/158885514-699a4cfc-f1e5-4a4e-9866-6559ace80438.png)




                                                           EDIT : TERCERA EDICIÓN DEL PRINCIPAL
                                                          
                                                          
                                                          
- Enunciado : CRUD Rick & Morty Frontend App


Por medio de una aplicación de Angular realizar el CRUD completo a un clon de la API de Rick y Morty https://rickandmortyapi.com/ , utiliza faker para la creación del servidor de datos. En ella se ha de mostrar la información de varios personajes en tu vista web. Puedes utilizar la aplicación realizada en el ejercicio anterior para realizar el evolutivo. Como base de datos has de utilizar el documento database.json adjunto.

Añade los enlaces en la parte superior de la página (puedes utilizar un navbar):

acceso a la pantalla de bienvenida (Home). 
listado de personajes aleatorio. 
about us. 
vista detalle de personaje.
formulario que te permita añadir un nuevo personaje a la lista. 
Configura correctamente el sistema de enrutado de angular.



                                                             COMPONENTE : FORMULARIO (NUEVO)

 
 ![image](https://user-images.githubusercontent.com/36207623/159171173-bc39fd6c-43d7-4394-9f3d-f175f6908b7b.png)



                                                             COMPONENTE : BÚSQUEDA DE PERSONAJES (NUEVO)
                                                             
                                                             
 ![image](https://user-images.githubusercontent.com/36207623/159171222-9c0dc360-f744-45e0-9713-f03f5a734cea.png)


                                          ADICIÓN EN LA LISTA DE PERSONAJES DE LOS PERSONAJES CREADOS EN EL FORMULARIO
                                          
                                          
  ![image](https://user-images.githubusercontent.com/36207623/159171267-8618eed5-00a2-43e4-ae51-f0dd051b02cd.png)
                                        
                                        
                                                    ADICIÓN EN EL PERSONAJE OPCIONES PARA ACTUALIZAR, BORRAR
                                                    
                                                    
  ![image](https://user-images.githubusercontent.com/36207623/159172219-e3c6374a-4848-4cd4-8163-d5156a1c714a.png)
                                                  
