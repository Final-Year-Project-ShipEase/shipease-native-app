import React,{useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Pressable , Image} from 'react-native';
import theme from '../../../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import checkPointTruck from '../../../../assets/checkPointTruck.png';

const CheckPointModal = () => {
    const [visible, setVisible] = useState(true);

    const handleModal = () => {
        setVisible(!visible);
    };
    return(
        
        <View style = {styles.centeredView } >
            <View style={styles.modalView}>
                <View style={styles.outerRoundView}>
                    <View style={styles.innerRoundView}>
                        <Image source={checkPointTruck} style={styles.icon} />
                    </View>
                </View>
                <Text style={styles.modalTitleText}>Vehicle CheckPoint</Text>
                <Text style={styles.modalcontentText}>Click below to watch vehicle checkpoints</Text>

                <Pressable onPress={handleModal}>
                    <View style={styles.checkPointInfo}>
                    <Image source={checkPointTruck} style={styles.icon} />
                    <View style={styles.shippingId}>
                        <Text style={styles.idName}>Shipping ID</Text>
                        <Text style={styles.idNumber}>#SPS317387193</Text>
                    </View>

                    <View style={styles.transitView}>
                    <Text style={styles.transit}>In Transit</Text>
                    </View>
                    <Icon name='expand-more' size={width*0.08} style={styles.expandIcon}></Icon>
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
        justifyContent: 'center',
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
        height: height * 0.55,
        backgroundColor: theme.palette.changePasswordModal.modalViewColor,
    },
    button: {
        backgroundColor: theme.palette.verificationSuccessfulModal.buttonColor,
        borderRadius: width * 0.035,
        //padding: width * 0.02,
        marginTop: width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.5,
        height: height * 0.07,
        borderRadius: width * 0.08,
        marginBottom: height * 0.01,
    },
    textStyle: {
        color: theme.palette.changePasswordModal.buttonTextColor,
        backgroundColor: theme.palette.changePasswordModal.buttonBackgroundColor,
        textAlign: 'center',
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
    form: {
        width: width * 0.8,
        height: height * 0.08,
        marginBottom: height * 0.02,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: height * 0.05,
    },
    passwordInput: {
        marginTop: height * 0.02,
        backgroundColor: 'transparent',
        fontSize: width * 0.05,
        //color: theme.palette.changePasswordModal.inputColor,
        //circular border
        //borderRadius: width * 0.06,
        //borderWidth: 2,
        //borderColor: theme.palette.registration.borderColor,
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
        color: theme.palette.verificationSuccessfulModal.checkDone,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.01,
        width: width * 0.15,
        height: height * 0.06
    },
    checkPointInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: width * 0.9,
        height:height * 0.1,
        marginTop: height * 0.02,
        borderRadius: width * 0.04,
        backgroundColor: theme.palette.checkPointModal.backgroundColor,
    },
    shippingId: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
    transitView:{
        borderWidth: width * 0.01,
        borderColor: theme.palette.checkPointModal.borderColor,
        borderRadius: width * 0.05,
        padding: width * 0.02,
    },
    transit: {
        fontSize: width * 0.04,
        color: theme.palette.checkPointModal.color,
    },
    expandIcon:{
        color: theme.palette.checkPointModal.color
    }
});
export default CheckPointModal;