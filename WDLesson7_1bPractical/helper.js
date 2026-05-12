//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.
function card(I){
  let build = ``;
    build += `<div class = "fitted card">
               <h3>${I.plate}</h3>
               <p>${I.state}</p>
               <p>${I.license_type}</p>
               <p>${I.summons_number}</p>
               <hr>
               <p>${I.issue_date}</p>
               <hr>
               <p>${I.issuing_agency}</p>
              </div>`;
    return build;
}
