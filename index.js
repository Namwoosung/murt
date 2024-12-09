/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
    GOOGLE_WEB_CLIENT_ID,
    GOOGLE_ANDROID_CLIENT_ID,
    GOOGLE_IOS_CLIENT_ID,
} from '@env';

AppRegistry.registerComponent(appName, () => App);

GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
    androidClientId: GOOGLE_ANDROID_CLIENT_ID,
    iosClientId:GOOGLE_IOS_CLIENT_ID,
    scopes: ['profile', 'email'],
});
