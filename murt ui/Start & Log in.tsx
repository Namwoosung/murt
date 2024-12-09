//StartLogin
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { SignUpButton } from './SignUpButton';
import { LoginLink } from './LoginLink';

type StartLoginProps = {
  onSignUp: () => void;
  onLogin: () => void;
};

export const StartLogin: React.FC<StartLoginProps> = ({ onSignUp, onLogin }) => {
  return (
    <View className="flex overflow-hidden flex-col items-center pb-8 mx-auto w-full text-sm leading-none text-black bg-white max-w-[480px]">
      <Image
        accessibilityLabel="Reasonable Trader logo"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/0b71b040eae5b473a7c2dc2b75b7d55dd8c854dd88bfcfdc28ac0690c8e29b90?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
        className="object-contain self-stretch w-full aspect-[0.74]"
      />
      <Text className="text-2xl leading-loose text-center">
        Make Us Reasonable Trader
      </Text>
      <SignUpButton onPress={onSignUp} />
      <LoginLink onPress={onLogin} />
    </View>
  );
};

//SignUpButton
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type SignUpButtonProps = {
  onPress: () => void;
};

export const SignUpButton: React.FC<SignUpButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityRole="button"
      className="px-16 py-7 mt-36 w-full tracking-wider text-violet-50 bg-red-500 max-w-[337px] rounded-[38px]"
    >
      <Text>SIGN UP</Text>
    </TouchableOpacity>
  );
};

//LoginLink
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type LoginLinkProps = {
  onPress: () => void;
};

export const LoginLink: React.FC<LoginLinkProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityRole="link"
      className="mt-6 tracking-wider"
    >
      <Text>
        ALREADY HAVE AN ACCOUNT? LOG IN
      </Text>
    </TouchableOpacity>
  );
};
