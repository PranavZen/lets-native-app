import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView } from 'react-native';
import { StyleSheet, View, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
            <ImageBackground source={require('../assets/images/lets-bg.png')}
                style={styles.mainBgImage}>
                <Text style={styles.mainText}>Sign in</Text>
                <View style={styles.formContainer}>
                    <View style={styles.formRow}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="Enter your email" style={styles.input} />
                    </View>
                    <View style={styles.formRow}>
                        <View style={styles.pswdTextWrap}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <TouchableOpacity>
                                <Text style={styles.frgtPswdText}>Forget password?</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholder="Enter your password"
                            secureTextEntry={!showPassword}
                            style={styles.input} />
                        <Pressable
                            onPress={toggleShowPassword}
                            accessibilityLabel="Show/Hide enter passowrd"
                            style={styles.inputIcon}
                        >
                            {showPassword ? (
                                <MaterialCommunityIcons
                                    name="eye-off"
                                    size={20}
                                    color="#929193"
                                />
                            ) : (
                                <MaterialCommunityIcons name="eye" size={20} color="#929193" />
                            )}
                        </Pressable>

                    </View>
                    <TouchableOpacity style={[styles.btn, styles.signInBtn]} onPress={() => navigation.navigate("PersonalDetails")}>
                        <Text style={styles.btnText}>SIGN IN</Text>
                    </TouchableOpacity>

                    <View style={styles.partitionBox}>
                        <Text style={styles.partitionText}>OR</Text>
                        <TouchableOpacity style={[styles.btn, styles.signUpBtn]} onPress={() => navigation.navigate("PersonalDetails")}>
                            <Text style={styles.btnText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default SignInScreen;

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
    frgtPswdText: {
        fontSize: 13,
        fontWeight: "700",
        color: "#065EFE",
        marginBottom: 6,
    },
    input: {
        position: "relative",
        height: 55,
        width: "100%",
        paddingHorizontal: 10,
        backgroundColor: "#F7F8FB",
        color: "#1B232A",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#1B1711",
        fontSize: 12,
        overflow: "hidden"
    },
    pswdTextWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputIcon: {
        position: "absolute",
        right: 15,
        top: 43,
        zIndex: 10
    },
    btn: {
        backgroundColor: "#065EFE",
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 10,
    },
    signInBtn: {
        width: "80%",
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 50,
    },
    signUpBtn: {
        width: 180,
    },
    btnText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "700",
    },
    partitionBox: {
        alignSelf: "center",
    },
    partitionText: {
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "700",
        fontSize: 14,
        color: "#1B232A",
    }
});

