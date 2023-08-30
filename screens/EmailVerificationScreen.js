
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
const EmailVerificationScreen = ({ navigation }) => {
    const [otp, setOtp] = useState("");
    return (

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <ImageBackground source={require('../assets/images/lets-bg.png')}
                style={styles.mainBgImage}>
                <Text style={styles.mainText}>Email Verification</Text>
                <View style={styles.formContainer}>
                    <View style={styles.formRow}>
                        <View style={styles.pswdTextWrap}>
                            <Text style={styles.inputLabel}>Email OTP</Text>
                        </View>
                        <TextInput value={otp}
                            onChangeText={(text) => setOtp(text)}
                            placeholder="Enter OTP from email"
                            style={styles.input} />
                    </View>
                    <View style={styles.sendOtpWrapper}>
                        <TouchableOpacity style={styles.otpBtn}>
                            <Text style={styles.btnText}>
                            RESEND OTP in 00:30
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.forwordBtn}>
                            <FontAwesome5 name="arrow-right" size={22} color="#fff" />
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </ScrollView>

    );
};

export default EmailVerificationScreen;

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
        marginBottom: 8,
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
    inputLabel: {
        fontSize: 13,
        fontWeight: "700",
        color: "#065EFE",
        paddingHorizontal: 10,
        marginBottom: 6,
    },
    input: {
        position: "relative",
        height: 55,
        width: "100%",
        paddingHorizontal: 10,
        backgroundColor: "#E1E3E9",
        color: "#1B232A",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#0033AD",
        fontSize: 12,
        overflow: "hidden"
    },
    pswdTextWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sendOtpWrapper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 100,
    },
    forwordBtn: {
        backgroundColor: "#065EFE",
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    inputText: {
        fontSize: 12,
        color: "#8e8e8e",
        paddingTop: 16
    },
    otpBtn:{
        backgroundColor: "#065EFE",
        width: 200,
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

