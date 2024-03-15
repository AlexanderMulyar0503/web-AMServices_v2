function getRandom(min, max)
{
	return Math.trunc(Math.random() * (max - min) + min);
}

function StopGame()
{
	gameBtn1.value = "1";
	gameBtn2.value = "2";
	gameBtn3.value = "3";
	gameBtn4.value = "4";
	gameBtn5.value = "5";
	gameBtn6.value = "6";
	gameBtn7.value = "7";
	gameBtn8.value = "8";
	gameBtn9.value = "9";
	gameBtn10.value = "10";
	gameBtn11.value = "11";
	gameBtn12.value = "12";
	gameBtn13.value = "13";
	gameBtn14.value = "14";
	gameBtn15.value = "15";
	gameBtn16.value = " ";
	gameStat.value = "Игра не начата";
}

function GetWinner()
{
	if
	(
        (gameBtn1.value == "1")&
	    (gameBtn2.value == "2")&
	    (gameBtn3.value == "3")&
	    (gameBtn4.value == "4")&
	    (gameBtn5.value == "5")&
	    (gameBtn6.value == "6")&
	    (gameBtn7.value == "7")&
	    (gameBtn8.value == "8")&
	    (gameBtn9.value == "9")&
	    (gameBtn10.value == "10")&
	    (gameBtn11.value == "11")&
	    (gameBtn12.value == "12")&
	    (gameBtn13.value == "13")&
	    (gameBtn14.value == "14")&
	    (gameBtn15.value == "15")
    )
	{ gameStat.value = "Вы выиграли!"; }
}

function Zapolnenie()
{
    x1 = 0;
    bl = false;
    arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    i = 0;

    while (i < 15)
    {
        x1 = getRandom(1, 16);

        for (let i1 = 0; i1 < 15; i1++)
        {
            if (x1 == arr1[i1]) { bl = true; }
        }

        if (bl == false) { arr1[i] = x1; i++; }
		bl = false;
    }

    gameBtn1.value = arr1[0].toString();
    gameBtn2.value = arr1[1].toString();
    gameBtn3.value = arr1[2].toString();
    gameBtn4.value = arr1[3].toString();
    gameBtn5.value = arr1[4].toString();
    gameBtn6.value = arr1[5].toString();
    gameBtn7.value = arr1[6].toString();
    gameBtn8.value = arr1[7].toString();
    gameBtn9.value = arr1[8].toString();
    gameBtn10.value = arr1[9].toString();
    gameBtn11.value = arr1[10].toString();
    gameBtn12.value = arr1[11].toString();
    gameBtn13.value = arr1[12].toString();
    gameBtn14.value = arr1[13].toString();
    gameBtn15.value = arr1[14].toString();
    gameBtn16.value = "   ";
}

function StartGame()
{
    Zapolnenie();

    gameStat.value = "Игра начата";
}

function Game(x)
{
    if (gameStat.value == "Игра начата")
    {
        var xx1 = gameBtn1;
        var yy1 = gameBtn2;
        var yy = 0;
        i = "";
        // getNull
        if (gameBtn1.value == "   ") { yy1 = gameBtn1; yy = 1; }
        if (gameBtn2.value == "   ") { yy1 = gameBtn2; yy = 2; }
        if (gameBtn3.value == "   ") { yy1 = gameBtn3; yy = 3; }
        if (gameBtn4.value == "   ") { yy1 = gameBtn4; yy = 4; }
        if (gameBtn5.value == "   ") { yy1 = gameBtn5; yy = 5; }
        if (gameBtn6.value == "   ") { yy1 = gameBtn6; yy = 6; }
        if (gameBtn7.value == "   ") { yy1 = gameBtn7; yy = 7; }
        if (gameBtn8.value == "   ") { yy1 = gameBtn8; yy = 8; }
        if (gameBtn9.value == "   ") { yy1 = gameBtn9; yy = 9; }
        if (gameBtn10.value == "   ") { yy1 = gameBtn10; yy = 10; }
        if (gameBtn11.value == "   ") { yy1 = gameBtn11; yy = 11; }
        if (gameBtn12.value == "   ") { yy1 = gameBtn12; yy = 12; }
        if (gameBtn13.value == "   ") { yy1 = gameBtn13; yy = 13; }
        if (gameBtn14.value == "   ") { yy1 = gameBtn14; yy = 14; }
        if (gameBtn15.value == "   ") { yy1 = gameBtn15; yy = 15; }
        if (gameBtn16.value == "   ") { yy1 = gameBtn16; yy = 16; }
        //getBtn
        if (x == 1) { xx1 = gameBtn1; }
        if (x == 2) { xx1 = gameBtn2; }
        if (x == 3) { xx1 = gameBtn3; }
        if (x == 4) { xx1 = gameBtn4; }
        if (x == 5) { xx1 = gameBtn5; }
        if (x == 6) { xx1 = gameBtn6; }
        if (x == 7) { xx1 = gameBtn7; }
        if (x == 8) { xx1 = gameBtn8; }
        if (x == 9) { xx1 = gameBtn9; }
        if (x == 10) { xx1 = gameBtn10; }
        if (x == 11) { xx1 = gameBtn11; }
        if (x == 12) { xx1 = gameBtn12; }
        if (x == 13) { xx1 = gameBtn13; }
        if (x == 14) { xx1 = gameBtn14; }
        if (x == 15) { xx1 = gameBtn15; }
        if (x == 16) { xx1 = gameBtn16; }
        // 1 2 3 4
        if (x == 1 & (yy == 2 | yy == 5)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 2 & (yy == 1 | yy == 6 | yy == 3 )) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 3 & (yy == 2 | yy == 7 | yy == 4 )) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 4 & (yy == 3 | yy == 8)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        
        // 13 14 15 16
        if (x == 13 & (yy == 9 | yy == 14)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 14 & (yy == 13 | yy == 10 | yy == 15)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 15 & (yy == 14 | yy == 11 | yy == 16)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 16 & (yy == 15 | yy == 12)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        // 5 6 7 8
        if (x == 5 & (yy == 1 | yy == 6 | yy == 9)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 6 & (yy == 5 | yy == 2 | yy == 10 | yy == 7)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 7 & (yy == 6 | yy == 3 | yy == 11 | yy == 8)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 8 & (yy == 7 | yy == 4 | yy == 12)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        // 9 10 11 12
        if (x == 9 & (yy == 5 | yy == 10 | yy == 13)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 10 & (yy == 9 | yy == 6 | yy == 14 | yy == 11)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 11 & (yy == 10 | yy == 7 | yy == 15 | yy == 12)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        if (x == 12 & (yy == 11 | yy == 8 | yy == 16)) { i = xx1.value; xx1.value = yy1.value; yy1.value = i; }
        
        GetWinner();
    }
}
