//GoogleRegistrationScreen
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import StatusBar from './StatusBar';
import GoogleButton from './GoogleButton';

const GoogleRegistrationScreen: React.FC = () => {
  return (
    <View className="flex overflow-hidden flex-col pb-60 mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <Text className="self-center mt-3 text-xl leading-none text-center text-black">
        MURT
      </Text>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/29fdc8feb94722c7085023bb58624c95c2c1763f7f5a909b1300ec0f8aef96f0?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
        className="object-contain mt-20 w-full aspect-[1.2] min-h-[312px]"
      />
      <GoogleButton />
    </View>
  );
};

export default GoogleRegistrationScreen;

//StatusBar
import React from 'react';
import { View, Text, Image } from 'react-native';

const StatusBar: React.FC = () => {
  return (
    <View className="flex gap-10 justify-end py-3 pr-3 pl-8 w-full whitespace-nowrap bg-white backdrop-blur-[20px] text-neutral-800">
      <View className="text-base font-semibold tracking-normal text-center">
        <Text>9:41</Text>
      </View>
      <View className="flex gap-px">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/e77eca25793fc2f9b93c4edcb9cab2f732b1b9265584261ccb1d7c9581b08ec5?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain shrink-0 my-auto aspect-[1.7] fill-neutral-800 w-[17px]"
        />
        <Text className="text-sm">􀙇</Text>
        <Text className="text-lg">􀛨</Text>
      </View>
    </View>
  );
};

export default StatusBar;

//GoogleButton
import React from 'react';
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';

import { useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  GOOGLE_WEB_CLIENT_ID,
  GOOGLE_ANDROID_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
} from '@env';

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
  androidClientId: GOOGLE_ANDROID_CLIENT_ID,
  iosClientId: GOOGLE_IOS_CLIENT_ID,
  scopes: ['profile', 'email'],
});

const GoogleLogin = async () => {
  await GoogleSignin.hasPlayServices();
  const userInfo = await GoogleSignin.signIn();
  return userInfo;
};

export default function App() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await GoogleLogin();
      const { idToken, user } = response;

      if (idToken) {
        const resp = await authAPI.validateToken({
          token: idToken,
          email: user.email,
        });
        await handlePostLoginData(resp.data);
      }
    } catch (apiError) {
      setError(
        apiError?.response?.data?.error?.message || 'Something went wrong'
      );
    } finally {
      setLoading(false);
    }
  };

  async function handleGoogleLogout() {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.log('Google Sign-Out Error: ', error);
    }
  }

  return (
    <view>
      <Pressable onPress={handleGoogleLogin}>Continue with Google</Pressable>
    </view>
  );
}

const GoogleButton: React.FC = () => {
  return (
    <TouchableOpacity
      className="flex gap-4 justify-center items-center self-center px-4 py-3.5 mt-16 w-full text-sm font-semibold text-center rounded-xl border border-solid border-neutral-200 max-w-[300px] min-w-[44px] text-neutral-900"
      accessibilityLabel="Continue with Google"
      accessibilityRole="button"
    >
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/10205ac7368e6f1fb42e449f99ae344fcbacc60d9cba30ecc59d57a05b8b3d75?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <Text className="self-stretch my-auto">Continue with Google</Text>
    </TouchableOpacity>
  );
};

export default GoogleButton;
