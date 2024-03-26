import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';

const QRCodeScanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scannedData, setScannedData] = useState([]);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setScannedData(prevData => [...prevData, data]);
        console.log(data);
        console.log(type);
    };

    if (hasPermission === null) {
        return <Text>Requesting camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={Camera.Constants.Type.back}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            >
                <View style={styles.overlay} />
            </Camera>

            {scannedData.map((data, index) => (
                <Text key={index}>{data}</Text>
            ))}

            {scanned && <Button title="Scan Again" onPress={() => setScanned(false)} />}
        </View>
    );
};


const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        camera: {
            flex: 1,
        },
        overlay: {
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
        },
});

export default QRCodeScanner;
