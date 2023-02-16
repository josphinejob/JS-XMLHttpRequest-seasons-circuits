# seasons-circuits

API Endpoint : http://ergast.com/api/f1
About this API: The Ergast Developer API is an experimental web service which provides a historical record of motor racing data for non-commercial purposes. The API provides data for the Formula One series, from the beginning of the world championships in 1950.

Use case:

Given I want to know the number of Formula One races in <season>
When I retrieve the circuit list for that season
Then there should be <numberOfCircuits> circuits in the list returned

Gives output in below format:

Season    |  numberOfCircuits  |
2022      |  22                |

# seasonsAndCircuits.js

This JvaScript code is used to get the number of circuits in a given Formula 1 season.
* It imports the required modules,
* creates an interface for input and output,
* asks the user to enter a season,
* defines a URL to call,
* creates a new XMLHttpRequest object,
* opens a connection to the URL and sends the request,
* defines a function to handle the response data - converts the xml response to json, parses the response data into a JSON object, gets the list of circuits for the given season from the JSON object and prints out the number of circuits in that season.
* Finally it closes input stream.


To execute the program

Pre-requisites - Install node and yarn

1. Clone repository
2. install dependencies - To install our third party dependencies, the dependency management tool, yarn is used. Make sure you have yarn installed with yarn -v, and if no version is installed, you can run "brew install yarn" to install it on your machine. And finally run yarn in the project to install your dependencies.
3. Run "node seasonsAndCircuits.js" to execute.
