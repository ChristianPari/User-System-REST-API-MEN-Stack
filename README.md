tutorial title: Build A Restful Api With Node.js Express & MongoDB
tutorial link: https://youtu.be/vjf774RKrLc

Nmp - Node Package Manager

    a. it is the commonly used 'app store' for node applications, made for and by JS developers

    b. it is also a command line utility used to download and install packages (from the web of node devs). any developer can upload packages they've created



Commands in order;

nmp init
        //creates a package.json 
        //which contains all of the METADATA related to your project
        //metadata - is the dna information about your project 
        // metadata is data about data
git init

git add -A vs. git add .

    -A adds all files in all directories of your repo
    . adds the files CURRENT DIRECTORY and you must specify the file name if you want just one file to be added to files that will be in the commit


git status //on branch master
git branch  //* master
git commit //create a inital commit on the master branch

code app.js //our route handling and use of express will be done within our app.js file

 // add script to 'package.json' --->  'start' : 'nodemon app.js' //this will be a command that we can input into the command line to start the server 

 // add code to app.js file;
    1. define the express variable as a const
    2. create an instance of express called 'app'
    3. add a port to listen to "app.listen('portnum');"
    4. add an express method such as app.get() which will require a path and a request and response parameter in a call back function
    5. add a use method if you want to use a callback function when a given route is used

nmp install dotenv mongoose

    mongoose uses mongodb which is a cloud server data base hosting service. it is simple and eay for me to use when first learning to create my own server

    .env files are used in servers so that there is information the public user can not reach/have easy access to. this is where i will be storing things like usernames and passwords for my server database


 // add code to app.js;

    1.mongoose.connect('mongodb+srv:"  PERSONAL LINK " ');
    2. NEXT add a callback function to determin what should happen when the database connects ex. 'log "data base connected" '

mkdir routes //making a folder that will contain all files that each handle a specific route

code post.js //this will have all the code to handle when a user is on the post route and upload a post to the data base

code home.js //this will give intructions to the server on how to display and setup the homepage

//for both /route files you will need to create an instance of express and an instance of express.Router() saved as the variable router
//this router variable must be exported and then the require method must be used in app.js

//to make it possible for users to create post you must use mongoose 'schemas'. 

mkdir models //then inside this directory
code Post.js //this file will contain how a regular post will look and what parts it will have 'title, description, ect.'

//once the schema is created you can add a POST method inside of /routes/post.js


