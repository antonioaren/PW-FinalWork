<?php 
   $host = "localhost:3306";
   $database= "animalplants";
   $user = "root" ;
   $pass = "root" ;

   $connection = mysqli_connect($host, $user, $pass, $database) or die("Hubo problemas");

   $error = mysqli_connect_error();    
   if ($error != null) {
      printf("fallo al conectar a MySQL: %s\n", $error);
      exit();
   }
   //echo 'Connected successfully.';    
?>