//MurtScreen
import React from 'react';
import { View, Text, Image } from 'react-native';
import StatusBar from './StatusBar';
import Button from './Button';
import SocialLoginButton from './SocialLoginButton';

const MurtScreen: React.FC = () => {
  return (
    <View className="flex overflow-hidden flex-col items-center pb-80 mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <View className="mt-4 ml-2.5 text-xl leading-none text-center text-black">
        <Text>MURT</Text>
      </View>
      <Button
        text="Create Account"
        iconUri="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/b1590c31d08a805be9919ed3ac8e569966299c1731aacc390e06367364eab61c?apiKey=79b6de78215c42fdaece1ef61e0a70df&"
        className="mt-48 bg-red-500"
      />
      <SocialLoginButton
        text="Continue with Google"
        iconUri="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/da0a6c65e7fa6aa79bdc8f7e469802b35845c78757eebc2529dc0cee0f317e63?apiKey=79b6de78215c42fdaece1ef61e0a70df&"
        className="mt-10 border border-solid border-neutral-200 text-neutral-900"
      />
      <SocialLoginButton
        text="Login with Kakao"
        iconUri="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/f30fe54a66edd9a31bcd7f01749da0f265baf3f2eb11277a2a20f15b9a45b4fa?apiKey=79b6de78215c42fdaece1ef61e0a70df&"
        className="mt-10 bg-yellow-400 text-black"
      />
    </View>
  );
};

export default MurtScreen;

//StatusBar
import React from 'react';
import { View, Text, Image } from 'react-native';

const StatusBar: React.FC = () => {
  return (
    <View className="flex gap-10 justify-end self-stretch py-3 pr-3 pl-8 w-full whitespace-nowrap bg-white backdrop-blur-[20px] text-neutral-800">
      <View className="text-base font-semibold tracking-normal text-center">
        <Text>9:41</Text>
      </View>
      <View className="flex gap-px">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/e77eca25793fc2f9b93c4edcb9cab2f732b1b9265584261ccb1d7c9581b08ec5?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain shrink-0 my-auto aspect-[1.7] fill-neutral-800 w-[17px]"
        />
        <View className="text-sm">
          <Text>􀙇</Text>
        </View>
        <View className="text-lg">
          <Text>􀛨</Text>
        </View>
      </View>
    </View>
  );
};

export default StatusBar;

//Button
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface ButtonProps {
  text: string;
  iconUri: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, iconUri, className }) => {
  return (
    <TouchableOpacity className={`flex overflow-hidden gap-2 justify-center items-center px-4 py-4 w-full text-xs font-semibold text-white rounded-xl max-w-[303px] min-h-[48px] ${className}`}>
      <Image
        source={{ uri: iconUri }}
        className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
      />
      <View className="self-stretch my-auto">
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

//SocialLoginButton
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface SocialLoginButtonProps {
  text: string;
  iconUri: string;
  className?: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ text, iconUri, className }) => {
  return (
    <TouchableOpacity className={`flex gap-4 justify-center items-center px-4 py-3.5 w-full text-sm font-semibold text-center rounded-xl max-w-[300px] min-w-[44px] ${className}`}>
      <Image
        source={{ uri: iconUri }}
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <View className="self-stretch my-auto">
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialLoginButton;
