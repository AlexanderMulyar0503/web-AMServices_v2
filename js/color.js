function OnClkColor()
{
	nmbRed.value = rngRed.value;
	nmbGreen.value = rngGreen.value;
	nmbBlue.value = rngBlue.value;
	clrPreview.style.background = "rgb(" + rngRed.value + "," + rngGreen.value + "," + rngBlue.value + ")";
	hClr.value = "#" + ToHex(rngRed.value) + ToHex(rngGreen.value) + ToHex(rngBlue.value);
}

function ToHex(x)
{
	if (x < 16)
	{
		return "0" + Number(x).toString(16);
	}
	else
	{
		return Number(x).toString(16);
	}
}

function GetValue()
{	
	rngRed.value = nmbRed.value;
	rngGreen.value = nmbGreen.value;
	rngBlue.value = nmbBlue.value;
	clrPreview.style.background = "rgb(" + rngRed.value + "," + rngGreen.value + "," + rngBlue.value + ")";
	hClr.value = "#" + ToHex(rngRed.value) + ToHex(rngGreen.value) + ToHex(rngBlue.value);
}
