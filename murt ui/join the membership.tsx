//SignUpScreen
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import StatusBar from './StatusBar';
import SignUpForm from './SignUpForm';
import KeyboardPortrait from './KeyboardPortrait';

const SignUpScreen: React.FC = () => {
  return (
    <ScrollView>
      <View data-layername="회원가입화면" className="flex overflow-hidden flex-col justify-center pt-3.5 mx-auto w-full bg-white max-w-[480px]">
        <StatusBar />
        <View data-layername="loginOptions" className="flex flex-col px-6 py-6 mt-3 w-full min-h-[475px]">
          <View data-layername="text" className="flex flex-col max-w-full w-[327px]">
            <Text data-layername="signUp" className="text-base font-extrabold tracking-normal text-neutral-800">
              Sign up
            </Text>
            <Text data-layername="createAnAccountToGetStarted" className="mt-2 text-xs tracking-normal leading-none text-zinc-500">
              Create an account to get started
            </Text>
          </View>
          <SignUpForm />
        </View>
        <KeyboardPortrait />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

//StatusBar
import React from 'react';
import { View, Text, Image } from 'react-native';

const StatusBar: React.FC = () => {
  return (
    <View data-layername="iOsStatusBar" className="flex gap-10 justify-end self-end w-full whitespace-nowrap backdrop-blur-[20px] max-w-[331px] text-neutral-800">
      <View data-layername="time" className="text-base font-semibold tracking-normal text-center">
        <Text>9:41</Text>
      </View>
      <View className="flex gap-px">
        <Image
          loading="lazy"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/d057818914d804d04e3eff28c1f3d998a09a2eee1d91233f25f646052b560ac2?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain shrink-0 my-auto aspect-[1.7] fill-neutral-800 w-[17px]"
        />
        <Text data-layername="wiFi" className="text-sm">􀙇</Text>
        <Text data-layername="battery" className="text-lg">􀛨</Text>
      </View>
    </View>
  );
};

export default StatusBar;

//SignUpForm
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import FormField from './FormField';

interface FormFieldData {
  title: string;
  placeholder: string;
  isPassword?: boolean;
}

const formFields: FormFieldData[] = [
  { title: 'Name', placeholder: 'Mark' },
  { title: 'Email Address', placeholder: 'name@email.com' },
  { title: 'Password', placeholder: 'Create a password', isPassword: true },
  { title: 'Confirm Password', placeholder: 'Confirm password', isPassword: true },
];

const SignUpForm: React.FC = () => {
  return (
    <View data-layername="form" className="flex flex-col mt-6 max-w-full w-[327px]">
      {formFields.map((field, index) => (
        <FormField key={index} {...field} />
      ))}
      <View className="flex gap-3 items-center mt-6 w-full text-xs tracking-normal leading-4 text-red-500">
        <View data-layername="checkbox" className="flex shrink-0 self-stretch my-auto w-6 h-6 rounded-md border-solid border-[1.5px] border-stone-300" />
        <Text data-layername="iveReadAndAgreeWithTheTermsAndConditionsAndThePrivacyPolicy" className="flex-1 shrink self-stretch my-auto basis-0">
          I've read and agree with the Terms and Conditions and the Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

export default SignUpForm;

//FormField
import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

interface FormFieldProps {
  title: string;
  placeholder: string;
  isPassword?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ title, placeholder, isPassword }) => {
  return (
    <View className="flex flex-col mt-4 w-full max-w-[327px]">
      <Text data-layername="title" className="text-xs font-bold text-zinc-800">
        {title}
      </Text>
      <View data-layername="field" className="flex overflow-hidden gap-2 items-center px-4 py-3 py-3.5 mt-2 w-full text-sm leading-none rounded-xl border border-solid border-stone-300 min-h-[48px] text-neutral-400">
        <TextInput
          placeholder={placeholder}
          secureTextEntry={isPassword}
          className="flex-1 shrink gap-px self-stretch my-auto w-full min-w-[240px]"
        />
        {isPassword && (
          <Image
            loading="lazy"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/0ad2d9ae7b08e6c828dbf7b3583d4cb33db1337d6c9ea6bac25c1643e42c70af?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
        )}
      </View>
    </View>
  );
};

export default FormField;

//KeyboardPortrait
import React from 'react';
import { View, Text, Image } from 'react-native';

const KeyboardPortrait: React.FC = () => {
  const alphabetRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  return (
    <View data-layername="iOsKeyboardPortrait" className="flex overflow-hidden flex-col w-full text-center whitespace-nowrap bg-gray-300 backdrop-blur-[35px]">
      <View data-layername="alphabet" className="flex overflow-hidden flex-col px-1 py-2.5 w-full text-2xl font-light uppercase text-neutral-800">
        {alphabetRows.map((row, rowIndex) => (
          <View key={rowIndex} className={`flex gap-1.5 ${rowIndex === 1 ? 'self-center mt-3 w-full max-w-[336px]' : ''}`}>
            {rowIndex === 2 && (
              <Image loading="lazy" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/76da5e925125bf98920bd725b6467ac9ff72b13fa5e8240af70f45491cb93b2c?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }} className="object-contain shrink-0 shadow-sm aspect-[0.98] w-[42px]" />
            )}
            {row.map((letter, letterIndex) => (
              <View key={letterIndex} data-layername={letter.toLowerCase()} className="px-2.5 py-2 bg-white rounded-md shadow-sm">
                <Text>{letter}</Text>
              </View>
            ))}
            {rowIndex === 2 && (
              <Image loading="lazy" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/237c720623db8e2b3076c0dabbc41ed56fc61619627dc3b562bcd3f71c745bc2?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }} className="object-contain shrink-0 self-start shadow-sm aspect-square w-[42px]" />
            )}
          </View>
        ))}
      </View>
      <View data-layername="controller" className="flex overflow-hidden gap-1.5 px-1 py-1.5 w-full text-base tracking-tight">
        <View className="flex flex-col self-start text-neutral-800">
          <View data-layername="123" className="px-8 py-3 rounded-md shadow-sm bg-stone-300">
            <Text>123</Text>
          </View>
          <Image loading="lazy" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/aae3b1bc1e9f3f6bda63319228561ebc243c8909ee22143e08658e74b1547701?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }} className="object-contain self-center mt-5 aspect-square w-[42px]" />
        </View>
        <View className="flex flex-col grow shrink-0 basis-0 w-fit">
          <View className="flex gap-2">
            <View data-layername="space" className="px-16 py-3 bg-white rounded-md shadow-sm text-neutral-800">
              <Text>space</Text>
            </View>
            <View data-layername="return" className="px-6 py-3 text-white bg-red-500 rounded-md shadow-[0px_1px_0px_rgba(0,0,0,0.3)]">
              <Text>return</Text>
            </View>
          </View>
          <Image loading="lazy" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/9dc68903e407b11be667110bdbf72f0b63a061c886d3000fb9faaf4ccf320605?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }} className="object-contain self-end mt-5 aspect-square w-[42px]" />
          <View data-layername="homeIndicator" className="flex shrink-0 mt-1 ml-6 h-1.5 rounded bg-neutral-800 w-[133px]" />
        </View>
      </View>
    </View>
  );
};

export default KeyboardPortrait;
