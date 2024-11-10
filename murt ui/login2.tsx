//LoginScreen
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import StatusBar from './StatusBar';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <ScrollView>
      <View className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
        <View className="flex relative flex-col justify-center items-center pt-3.5 pr-3 pb-72 pl-8 w-full whitespace-nowrap aspect-[1.202] min-h-[312px] text-neutral-800">
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/5e92d8d2bda25f7417d93c470127eaed2ee1e42cda6d85b3fa0713332505b488?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
            className="object-cover absolute inset-0 size-full"
          />
          <StatusBar />
        </View>
        <View className="flex flex-col px-6 py-10 w-full">
          <Text className="text-2xl font-extrabold tracking-wide text-black">
            Welcome!
          </Text>
          <LoginForm />
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/478890a2131dd0e186dcd68cb3121bb2b49542463d00e99287263616cfb424aa?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
            className="object-contain mt-6 w-full"
          />
          <SocialLogin />
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

//StatusBar
import React from 'react';
import { View, Text, Image } from 'react-native';

interface StatusBarProps {}

const StatusBar: React.FC<StatusBarProps> = () => {
  return (
    <View data-layername="iOsStatusBar" className="flex relative gap-10 justify-end w-full backdrop-blur-[20px] max-w-[375px]">
      <View data-layername="time" className="text-base font-semibold tracking-normal text-center">
        <Text>9:41</Text>
      </View>
      <View className="flex gap-px">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/e77eca25793fc2f9b93c4edcb9cab2f732b1b9265584261ccb1d7c9581b08ec5?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain shrink-0 my-auto aspect-[1.7] fill-neutral-800 w-[17px]"
        />
        <View data-layername="wiFi" className="text-sm">
          <Text>􀙇</Text>
        </View>
        <View data-layername="battery" className="text-lg">
          <Text>􀛨</Text>
        </View>
      </View>
    </View>
  );
};

export default StatusBar;

//LoginForm
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <View className="flex flex-col mt-6 max-w-full w-[327px]">
      <View className="flex flex-col w-full text-sm leading-none text-neutral-400">
        <View className="flex flex-col w-full max-w-[327px]">
          <View className="flex overflow-hidden gap-2 items-center px-4 py-3 py-3.5 w-full rounded-xl border border-solid border-stone-300 min-h-[48px]">
            <TextInput
              placeholder="Email Address"
              className="flex-1 shrink gap-px self-stretch my-auto w-full min-w-[240px]"
              accessibilityLabel="Email Address"
            />
          </View>
        </View>
        <View className="flex flex-col mt-4 w-full whitespace-nowrap max-w-[327px]">
          <View className="flex overflow-hidden gap-2 items-center px-4 py-3 py-3.5 w-full rounded-xl border border-solid border-stone-300 min-h-[48px]">
            <TextInput
              placeholder="Password"
              secureTextEntry
              className="flex-1 shrink gap-px self-stretch my-auto w-full min-w-[240px]"
              accessibilityLabel="Password"
            />
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/318870eb75af29fee64753deb61e753072a6aa78a36dfe498a4f3aa16ec74e0e?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text className="mt-4 text-xs font-semibold text-zinc-500">
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-col mt-6 w-full text-xs font-semibold max-w-[327px]">
        <TouchableOpacity className="overflow-hidden gap-2 self-stretch px-4 py-4 w-full text-white whitespace-nowrap bg-red-500 rounded-xl min-h-[48px]">
          <Text className="text-white text-center">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="self-start mt-4 tracking-normal text-center text-red-500">
            Not a member? Register now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;

//SocialLogin
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface SocialLoginProps {}

const SocialLogin: React.FC<SocialLoginProps> = () => {
  return (
    <View className="flex flex-col items-center mt-6 w-full">
      <Text className="text-xs tracking-normal leading-none text-center text-zinc-500">
        Or continue with
      </Text>
      <View className="flex gap-3 items-start mt-4">
        <TouchableOpacity>
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/25bacd7c7f70193288e75afd6a5db78b057a5630d39109f7d573d55bd8d7e751?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
            className="object-contain shrink-0 w-10 aspect-square"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/7d983c28c9663aec4f33aa7cb932387458464f50c7c627f295a9aac4a733076c?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
            className="object-contain shrink-0 w-10 aspect-square"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialLogin;
