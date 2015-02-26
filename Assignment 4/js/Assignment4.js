function CreateList()
{
    var item = document.getElementById("item").value;
    document.getElementById("ldisplay").innerHTML += "<ul><li>" + item + "</li>";
}

function CalculateTotal()
{
    input = parseFloat(document.getElementById("runtotal").innerHTML);
    cost = Number(document.getElementById("itemcost").value);
    result = input + cost;
    document.getElementById("runtotal").innerHTML = result.toFixed(2);
    
}

function MenuChoice()
{
    switch (document.getElementById("menu").value)
    {
        case "Show Area 1":
            document.getElementById("grocerylist").style.visibility = "visible";
            document.getElementById("grocerycalculator").style.visibility = "hidden";
            break;
        case "Show Area 2":
            document.getElementById("grocerylist").style.visibility = "hidden";
            document.getElementById("grocerycalculator").style.visibility = "visible";
            break;
        case "Please select an option":
            document.getElementById("grocerylist").style.visibility = "hidden";
            document.getElementById("grocerycalculator").style.visibility = "hidden";
            break;
    }
}

function Revert()
{
    document.getElementById("runtotal").innerHTML = "0.00";
}

function DeleteList()
{
    document.getElementById("ldisplay").innerHTML="";
}