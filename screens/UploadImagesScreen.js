
import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const UploadImagesScreen = ({ navigation }) => {

    return (

        <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
            <ImageBackground source={require('../assets/images/lets-bg.png')}
                style={styles.mainBgImage}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.mainText}>Uplaod 3 Images</Text>
                <View style={styles.formContainer}>
                    <View style={styles.formRow}>
                        <View style={styles.upImgWrapper}>
                            <Image style={styles.upImg} source={require('../assets/images/up_images_icon.png')} />
                        </View>
                    </View>
                    <View style={styles.sendOtpWrapper}>
                        <TouchableOpacity style={styles.otpBtn} onPress={() => navigation.navigate("UploadImagesSuccess")}>
                            <Text style={styles.btnText}>
                                Select Images
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </ScrollView>

    );
};

export default UploadImagesScreen;

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
    backBtn: {
        position: "absolute",
        left: 8,
        top: 35,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    mainText: {
        color: "#1B232A",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        paddingTop: 120,
        textTransform: "uppercase",
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
        marginTop: 80,
    },
    sendOtpWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
    },
    otpBtn: {
        backgroundColor: "#065EFE",
        width: "80%",
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 10,
    },
    btnText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "700",
    },
});

