let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="fitted card">
                 <h3>${collision.on_street_name}</h3>
                 <hr>
                 <p>${collision.contributing_factor_vehicle_1}</p>
                 <p>${collision.vehicle_type_code1}</p>
                 <p>${collision.crash_time}</p>
                 <hr>
                 <p>${collision.collision_id}</p>
                 <hr>
                 <p>${collision.off_street_name}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByStr(){
  let output = document.getElementById("output");
  let str = document.getElementById("str").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.on_street_name == str){
      build += `<div class="fitted card">
                    <h3>${collision.on_street_name}</h3>
                    <hr>
                    <p>${collision.contributing_factor_vehicle_1}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>${collision.crash_time}</p>
                    <hr>
                    <p>${collision.collision_id}</p>
                    <hr>
                    <p>${collision.off_street_name}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByStr(){
  let output = document.getElementById("output");
  let str = document.getElementById("str").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.on_street_name == str){
      build += `<div class="fitted card">
                    <h3>${collision.on_street_name}</h3>
                    <hr>
                    <p>${collision.contributing_factor_vehicle_1}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>${collision.crash_time}</p>
                    <hr>
                    <p>${collision.collision_id}</p>
                    <hr>
                    <p>${collision.off_street_name}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.
function filterByFactor(){
  let output = document.getElementById("output");
  let factor = document.getElementById("factor").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.contributing_factor_vehicle_1 == factor){
      build += `<div class="fitted card">
                    <h3>${collision.on_street_name}</h3>
                    <hr>
                    <p>${collision.contributing_factor_vehicle_1}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>${collision.crash_time}</p>
                    <hr>
                    <p>${collision.collision_id}</p>
                    <hr>
                    <p>${collision.off_street_name}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByTime(){
  let output = document.getElementById("output");
  let time = document.getElementById("time").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if(collision.crash_time == time){
      build += `<div class="fitted card">
                    <h3>${collision.on_street_name}</h3>
                    <hr>
                    <p>${collision.contributing_factor_vehicle_1}</p>
                    <p>${collision.vehicle_type_code1}</p>
                    <p>${collision.crash_time}</p>
                    <hr>
                    <p>${collision.collision_id}</p>
                    <hr>
                    <p>${collision.off_street_name}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}