const button = document.querySelector(".btn");

button.addEventListener("click", function(e){
     const abc =  new XMLHttpRequest();
     abc.open("GET", "https://api.chucknorris.io/jokes/random");


     abc.onreadystatechange = function(){
        if(this.readyState === 4 & this.status === 200)
        // check the readystate value and status of the server running without error
        {
            const response = this.response;
            //get the response value of it
            

            // convert data into another value
            const data= JSON.parse(response);

            console.log(data.value);

            document.querySelector(".getjokes").textContent = data.value;

        }
     }


     abc.send();
})