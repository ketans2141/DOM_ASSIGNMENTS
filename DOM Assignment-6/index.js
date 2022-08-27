const Input =document.querySelector(".input_text");
const button=document.querySelector(".submit_btn");
const clearDiv=document.querySelector(".clearDiv")
// let clearBtn=document.getElementById("#clear_btn");

button.addEventListener("click",function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Input.value}&appid=c6e71b5388d1293faa078cf8303476c9`)
    .then(result=>result.json())
    .then(data=>{
        console.log(data);
        let finalresult=`<div>
        <img src="http://clipartix.com/wp-content/uploads/2017/07/White-cloud-clipart-collection.png" alt="1">
    </div>
    <div>
        <h2>City : <span class="city_span">${data.name}</span></h2>
        <h2> Temp :<span class="temp_span"> ${ Math.floor(data["main"].temp-273)} ℃ </span></h2>
        <h2>Pressure :<span class="pressure_span"> ${data["main"].pressure}</span></h2>
        <h2>Humidity : <span class="humid_span">${data["main"].humidity}</span></h2>
    </div>`

    let container=document.querySelector(".data_container");
    container.innerHTML=finalresult;
    
    // const clearBtn=document.createElement("button");
    // clearBtn.classList.add("clear_btn");
    // clearBtn.innerText="Clear"
    // clearDiv.append(clearBtn);

    // clearBtn.addEventListener("click",function(){
    //     container.classList.toggle("active");
       
    // })

    
    }).catch(error=>alert("invalid city name"))
})