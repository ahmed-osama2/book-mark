var siteNameInput = document.getElementById("siteNameBook");
var siteUrlInput = document.getElementById("siteNameUrl");





var searchNameInput = document.getElementById("searchName");


var allSites = [];

if(localStorage.getItem('allsite') != null){
    
    allSites = JSON.parse(localStorage.getItem('allsite'))
    displaySites()
}





function addSite() {

    if( validSite () == true){

        var sites = {
            name: siteNameInput.value,
            url: siteUrlInput.value,
        }
    
        
    
        allSites.push(sites);
    
        // console.log(sites.name ,sites.url )
    
    
        localStorage.setItem('allsite',JSON.stringify(allSites));
    
       
    
        claerForm()
        displaySites() 
    }

    else{
        alert(validSite())
    }

     


    

}

function claerForm() {

    siteNameInput.value = '';
    siteUrlInput.value = '' ;
}


function displaySites() {

    var Box ='';
    for ( var i = 0 ; i<allSites.length ; i++){
        Box += `<div class="d-flex justify-content-around bg-white align-items-center p-1 border-bottom ">
        <h4 class="my-table"> ${[i+1]} </h4>
        <h4> ${allSites[i].name} </h4>
        <h4> <button onclick="openNewPage(${i})"  class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i> Visit</button></h4>
        <h4> <button onclick="DeletElement(${i})"  class="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete</button></h4>
        <h4> <button onclick="ubdetElement(${i})"  class="btn btn-warning"> <i class="fa-solid fa-pen"></i> Ubdet</button></h4>
      </div>`


    }

    document.getElementById('vipStyle').innerHTML = Box;


}


function DeletElement(idex){
    allSites.splice(idex,1);
    displaySites();

    localStorage.setItem('allsite',JSON.stringify(allSites));



}

function ubdetElement(x){
    siteNameInput.value = allSites[x].name ;
    siteUrlInput.value  =  allSites[x].url ;

    displaySites();

    document.getElementById('Edit') .innerHTML =  `<button  onclick= 'editNewSite(${x})'class=" btn btn-warning "> Edit New Site</button>`;


}


function editNewSite(x){
    allSites[x].name = siteNameInput.value;
    allSites[x].url  = siteUrlInput.value ;
    displaySites();
    document.getElementById('Edit') .innerHTML =  ` <button onclick="addSite()" type="submit" class="btn btn-danger px-5">Submit</button>`;


    localStorage.setItem('allsite',JSON.stringify(allSites));



}


function openNewPage(index){


    window.open (allSites[index].url , '_blank' ) ;




}


function searchSites(){
    var term = searchNameInput.value ;
    var Box= '';




    

    for( var i = 0 ; i < allSites.length ; i++ ){

        if(allSites[i].name.toLowerCase().includes(term.toLowerCase()) ){

            Box += `<div class="d-flex justify-content-around bg-white align-items-center p-1 border-bottom ">
            <h4 class="my-table"> ${[i+1]} </h4>
            <h4> ${allSites[i].name} </h4>
            <h4> <button onclick="openNewPage(${i})"  class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i> Visit</button></h4>
            <h4> <button onclick="DeletElement(${i})"  class="btn btn-danger"><i class="fa-solid fa-trash"></i> Delete</button></h4>
            <h4> <button onclick="ubdetElement(${i})"  class="btn btn-warning"> <i class="fa-solid fa-pen"></i> Ubdet</button></h4>
          </div>`

        }


        

    }

    document.getElementById('vipStyle').innerHTML = Box;

    
}


// function validNameSite(){
//     var nameRegex = /^([a-z]|[0-9]){3,7}$/igm;
//     return nameRegex.test( siteNameInput.value);

// }

// function isValidUrl(){
//     var urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/ig;
//     return urlRegex .test(siteUrlInput.value);
// }

function validSite(){
    var nameRegex = /^([a-z]|[0-9]){3,7}$/igm;
    var urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/ig;

    if(nameRegex.test( siteNameInput.value) == false){
        return "Site name must contain at least 3 characters "
       
    }

    if(urlRegex .test(siteUrlInput.value) == false){
        return 'Site URL must be a valid one'
    }

    return true;


        

   

}










