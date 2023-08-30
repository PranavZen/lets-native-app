
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
const ContactDetailScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    return (

        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <ImageBackground source={require('../assets/images/lets-bg.png')}
                style={styles.mainBgImage}>
                <Text style={styles.mainText}>Contact Details</Text>
                <View style={styles.formContainer}>
                    <View style={styles.formRow}>
                        <Text style={styles.inputLabel}>Mobile</Text>
                        <TextInput value={mobile}
                            onChangeText={(text) => setMobile(text)}
                            placeholder="Enter your mobile number" style={styles.input} />
                    </View>
                    <View style={styles.formRow}>
                        <View style={styles.pswdTextWrap}>
                            <Text style={styles.inputLabel}>Email</Text>
                        </View>
                        <TextInput value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="Enter your email address"
                            style={styles.input} />
                    </View>
                    <View style={styles.forwordBtnWrap}>
                        
                        <TouchableOpacity style={styles.forwordBtn} onPress={() => navigation.navigate("EmailVerify")}>
                            <FontAwesome5 name="arrow-right" size={22} color="#fff" />
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </ScrollView>

    );
};

export default ContactDetailScreen;

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
    forwordBtnWrap: {
        flex: 1,
        alignItems: "flex-end",
        paddingTop: 20
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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 8,
    },
    modalOption: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#E1E3E9",
    },
    modalCancel: {
        paddingVertical: 10,
        alignItems: "center",
    },
});

