function ageCalculator() { 
    
        //collect input from HTML form and convert into date format  
              
        let userYear = document.getElementById("year").value;
        let userMonth = document.getElementById("month").value;
        let userDay = document.getElementById("day").value; 
        
        let result = document.getElementById("yearmessage");
    
        //Check date value is a proper date.
        if(FutureDate(userYear.value))
        {
            result.innerHTML = "Must be in the past";
            return false;
        } 

        //check user provide input or not  
        if(userYear==null || userYear==''){  
          document.getElementById("yearmessage").innerHTML = "**Must be a valid year";    
          return false;   
        }
        else if(userMonth==null || userMonth==''){

            document.getElementById("monthmessage").innerHTML = "**Must be a valid month";    
          return false;
        }
        else if(userDay==null || userDay==''){

            document.getElementById("daymessage").innerHTML = "**Must be a valid day";    
          return false;
        }
        //execute if user entered a date   
        else {  
                 
        //get the current date from system  
        let today = new Date();  
        //date string after broking  
        let birthday = new Date(userYear, userMonth - 1, userDay);
          
        //calculate the difference of dates  
        let diffInMillisecond = today.valueOf() - birthday.valueOf();  
      
        //convert the difference in milliseconds and store in day and year variable          
        let year_age = Math.floor(diffInMillisecond / 31536000000);  
        let day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);  
      
        //when birth date and month is same as today's date        
        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {  
                //alert("Happy Birthday!");
            document.getElementById("happybdaymessage").innerHTML = "happy Birthday!";  
            }  
              
         let month_age = Math.floor(day_age/30);          
         day_ageday_age = day_age % 30;  
              
         let tMnt= (month_age + (year_age*12));  
         let tDays =(tMnt*30) + day_age;  
           
        //DOB is greater than today's date, generate an error: Invalid date    
         if (birthday>today) {  
            document.getElementById("yearmessage").innerHTML = "Invalid date input - Please try again!";  
          }  
          else {  
            document.getElementById("yearresult").innerHTML = "";
            document.getElementById("monthresult").innerHTML = "";
            document.getElementById("dayresult").innerHTML = "";
            document.getElementById("yearresult").innerHTML = year_age + " years ";  
            document.getElementById("monthresult").innerHTML = month_age + " months ";  
            document.getElementById("dayresult").innerHTML = day_age + " days";    
          }  
    }  
}

function FutureDate(userYear){

    let today = new Date().getFullYear();
        
    return (today - userYear) < 0;
}

