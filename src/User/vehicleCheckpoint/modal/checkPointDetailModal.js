import React from 'react';
import { StyleSheet, View, Text, Dimensions, Pressable, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import theme from '../../../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import checkPointTruck from '../../../../assets/checkPointTruck.png';

const CheckPointDetailModal = () => {
    return (
        <View style={styles.centeredView} >
            <View style={styles.modalView}>
                <View style={styles.outerRoundView}>
                    <View style={styles.innerRoundView}>
                        <Image source={checkPointTruck} resizeMode='contain' style={styles.icon} />
                    </View>
                </View>
                <Text style={styles.modalTitleText}>Vehicle CheckPoint</Text>
                <Text style={styles.modalcontentText}>Click below to watch vehicle checkpoints</Text>

                <Pressable >
                    <View style={styles.main}>
                        <View style={styles.checkPointInfo}>
                            <Image source={checkPointTruck} style={styles.icon} />
                            <View style={styles.shippingId}>
                                <Text style={styles.idName}>Shipping ID</Text>
                                <Text style={styles.idNumber}>#SPS317387193</Text>
                            </View>

                            <View style={styles.transitView}>
                                <Text style={styles.transit}>In Transit</Text>
                                <Icon name='expand-less' size={width * 0.08} style={styles.expandIcon}></Icon>
                            </View>
                        </View>

                        <Divider bold={true} style={{ backgroundColor: 'black', marginTop: height * 0.01 }} />
                        
                            <ScrollView contentContainerStyle={styles.checkPointsDetail}> 
                                <View style={styles.checkPoint}>
                                    <Text style={styles.detail}>22 November 2023, 9:13</Text>
                                    <Text style={styles.packageInfo}>The package is tansit</Text>
                                    <Text style={styles.detail}>Punjab, Pakistan</Text>
                                </View>


                                <View style={styles.checkPoint}>
                                    <Text style={styles.detail}>23 November 2023, 9:13</Text>
                                    <Text style={styles.packageInfo}>The package is tansit</Text>
                                    <Text style={styles.detail}>District Faisalabad, Pakistan</Text>
                                </View>

                                <View style={styles.checkPoint}>
                                    <Text style={styles.detail}>24 November 2023, 9:13</Text>
                                    <Text style={styles.packageInfo}>The package is tansit to its final destination</Text>
                                    <Text style={styles.detail}>Faisalabad, Pakistan</Text>
                                </View>



                                </ScrollView>
                            
                    </View>
                </Pressable>

            </View>
        </View >
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        flexDirection: 'column',
        alignItems: 'center',
        borderTopLeftRadius: width * 0.2,
        borderTopRightRadius: width * 0.2,
        padding: width * 0.09,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: width,
        height: height * 0.8,
        backgroundColor: theme.palette.changePasswordModal.modalViewColor,
    },
    modalTitleText: {
        color: theme.palette.verificationSuccessfulModal.modalTitleText,
        fontSize: width * 0.08,
        width: width * 0.9,
        alignItems: 'center',
        height: height * 0.06,
        marginLeft: width * 0.2,
        marginTop: height * 0.02,
    },
    modalcontentText: {
        color: theme.palette.verificationSuccessfulModal.modalTitleText,
        fontSize: width * 0.04,
        width: width * 0.9,
        alignItems: 'center',
        height: height * 0.06,
        marginLeft: width * 0.15,
        marginTop: height * 0.02,
    },
    outerRoundView: {
        backgroundColor: theme.palette.changePasswordModal.outerViewColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.3,
        aspectRatio: 1,
        borderRadius: width * 0.5,
    },
    innerRoundView: {
        backgroundColor: theme.palette.changePasswordModal.innerViewColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.2,
        aspectRatio: 1,
        borderRadius: width * 0.7 * 0.5,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.01,
        width: width * 0.15,
        height: height * 0.06
    },
    main: {
        flexDirection: 'column',
        width: width * 0.9,
        height: height * 0.4,
        borderRadius: width * 0.04,
        backgroundColor: theme.palette.checkPointModal.backgroundColor,
    },
    checkPointInfo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    shippingId: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
    },
    idName: {
        fontSize: width * 0.04,
        color: theme.palette.checkPointModal.color
    },
    idNumber: {
        fontSize: width * 0.05,
        color: theme.palette.checkPointModal.color
    },
    transitView: {
        height: height * 0.08,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    transit: {
        fontSize: width * 0.04,
        borderWidth: width * 0.01,
        borderColor: theme.palette.checkPointModal.borderColor,
        borderRadius: width * 0.05,
        padding: width * 0.02,
        color: theme.palette.checkPointModal.color,
    },
    expandIcon: {
        color: theme.palette.checkPointModal.color
    },
    checkPointsDetail: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: width * 0.05,
        paddingVertical: width * 0.03,
        gap: width * 0.05
    },
    checkPoint: {
        flexDirection: 'column',
        marginBottom: width * 0.03,
    },
    packageInfo: {
        fontSize: width * 0.05
    },
});
export default CheckPointDetailModal;