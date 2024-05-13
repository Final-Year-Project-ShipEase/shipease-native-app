import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import theme from '../../../theme';

const PickUpConfirmation = () => {
    const itemList = ['bed', 'sofa', 'chair', 'table'];
    const driverName = 'Hamza';
    const driverCNIC = '33100-7592557-9';
    pickUpLocation = 'Faisalabad';
    dropOffLocation = 'Lahore';

    return (
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Shipped Items
                    </Text>
                </View>

                <View style={styles.information}>
                    <View style={styles.driverDetail}>
                        <View style={styles.driverName}>
                            <Text style={styles.text}>Driver Name</Text>
                            <Text style={styles.text}>{driverName}</Text>
                        </View>
                        <View style={styles.driverCNIC}>
                            <Text style={styles.text}>Driver CNIC</Text>
                            <Text style={styles.text}>{driverCNIC}</Text>
                        </View>
                    </View>

                    <View style={styles.location}>
                        <View style={styles.cityLocation}>
                            <Text style={styles.text}>{pickUpLocation}</Text>
                            <Text style={styles.text}>{dropOffLocation}</Text>
                        </View>

                        <View style={styles.pickupdropoff}>
                            <Text style={styles.textLocation}> Pick Up Location </Text>
                            <Text style={styles.textLocation}> Drop Off Location </Text>
                        </View>
                    </View>

                </View>

                <View style={styles.items}>
                    <View style={styles.list}>
                        {itemList.map((item, index) => (
                            <Text style={styles.itemText}>- {item}</Text>
                        ))}
                    </View>
                </View>

                <View style={styles.button}>
                    <Button
                        mode="contained"
                        textColor={theme.palette.confirmation.buttonColor}
                        style={styles.buttonSubmit}
                    >
                        Submit
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: width * 0.08,
        marginTop: height * 0.05,
        color: theme.palette.confirmation.titleColor,
    },
    information: {
        backgroundColor: theme.palette.confirmation.informationBackgroundColor,
        borderRadius: width * 0.08,
        marginTop: height * 0.02,
        width: width,
    },
    text: {
        fontSize: width * 0.06
    },
    textLocation: {
        fontSize: width * 0.03,
        color: theme.palette.confirmation.titleColor,
    },
    driverDetail: {
        flexDirection: 'column',
        padding: width * 0.04,
        marginTop: height * 0.04,
    },
    driverName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: theme.palette.confirmation.titleColor,
    },
    driverCNIC: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height * 0.02,
    },
    location: {
        flexDirection: 'column',
        padding: width * 0.04,
        marginTop: height * 0,
    },
    cityLocation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: theme.palette.confirmation.titleColor,
    },
    pickupdropoff: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height * 0.02,
    },
    items: {
        backgroundColor: theme.palette.confirmation.informationBackgroundColor,
        borderRadius: width * 0.08,
        marginTop: height * 0.02,
    },
    list: {
        marginTop: height * 0.03,
        padding: width * 0.05
    },
    listItem: {
        marginLeft: width * 0.05,
    },
    itemText: {
        fontSize: width * 0.06,
    },
    button:{
        marginTop: height * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonSubmit: {
        width: width * 0.35,
        height: height * 0.07,
        justifyContent: 'center',
        borderRadius: width * 0.05,
        backgroundColor: theme.palette.confirmation.buttonBackgroundColor,
    }
});
export default PickUpConfirmation;