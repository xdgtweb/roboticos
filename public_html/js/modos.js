/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//document.oncontextmenu = function(){return false;}

cambiarTema();

function cambiarTema()
{

    const checkbox = document.querySelector("input[name=modo]");
    var estilo = document.getElementById("estilo");
    var check = document.getElementById("checkBoxModo");
    var auxEstilo;

    if (obtenerLocalStorage() === "../css/estiloOscuro.css" || obtenerLocalStorage() === "../css/estiloClaro")
    {
        estilo.href = obtenerLocalStorage();
    }
    
    if(obtenerLocalStorage() === "../css/estiloOscuro.css")
    {
        check.checked = "checked";
    }
    else if(obtenerLocalStorage() === "../css/estiloClaro.css")
    {
        check.checked = "";
    }
    
    checkbox.addEventListener("change", (e) =>
    {
        if (e.target.checked)
        {
//            console.log("Checkbox is checked..");
            estilo.href = "../css/estiloOscuro.css";
            auxEstilo = "../css/estiloOscuro.css";

        } 
        else
        {
//            console.log("Checkbox is not checked..");
            estilo.href = "../css/estiloClaro.css";
            auxEstilo = "../css/estiloClaro.css";

        }

        localStorage.setItem("itemEstilo", auxEstilo);

    });
}

function obtenerLocalStorage()
{
    var obtEstilo;
    
    var obtEstilo = localStorage.getItem("itemEstilo");
    
    return obtEstilo;
}