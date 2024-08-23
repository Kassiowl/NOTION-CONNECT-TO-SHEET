
# Notion Connect
Notion Connect helps you to connect your Notion db to your Google Sheet

## Installation

Options


* Git clone, Download node.js and use
```bash 
npm install
``` 
to install all dependencies

## Instructions

1.create a .env and assign NOTION_KEY and SHEET_ID variables
<img src="https://i.imgur.com/cfHHCYW.png" alt=".env File">

2. in notion.js file, assign databaseId variable to your notion database id
<img src="https://i.imgur.com/iBcMAZK.png" alt=".databaseID">

3.create a service account and a key in google cloud console

4.download and copy json file with key information, and paste inside 'keys.json

5.in google cloud console, active sheet api

6. Edit notionQuery in Notion.js according to your query needs
<img src="https://i.imgur.com/alezUtS.png" alt="notionQuery Example">

Use 
```bash 
node main.js
``` 
to run the application
### Built With

* [NodeJS](https://nodejs.org/en/)

* [GoogleAPIS](https://www.npmjs.com/package/googleapis)


## Issues

Some Bug or suggestion, please submit a issue

[Issues](https://github.com/Kassiowl/Gym-Rat/issues)

## Contributing
Requests are welcome.

Please make sure to update tests as appropriate.



