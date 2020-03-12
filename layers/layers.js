var wms_layers = [];


        var lyr_GooglecnSatellites_0 = new ol.layer.Tile({
            'title': 'Google.cn Satellites',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Info_1 = new ol.format.GeoJSON();
var features_Info_1 = format_Info_1.readFeatures(json_Info_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Info_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Info_1.addFeatures(features_Info_1);
var lyr_Info_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Info_1, 
                style: style_Info_1,
                interactive: true,
                title: '<img src="styles/legend/Info_1.png" /> Info'
            });
var format_Ec_provincias_2 = new ol.format.GeoJSON();
var features_Ec_provincias_2 = format_Ec_provincias_2.readFeatures(json_Ec_provincias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ec_provincias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ec_provincias_2.addFeatures(features_Ec_provincias_2);
var lyr_Ec_provincias_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ec_provincias_2, 
                style: style_Ec_provincias_2,
                interactive: true,
                title: '<img src="styles/legend/Ec_provincias_2.png" /> Ec_provincias'
            });

lyr_GooglecnSatellites_0.setVisible(true);lyr_Info_1.setVisible(true);lyr_Ec_provincias_2.setVisible(true);
var layersList = [lyr_GooglecnSatellites_0,lyr_Info_1,lyr_Ec_provincias_2];
lyr_Info_1.set('fieldAliases', {'NUM': 'NUM', 'y': 'y', 'x': 'x', });
lyr_Ec_provincias_2.set('fieldAliases', {'DPA_DESPRO': 'DPA_DESPRO', });
lyr_Info_1.set('fieldImages', {'NUM': 'Range', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_Ec_provincias_2.set('fieldImages', {'DPA_DESPRO': 'TextEdit', });
lyr_Info_1.set('fieldLabels', {'NUM': 'no label', 'y': 'no label', 'x': 'no label', });
lyr_Ec_provincias_2.set('fieldLabels', {'DPA_DESPRO': 'no label', });
lyr_Ec_provincias_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});