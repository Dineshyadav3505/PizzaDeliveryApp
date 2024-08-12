"use client";

import React, { useState, useEffect } from 'react';
import { auth } from '../app/lib/firebaseConfig'; // Ensure this imports correctly
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from 'firebase/auth';

const PhoneAuth = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const [loading, setLoading] = useState(false);

    // Initialize RecaptchaVerifier when the component mounts
    useEffect(() => {
        // Ensure this runs only in the browser
        if (typeof window !== 'undefined' && auth) {
            try {
                window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                    'size': 'invisible', // Change to 'normal' if you want to see the reCAPTCHA
                    'callback': (response) => {
                        console.log('Recaptcha verified');
                    },
                    'expired-callback': () => {
                        console.log('Recaptcha expired');
                    }
                }, auth);
            } catch (error) {
                console.error("Recaptcha initialization failed", error);
            }
        }
    }, []);

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const appVerifier = window.recaptchaVerifier;
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
            setVerificationId(confirmationResult.verificationId);
            alert('OTP sent to your phone!');
        } catch (error) {
            console.error('Error during signInWithPhoneNumber', error);
            alert('Failed to send OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const credential = PhoneAuthProvider.credential(verificationId, otp);
            await auth.signInWithCredential(credential);
            alert('Phone number verified successfully!');
        } catch (error) {
            console.error('Error verifying OTP', error);
            alert('Invalid OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='h-screen bg-red-400'>
            <div id="recaptcha-container" />
            <form onSubmit={handleSendOtp}>
                <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>Send OTP</button>
            </form>
            {verificationId && (
                <form onSubmit={handleVerifyOtp}>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <button type="submit" disabled={loading}>Verify OTP</button>
                </form>
            )}
        </div>
    );
};

export default PhoneAuth;