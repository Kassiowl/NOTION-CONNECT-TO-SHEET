const { notionQuery } = require('./notion');
const { updateSheet } = require("./sheet");

const notionUpdateToSheet = async()=>   //update the sheet using the notion query
{
    let dataToUpdate = await notionQuery();
    console.log(dataToUpdate);
    updateSheet(dataToUpdate);
}

notionUpdateToSheet();