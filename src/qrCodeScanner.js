import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

const QRCodeScanner = () => {
    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const {statue} = await BarCodeScanner.requestPermissionsAsync(); 
            setHasPermission(status === 'granted');
        }) ();
    }, []);

    if(!hasPermission){
        return (
            <View style={styles.container}>
                <Text>Please grant camera permission to app.</Text>
            </View>
        );
    }

    const handleBarCodeScanned= ({type, data}) => {
        setScanned(data);
        console.log(data);
        console.log(type);
    }
    return (
        <View style={styles.container}>
            <BarCodeScanner 
                style={StyleSheet.absoluteFillObject}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            />
        </View>
    );
};

const {width , height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
export default QRCodeScanner;