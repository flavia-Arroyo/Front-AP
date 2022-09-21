# Proyecto Argentina Programa

En este proyecto contiene tiene dos secciones una de **front-end** y otra **back-end**
##Front-End
Se utilizaron los siguientes framework y lenguajes
'''
!(https://i.ibb.co/2ZVcbsc/boostrap.jpg)
!(https://i.ibb.co/VSY1ZSS/html.png)
!(https://i.ibb.co/PrJBDz2/CSS.png)
!(https://i.ibb.co/0Gb8jNQ/angular.png)
!(https://i.ibb.co/RD1FcTJ/typescript.png)
!(https://sweetalert2.github.io/images/SweetAlert2.png)

 
'''
se desarrollo un portfolio responsivo, totalmente editable por lo que el que lo visite si se loguea con el usuario y contraseña correcta puede editar el porfolio 
virtual y personalizarlo desde el banner y todas las secciones que cuenta. 
Cuenta con las siguientes secciones, las cuales una vez logueados se puede editar modificar o eliminar los datos que estan incorporados en la misma:
'''
Redes Sociales: Se incorporan las redes sociales que la persona quiere exponer para ser contactado por quienes visiten su portfolio web
sobremi: en donde se expone nombre de la persona profesion localidad y una breve reseña llamada sobre mi donde describe aspectos importantes de ella 
Experiencia: hace referencia a la experiencia laboral de la persona donde se pone logo de la empresa detalle de la tarea realizada y periodo en 
el que se desempeño 
Educacion: se expone la educacion con la que cuenta la persona desde carreras de grado porgrado y tambien cursos que haya realizado, se observa logo de la institucion
titulo obtenido y el detalle si esta concluido o en curso 
Skills: se expone con porcentaje de conocimiento tanto habilidades blandas como duras de la persona
Proyectos: se incluye proyectos  web  que haya desarrollado la persona, donde se observa titulo breve descripcion e imagen del mismo, tambien se incluye botones donde 
se puede ir a la pagina del mismo y al repositorio para poder ser observado en detalle 
'''
#imagenes del Portfolio web sin editar y editable

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://i.ibb.co/L65pss9/pantalla-movil.png">
  <source media="(prefers-color-scheme: dark)" srcset="https://i.ibb.co/KrSxQ4Z/portfolio-gramde.png">
  <source media="(prefers-color-scheme: dark)" srcset="https://i.ibb.co/dLdhmbT/pantalla-editable.png">
    <source media="(prefers-color-scheme: dark)" srcset="https://i.ibb.co/HPxpyVb/portfolio-grande-editable.png">
 
</picture>


##Back-end
se utilizo para su desarrollo 
'''
!(https://i.ibb.co/MG1XJXy/mysql.png)
!(https://i.ibb.co/fYBPw7M/java.jpg)

'''

con el back-end se diseño el DER(diseño conceptual), Modelo Relacional (diseño logico) y el diseño fisico para la creacion de la base de datos en MYSQL la estructura necesaria y se conecto esta usando API de java persistencia (JPA)

##login
se aplico en el back jwt con Spring Boot y Angular

##deploy
se realizo el deploy del back end en heroku y el front a firebase, lo que brinda url que permite acceder via online a las mismas partes del codigo

