let Outputscreen=document.getElementById("output");

function dispaly(num)
{
    Outputscreen.value += num;
}
function calculate()
{
    try
    {
        Outputscreen.value=eval(Outputscreen.value);
    }
    catch(err)
    {
        alert("inavlid input");
    }
}
    function Clear()
    {
        Outputscreen.value= "";
    }
    function del()
    {
       Outputscreen.value=Outputscreen.value.slice(0,-1);
    }
