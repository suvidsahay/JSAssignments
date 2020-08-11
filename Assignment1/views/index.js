document.getElementsByClassName("submit-button")[0].addEventListener("click", function() {
    var video = {};
    video.title = document.getElementById("title").value;
    video.tags = [];
    var tags=document.getElementsByName("tags[]");
    tags.forEach(element => {
        video.tags.push(element.value);
    });
    video.url = document.getElementById("url").value;
    video.category = document.getElementById("category").value;
    video.speaker = {};
    video.speaker.name = document.getElementById("name").value;
    video.speaker.title = document.getElementById("s-title").value;
    video.speaker.location = document.getElementById("location").value;
    video.claps = 0;

    fetch("/video", { 
        method: "POST", 
        body: JSON.stringify(video),
        headers: { 
            "Content-type": "application/json"
        } 
    }).then(function(response) {
        response.json()
    }).then(function(data) {
        console.log(data);
    })
})

document.getElementsByClassName("submit-id")[0].addEventListener("click", function() {
    var id = {};
    id.id = parseInt(document.getElementById("id").value);

    fetch("/upvote", { 
        method: "POST", 
        body: JSON.stringify(id),
        headers: { 
            "Content-type": "application/json"
        } 
    }).then(function(response) {
        response.json()
    }).then(function(data) {
        console.log(data);
    }).catch(function(err) {
        console.log(err);
    })
})