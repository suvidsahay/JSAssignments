var express = require('express');
var app = express();
// var bodyParser = require('body-parser')
// var path = require('path');
// app.use(bodyParser.json())
app.use(express.json())

/*
{"id": 3,"title": "Dependency management using git","tags": ["VersionControl", "DevelopmentWorkflow"],"url": "https://www.youtube.com/watch?v=oYP7W1gXzsI","category": "masterclass","speaker": {"name": "MANASWINI DAS","title": "Associate Software Engineer at Red Hat.","location": "India"},"claps": 0}
*/

var video = 
[
    {
      "id": 1,
      "title": "Learning from popular open source project",
      "tags": [
        "open source",
        "curl"
      ],
      "url": "https://www.youtube.com/watch?v=oYP7W1gXzsI",
      "category": "masterclass",
      "speaker": {
        "name": "Daniel Stenberg",
        "title": "Author of cURL",
        "location": "Stockholm, Sweden,europe"
      },
      "claps": 0
    },
    {
      "id": 2,
      "title": "How I made an app to alert when you touch your face",
      "tags": [
        "open source",
        "computer vision"
      ],
      "url": "https://www.youtube.com/watch?v=GClbYmCREU4",
      "category": "showcase",
      "speaker": {
        "name": "Maya",
        "title": "16 yr old student at Tel Aviv Univ",
        "location": "Israel"
      },
      "claps": 0
    }
]

app.use(express.static(__dirname + "/views"));
// Set EJS as templating engine 
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
  res.render('index');
});

app.get('/video', function(req, res) {
    res.send(JSON.stringify(video))
})

app.post('/video', function(req, res) {
    var data = req.body
    
    data.id = video.length + 1;
    video.push(data);
    res.send(data);
})

app.post('/upvote', function(req, res) {
    var data = req.body
    if(!data.hasOwnProperty("id")) {
        res.send(JSON.stringify({"result" : "error"}))
    }
    else {
        video.forEach(function(element) {
            if(element.id == data.id) {
                element.claps = element.claps + 1;
                res.send(element)
            }
        });
    }
    
})

app.listen('7000')