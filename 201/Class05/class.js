'use strict'
//Creating function for max and min
function getRandom(max,min) {
   return Math.ceil(Math.random()*(max - min) + min);
}
// Creating function to ddo math for me
const london = {
    min: 27,
    max: 69,
    avg:7.1,
    location: 'london',
    hoursofoperation:["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
    customersPerHour: function() {
        getRandom(this.max, this.min);
    }
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursofoperation.length; i++) {
            console.log('london avg coocies/sale', this this.avg);
            console.log('London avg customers/hour', this.customersPerHour);
            this.cookiesPerHour.push(this.avg * this.customersPerHour());
        }
        return this.cookiesPerHour;
    }
}

// Array plus function for cookies

  {

//object definition for a location
    //---starting data
        /*
        location     Min/Cust    Max/Cust     Avgcookie/Sale
        london        23         65           6.3
        */
       
}