window.onload = function LoadData() {

    initStatesDropdown();
    initParkDropDown();
    document.getElementById("searchButton").addEventListener("click", runSearch);
  

};

function initStatesDropdown() {
    // load the dropdown list with Location Data
    const parkLocationList = document.getElementById("parkLocationList");
    let amountOfStates = locationsArray.length;
   
    for (let i = 0; i < amountOfStates; i++) {
    // create the option element
    let theOption = document.createElement("option");
    // set the text and value of the option you created
    theOption.textContent = locationsArray[i];
    theOption.value = locationsArray[i];
    // append the option as a child of (inside) the
    // select element
    parkLocationList.appendChild(theOption); //Adding to the dropdown
    }
}

function initParkDropDown() {

 // load the dropdown list with Location Data
    const parkTypeData = document.getElementById("parkTypeData");
    let length2 = parkTypesArray.length;

    for (let i = 0; i < length2; i++) {
    // create the option element
    let theOption2 = document.createElement("option");
    // set the text and value of the option you created
    theOption2.textContent = parkTypesArray[i];
    theOption2.value = parkTypesArray[i];
    // append the option as a child of (inside) the
    // select element
    parkTypeData.appendChild(theOption2); //Adding to the dropdown
    }
}

function runSearch()
{
   //Select the selected value from the park
    const parkLocationList = document.getElementById("parkLocationList");
    const selectedValue = parkLocationList.value;
    
//Select the selected value from the park
    const parkTypeData = document.getElementById("parkTypeData");
    const selectedPark = parkTypeData.value
    alert(selectedValue + " - " + selectedPark);

}

function filterArray () {
    const result = mountainsArray.filter(mountain => mountain.name = "Mt. Washington");
    alert(result);
}

function mountainTemplate(mountain) {
    return `
      <div class="mountain">
      <h2 class="mountain-name">${mountain.name} <span class="elevation">(${mountain.elevation} feet)</span></h2>
      <img class="mountain-photo" src="images/${mountain.img}">
      <h4 class="mountain-desc">${mountain.desc}</h4>
      <p class="mountain-effort-coordinates"><strong>Effort:&nbsp</strong> ${mountain.effort} &nbsp
      <strong>Coordinates:&nbsp</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng} </p>
    </div>
    </div>
  `
  }
  
    document.getElementById("mountainDiv").innerHTML = `
    <h1 class = "mountain-title">${mountainsArray.length} mountains to climb in CA</h1>
    ${mountainsArray.map(mountainTemplate).join('')}
`