function StartGame()
{
	img1.src = "img/tictactoe/1.png";
	img2.src = "img/tictactoe/1.png";
	img3.src = "img/tictactoe/1.png";
	img4.src = "img/tictactoe/1.png";
	img5.src = "img/tictactoe/1.png";
	img6.src = "img/tictactoe/1.png";
	img7.src = "img/tictactoe/1.png";
	img8.src = "img/tictactoe/1.png";
	img9.src = "img/tictactoe/1.png";
	
	img1.value = "";
	img2.value = "";
	img3.value = "";
	img4.value = "";
	img5.value = "";
	img6.value = "";
	img7.value = "";
	img8.value = "";
	img9.value = "";

	gameStat.value = "Ход крестика";
}

function StopGame()
{
	gameStat.value = "Игра не начата";
	img1.src = "img/tictactoe/1.png";
	img2.src = "img/tictactoe/1.png";
	img3.src = "img/tictactoe/1.png";
	img4.src = "img/tictactoe/1.png";
	img5.src = "img/tictactoe/1.png";
	img6.src = "img/tictactoe/1.png";
	img7.src = "img/tictactoe/1.png";
	img8.src = "img/tictactoe/1.png";
	img9.src = "img/tictactoe/1.png";
	
	img1.value = "";
	img2.value = "";
	img3.value = "";
	img4.value = "";
	img5.value = "";
	img6.value = "";
	img7.value = "";
	img8.value = "";
	img9.value = "";
}

function GetWinner()
{
	if (
		(img1.value == "1" && img2.value == "1" && img3.value == "1") ||
		(img4.value == "1" && img5.value == "1" && img6.value == "1") ||
		(img7.value == "1" && img8.value == "1" && img9.value == "1") ||
		(img1.value == "1" && img4.value == "1" && img7.value == "1") ||
		(img2.value == "1" && img5.value == "1" && img8.value == "1") ||
		(img3.value == "1" && img6.value == "1" && img9.value == "1") ||
		(img1.value == "1" && img5.value == "1" && img9.value == "1") ||
		(img7.value == "1" && img5.value == "1" && img3.value == "1")
	)
	{
		gameStat.value = playerName1.value + " победил";
	}
	
	if (
		(img1.value == "2" && img2.value == "2" && img3.value == "2") ||
		(img4.value == "2" && img5.value == "2" && img6.value == "2") ||
		(img7.value == "2" && img8.value == "2" && img9.value == "2") ||
		(img1.value == "2" && img4.value == "2" && img7.value == "2") ||
		(img2.value == "2" && img5.value == "2" && img8.value == "2") ||
		(img3.value == "2" && img6.value == "2" && img9.value == "2") ||
		(img1.value == "2" && img5.value == "2" && img9.value == "2") ||
		(img7.value == "2" && img5.value == "2" && img3.value == "2")
	)
	{
		gameStat.value = playerName2.value + " победил";
	}
}

function GameProcess(x)
{	
	if (gameStat.value == "Игра не начата")
	{
		gameStat.value = "Начните игру";
	}
	else
	{
		if (x == 1 & gameStat.value == "Ход крестика")
		{ img1.src = "img/tictactoe/2.png"; img1.value = "1"; gameStat.value = "Ход нолика";}
		else
		if (x == 1 && gameStat.value == "Ход нолика")
		{ img1.src = "img/tictactoe/3.png"; img1.value = "2"; gameStat.value = "Ход крестика"; }
		
		if (x == 2 && gameStat.value == "Ход крестика")
		{ img2.src = "img/tictactoe/2.png"; img2.value = "1"; gameStat.value = "Ход нолика"; }
		else
		if (x == 2 && gameStat.value == "Ход нолика")
		{ img2.src = "img/tictactoe/3.png"; img2.value = "2"; gameStat.value = "Ход крестика"; }
		
		if (x == 3 && gameStat.value == "Ход крестика")
		{ img3.src = "img/tictactoe/2.png"; img3.value = "1"; gameStat.value = "Ход нолика"; }
		else
		if (x == 3 && gameStat.value == "Ход нолика")
		{ img3.src = "img/tictactoe/3.png"; img3.value = "2"; gameStat.value = "Ход крестика"; }
		
		if (x == 4 && gameStat.value == "Ход крестика")
		{ img4.src = "img/tictactoe/2.png"; img4.value = "1"; gameStat.value = "Ход нолика"; }
		else
		if (x == 4 && gameStat.value == "Ход нолика")
		{ img4.src = "img/tictactoe/3.png"; img4.value = "2"; gameStat.value = "Ход крестика"; }
		
		if (x == 5 && gameStat.value == "Ход крестика")
		{ img5.src = "img/tictactoe/2.png"; img5.value = "1"; gameStat.value = "Ход нолика"; }
		else
		if (x == 5 && gameStat.value == "Ход нолика")
		{ img5.src = "img/tictactoe/3.png"; img5.value = "2"; gameStat.value = "Ход крестика"; }
		
		if (x == 6 && gameStat.value == "Ход крестика")
		{ img6.src = "img/tictactoe/2.png"; img6.value = "1"; gameStat.value = "Ход нолика"; }
		else
		if (x == 6 && gameStat.value == "Ход нолика")
		{ img6.src = "img/tictactoe/3.png"; img6.value = "2"; gameStat.value = "Ход крестика"; }
		
		if (x == 7 && gameStat.value == "Ход крестика")
		{ img7.src = "img/tictactoe/2.png"; img7.value = "1"; gameStat.value = "Ход нолика"; }
		else
		if (x == 7 && gameStat.value == "Ход нолика")
		{ img7.src = "img/tictactoe/3.png"; img7.value = "2"; gameStat.value = "Ход крестика"; }
		
		if (x == 8 && gameStat.value == "Ход крестика")
		{ img8.src = "img/tictactoe/2.png"; img8.value = "1"; gameStat.value = "Ход нолика"; }
		else
		if (x == 8 && gameStat.value == "Ход нолика")
		{ img8.src = "img/tictactoe/3.png"; img8.value = "2"; gameStat.value = "Ход крестика"; }
		
		if (x == 9 && gameStat.value == "Ход крестика")
		{ img9.src = "img/tictactoe/2.png"; img9.value = "1"; gameStat.value = "Ход нолика"; }
		else
		if (x == 9 && gameStat.value == "Ход нолика")
		{ img9.src = "img/tictactoe/3.png"; img9.value = "2"; gameStat.value = "Ход крестика"; }
		
	}
	GetWinner();
}

function NameValue()
{
	var str1 = playerName1.value;
	var str2 = playerName2.value;
	
	playerName1.value = str2;
	playerName2.value = str1;
}
