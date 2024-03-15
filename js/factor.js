function factorOn()
{
		
    var num = parseInt(nmbValue.value);
    var i = 2;
    var x = 0;
    var num1 = 0;
    
    listBox1.value = "";
    
    if (nmbValue.value < 2)
    {
        listBox1.value = "Недопустимое значение!!!";
    }
    else
    {
        while (num != 1)
        {
            if ((num % i) == 0)
            {
                x = x + 1;
                num1 = num / i;
                listBox1.value += x.toString() + ") " + i + "\n";
                i = 2;
                num = parseInt(num1);
            }
            else
            {
                i += 1;
            }
        }
    }
}
