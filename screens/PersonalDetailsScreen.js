import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Platform, // Import Platform
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

const PersonalDetailsScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [isGenderModalVisible, setIsGenderModalVisible] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false); // State to control date picker visibility

    const openGenderModal = () => {
        setIsGenderModalVisible(true);
    };

    const closeGenderModal = () => {
        setIsGenderModalVisible(false);
    };

    const handleGenderSelection = (selectedGender) => {
        setGender(selectedGender);
        closeGenderModal();
    };
    
    const openDatePicker = () => {
        setShowDatePicker(true);
    };

    const handleDateChange = (event, selectedDate) => {
        if (selectedDate) {
            setDob(selectedDate.toISOString().split('T')[0]);
        }
        setShowDatePicker(Platform.OS === 'ios');
    };

    return (
        <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
        >
            <ImageBackground
                source={require('../assets/images/lets-bg.png')}
                style={styles.mainBgImage}
            >
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.mainText}>Personal Details</Text>
                <View style={styles.formContainer}>
                    <View style={styles.formRow}>
                        <Text style={styles.inputLabel}>Name</Text>
                        <TextInput
                            value={name}
                            onChangeText={(text) => setName(text)}
                            placeholder="Enter your name"
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.formRow}>
                        <View style={styles.pswdTextWrap}>
                            <Text style={styles.inputLabel}>DOB</Text>
                        </View>
                        <TouchableOpacity onPress={openDatePicker} style={styles.input}>
                            <Text style={styles.inputText}>
                                {dob || 'Select your date of birth'}
                            </Text>
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={dob ? new Date(dob) : new Date()}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                                maximumDate={new Date()} // Allow only past dates
                            />
                        )}
                    </View>
                    <View style={styles.formRow}>
                        <View style={styles.pswdTextWrap}>
                            <Text style={styles.inputLabel}>Gender</Text>
                        </View>
                        <TouchableOpacity onPress={openGenderModal} style={styles.input}>
                            <Text style={styles.inputText}>
                                {gender || 'Select gender'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Modal
                        isVisible={isGenderModalVisible}
                        animationIn="fadeIn"
                        animationOut="fadeOut"
                        backdropTransitionOutTiming={0}
                        onBackdropPress={closeGenderModal}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <TouchableOpacity
                                    onPress={() => handleGenderSelection('male')}
                                    style={styles.modalOption}
                                >
                                    <Text style={styles.modalOptionText}>Male</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleGenderSelection('female')}
                                    style={styles.modalOption}
                                >
                                    <Text style={styles.modalOptionText}>Female</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleGenderSelection('other')}
                                    style={[styles.modalOption, styles.modalOptionLast]}
                                >
                                    <Text style={styles.modalOptionText}>Other</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <View style={styles.forwordBtnWrap}>
                        <TouchableOpacity
                            style={styles.forwordBtn}
                            onPress={() => navigation.navigate('ContactDetail')}
                        >
                            <FontAwesome5 name="arrow-right" size={22} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default PersonalDetailsScreen;

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    mainBgImage: {
        height: '100%',
        width: '100%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backBtn: {
        position: 'absolute',
        left: 8,
        top: 35,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        color: '#1B232A',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        paddingTop: 120,
        textTransform: 'uppercase',
    },
    formContainer: {
        width: '90%',
        justifyContent: 'center',
    },
    formRow: {
        marginBottom: 10,
    },
    inputLabel: {
        fontSize: 13,
        fontWeight: '700',
        color: '#065EFE',
        paddingHorizontal: 10,
        marginBottom: 6,
    },
    input: {
        position: 'relative',
        height: 55,
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: '#F7F8FB',
        color: '#1B232A',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#1B1711',
        fontSize: 12,
        overflow: 'hidden',
    },
    pswdTextWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    forwordBtnWrap: {
        flex: 1,
        alignItems: 'flex-end',
        paddingTop: 20,
    },
    forwordBtn: {
        backgroundColor: '#065EFE',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputText: {
        fontSize: 12,
        color: '#8e8e8e',
        paddingTop: 16,
        textTransform: 'capitalize',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#1B1711",
    },
    modalOption: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#E1E3E9',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOptionText: {
        color: '#1B232A',
        fontSize: 16,
        fontWeight: '800',
    },
    modalOptionLast: {
        borderBottomWidth: 0,
    }
});
