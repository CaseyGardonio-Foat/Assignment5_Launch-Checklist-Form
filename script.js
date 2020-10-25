window.addEventListener('load', function() {
   let launchForm = document.getElementById('launchForm');

   let pilotName = String(document.querySelector('input[name=pilotName]')); 
   let copilotName = String(document.querySelector('input[name=copilotName]')); 
   let fuelLevel = document.querySelector('input[name=fuelLevel]'); 
   let cargoMass = document.querySelector('input[name=cargoMass]'); 

   launchForm.addEventListener("submit", function(event) {
      if(pilotName.value ==='' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value===''){
         window.alert('Please enter a value for all fields!');
         event.preventDefault;
      };
      // if (typeof pilotName.value == 'string' || typeof copilotName.value == 'string') {
      //    window.alert('Please enter a valid name for the Pilot and/or Co-Pilot.');
      //    event.preventDefault;
      // };
      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         window.alert('Please enter a valid number for Fuel Level and/or Cargo Mass.');
         event.preventDefault;
      }

      document.getElementById('pilotStatus').innerHTML = `Pilot Ready: ${pilotName.value}`;
      document.getElementById('copilotStatus').innerHTML = `Co-Pilot Ready: ${copilotName.value}`;

   });

});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
