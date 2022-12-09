window.onload = function LoadData() {

    initMountainsDropdown();
    document.getElementById("searchButton").addEventListener("click", runSearch);

  };
  
function initMountainsDropdown() {
    // load the dropdown list with Location Data
    const mountainsList = document.getElementById("mountainsListDropdown");
    let length = mountainsArray.length;
   
    for (let i = 0; i < length; i++) {
    // create the option element
    let theOption = document.createElement("option");
    // set the text and value of the option you created
    theOption.textContent = mountainsArray[i].name;
    theOption.value = mountainsArray[i].name;
    // append the option as a child of (inside) the
    // select element
    mountainsList.appendChild(theOption); //Adding to the dropdown
    }
  };

function mountainTemplate(mountain) {
      return `
        <div class="mountain">
        <h2 class="mountain-name">${mountain.name} <span class="elevation">(${mountain.elevation} feet)</span></h2>
        <img class="mountain-photo" src="images/${mountain.img}">
        <h4 class="mountain-desc">${mountain.desc}</h4>
        <p class="mountain-effort-coordinates"><strong>Effort:&nbsp</strong> ${mountain.effort} &nbsp
        <strong>Coordinates:&nbsp</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng} </p>
      </div>
    `
    };

    document.getElementById("mountainDiv").innerHTML = `
    <h1 class = "mountain-title">${mountainsArray.length} mountains to climb</h1>
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
            down.innerHTML = "";
        }


function runSearch() {
//Select the selected value from the mountains list
    const selectedMountainFromDropdown = document.getElementById("mountainsListDropdown").value;
    
//filter the array based on the selected value from dropdown
    const filterMountains = mountainsArray.filter(mountain => mountain.name == selectedMountainFromDropdown);
    
//run the mountain data again with the filtered array as an input
    document.getElementById("mountainDiv").innerHTML = `
    ${filterMountains.map(mountainTemplate).join("")}`;  
}