const doctorSearch = document.getElementById('doctor-search');
doctorSearch.addEventListener('click', function(e){

})

function searchDoctor(){
    const doctorSearch = document.getElementById('doctor-search').value;
    // alert(doctorSearch);
    const mainContainer = document.getElementById('mainContainer');
    const p1 = document.createElement('p');
    p1.classList.add('btn-design');
    p1.innerText = doctorSearch;
    mainContainer.appendChild(p1)
    
    

}