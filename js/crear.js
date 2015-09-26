var a = 1;
var limite = 5;
var i = 1;
function addInput(divName)
{
    if (a == limite)  
	{
        alert("Alcanzo el maximo de " + a + " inputs creados");
    }
    else 
	{
        var newdiv = document.createElement('div');
        newdiv.innerHTML = "<br><input type='text' name='txt_"+i+"'>";
        document.getElementById(divName).appendChild(newdiv);
        a++;
	i++;
    }
}