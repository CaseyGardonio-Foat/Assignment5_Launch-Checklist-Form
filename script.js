window.addEventListener('load', function() {
   console.log('window loaded');
   //Question: does everything else need to go *inside* the window.load function? 
   //or can I close this function and put everything else after it in its own function?

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         console.log(json);
            
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[2].name}</li>
                  <li>Diameter: ${json[2].diameter}</li>
                  <li>Star: ${json[2].star}</li>
                  <li>Distance from Earth: ${json[2].distance}</li>
                  <li>Number of Moons: ${json[2].moons}</li>
               </ol>
            <img src="${json[2].image}"></img>
         `;
      });
   });

   let launchForm = document.getElementById('launchForm');
   let button = document.getElementById('formSubmit');
   let pilotName = document.querySelector('input[name=pilotName]'); 
   let copilotName = document.querySelector('input[name=copilotName]'); 
   let fuelLevel = document.querySelector('input[name=fuelLevel]'); 
   let cargoMass = document.querySelector('input[name=cargoMass]'); 

   button.addEventListener("click", function(event) {

      console.log(typeof pilotName.value, typeof copilotName.value, typeof fuelLevel.value, typeof cargoMass.value);

      if(pilotName.value ==='' || copilotName.value === '' || fuelLevel.value === '' || cargoMass.value===''){
         window.alert('Please enter a value for all fields!');
         event.preventDefault;
      };  

      // // need help getting this validation to work: 
      // if (typeof pilotName.value === 'number' || typeof copilotName.value === 'number') {
      if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) { 
         window.alert('Please enter a valid name for the Pilot and/or Co-Pilot.');
         event.preventDefault;
      };
      // // console.log statement shows that all fields return a string, even if a number is entered, so this alert is never triggered
      
      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         window.alert('Please enter a valid number for Fuel Level and/or Cargo Mass.');
         event.preventDefault;
      };
   });

   launchForm.addEventListener('submit', function(event) {

      console.log(pilotName.value + copilotName.value);
      let pilotStatus = document.getAnimations('pilotStatus');
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is Ready`;
         // document.getElementById('pilotStatus').innerHTML = `Pilot Ready: ${pilotName.value}`;
         // document.getElementById('copilotStatus').innerHTML = `Co-Pilot Ready: ${copilotName.value}`;

      if (Number(fuelLevel.value) <= 10000) {
         document.getElementById('faultyItems').style.visibility = 'visible';
         document.getElementById('fuelStatus').innerHTML = `Not enough fuel. Please enter a value of 10,000 liters or more.`;
         document.getElementById('launchStatus').innerHTML = `Shuttle not ready for launch.`
         document.getElementById('launchStatus').style.color = 'red';
      } else if (Number(cargoMass.value)>=10000){
         document.getElementById('faultyItems').style.visibility = 'visible';
         document.getElementById('fuelStatus').innerHTML = `Too much cargo. Please enter a value less than 10,000 kg.`;
         document.getElementById('launchStatus').innerHTML = `Shuttle not ready for launch.`
         document.getElementById('launchStatus').style.color = 'red';
      } else {
         document.getElementById('faultyItems').style.visibility = 'visible';
         document.getElementById('launchStatus').innerHTML = `Shuttle is ready for launch.`
         document.getElementById('launchStatus').style.color = 'green';
      };
      //come back and refactor this
      
      });

});
