function ang_while_loop() {
    var da_number = prompt("penge ng no.", 1);
    da_number = parseInt(da_number);

    if (isNaN(da_number)){
        document.write("dapat number lang");
        return;
    }
       var i=0;
        while (i<da_number){
            setTimeout(function() {
                var da_triangle = document.createElement("div", i);
                da_triangle.classList.add("triangle");
                document.body.appendChild(da_triangle);
            }, 400*i);
        i++;
        }

    }



