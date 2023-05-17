
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


function ageCalculator() { 
    
        //collect input from HTML form and convert into date format  
        //var userinput = document.getElementById("DOB").value;  
        //var dob = new Date(userinput);
        
        let userYear = document.getElementById("year").value;
        let userMonth = document.getElementById("month").value;
        let userDay = document.getElementById("day").value; 
        
        let dob = new Date(userYear, userMonth - 1, userDay);
        
        result = document.getElementById("result");
    
        //Check date value is a proper date.
        if(FutureDate(userYear.value))
        {
            result.innerHTML = "Must be in the past";
            return true;
        } 

        //check user provide input or not  
        if(userinput==null || userinput==''){  
          document.getElementById("message").innerHTML = "**Choose a date please!";    
          return false;   
        }   
          
        //execute if user entered a date   
        else {  
        //extract and collect only date from date-time string  
        var mdate = userinput.toString();  
        var dobYear = parseInt(mdate.substring(0,4), 10);  
        var dobMonth = parseInt(mdate.substring(5,7), 10);  
        var dobDate = parseInt(mdate.substring(8,10), 10);  
          
        //get the current date from system  
        var today = new Date();  
        //date string after broking  
        var birthday = new Date(dobYear, dobMonth-1, dobDate);  
          
        //calculate the difference of dates  
        var diffInMillisecond = today.valueOf() - birthday.valueOf();  
      
        //convert the difference in milliseconds and store in day and year variable          
        var year_age = Math.floor(diffInMillisecond / 31536000000);  
        var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);  
      
        //when birth date and month is same as today's date        
        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {  
                alert("Happy Birthday!");  
            }  
              
         var month_age = Math.floor(day_age/30);          
         day_ageday_age = day_age % 30;  
              
         var tMnt= (month_age + (year_age*12));  
         var tDays =(tMnt*30) + day_age;  
           
        //DOB is greater than today's date, generate an error: Invalid date    
         if (dob>today) {  
            document.getElementById("result").innerHTML = ("Invalid date input - Please try again!");  
          }  
          else {  
            document.getElementById("result").innerHTML = year_age + " years " + month_age + " months " + day_age + " days"  
          }  
    }  
}

function FutureDate(userYear){

    let today = new Date().getFullYear();
        
    return (today - userYear) < 0;
}

