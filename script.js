window.addEventListener('load', function() {
   console.log('window loaded');

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {

         let randomTarget = Math.floor(Math.random()*json.length);
         const missionTarget = document.getElementById("missionTarget");
         
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[randomTarget].name}</li>
                  <li>Diameter: ${json[randomTarget].diameter}</li>
                  <li>Star: ${json[randomTarget].star}</li>
                  <li>Distance from Earth: ${json[randomTarget].distance}</li>
                  <li>Number of Moons: ${json[randomTarget].moons}</li>
               </ol>
            <img src="${json[randomTarget].image}"></img>
         `;
      });  
   });
   
   let form = document.querySelector('form')
   let launchForm = document.getElementById('launchForm');
   let button = document.getElementById('formSubmit');
   let pilotName = document.querySelector('input[name=pilotName]'); 
   let copilotName = document.querySelector('input[name=copilotName]'); 
   let fuelLevel = document.querySelector('input[name=fuelLevel]'); 
   let cargoMass = document.querySelector('input[name=cargoMass]'); 

   form.addEventListener("submit", function(event) { 
      event.preventDefault();
      //n.b. preventDefault needs to go at the beginning of the function instead of inside each conditional

      if(pilotName.value ==='' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value===''){
         window.alert('Please enter a value for all fields!');
      };  
    
      if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) { 
         window.alert('Please enter a valid name for the Pilot and/or Co-Pilot');
      };
      
      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         window.alert('Please enter a valid number for Fuel Level and/or Cargo Mass');
      };

      document.getElementById('faultyItems').style.visibility = 'visible';
      document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotName.value} is ready`;
      document.getElementById('copilotStatus').innerHTML = `Co-Pilot ${copilotName.value} is ready`;
      document.getElementById('fuelStatus').innerHTML = `Fuel level high enough for launch`;
      document.getElementById('cargoStatus').innerHTML = `Cargo mass low enough for launch`;
      
      if (fuelLevel.value<10000 || cargoMass.value>10000) {
         document.getElementById('launchStatus').innerHTML = `Shuttle not ready for launch`
         document.getElementById('launchStatus').style.color = 'red';

         if (fuelLevel.value < 10000) {
            console.log('too little fuel')
            document.getElementById('fuelStatus').innerHTML = `Not enough fuel: please enter a value of 10,000 liters or more`;
         };  
         if (cargoMass.value > 10000){
            console.log('too much cargo');
            document.getElementById('cargoStatus').innerHTML = `Too much cargo: please enter a value less than 10,000 kg`;
         }; 

      } else {
         console.log('enough fuel and little enough cargo')
         document.getElementById('launchStatus').innerHTML = `Shuttle is ready for launch`
         document.getElementById('launchStatus').style.color = 'green';

      };
         
   });

});
