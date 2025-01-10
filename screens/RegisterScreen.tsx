import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const GradientText: React.FC<{ text: string; style?: object }> = ({ text, style }) => (
    <MaskedView
        maskElement={
            <Text style={[styles.titleGradientText, style]}>
                {text}
            </Text>
        }
    >
        <LinearGradient
            colors={['#BCFF9D', '#0E3FF2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <Text style={[styles.titleGradientText, style, { opacity: 0 }]}>
                {text}
            </Text>
        </LinearGradient>
    </MaskedView>
);

const RegisterScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* Logo/Title */}
                <View style={styles.titleContainer}>
                    <GradientText text="InfEau" />
                    <Text style={styles.subtitle}>Inscrivez-vous</Text>
                </View>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={[styles.input,]}
                        placeholder="Entrez votre mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Suivant</Text>
                </TouchableOpacity>

                {/* Separator */}
                <View style={styles.separator}>
                    <View style={styles.separatorLine} />
                    <Text style={styles.separatorText}>Ou</Text>
                    <View style={styles.separatorLine} />
                </View>

                {/* Social Buttons */}
                <TouchableOpacity style={styles.socialButton}>
                    <Image
                        source={require('../assets/apple-icon.png')}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Continue avec Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    <Image
                        source={require('../assets/google-icon.png')}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Continue avec Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.socialButton}>
                    <Image
                        source={require('../assets/facebook-icon.png')}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Continue avec Facebook</Text>
                </TouchableOpacity>

                {/* Login Link */}
                <TouchableOpacity style={styles.loginLink}>
                    <Text style={styles.loginText}>
                        Vous avez déjà un compte? Connectez-vous
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8ED',
    },
    content: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    titleContainer: {
        padding: 5,
        borderRadius: 8,
        marginBottom: 20,
    },
    titleGradientText: {
        fontSize: 40,
        fontWeight: 800,
        textAlign: 'center',
        letterSpacing: 1,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#007362',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: 'white',
    },
    submitButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#007362',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ddd',
    },
    separatorText: {
        marginHorizontal: 10,
        color: '#666',
    },
    socialButton: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#007362',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    socialButtonText: {
        fontSize: 16,
        color: '#333',
    },
    loginLink: {
        marginTop: 20,
    },
    loginText: {
        color: 'black',
        fontSize: 16,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'center',
        color: '#333',
        marginTop: 5,
    },
});

export default RegisterScreen;