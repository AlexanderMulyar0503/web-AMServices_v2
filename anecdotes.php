<!DOCTYPE html>
<html>
    <head>
        <title>AMServices - Anecdotes</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="img/icon/favicon.png">
        <link rel="stylesheet" href="css/default.css">
        <link rel="stylesheet" href="css/anecdotes_style.css">
    </head>

    <body>
        <div class="main_page"> <a class="main_page_a" href="./">На главную</a> </div>

        <div class="container">
            <header>
                <div class="header_menu">
                    <div class="header_logo">
                        <h1> <a class="logo" href="./">AMServices</a> </h1>
                    </div>

                    <div class="header_nav">
                        <nav>
                            <a class="nav" href="services.html">Services</a>
                            <a class="nav" href="game.html">Game</a>
                            <a class="nav" href="about.html">About</a>
                        </nav>
                    </div>
                </div>
            </header>

            <div class="site_map">
                <a class="site_map_a" href="./">Главная</a> <i class="site_map_a">&#8594</i>
                <a class="site_map_a" href="services.html"> Сервисы</a> <i class="site_map_a">&#8594</i>
                <a class="site_map_a" href="anecdotes.php"> Анекдоты</a>
            </div>

            <div class="body_all">

                <div class="update_ancd">
                    <a href="anecdotes.php">Обновить</a>
                </div>

                <div class="ancd">

                    <?php

                        $conn = new mysqli("127.0.0.1", "anecdotes", "anecdotes", "anecdotes");

                        if ($conn->connect_error)
                        {
                            die("Ошибка: " . $conn->connect_error);
                        }

                        $sql = "SELECT * FROM anecdotes";

                        if ($result = $conn->query($sql))
                        {
                            $rowsCount = $result->num_rows;

                            $rows = $result->fetch_all(MYSQLI_ASSOC);

                            $slct_x = rand(0, $rowsCount - 1);

                            print("<br>");
                            print("<br>");
                            print("<br>");
                            print("<p>" . $rows[$slct_x]['ancd'] . "</p>");
                            print("<br>");
                            print("<br>");
                            print("<br>");

                            $result->free();
                        }
                        else
                        {
                            echo "Ошибка: " . $conn->error;
                        }

                        $conn->close();

                    ?>

                    <br>
                    <a href="anecdotes_new.php">Добавить новый</a>
                    <br>
                    

                    <br>
                    <a href="anecdotes_all.php">Посмотреть все</a>
                    <br>
                </div>

                <footer>
                    <p>
                        <a class="footer_nav" href="./">Home</a>
                        <a class="footer_nav" href="services.html">Services</a>
                        <a class="footer_nav" href="game.html">Game</a>
                        <a class="footer_nav" href="about.html">About</a>
                    </p>

                    <p>&#169 2022 Alexander Mulyar</p>
                </footer>
            </div>
        </div>
    </body>
</html>
