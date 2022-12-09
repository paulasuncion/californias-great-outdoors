//Calling all functions
window.onload = function LoadData() {

    initStatesDropdown();
    initParkDropDown();
    document.getElementById("stateSearchButton").addEventListener("click", runStateSearch);
    document.getElementById("parkTypeSearchButton").addEventListener("click", runParkTypeSearch);

};

//Create the dropdown menu for location list
function initStatesDropdown() {

    // load the dropdown list with Location Data
    const parkLocationList = document.getElementById("parkLocationList");
    let amountOfStates = locationsArray.length;

    //looped to get all values from array
    for (let i = 0; i < amountOfStates; i++) {

    //create the option element
    let theOption = document.createElement("option");

    //set the text and value of the option you created
    theOption.textContent = locationsArray[i];
    theOption.value = locationsArray[i];

    //append the option as a child of (inside) the select element
    parkLocationList.appendChild(theOption); //Adding to the dropdown
    }
}
//Create the dropdown menu for park data type list
function initParkDropDown() {

    //load the dropdown list with Location Data
    const parkTypeData = document.getElementById("parkTypeList");
    let length2 = parkTypesArray.length;

    //looped to get all values from array
    for (let i = 0; i < length2; i++) {

    //create the option element
    let theOption2 = document.createElement("option");

    //set the text and value of the option you created
    theOption2.textContent = parkTypesArray[i];
    theOption2.value = parkTypesArray[i];

    //append the option as a child of (inside) the select element
    parkTypeData.appendChild(theOption2); 
    }

}

//Display all individual array object values
function parkTemplate(park) {
      return `
        <div class="park">
        <h1 class="parkLocationName">${park.LocationName}<br>
        <small><i>(${park.LocationID})</i></small></h1>
        <h2 class="parkAddress">${park.Address}<br>${park.City}, ${park.State} ${park.ZipCode}</h2>
        <h3 class="parkPhoneFax">Phone #: ${park.Phone} <br> Fax #: ${park.Fax}</h3>
        <h3 class="parkLatLong">Lat: ${park.Latitude} Long: ${park.Longitude}</h3>
        <h3 class="parkLocation">Coordinates: ${park.Location.coordinates}</h3>
        <h2 class="parkLocationType">Type: ${park.Location.type}</h2>
        </div>
      `
    };

    //display all values from array onto html
    document.getElementById("parkDiv").innerHTML = `
    ${nationalParksArray.map(parkTemplate).join('')}
`;

//Load data from array when user selects a value
function loadData() {
    var down = document.getElementById('park');
            for (let i = 0; i < nationalParksArray.length; i++) {
                var optn = nationalParksArray[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                down.appendChild(el);
            }
            down.innerHTML = "";
        }

//Running the search after user selects value from dropdown menu
function runStateSearch() {

    //select the selected value from the park state location list
    const selectedStateFromDropdown = document.getElementById("parkLocationList").value;

    //filter the array based on the selected value from dropdown
    const filterStates = nationalParksArray.filter(park => park.State == selectedStateFromDropdown);

    //run the park data again with the filtered array as an input
    document.getElementById("parkDiv").innerHTML = `${filterStates.map(parkTemplate).join("")}`;
}

//Running the search after user selects value from dropdown menu
function runParkTypeSearch() {

    //select the selected value from the park state location list
    const selectedParkTypeFromDropdown = document.getElementById("parkTypeList").value;
    
    //filter the array based on the selected value from dropdown
    const filterParkTypes = nationalParksArray.filter(park => park.LocationName.search(selectedParkTypeFromDropdown) != -1);
    
    //run the park data again with the filtered array as an input
    document.getElementById("parkDiv").innerHTML = `${filterParkTypes.map(parkTemplate).join("")}`;
}