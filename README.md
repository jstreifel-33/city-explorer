# City Explorer

**Author**: Joseph Streifel
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

This app will be used to provide a user with details about a location, based upon search results. Search will be powered by external API requests.

## Getting Started

This app is built using React Bootstrap and Axios. Ensure all dependencies are installed upon cloning project.

* Environment Variables: See .env.sample for .env requirements. App will need API access key from location IQ.

## Architecture

* Libraries used:
  * React
  * React Bootstrap
  * npm axios
  * node.js

Application uses React Bootstrap to setup simple form for text input. Search term from user is fed to [Location IQ API](https://locationiq.com/) to return a City, Latitude, Longitude, and map of resulting location.

Developed in VSCode and deployed using Node.js. Hosted on Netlify.

## Change Log

11/01 10:07PM - Application launched in operating state. Accepts search parameter and returns top result and associated map.

## Credit and Collaborations

Location Data and Map received from [Location IQ API](https://locationiq.com/)

## Feature implementation tracking

* **Name of feature:** Set up React repo & API keys
* Estimate of time needed to complete: 1 hour
* Start time: 4:09 PM
* Finish time: 4:55PM
* Actual time needed to complete: 46 minutes

* **Name of feature:** Locations - search for city by name
* Estimate of time needed to complete: 0.75 hours
* Start time: 5:06 PM
* Finish time: 6:22 PM
* Actual time needed to complete: 1 hour 16 minutes

* **Name of feature:** Map - display map based on name of city
* Estimate of time needed to complete: 1.5 hour
* Start time: 7:10 PM
* Finish time: 9:26 PM
* Actual time needed to complete: 2 hours 16 minutes

* **Name of feature:** Errors - handle errors and display error messages
* Estimate of time needed to complete: 1 hour
* Start time: 9:27 PM
* Finish time: 10:05 PM
* Actual time needed to complete: 38 minutes
