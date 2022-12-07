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

    const parkTypeData = document.getElementById("parkTypeData");
    let length2 = parkTypesArray.length;

    for (let i = 0; i < length2; i++) {
    let theOption2 = document.createElement("option");
    theOption2.textContent = parkTypesArray[i];
    theOption2.value = parkTypesArray[i];
    parkTypeData.appendChild(theOption2); 
    }

}

//Calling the park dropdown functions
window.onload = function LoadData() {

    initStatesDropdown();
    const parkLocationList = document.getElementById("parkLocationList");
    parkLocationList.value = "Select State";

    initParkDropDown();
    const parkTypeData = document.getElementById("parkTypeData");
    parkTypeData.value = "Select Park";

    document.getElementById("parkSearchButton").addEventListener("click", runSearch);
    document.getElementById("locationSearchButton").addEventListener("click", runSearch);
};

//Run the search
function runSearch()
{
   //Select the selected value from the park
    const parkLocationList = document.getElementById("parkLocationList");
    const selectedLocation = parkLocationList.value;
    
    const parkTypeData = document.getElementById("parkTypeData");
    const selectedPark = parkTypeData.value;
}

function runSelectedParkType () {
    let selectedParkType= document.getElementById("parkTypeData").value;
    document.getElementById("parkType").innerHTML = "You selected: " + selectedParkType;
}

function runSelectedParkLocation () {
    let selectedParkLocation = document.getElementById("parkLocationList").value;
    document.getElementById("parkLocation").innerHTML = "You selected: " + selectedParkLocation;
}




//Mountain Page JS

//Write mountain dropdown menu code here


function mountainTemplate(mountain) {
  let id = mountain.name.replace(" ", "").replace(".","")
    return `
      <div id = "${id}" class="mountain">
      <h2 class="mountain-name">${mountain.name} <span class="elevation">(${mountain.elevation} feet)</span></h2>
      <img class="mountain-photo" src="images/${mountain.img}">
      <h4 class="mountain-desc">${mountain.desc}</h4>
      <p class="mountain-effort-coordinates"><strong>Effort:&nbsp</strong> ${mountain.effort} &nbsp
      <strong>Coordinates:&nbsp</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng} </p>
    </div>
    </div>
  `
  };

//Call functions here
  

//Next steps:
//Save the selected option of dropdown into a variable
//Loop over all the mountain data
//if Mountain name is equal to selected option
//display mountain on screen

  function displayMountain() {

    let mydropdown = document.getElementById("mountainList");
    let selectedValue = mydropdown.text;
    let selectedOption = "Mt. Adams";
    
    const avengers = mountainsArray.filter(mountain => mountain.name === selectedOption);
  };


    document.getElementById("mountainDiv").innerHTML = `
    <h1 class = "mountain-title">${mountainsArray.length} mountains to climb in CA</h1>
    ${mountainsArray.map(mountainTemplate).join('')}
`;


function loadData() {
  var down = document.getElementById('mountain');
         for (let i = 0; i < mountainsArray.length; i++) {
             var optn = mountainsArray[i];
             var el = document.createElement("option");
             el.textContent = optn;
             el.value = optn;
             down.appendChild(el);
         }
         down.innerHTML = "Elements Added";
     }

     var myArray = new Array("Mt. Washington","Mt. Jefferson","Mt. Monroe","Mt. Madison","Mt. Lafayette","Mt. Lincoln",
     "South Twin","Carter Dome","Mt. Moosilauke","Mt. Eisenhower","North Twin","Mt. Carrigain","Mt. Bond","Middle Carter","West Bond",
     "Mt. Garfield","Mt. Liberty","South Carter","Wildcat Mountain","Mt. Hancock","South Kinsman","Mt. Field","Mt. Osceola","Mt. Flume",
     "South Hancock","Mt. Pierce","North Kinsman","Mt. Willey","Zealand Mountain","North Tripyramid","East Osceola","Middle Tripyramid",
     "Cannon Mountain","Wildcat D","Mt. Hale","Mt. Jackson","Mt. Tom","Mt. Moriah","Mt. Passaconaway","Owl's Head","Galehead Mountain",
     "Mt. Whiteface","Mt. Waumbek","Mt. Isolation","Mt. Tecumseh",
     );

     
var dropdown = document.getElementById("selectMountain");


for (var i = 0; i < myArray.length; ++i) {
    
    dropdown[dropdown.length] = new Option(myArray[i], myArray[i]);
}

function listMountain() {
 let dropValue = document.getElementById("selectMountain").value;
 let id = dropValue.replace(" ", "").replace(".","")
 document.getElementById(id).scrollIntoView()
}