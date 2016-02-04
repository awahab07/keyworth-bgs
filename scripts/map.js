var map; // For debugging purposes

require([
    "esri/map",
    "esri/layers/FeatureLayer",
    "esri/dijit/Search",
    "esri/InfoTemplate",
    "esri/layers/WFSLayer",
    "keyworth/ObservationLayer",
    "dojo/domReady!"
], function (Map, FeatureLayer, Search, InfoTemplate, WFSLayer, ObservationLayer) {
    // Creating and configuring map with base layer, center and initial zoom
    map = new Map("map", {
        basemap: "satellite",
        center: [-1.086375, 52.874177], // lon, lat, center of Keyworth Village
        zoom: 14
    });


    // Creating and adding observation layers
    var boreholesLayer = new ObservationLayer("Boreholes");
    map.addLayer(boreholesLayer.getFeatureLayer());

    var fossilsLayer = new ObservationLayer("Fossils");
    map.addLayer(fossilsLayer.getFeatureLayer());

    var rockSamplesLayer = new ObservationLayer("Rock Samples");
    map.addLayer(rockSamplesLayer.getFeatureLayer());

    var measurementsLayer = new ObservationLayer("Measurements");
    map.addLayer(measurementsLayer.getFeatureLayer());


    // Configuring basic search widget with default geo-coding properties
    var search = new Search({
        map: map
    }, "search");
    search.startup();
});