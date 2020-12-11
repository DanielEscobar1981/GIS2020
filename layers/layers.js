var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DEPARTAMENTOSCTESVERIF_1 = new ol.format.GeoJSON();
var features_DEPARTAMENTOSCTESVERIF_1 = format_DEPARTAMENTOSCTESVERIF_1.readFeatures(json_DEPARTAMENTOSCTESVERIF_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTOSCTESVERIF_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTOSCTESVERIF_1.addFeatures(features_DEPARTAMENTOSCTESVERIF_1);
var lyr_DEPARTAMENTOSCTESVERIF_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTAMENTOSCTESVERIF_1, 
                style: style_DEPARTAMENTOSCTESVERIF_1,
                interactive: false,
                title: '<img src="styles/legend/DEPARTAMENTOSCTESVERIF_1.png" /> DEPARTAMENTOSCTESVERIF'
            });
var format_MUNICIPIOSCORRIENTESVERIF_2 = new ol.format.GeoJSON();
var features_MUNICIPIOSCORRIENTESVERIF_2 = format_MUNICIPIOSCORRIENTESVERIF_2.readFeatures(json_MUNICIPIOSCORRIENTESVERIF_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOSCORRIENTESVERIF_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOSCORRIENTESVERIF_2.addFeatures(features_MUNICIPIOSCORRIENTESVERIF_2);
var lyr_MUNICIPIOSCORRIENTESVERIF_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIOSCORRIENTESVERIF_2, 
                style: style_MUNICIPIOSCORRIENTESVERIF_2,
                interactive: false,
                title: '<img src="styles/legend/MUNICIPIOSCORRIENTESVERIF_2.png" /> MUNICIPIOSCORRIENTESVERIF'
            });
var format_BARRIOSCAPITALMUNI_3 = new ol.format.GeoJSON();
var features_BARRIOSCAPITALMUNI_3 = format_BARRIOSCAPITALMUNI_3.readFeatures(json_BARRIOSCAPITALMUNI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARRIOSCAPITALMUNI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOSCAPITALMUNI_3.addFeatures(features_BARRIOSCAPITALMUNI_3);
var lyr_BARRIOSCAPITALMUNI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BARRIOSCAPITALMUNI_3, 
                style: style_BARRIOSCAPITALMUNI_3,
                interactive: false,
                title: '<img src="styles/legend/BARRIOSCAPITALMUNI_3.png" /> BARRIOSCAPITALMUNI'
            });
var format_BARRIOSINVICOCAPITALOK_4 = new ol.format.GeoJSON();
var features_BARRIOSINVICOCAPITALOK_4 = format_BARRIOSINVICOCAPITALOK_4.readFeatures(json_BARRIOSINVICOCAPITALOK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BARRIOSINVICOCAPITALOK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARRIOSINVICOCAPITALOK_4.addFeatures(features_BARRIOSINVICOCAPITALOK_4);
var lyr_BARRIOSINVICOCAPITALOK_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BARRIOSINVICOCAPITALOK_4, 
                style: style_BARRIOSINVICOCAPITALOK_4,
                interactive: true,
                title: '<img src="styles/legend/BARRIOSINVICOCAPITALOK_4.png" /> BARRIOSINVICOCAPITALOK'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DEPARTAMENTOSCTESVERIF_1.setVisible(true);lyr_MUNICIPIOSCORRIENTESVERIF_2.setVisible(true);lyr_BARRIOSCAPITALMUNI_3.setVisible(true);lyr_BARRIOSINVICOCAPITALOK_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DEPARTAMENTOSCTESVERIF_1,lyr_MUNICIPIOSCORRIENTESVERIF_2,lyr_BARRIOSCAPITALMUNI_3,lyr_BARRIOSINVICOCAPITALOK_4];
lyr_DEPARTAMENTOSCTESVERIF_1.set('fieldAliases', {'id': 'id', 'OBJETO': 'OBJETO', 'NOMBREDEPA': 'NOMBREDEPA', 'INDECCODIG': 'INDECCODIG', 'FUENTE': 'FUENTE', });
lyr_MUNICIPIOSCORRIENTESVERIF_2.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'objeto': 'objeto', 'localidadn': 'localidadn', 'codigoinde': 'codigoinde', 'fuente': 'fuente', });
lyr_BARRIOSCAPITALMUNI_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BARRIOSINVICOCAPITALOK_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'DESCRIPCIO': 'DESCRIPCIO', 'ID': 'ID', 'DEPARTAMENTO': 'DEPARTAMENTO', 'LOCALIDAD': 'LOCALIDAD', 'BARRIO': 'BARRIO', 'AREA OBRA': 'AREA OBRA', 'OBRA': 'OBRA', 'NRO-LEGAJO': 'NRO-LEGAJO', 'CODIGO OBRA': 'CODIGO OBRA', 'MONTO OBRA': 'MONTO OBRA', 'FECHA INICIO': 'FECHA INICIO', 'PLAZO ESTIMADO': 'PLAZO ESTIMADO', 'PORCENTAJE OBRA': 'PORCENTAJE OBRA', 'UNIDADES HABITACIONALES': 'UNIDADES HABITACIONALES', 'FAMILIAS ABARCADAS': 'FAMILIAS ABARCADAS', 'TIPO CALLE': 'TIPO CALLE', 'AGUA': 'AGUA', 'CLOACA': 'CLOACA', 'DESAGUES': 'DESAGUES', 'DETALLES OBRA': 'DETALLES OBRA', });
lyr_DEPARTAMENTOSCTESVERIF_1.set('fieldImages', {'id': 'TextEdit', 'OBJETO': 'TextEdit', 'NOMBREDEPA': 'TextEdit', 'INDECCODIG': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_MUNICIPIOSCORRIENTESVERIF_2.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'objeto': 'TextEdit', 'localidadn': 'TextEdit', 'codigoinde': 'TextEdit', 'fuente': 'TextEdit', });
lyr_BARRIOSCAPITALMUNI_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_BARRIOSINVICOCAPITALOK_4.set('fieldImages', {'NOMBRE': 'TextEdit', 'DESCRIPCIO': 'TextEdit', 'ID': 'TextEdit', 'DEPARTAMENTO': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'BARRIO': 'TextEdit', 'AREA OBRA': 'TextEdit', 'OBRA': 'TextEdit', 'NRO-LEGAJO': 'TextEdit', 'CODIGO OBRA': 'Range', 'MONTO OBRA': 'TextEdit', 'FECHA INICIO': 'TextEdit', 'PLAZO ESTIMADO': 'Range', 'PORCENTAJE OBRA': 'Range', 'UNIDADES HABITACIONALES': 'Range', 'FAMILIAS ABARCADAS': 'Range', 'TIPO CALLE': 'TextEdit', 'AGUA': 'Range', 'CLOACA': 'Range', 'DESAGUES': 'Range', 'DETALLES OBRA': 'TextEdit', });
lyr_DEPARTAMENTOSCTESVERIF_1.set('fieldLabels', {'id': 'no label', 'OBJETO': 'no label', 'NOMBREDEPA': 'no label', 'INDECCODIG': 'no label', 'FUENTE': 'no label', });
lyr_MUNICIPIOSCORRIENTESVERIF_2.set('fieldLabels', {'id': 'no label', 'gid': 'no label', 'objeto': 'no label', 'localidadn': 'no label', 'codigoinde': 'no label', 'fuente': 'no label', });
lyr_BARRIOSCAPITALMUNI_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BARRIOSINVICOCAPITALOK_4.set('fieldLabels', {'NOMBRE': 'inline label', 'DESCRIPCIO': 'inline label', 'ID': 'inline label', 'DEPARTAMENTO': 'inline label', 'LOCALIDAD': 'inline label', 'BARRIO': 'inline label', 'AREA OBRA': 'inline label', 'OBRA': 'inline label', 'NRO-LEGAJO': 'inline label', 'CODIGO OBRA': 'inline label', 'MONTO OBRA': 'inline label', 'FECHA INICIO': 'inline label', 'PLAZO ESTIMADO': 'inline label', 'PORCENTAJE OBRA': 'inline label', 'UNIDADES HABITACIONALES': 'inline label', 'FAMILIAS ABARCADAS': 'inline label', 'TIPO CALLE': 'inline label', 'AGUA': 'inline label', 'CLOACA': 'inline label', 'DESAGUES': 'inline label', 'DETALLES OBRA': 'inline label', });
lyr_BARRIOSINVICOCAPITALOK_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});