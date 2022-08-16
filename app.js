




function storeVar(el) {
    bar = parseInt(el.value); //barbell weight
    ff=parseInt(document.getElementById("ff").value);
    tf=parseInt(document.getElementById("tf").value);
    tff=parseInt(document.getElementById("tff").value);
    te=parseInt(document.getElementById("te").value);
    fi=parseInt(document.getElementById("fi").value);
    tp=parseInt(document.getElementById("tp").value);//fix math for the plates
    plates=parseInt((ff*45)+(tf*35)+(tff*25)+(te*10)+(fi*5)+(tp*2.5));
    totWeight=plates+bar;
    document.getElementById('totalWeight').innerHTML = `There is ${totWeight}lbs on the bar.`;
   console.log(bar+plates);//tester


  } 



