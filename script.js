// TODO:Getting DOM elements here

const allActivityTypes = document.querySelectorAll(".item");
const activityContent = document.querySelector(".activityContent");
const participantsNumber = document.querySelector(".participants");

// TODO: Logic here 

let activityType = "education";
let url = "http://www.boredapi.com/api/activity";
function constructUrl(activity) {
    return `${url}?type=${activity}`
}
allActivityTypes.forEach(element => {
    element.addEventListener('click', () => {
        activityType = (element.innerText).toLowerCase();
        console.log(activityType);
        fetch(constructUrl(activityType))
            .then(response => response.json())
            .then(data => {
                console.log(data);
                activityContent.innerHTML=`Your Task : ${data.activity}`;
                participantsNumber.innerHTML =`Needed Participants : ${data.participants}`;
            })
    })
});

//TODO: Rendaring elements here
