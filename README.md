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

add script 'start' : 'nodemon app.js' //this will be a command that we can input into the command line to start the server 

add code to app.js file;
    1. define the express variable as a const
    2. create an instance of express called 'app'
    3. add a port to listen to "app.listen('portnum');"
    4. add an express method such as app.get() which will require a path and a request and response parameter in a call back function
    5. add a use method if you want to use a callback function when a given route is used

nmp install dotenv mongoose

    mongoose uses mongodb which is a cloud server data base hosting service. it is simple and eay for me to use when first learning to create my own server

    .env files are used in servers so that there is information the public user can not reach/have easy access to. this is where i will be storing things like usernames and passwords for my server database
