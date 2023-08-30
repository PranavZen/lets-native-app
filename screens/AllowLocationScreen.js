import { StyleSheet, View, ImageBackground, Animated, Text, TouchableOpacity, Easing } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useEffect } from 'react';
const AllowLocationScreen = ({ navigation }) => {
    const animatedValue = new Animated.Value(0);

    useEffect(() => {
        startAnimation();
    }, []);

    const startAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.easeInOut,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.easeInOut,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };
    return (
        <View>
            <ImageBackground source={require('../assets/images/lets-bg.png')}
                style={styles.mainBgImage}>
                <Text style={styles.mainText}>Allow Location</Text>
                <Text style={styles.subText}>
                    WE NEED YOUR LOCATION IN ORDER TO SERVE YOU BEST
                </Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.btnText}>SURE!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.skipBtn}
                    onPress={startAnimation}
                >
                    <Text style={styles.skipBtnText}>
                        SKIP FOR NOW{' '}
                        <Animated.View
                            style={{
                                transform: [
                                    {
                                        translateX: animatedValue.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 10],
                                        }),
                                    },
                                ],
                            }}
                        >
                            <FontAwesome5 name="arrow-right" style={styles.skipBtnIcon} />
                        </Animated.View>
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

export default AllowLocationScreen

const styles = StyleSheet.create({

    mainBgImage: {
        height: '100%',
        width: "100%",
        position: "relative",
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mainText: {
        color: "#1B232A",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 4,
        textTransform: "uppercase",
    },
    subText: {
        fontSize: 11,
        color: "#1B232A",
        textAlign: "center",
        width: "65%",
        fontWeight: "700",
    },
    btn: {
        backgroundColor: "#065EFE",
        width: 120,
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 8,
    },
    btnText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "700",
    },
    skipBtn: {
        marginBottom: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    skipBtnText: {
        fontSize: 14,
        color: "#065EFE",
        fontWeight: "700",
    },
    skipBtnIcon: {
        fontSize: 14,
        color: "#065EFE",
        marginBottom: -2,
    }
});