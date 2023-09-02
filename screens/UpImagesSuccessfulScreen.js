
import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const UpImagesSuccessfulScreen = ({ navigation }) => {

    return (

        <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
            <ImageBackground source={require('../assets/images/lets-bg.png')}
                style={styles.mainBgImage}>

                <Text style={styles.mainText}>Uplaod 3 Images</Text>
                <View style={styles.formContainer}>
                    <View style={styles.formRow}>
                        <View style={styles.upImgWrapper}>
                            <Image style={styles.upImg} source={require('../assets/images/up_success_images_icon.png')} />
                        </View>
                        <Text style={styles.successMsgText}>UPLOADED SUCCESSFULLY</Text>
                    </View>
                    <View style={styles.sendOtpWrapper}>
                        <TouchableOpacity style={styles.otpBtn}>
                            <Text style={styles.btnText}>
                                LETS START
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </ScrollView>

    );
};

export default UpImagesSuccessfulScreen;

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    mainBgImage: {
        height: '100%',
        width: "100%",
        position: "relative",
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        color: "#1B232A",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        paddingTop: 120,
        textTransform: "uppercase",
    },
    successMsgText: {
        color: "#1B232A",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginTop: 20,
        textAlign: "center",
    },
    formContainer: {
        width: "90%",
        justifyContent: 'center',
    },
    formRow: {
        marginBottom: 10,

    },
    upImg: {
        alignSelf: "center",
        marginTop: 40,
    },
    sendOtpWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
    },
    otpBtn: {
        backgroundColor: "#fff",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#1B1711",
        width: "80%",
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 10,
    },
    btnText: {
        fontSize: 18,
        color: "#065EFE",
        fontWeight: "700",
        textTransform: "uppercase",
    },
});

