# seasons-circuits
Clone repository, install dependencies, "node seasonsAndCircuits.js" to execute.

API Endpoint : http://ergast.com/api/f1

Given I want to know the number of Formula One races in <season>
When I retrieve the circuit list for that season
Then there should be <numberOfCircuits> circuits in the list returned

Gives output in below format:
Number of circuits in season 1955 --> 7
Number of circuits in season 1959 --> 9
Number of circuits in season 1952 --> 8
Number of circuits in season 1968 --> 12
Number of circuits in season 1969 --> 11