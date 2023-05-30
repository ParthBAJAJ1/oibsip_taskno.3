const calculateTemp = () =>{
    const temp=(document.getElementById("num").value);
    const ty=document.getElementById("type");
    const valueTemp = type.options[ty.selectedIndex].value;
    
    //celsius to fahrenheit
    const celToFah = (cel) => {
        let fahrenheit =((cel*9/5)+32).toFixed(1);
        return fahrenheit;
    }
    //fahrenheit to celsius
    const fahToCel = (fah) =>{
        let celsius =((fah-32)*5/9).toFixed(1);
        return celsius;
    }
     if(valueTemp == 'c'){
        document.getElementById("res").innerHTML ="TEMPERATURE: " + celToFah(temp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("res").innerHTML = "TEMPERATURE: " + fahToCel(temp) + "&#176; Celsius";
    }
    }