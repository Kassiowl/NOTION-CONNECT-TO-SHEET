require('dotenv').config()
const util = require('util')


const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_KEY }); 
//variable to work with notion query

//Query a database
const notionQuery = (async () => {
  
  const databaseId = 'Your database ID here'; //notion db id
  const response = await notion.databases.query({
    database_id: databaseId,
    filter:
    {
      property:'Name',
      "text":
      {
        "contains":""
      }
    }
  });
    console.log("Notion Query-----------------\n"+util.inspect(response.results[0].properties.Name.title[0].plain_text));
    const result = (response.results[0].properties.Name.title[0].plain_text)
    return result;  //result here is used to update the sheet
   
});

//export to main.js
module.exports = 
{
  notionQuery
}


