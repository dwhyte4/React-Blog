import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
    'learn-react': {
        upvotes: 0,
        comments: [],
    },
    'learn-node': {
        upvotes: 0,
        comments: [],
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
        comments: [],
    },

}
const app = express();
//created backend app

const bodyparser = require('body-parser')
// Parsers for POST data
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//this line parse the json object we included with the our request and adds a body property to the request paramater of the matching route


//when app receives get request server responds with a message
// the call back has two arguments. request object (req) which contains details about the request we received
// the second argument is a response object(res), used to send reponse to whoever made the request
app.post('/api/articles/:name/upvotes', (req,res) => {
    const articleName = req.params.name;

    articlesInfo[articleName].upvotes += 1;
    //upvote counter
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`) 
    //sends a status message about number of upvotes
});

app.post('/api/articles/:name/add-comment', (req,res) => {
    const{username, text} = req.body;
    const articleName = req.params.name;

    articlesInfo[articleName].comments.push({username,text});

    res.status(200)(articlesInfo[articleName]);

});

app.listen(8000, () => console.log('Listening on port 8000'));
//intialise server with the above code