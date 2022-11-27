<?php

session_start();


include('db_connect.php');
$msg="false";
if(isset($_POST['email'])){
    $email = $_POST['email'];
    $password = $_POST['user_password'];

    $sql="SELECT * from user WHERE email='$email' and password='$password'";
    $result=mysqli_query($con,$sql);
    $present=mysqli_num_rows($result);
  
    if($present>0){
       
        header('Location: welcome.php');
    }else{
        $msg="incorrect password or email";
    }   
}

  
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <title>NETIFY LOGIN</title>
</head>
<body>
    <header>
        <div class="left_box1">
            <div class="data">
                <form action="index.php" method="post">
                    <h3>Login</h3>
                    <div class="sheet">
                        <label for="name">Email</label>
                        <input type="email" name="email" placeholder="enter your email  ..." required>
                    </div>
                    <div class="sheet">
                        <label for="user_password">Password</label>
                        <input type="password" name="user_password" placeholder="enter your password..." required>
                    </div>
                    <input type="submit" value="login" class="submit">
                    <div class="check">
                        <input type="checkbox" name="" id=""><span> remember me</span>
                    </div>
                    <p> Do not have an account ? <a href="signup.php">Sign up</a>
                    </p>
                    <!-- <h3 class="ip">Incorrect user_password</h3> -->
                    <?php
                    echo('<h3>'.$msg.'</h3>');
                    ?>

                </form>
            </div>

        </div>
        

    </header>

    
</body>
</html>

