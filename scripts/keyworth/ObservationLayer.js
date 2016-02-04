/**
 * Implementation of ObservationLayer wrapping esri/layer/CSVLayer. ObservationLayer will hold the
 * common functionality for layers representing Keyworth Observations e.g. infoTemplate, feature icons etc.
 */

define([
    "dojo/_base/declare",
    "esri/layers/CSVLayer",
    "esri/geometry/Point",
    "esri/graphic",
    "esri/SpatialReference",
    "esri/Color",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/PictureMarkerSymbol",
    "esri/renderers/SimpleRenderer",
    "esri/InfoTemplate",
    "dojo/text!/scripts/keyworth/templates/boreholesInfoTemplate.html",
    "dojo/text!/scripts/keyworth/templates/fossilsInfoTemplate.html",
    "dojo/text!/scripts/keyworth/templates/rockSamplesInfoTemplate.html",
    "dojo/text!/scripts/keyworth/templates/measurementsInfoTemplate.html"
], function (declare, CSVLayer, Point, Graphic, SpatialReference, Color, SimpleMarkerSymbol, PictureMarkerSymbol, SimpleRenderer, InfoTemplate, boreholesInfoTemplate, fossilsInfoTemplate, rockSamplesInfoTemplate, measurementsInfoTemplate) {
    return declare(null, {
        layer: null, // Instance of FeatureLayer (CSVLayer)
        layerId: "", // Id of layer to identify the type of observation
        layerIdsKeys: {
            "Boreholes": {template: boreholesInfoTemplate, url: "data/boreholes.csv", icon: "images/icons/borehole-sign-256.png"},
            "Fossils": {template: fossilsInfoTemplate, url: "data/fossils.csv", icon: "images/icons/fossil-icon.png"},
            "Rock Samples": {template: rockSamplesInfoTemplate, url: "data/rockSamples.csv", icon: "images/icons/rock-sample-icon.png"},
            "Measurements": {template: measurementsInfoTemplate, url: "data/measurements.csv", icon: "images/icons/measurement-icon-colored.png"}
        },

        constructor: function(layerId) {
            this.layerId = layerId;
            this.layer = this.createCSVLayer();
        },

        /**
         * Creates FeatureLayer via CSVLayer wrapper and assign PictureMarkerSymbol to features.
         * Each type of feature has its won symbol to differentiate it from other types.
         * @returns {CSVLayer} Instantiated layer
         */
        createCSVLayer: function() {
            var csv = new CSVLayer(this.layerIdsKeys[this.layerId]["url"], {
                copyright: "Keyworth (BGS)"
            });
            var pictureMarker = new PictureMarkerSymbol(this.layerIdsKeys[this.layerId]["icon"], 24, 24);
            var renderer = new SimpleRenderer(pictureMarker);
            csv.setRenderer(renderer);

            var template = new InfoTemplate(this.layerId + " - ${name}", this.layerIdsKeys[this.layerId]["template"]);
            csv.setInfoTemplate(template);
            return csv;
        },

        /**
         * @returns {FeatureLayer|CSVLayer} Returns the wrapped layer
         */
        getFeatureLayer: function() {
           return this.layer;
        }
    });
});