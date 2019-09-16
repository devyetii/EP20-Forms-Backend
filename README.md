# Energia Powered 20 Forms

using Google Drive API to add sent data directly to a Google Sheet.

## Setup 

1. Head to Google Developer Console and initiate Google Drive API
2. Place the credentials in the `client_secret.txt` in `/config` directory
3. Create a new google sheet and give your API client email the access to modify it
4. Define the `GSHEETS_ID` constant giving it the ID of this sheet 
5. Your API is ready and you're get to go

## Usage and Endpoints

This API has 2 endpoint, one for sending data to the Sheet, the other is showing the homepage

1. `/` : This shows homepage with a simple message

2. `/register` : This should be sent a POST request with the data required to be stored. This `data` should be a JS Object, names of the properties should be the same as the names of coloumn headings in the given sheet in order to be stored correctly.
   
After this you can run it as follows 

1. `cd` to the root directory of the projects and Run
    > `npm install`
2. Then Run this to see it working
    > `node .`
3. You should see it running on port `process.env.PORT` or `4000` if local.

## Thank You :heart: