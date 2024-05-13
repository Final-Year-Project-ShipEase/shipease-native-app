import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Text, Pressable } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline, Callout } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import CheckPointModal from './modal/checkPointModal';

// Initialize the geocoding library with your API key (get it from Google Cloud Console)
Geocoder.init("AIzaSyCtLC0ys4qxjeOMIS_0O-gRZqHhhXq-C7o");
const VehicleStatus = () => {

    const faisalabadCoords = { latitude: 31.4504, longitude: 73.1350 }; // Coordinates for Faisalabad
    const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({ latitude: 31.4635043, longitude: 73.0961824 });
    const [destinationMarkerCoord, setDestinationMarkerCoord] = useState({ latitude: 31.4409767, longitude: 73.0089735 });
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [draggableMarkerName, setDraggableMarkerName] = useState('');
    const [destinationMarkerName, setDestinationMarkerName] = useState('');

    useEffect(() => {
        // Reverse geocode draggable marker's coordinates
        Geocoder.from(draggableMarkerCoord.latitude, draggableMarkerCoord.longitude)
            .then(json => {
                const address = json.results[0].formatted_address;
                setDraggableMarkerName(address);
            })
            .catch(error => console.warn(error));

        // Reverse geocode destination marker's coordinates
        Geocoder.from(destinationMarkerCoord.latitude, destinationMarkerCoord.longitude)
            .then(json => {
                const address = json.results[0].formatted_address;
                setDestinationMarkerName(address);
            })
            .catch(error => console.warn(error));
    }, [draggableMarkerCoord, destinationMarkerCoord]);

    const handleMarkerPress = (coordinate) => {
        setSelectedMarker(coordinate);
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: faisalabadCoords.latitude,
                    longitude: faisalabadCoords.longitude,
                    latitudeDelta: 0.05, // Adjust the latitude delta for zoom level
                    longitudeDelta: 0.05, // Adjust the longitude delta for zoom level
                }}
                provider={PROVIDER_GOOGLE}
            >
                <Marker
                    draggable
                    pinColor="#0000ff"
                    coordinate={draggableMarkerCoord}
                    onDragEnd={(e) => setDraggableMarkerCoord(e.nativeEvent.coordinate)}
                    onPress={() => handleMarkerPress(draggableMarkerCoord)}
                >
                    <Callout>
                        <Text>{draggableMarkerName}</Text>
                    </Callout>
                </Marker>

                <Marker
                    draggable
                    pinColor="#00ff00"
                    coordinate={destinationMarkerCoord}
                    onDragEnd={(e) => setDestinationMarkerCoord(e.nativeEvent.coordinate)}
                    onPress={() => handleMarkerPress(destinationMarkerCoord)}
                >
                    <Callout>
                        <Text>{destinationMarkerName}</Text>
                    </Callout>
                </Marker>

                <Polyline
                    coordinates={[draggableMarkerCoord, destinationMarkerCoord]}
                    strokeColor="#FF0000" // Line color
                    strokeWidth={2} // Line width
                />
            </MapView>
            {selectedMarker && (
                <View style={styles.selectedMarkerInfo}>
                    <Text>Latitude: {selectedMarker.latitude}</Text>
                    <Text>Longitude: {selectedMarker.longitude}</Text>
                </View>
            )}
            
           <CheckPointModal></CheckPointModal> 
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: width,
        height: height,
    },
    selectedMarkerInfo: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },
});

export default VehicleStatus;
