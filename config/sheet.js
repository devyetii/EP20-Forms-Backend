const googleSheet = require("google-spreadsheet");
const { promisify } = require("util");

/*  ==== Your Credential token for  API Authentication ====
 * This is given to you once you activate the API on Google developer 
 * console.
 * Don't forget to add the data to client_secret JSON and .txt
 */
const GSHEET_CREDS = require("./client_secret.json");

// The ID of the target GoogleSheet, don't forget to define it !
const GSHEET_ID = "XXXXXXXXXXXXXXXXXXXXXXXXXX";

//Global sheet variable in order to use it within all the application
var sheet;

async function setup() {
    const doc = new googleSheet(GSHEET_ID);
    await promisify(doc.useServiceAccountAuth)(GSHEET_CREDS);

    const info = await promisify(doc.getInfo)();
    sheet = info.worksheets[0];
}

setup();

module.exports = {
    test: async function () {
        //Function for testing purposes
        console.log(`Title: ${sheet.title}`);
        const row1 = await promisify(sheet.getRows)({
            offset: 1
        });
        console.log(row1);
    },
    createRow: async function (row) {
        // Function to add a new row with give data in the row param
        // GSheet automatically maps the name of the properties given in the data object to the names of coloumns of data given in the Sheet, trailing spaces and lower-casing the name.  
        await promisify(sheet.addRow)(row);
    }
};