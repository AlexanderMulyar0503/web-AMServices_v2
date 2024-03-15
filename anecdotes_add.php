<!DOCTYPE html>
<html>
    <head>
        <title>AMServices - Anecdotes Add</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="img/icon/favicon.png">
    </head>

    <body>
        <?php
            echo $_POST["ancd"];
            echo "<br>";

            $conn = new mysqli("127.0.0.1", "anecdotes", "anecdotes", "anecdotes");

            if ($conn->connect_error)
            {
                die("Ошибка: " . $conn->connect_error);
            }

            $sql = "INSERT INTO anecdotes (ancd) VALUES ('{$_POST["ancd"]}')";

            $sqlqw = mysqli_query($conn, $sql);

            if ($sqlqw) 
            {
                echo '<p>Данные успешно добавлены.</p>';
            }
            else
            {
                echo '<p>Произошла ошибка: ' . mysqli_error($conn) . '</p>';
            }

            $conn->close();
        ?>

        Вернутся на основную <a href='anecdotes.php'> страницу</a>
        
    </body>
</html>

