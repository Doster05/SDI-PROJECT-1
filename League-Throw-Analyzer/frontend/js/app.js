const API_BASE = 'http://localhost:5000';

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('#Summoner-Input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter'){
            SubmitSummoner();
        }
    })

    // Add click listener to match containers
    const matchContainers = document.querySelectorAll('#Match-Containers');
    matchContainers.forEach(container => {
        container.addEventListener('click', () => {
            ViewMatchInfo();
        });
    });
})

const inputElement = document.querySelector('#Summoner-Input');
const searchPage = document.getElementById('Search-Page-Wrapper')
const pageChangeLoading = document.getElementById('Loading-Page-Wrapper');
const pageChangeSummoner = document.getElementById('Summoner-Page-Info-Wrapper');
const pageChangeMatches = document.getElementById('Match-Info-Wrapper');

async function SubmitSummoner() {
    

    CallLoad();

    const response = await fetch(`${API_BASE}/summoner/${summonerName}/${summonerTag}`);
}

function CallLoad(){

    pageChangeLoading.style.visibility = "visible";
    pageChangeLoading.style.display = "flex"
    
    searchPage.style.visibility = "hidden";
    searchPage.style.display = "none"

    setTimeout(() => {
        pageChangeLoading.style.visibility = "hidden";
        pageChangeLoading.style.display = "none";

        pageChangeSummoner.style.visibility = "visible";
        pageChangeSummoner.style.display = "flex"
    }, 2000);
}

function ViewMatchInfo(){
    console.log("ViewMatchInfo clicked");
    pageChangeSummoner.style.visibility = "hidden";
    pageChangeSummoner.style.display = "none";

    pageChangeMatches.style.visibility = "visible";
    pageChangeMatches.style.display = "flex";
}

function ReturnToSummoner(){
    console.log("ReturnToSummoner clicked");
    pageChangeMatches.style.visibility = "hidden";
    pageChangeMatches.style.display = "none";

    pageChangeSummoner.style.visibility = "visible";
    pageChangeSummoner.style.display = "flex";
}

function ReturnHome(){
    console.log("ReturnHome clicked");
    pageChangeSummoner.style.visibility = "hidden";
    pageChangeSummoner.style.display = "none";

    pageChangeMatches.style.visibility = "hidden";
    pageChangeMatches.style.display = "none";

    searchPage.style.visibility = "visible";
    searchPage.style.display = "flex";
}