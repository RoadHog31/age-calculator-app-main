


function validateForFutureDate(){
    
    var userYear = document.getElementById("year"),

    result = document.getElementById("result"),
    regExp = /(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/]201[4-9]|20[2-9][0-9]/;
    
        //Check it is a valid date...
        if(!regExp.test(userYear.value)){

        result.innerHTML = "Invalid date!";
        result.style.color = "red";

    return;

    }

    if(FutureDate(userYear.value)){

            result.innerHTML = "Must be in the past";
            return True;
        } 
        else {
            result.innerHTML = " Entered date is not a future date ";
            return False;
        }
    }


    function FutureDate(userYear){

        let today = new Date().getFullYear();

        //userYear = userYear.split("/");

        //userYear = new Date(userYear [2], userYear [1] - 1, userYear [0]).getTime();
        
        return (today - userYear) < 0;
    }