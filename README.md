# keyworth-bgs
A demo web map to visualize observations on map.

## How to Run
This demo can be run by serving this directory over any web server and accessing on any modern web browser.

## Libraries and APIs used
This demo is built using ArcGIS JavaScript API for GIS functionality, Dojo Toolkit for UI/Widgets and LESS for 
styling/theme. 

**Note: All Libraries and APIs are loaded from CDN, only custom module scripts are included in this demo

## Directory Structure
root  
    |  
    data  
    |  
    images  
    |   |  
    |   icons  
    |   |  
    |   observations  
    |  
    scripts  
    |   |  
    |   keyworth  
    |   |   |  
    |   |   templates  
    |  
    styles  
    
 - root directory holds index.html where application starts and libraries are loaded.
 - data directory contains CSV files holding example records to represent observations.
 - images/icons contains icon images for features to distinguish different types of features on map.
 - images/observations contains images of rock samples and fossils.
 - scripts directory contains JS scripts that initialize the applications.
 - scripts/keyworth directory contains custom modules of this demo app.
 - scripts/keyworth/templates contain html templates of info popup windows for features.
 - styles directory contains less and css files to style the widgets and UI elements.
 
## Demo Flow
This demo opens satellite imagery as base map in the map viewer and drawn four layers (Boreholes, Fossils, 
Rock Samples and Measurement) while centering the map at the Keyworth village, Nottinghamshire, England.

Each layer has four features which are plotted on locations where observation were carried out. On the map these 
features are represented by icons/markers. Clicking these marker opens up a popup window to show further information 
about a particular observation.

The map also has a search widget which user can use to search on the map by providing place name, address or post code etc.