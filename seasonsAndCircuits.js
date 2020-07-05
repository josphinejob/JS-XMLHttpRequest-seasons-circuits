/* eslint-disable no-console */
const convert = require('xml-js');
const http = require('http');
const jsonpath = require('jsonpath');

const options = {
  host: 'www.ergast.com',
  path: '/api/f1',
};

const currentYear = new Date().getFullYear();

function callback(response) {
  let str = ' ';
  // append chunk of data to str
  response.on('data', (chunk) => {
    str += chunk;
  });
  // when whole response is received
  response.on('end', () => {
    const resultJson = convert.xml2json(str, { compact: true, spaces: 4 });
    const obj = JSON.parse(resultJson);
    const seasons = (jsonpath.query(obj, '$.MRData.RaceTable.Race[*]._attributes.season'));
    console.log(`Number of circuits in season ${seasons[0]} --> ${seasons.length}`);
  });
}

for (let i = 1950; i <= currentYear; i++) {
  options.path = `/api/f1/${i}`;
  http.request(options, callback).end();
}
