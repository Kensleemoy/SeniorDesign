# Cov-Idaho Web Application

## Overview
This web application provides Idaho COVID-19 data at the state and county level. Our website can be viewed here: https://cov-idaho.herokuapp.com/.

## Main page
At the state level, statistics provided include population, number of cases, number of deaths, total number of  hospital beds, hospital beds used by COVID patients, total number of ICU beds, ICU beds used by COVID patients.  At the county level, the number of hospital or ICU beds used by COVID patients is not typically available, so these statistics are not included. 

The map is interactive; clicking on a county will pull up county stats in the table. Deselecting a county will remove it from the table. 

<img src=”assets/main-page.png”/>

<img src=”assets/main-page-table.png”/>

## Sources
The Sources page provides links to our API source, their data sources, and the svg map we utilized on the home page.

<img src=”assets/sources.png"/>

## About Us
The About Us page offers information about the creators of this web app and our motivations for creating it. 

<img src=”assets/about-us.png”/>

## Technologies Used
Vue, Javascript, HTML, and CSS were used to build this web application. We also created our own proxy server to use for API requests.  We used Git paired with GitHub for version control and repository hosting. The website is deployed through Heroku and utilizes Heroku’s continuous deployment that listens to the main branch of our GitHub repository. 

## What we worked on
We worked as a team and employed the AGILE process, meeting at least once a week to coordinate and troubleshoot any issues that arose. We split up the work into 3 main parts: UI, API calls, and features. This allowed us to work fairly independently to provide a finished product in a reasonable amount of time.
