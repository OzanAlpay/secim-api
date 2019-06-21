### Turkish 2019 Local Election Results API 

[![Build Status](https://travis-ci.org/OzanAlpay/secim-api.svg?branch=master)](https://travis-ci.org/OzanAlpay/secim-api)

Currently this api offers only very basic capabilities, such as:
* You can get all election results
* You can get a specific city result

API Endpoints are

1. `/electionresults/` : for all election results
2. `/electionresults/:city_licence_plate_number/` : for a specific city results (ex /electionresults/34 is Istanbul)

It is a WIP progress application, and main intention is learning how to code an express application, so you may see
some bad practices in the code. Please inform me about this issues via e-mail or raising an issue in Github

#### Live Demo:    
https://thawing-crag-38359.herokuapp.com/electionresults/
Note: Since applications runs on heroku free-tier and uses mongo-db atlas for data storage, don't expect so much performance.
