const { google } = require('googleapis');
require('dotenv').config()

const SHEET_ID = process.env.SHEET_ID;

const authentication = async() => 
{
    const auth = new google.auth.GoogleAuth(
        {
            keyFile:"", //API googleAuth keyFile
            scopes: "https://www.googleapis.com/auth/spreadsheets"
        });
    
    const client = await auth.getClient();

    const sheets = google.sheets(
        {
            version: 'v4',
            auth:client
        });

    return { sheets }

}

(async()=>  //read sheet 
{

    try
    {
        const { sheets } = await authentication();
        const response = await sheets.spreadsheets.values.get
        ({
            spreadsheetId: SHEET_ID,
            range: 'Sheet1'
        });
        console.log(response.data)
    }
    catch(e)
    {
        console.log(e);
    }
})();

const updateSheet = (async(data)=>
{
    try
    {

        const { sheets } = await authentication();
        const update = sheets.spreadsheets.values.append(
            {
                spreadsheetId: SHEET_ID,
                range: 'Sheet1',
                valueInputOption: 'USER_ENTERED',
                resource:
                {
                    values:
                    [
                        [data],
                    ]
                }
            })
        if(update){
            console.log("Update successfull");
        }

    }
    catch(e)
    {
        console.log("Error updating the spreadsheet",e);
    }


});

module.exports = 
{
    updateSheet
}
