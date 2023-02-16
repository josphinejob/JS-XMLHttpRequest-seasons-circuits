/* eslint-disable no-console */
// import required modules
const readline = require("readline");
const convert = require('xml-js');
const jsonpath = require('jsonpath');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// create interface for input and output
const IOinterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter name
IOinterface.question("Enter the season for which you want to know the number of circuits (any year after 1949) \n", function (string) {
  userInput = string;

// Define the UIOinterface to call
var url = "http://www.ergast.com/api/f1/"+`${userInput}`;

// Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Open a connection to the UIOinterface and send the request
xhr.open("GET", url);
xhr.send();

// Define a function to handle the response data when it is received
xhr.onreadystatechange = function() {

    // Check if the request is complete
    if (xhr.readyState == 4 && xhr.status == 200) {

      var result = xhr.responseText;

      // Convert the xml response to json
      const resultJson = convert.xml2json(result, { compact: true, spaces: 4 });

      // Parse the response data into a JSON object
      var data = JSON.parse(resultJson);

      // Get the list of circuits for the given season from the JSON object
      const circuits = (jsonpath.query(data, '$.MRData.RaceTable.Race[*]._attributes.season'));

      // Print out the number of circuits in the given season
      console.log("Season    |  numberOfCircuits  |");
      console.log(`${userInput}` + "      |  " + circuits.length + "                |");
    }
  };
// close input stream
IOinterface.close();
});
