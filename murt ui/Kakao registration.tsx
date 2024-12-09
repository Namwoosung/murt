//KakaoRegistrationScreen
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, ScrollView, StyleSheet } from 'react-native';
import StatusBar from './StatusBar';
import KakaoLoginButton from './KakaoLoginButton';
import {
  login,
  logout,
  getProfile as getKakaoProfile,
  shippingAddresses as getKakaoShippingAddresses,
  unlink,
} from '@react-native-seoul/kakao-login';

const KakaoRegistrationScreen: React.FC = () => {
  return (
    <View className="flex overflow-hidden flex-col pb-60 mx-auto w-full text-black bg-white max-w-[480px]">
      <StatusBar />
      <Text className="self-center mt-4 text-xl leading-none text-center">MURT</Text>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/2976a7cc1cd09f846c78874d7981329a7535b15f54789f9d15f15ed8ece1cb7e?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
        className="object-contain mt-20 w-full aspect-[1.2] min-h-[312px]"
      />
      <KakaoLoginButton />
    </View>
  );
};

export default KakaoRegistrationScreen;

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
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/d057818914d804d04e3eff28c1f3d998a09a2eee1d91233f25f646052b560ac2?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain shrink-0 my-auto aspect-[1.7] fill-neutral-800 w-[17px]"
        />
        <Text className="text-sm">􀙇</Text>
        <Text className="text-lg">􀛨</Text>
      </View>
    </View>
  );
};

export default StatusBar;

//KakaoLoginButton
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const KakaoLoginButton: React.FC = () => {
  return (
    <TouchableOpacity className="flex gap-4 items-center self-center px-5 py-3.5 mt-16 w-full text-base bg-yellow-400 rounded-md max-w-[300px] min-h-[45px]">
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/a4a9644f641785e9fdb72b27677feea27fdc27863bda4eca447151f064a18740?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
      />
      <View className="flex-1 shrink gap-2.5 self-stretch my-auto">
        <Text>Login with Kakao</Text>
      </View>
    </TouchableOpacity>
  );
};

export default KakaoLoginButton;

const App = () => {
  const [result, setResult] = useState('');

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    setResult(JSON.stringify(token));
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();

    setResult(message);
  };

  const getKakaoProfile = async (): Promise<void> => {
    const profile: KakaoProfile = await getProfile();

    setResult(JSON.stringify(profile));
  };

  const getKakaoShippingAddresses = async (): Promise<void> => {
    const addresses: KakaoShippingAddresses = await shippingAddresses();

    setResult(JSON.stringify(addresses));
  };

  const getKakaoServiceTerms = async (): Promise<void> => {
    const serviceTerms: KakaoUserServiceTerms = await serviceTerms();

    setResult(JSON.stringify(serviceTerms))
  };

  const unlinkKakao = async (): Promise<void> => {
    const message = await unlink();

    setResult(message);
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <ScrollView>
          <Text>{result}</Text>
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          signInWithKakao();
        }}
      >
        <Text style={styles.text}>카카오 로그인</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => getProfile()}>
        <Text style={styles.text}>프로필 조회</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => getShippingAddresses()}>
        <Text style={styles.text}>배송주소록 조회</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => unlinkKakao()}>
        <Text style={styles.text}>링크 해제</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => signOutWithKakao()}>
        <Text style={styles.text}>카카오 로그아웃</Text>
      </Pressable>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100,
  },
  resultContainer: {
    flexDirection: "column",
    width: "100%",
    padding: 24,
  },
  button: {
    backgroundColor: "#FEE500",
    borderRadius: 40,
    borderWidth: 1,
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
  },
});
