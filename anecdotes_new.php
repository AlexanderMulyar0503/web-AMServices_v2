<!DOCTYPE html>
<html>
    <head>
        <title>AMServices - Anecdotes New</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="img/icon/favicon.png">
        <link rel="stylesheet" href="css/default.css">
        <link rel="stylesheet" href="css/anecdotes_new_style.css">
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
                <a class="site_map_a" href="anecdotes_new.php"> Добавление анекдота</a>
            </div>


            <div class="body_all">

                <form action="anecdotes_add.php" method="post">
                    <input name="ancd" type="text" value="Введите текст"> <br>
                    <input type="submit" value="Добавить">
                </form>

                <p> Вернутся на основную <a href='anecdotes.php'> страницу</a> </p>

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