import express from 'express';
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello From backend");
});

const port = process.env.PORT || 5000;

// make a list of 5 jokes in the form or array

app.get('/api/jokes',(req,res)=>{
    const jokes = [
    {id:1,title:"Joke 1", joke:"Why don't scientists trust atoms? Because they make up everything!"},
    {id:2,title:"Joke 2", joke:"Why did the bicycle fall over? Because it was two-tired!"},
    {id:3,title:"Joke 3", joke:"Why did the scarecrow win an award? Because he was outstanding in his field!"},
    {id:4,title:"Joke 4", joke:"Why don't skeletons fight each other? They don't have the guts."},
    {id:5,title:"Joke 5", joke:"What do you call fake spaghetti? An impasta!"}
    ];
    res.send(jokes);
})

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
});
