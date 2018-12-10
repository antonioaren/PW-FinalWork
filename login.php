<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <title>Login</title>

</head>

<?php
 require('conexion.php');
?>

<body class="wrapper">
    <header id="nav" class="grid--content">
        <nav id="navbar">
            <ul class="menu--list">
                <li>
                    <a href="./index.php"><img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Animal_Planet.png/1600px-Animal_Planet.png"
                            alt="Logo"></a>
                </li>
                <li class="menu--item"><a class="link--item" href="./login.php">Login</a></li>
                <li class="menu--item"><a class="link--item" href="./joinus.php">Join us!</a></li>
                <li class="menu--item"><a class="link--item" href="./plants.php">Plants</a></li>
                <li class="menu--item"><a class="link--item" href="./animals.php">Animals </a></li>
            </ul>
        </nav>
    </header>


<!-- onsubmit="loginForm(event)" -->

    <?php 
    
       

    ?>

    <section class="grid--content">
        <h2 id="title-form2" style="text-align:center">Accede a nuestra web</h2>
        <form id="form2" method="POST" action="login.php" >
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label> 
                <input id="email" type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input id="pass" type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </section>


    <footer class="grid--content" id="footer" style="text-align:right">
        <small>realizado por © Pedro Arenas </small>
    </footer>




    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    <script src="/js/index.js"></script>
</body>

</html>