A cat API for you Happy Hacking!
![Screenshot 2024-04-03 223640](https://github.com/devjclosterman/turbo-carnival/assets/129931920/fe967588-8668-475c-b105-b462a3026387)
Your going to need to make a .env file to hide your API key your going to build an app.
Add a variable in the .env file to store your API key, 
API_KEY=live_CxaCeDVACuYMOACt7wTP8LM2KwEWX1343z7LEOKlF4YftWKt0BFt7ThqZaofAcy5
like this ^^^^^^^^^^^^^^^^^^^
in Javascript file add this at the very top:
require('dotenv').config(); // Load environment variables from .env file
replace this inside the function where your variable `apikey` is: 
    const apiKey = process.env.API_KEY; // Use API key from environment variable
