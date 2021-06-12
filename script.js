// TODO:Getting DOM elements here

const allActivityTypes=document.querySelectorAll(".item");

// TODO: Logic here 

let activityType="education";
let url = "http://www.boredapi.com/api/activity";
function constructUrl(activity){
    return `${url}?type=${activity}`
}
allActivityTypes.forEach(element => {
    element.addEventListener('click',()=>{
        activityType=(element.innerText).toLowerCase();
        console.log(activityType);
        fetch(constructUrl(activityType))
        .then(response=>response.json())
        .then(data=>console.log(data))
    })
});

//TODO: Rendaring elements here
