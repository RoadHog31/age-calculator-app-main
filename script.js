
  function validateForFutureDate(){
    
    let userYear = document.getElementById("year").value;
    let userMonth = document.getElementById("month").value;
    let userDay = document.getElementById("day").value;    

    result = document.getElementById("result");
    

    if(FutureDate(userYear.value))
    {
        result.innerHTML = "Must be in the past";
        return true;
    } 
    else {
        //result.innerHTML = " Entered date is not a future date";
        //let currentYear = new Date().getFullYear();
        //let monthnow = new Date().getTime().getMonth();
        //let yearAge = currentYear - userYear;
        //let month = monthnow - userMonth
        
        let birthdate = new Date(userYear, userMonth - 1, userDay);
        //calculate month difference from current date in time  
        let month_diff = Date.now() - birthdate.getTime();  
        
        //convert the calculated difference in date format  
        let age_dt = new Date(month_diff);   
        
        //extract year from date      
        let year = age_dt.getUTCFullYear();  
        
        //now calculate the age of the user  
        let age = Math.abs(year - 1970);  
        
        //display the calculated age  
        //document.write("Age of the date entered: " + age + " years");  
        let outputage = document.getElementById("yearOutput");
        let outputMonth = document.getElementById("monthOutput");
        let outputYear = document.getElementById("dayOutput");
        
        
        
        
        //return false;
    }
}


    function FutureDate(userYear){

        let today = new Date().getFullYear();
           
        return (today - userYear) < 0;
    }

