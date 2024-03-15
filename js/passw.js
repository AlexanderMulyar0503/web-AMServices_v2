
function getRandom(min, max)
{
	return Math.trunc(Math.random() * (max - min) + min);
}

function getValue(x)
{

    if (x == 1 & passWidth.value >= 1)
	{
    	passWidth.value = passWidth.value - (-1);
	}
					
	if (x == -1 & passWidth.value > 1)
	{
		passWidth.value -= 1;
	}

    if (x > 1)
    {
        passWidth.value = x;
    }
}

function GetBukvVR()
{
	switch (getRandom(0, 26))
	{
		case 0: return "A"; break;
		case 1: return "B"; break;
		case 2: return "C"; break;
		case 3: return "D"; break;
		case 4: return "E"; break;
		case 5: return "F"; break;
		case 6: return "G"; break;
		case 7: return "H"; break;
		case 8: return "I"; break;
		case 9: return "J"; break;
		case 10: return "K"; break;
		case 11: return "L"; break;
		case 12: return "M"; break;
		case 13: return "N"; break;
		case 14: return "O"; break;
		case 15: return "P"; break;
		case 16: return "Q"; break;
		case 17: return "R"; break;
		case 18: return "S"; break;
		case 19: return "T"; break;
		case 20: return "U"; break;
		case 21: return "V"; break;
		case 22: return "W"; break;
		case 23: return "X"; break;
		case 24: return "Y"; break;
		case 25: return "Z"; break;
	}
}

function GetBukvNR()
{
	switch (getRandom(0, 26))
	{
		case 0: return "a"; break;
		case 1: return "b"; break;
		case 2: return "c"; break;
		case 3: return "d"; break;
		case 4: return "e"; break;
		case 5: return "f"; break;
		case 6: return "g"; break;
		case 7: return "h"; break;
		case 8: return "i"; break;
		case 9: return "j"; break;
		case 10: return "k"; break;
		case 11: return "l"; break;
		case 12: return "m"; break;
		case 13: return "n"; break;
		case 14: return "o"; break;
		case 15: return "p"; break;
		case 16: return "q"; break;
		case 17: return "r"; break;
		case 18: return "s"; break;
		case 19: return "t"; break;
		case 20: return "u"; break;
		case 21: return "v"; break;
		case 22: return "w"; break;
		case 23: return "x"; break;
		case 24: return "y"; break;
		case 25: return "z"; break;
	}
}

function GetCifr()
{
	switch(getRandom(0,10))
	{
		case 0: return "0"; break;
		case 1: return "1"; break;
		case 2: return "2"; break;
		case 3: return "3"; break;
		case 4: return "4"; break;
		case 5: return "5"; break;
		case 6: return "6"; break;
		case 7: return "7"; break;
		case 8: return "8"; break;
		case 9: return "9"; break;
	}
}

function GetSimv()
{
	switch(getRandom(0,10))
	{
		case 0: return "!"; break;
		case 1: return "@"; break;
		case 2: return "#"; break;
		case 3: return "%"; break;
		case 4: return "&"; break;
		case 5: return "*"; break;
		case 6: return "+"; break;
		case 7: return "="; break;
		case 8: return "-"; break;
		case 9: return "_"; break;
	}
}

function GetPassChar()
{
	var x = getRandom(0, 4);
	var pchar = "";

	if ((x == 0)&&(bkvv.checked))
	{
		pchar = GetBukvVR();
	}

	if ((x == 1)&&(bkvn.checked))
	{
		pchar = GetBukvNR();
	}

	if ((x == 2)&&(cifr.checked))
	{
		pchar = GetCifr();
	}

	if ((x == 3)&&(ssmb.checked))
	{
		pchar = GetSimv();
	}

	return pchar;
}

function GetPassword(wdth)
{
	var passw = "";

	if (!bkvv.checked && !bkvn.checked && !cifr.checked && !ssmb.checked)
	{
		textBox2.value = "Символы не выбраны!";
	}
	else
	{
		while (passw.length < wdth)
		{
			passw += GetPassChar();
		}

		textBox2.value = passw;
	}	
}
