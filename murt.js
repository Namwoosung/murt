//시작 화면
//MurtComponent
import React from 'react';

interface MurtComponentProps {
  imageUrl: string;
}

const MurtComponent: React.FC<MurtComponentProps> = ({ imageUrl }) => {
  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-14 pb-96 mx-auto w-full text-base text-black whitespace-nowrap bg-white max-w-[480px] tracking-[3.84px]">
      <section className="flex flex-col max-w-full w-[168px]">
        <h1 className="self-center">MURT</h1>
        <img 
          loading="lazy" 
          src={imageUrl} 
          alt="MURT application visual" 
          className="object-contain mt-32 w-full rounded-3xl aspect-square"
        />
      </section>
    </main>
  );
}

export default MurtComponent;

//APP
import React from 'react';
import MurtComponent from './MurtComponent';

const App: React.FC = () => {
  return (
    <MurtComponent imageUrl="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/894d0e4174d7d99a247e92c3d41dab34c2c030f6258d5f1f64863bc3229c7dc6?apiKey=79b6de78215c42fdaece1ef61e0a70df&" />
  );
}

export default App;

//시작/로그인
//LoginPage.tsx
import React from 'react';
import Button from './Button';
import { LoginText } from './LoginText';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center pb-8 mx-auto w-full text-sm leading-none text-black bg-white max-w-[480px]">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/0b71b040eae5b473a7c2dc2b75b7d55dd8c854dd88bfcfdc28ac0690c8e29b90?apiKey=79b6de78215c42fdaece1ef61e0a70df&" 
        alt="Login background" 
        className="object-contain self-stretch w-full aspect-[0.74]" 
      />
      <LoginText />
      <Button 
        text="SIGN UP" 
        className="px-16 py-7 mt-36 w-full tracking-wider text-violet-50 bg-red-500 max-w-[337px] rounded-[38px]" 
      />
      <p className="mt-6 tracking-wider">
        <span className="text-gray-400">ALREADY HAVE AN ACCOUNT?</span>{" "}
        <span className="text-red-500">LOG IN</span>
      </p>
    </main>
  );
};

export default LoginPage;

//Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button className={className}>
      {text}
    </button>
  );
};

export default Button;

//LoginText.tsx
import React from 'react';

export const LoginText: React.FC = () => {
  return (
    <h1 className="text-2xl leading-loose text-center">
      Make Us Reasonable Trader
    </h1>
  );
};

//로그인#2
//LoginScreen.tsx
import React from 'react';
import StatusBar from './StatusBar';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <main className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
      <header className="flex relative flex-col justify-center items-center pt-3.5 pr-3 pb-72 pl-8 w-full whitespace-nowrap aspect-[1.202] min-h-[312px] text-neutral-800">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/5e92d8d2bda25f7417d93c470127eaed2ee1e42cda6d85b3fa0713332505b488?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-cover absolute inset-0 size-full" />
        <StatusBar />
      </header>
      <section className="flex flex-col px-6 py-10 w-full">
        <h1 className="text-2xl font-extrabold tracking-wide text-black">Welcome!</h1>
        <LoginForm />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/478890a2131dd0e186dcd68cb3121bb2b49542463d00e99287263616cfb424aa?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain mt-6 w-full" />
        <SocialLogin />
      </section>
    </main>
  );
};

export default LoginScreen;

//StatusBar
import React from 'react';

interface StatusBarProps {}

const StatusBar: React.FC<StatusBarProps> = () => {
  return (
    <div className="flex relative gap-10 justify-end w-full backdrop-blur-[20px] max-w-[375px]">
      <div className="text-base font-semibold tracking-normal text-center">
        9:41
      </div>
      <div className="flex gap-px">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/e77eca25793fc2f9b93c4edcb9cab2f732b1b9265584261ccb1d7c9581b08ec5?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 my-auto aspect-[1.7] fill-neutral-800 w-[17px]" />
        <div className="text-sm">􀙇</div>
        <div className="text-lg">􀛨</div>
      </div>
    </div>
  );
};

export default StatusBar;

//LoginForm
import React from 'react';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <form className="flex flex-col mt-6 max-w-full w-[327px]">
      <div className="flex flex-col w-full text-sm leading-none text-neutral-400">
        <div className="flex flex-col w-full max-w-[327px]">
          <div className="flex overflow-hidden gap-2 items-center px-4 py-3 py-3.5 w-full rounded-xl border border-solid border-stone-300 min-h-[48px]">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="flex-1 shrink gap-px self-stretch my-auto w-full min-w-[240px] bg-transparent"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full whitespace-nowrap max-w-[327px]">
          <div className="flex overflow-hidden gap-2 items-center px-4 py-3 py-3.5 w-full rounded-xl border border-solid border-stone-300 min-h-[48px]">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="flex-1 shrink gap-px self-stretch my-auto w-full min-w-[240px] bg-transparent"
            />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/de80bdbe1934b8f4374c0e1d99852685e8991781acaf748d09e5f616fb531049?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
          </div>
        </div>
        <button type="button" className="mt-4 text-xs font-semibold text-zinc-500">
          Forgot password?
        </button>
      </div>
      <div className="flex flex-col mt-6 w-full text-xs font-semibold max-w-[327px]">
        <button type="submit" className="overflow-hidden gap-2 self-stretch px-4 py-4 w-full text-white whitespace-nowrap bg-red-500 rounded-xl min-h-[48px]">
          Login
        </button>
        <p className="self-start mt-4 tracking-normal text-center">
          <span className="tracking-normal leading-4 text-zinc-500">Not a member? </span>
          <button type="button" className="text-red-500">Register now</button>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;

//SocialLogin
import React from 'react';

interface SocialLoginProps {}

const SocialLogin: React.FC<SocialLoginProps> = () => {
  return (
    <div className="flex flex-col items-center mt-6 w-full">
      <p className="text-xs tracking-normal leading-none text-center text-zinc-500">
        Or continue with
      </p>
      <div className="flex gap-3 items-start mt-4">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/25bacd7c7f70193288e75afd6a5db78b057a5630d39109f7d573d55bd8d7e751?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="Social Login Option 1" className="object-contain shrink-0 w-10 aspect-square" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/7d983c28c9663aec4f33aa7cb932387458464f50c7c627f295a9aac4a733076c?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="Social Login Option 2" className="object-contain shrink-0 w-10 aspect-square" />
      </div>
    </div>
  );
};

export default SocialLogin;

//회원가입 화면
//SignUpScreen
import React from 'react';
import StatusBar from './StatusBar';
import SignUpForm from './SignUpForm';
import KeyboardLayout from './KeyboardLayout';

const SignUpScreen: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col justify-center pt-3.5 mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <SignUpForm />
      <KeyboardLayout />
    </main>
  );
};

export default SignUpScreen;

//StausBar
import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <header data-layername="iOsStatusBar" className="flex gap-10 justify-end self-end w-full whitespace-nowrap backdrop-blur-[20px] max-w-[331px] text-neutral-800">
      <time data-layername="time" className="text-base font-semibold tracking-normal text-center">
        9:41
      </time>
      <div className="flex gap-px">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/d057818914d804d04e3eff28c1f3d998a09a2eee1d91233f25f646052b560ac2?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 my-auto aspect-[1.7] fill-neutral-800 w-[17px]" />
        <div data-layername="wiFi" className="text-sm">
          􀙇
        </div>
        <div data-layername="battery" className="text-lg">
          􀛨
        </div>
      </div>
    </header>
  );
};

export default StatusBar;

//SignUpForm
import React from 'react';
import FormField from './FormField';

const SignUpForm: React.FC = () => {
  return (
    <section data-layername="loginOptions" className="flex flex-col px-6 py-6 mt-3 w-full min-h-[475px]">
      <div data-layername="text" className="flex flex-col max-w-full w-[327px]">
        <h1 data-layername="signUp" className="text-base font-extrabold tracking-normal text-neutral-800">
          Sign up
        </h1>
        <p data-layername="createAnAccountToGetStarted" className="mt-2 text-xs tracking-normal leading-none text-zinc-500">
          Create an account to get started
        </p>
      </div>
      <form data-layername="form" className="flex flex-col mt-6 max-w-full w-[327px]">
        <FormField label="Name" placeholder="Mark" value="Mark" isActive={true} />
        <FormField label="Email Address" placeholder="name@email.com" />
        <FormField label="Password" placeholder="Create a password" type="password" />
        <FormField label="Confirm Password" placeholder="Confirm password" type="password" />
        <div className="flex gap-3 items-center mt-6 w-full text-xs tracking-normal leading-4 text-red-500">
          <div data-layername="checkbox" className="flex shrink-0 self-stretch my-auto w-6 h-6 rounded-md border-solid border-[1.5px] border-stone-300" />
          <label data-layername="iveReadAndAgreeWithTheTermsAndConditionsAndThePrivacyPolicy" className="flex-1 shrink self-stretch my-auto basis-0">
            I've read and agree with the{" "}
            <span className="font-semibold leading-4 text-red-500">Terms and Conditions</span>{" "}
            and the{" "}
            <span className="font-semibold leading-4 text-red-500">Privacy Policy</span>.
          </label>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;

//FormField
import React from 'react';

interface FormFieldProps {
  label: string;
  placeholder: string;
  value?: string;
  isActive?: boolean;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, value, isActive, type = "text" }) => {
  const fieldClasses = `flex overflow-hidden gap-2 items-center px-4 py-3 py-3.5 mt-2 w-full text-sm leading-none rounded-xl ${
    isActive ? 'border-blue-600 border-solid border-[1.5px] text-neutral-800' : 'border border-solid border-stone-300 text-neutral-400'
  } min-h-[48px]`;

  return (
    <div className="flex flex-col mt-4 w-full max-w-[327px]">
      <label className="text-xs font-bold text-zinc-800" htmlFor={label.toLowerCase().replace(' ', '-')}>
        {label}
      </label>
      <div className={fieldClasses}>
        <div className="flex flex-1 shrink gap-1.5 items-center self-stretch my-auto w-full basis-0 min-w-[240px]">
          <input
            type={type}
            id={label.toLowerCase().replace(' ', '-')}
            placeholder={placeholder}
            value={value}
            className="flex-1 shrink gap-px self-stretch my-auto w-full min-w-[240px] bg-transparent outline-none"
          />
        </div>
        {type === "password" && (
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/baab79453f3c9924d9c8f18510bbe352979c8b0d9e0a71c10bd5433af406e88b?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
        )}
      </div>
    </div>
  );
};

export default FormField;

//KeyboardLayout
import React from 'react';

const KeyboardLayout: React.FC = () => {
  const alphabetKeys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  return (
    <section data-layername="iOsKeyboardPortrait" className="flex overflow-hidden flex-col w-full text-center whitespace-nowrap bg-gray-300 backdrop-blur-[35px]">
      <div data-layername="alphabet" className="flex overflow-hidden flex-col px-1 py-2.5 w-full text-2xl font-light uppercase text-neutral-800">
        {alphabetKeys.map((row, rowIndex) => (
          <div key={rowIndex} className={`flex gap-1.5 ${rowIndex === 1 ? 'self-center mt-3 w-full max-w-[336px]' : ''}`}>
            {row.map((key) => (
              <div key={key} data-layername={key.toLowerCase()} className="px-2.5 py-2 bg-white rounded-md shadow-sm">
                {key}
              </div>
            ))}
          </div>
        ))}
        <div className="flex gap-3 mt-3">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/ccc9a5a5a761cba75dd51d87df98ca4ce59d2c154ea0d859eb4efe8b9dd357f6?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 shadow-sm aspect-[0.98] w-[42px]" />
          <div className="flex gap-1.5">
            {alphabetKeys[2].map((key) => (
              <div key={key} data-layername={key.toLowerCase()} className="px-2.5 py-2 bg-white rounded-md shadow-sm">
                {key}
              </div>
            ))}
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/620c33165c0fed7851aa33ced3782428058f9bd40f2d592484574577683302ba?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 self-start shadow-sm aspect-square w-[42px]" />
        </div>
      </div>
      <div data-layername="controller" className="flex overflow-hidden gap-1.5 px-1 py-1.5 w-full text-base tracking-tight">
        <div className="flex flex-col self-start text-neutral-800">
          <div data-layername="123" className="px-8 py-3 rounded-md shadow-sm bg-stone-300">
            123
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/aae3b1bc1e9f3f6bda63319228561ebc243c8909ee22143e08658e74b1547701?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain self-center mt-5 aspect-square w-[42px]" />
        </div>
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          <div className="flex gap-2">
            <div data-layername="space" className="px-16 py-3 bg-white rounded-md shadow-sm text-neutral-800">
              space
            </div>
            <div data-layername="return" className="px-6 py-3 text-white bg-red-500 rounded-md shadow-[0px_1px_0px_rgba(0,0,0,0.3)]">
              return
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/9dc68903e407b11be667110bdbf72f0b63a061c886d3000fb9faaf4ccf320605?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain self-end mt-5 aspect-square w-[42px]" />
          <div data-layername="homeIndicator" className="flex shrink-0 mt-1 ml-6 h-1.5 rounded bg-neutral-800 w-[133px]" />
        </div>
      </div>
    </section>
  );
};

export default KeyboardLayout;

//회원 가입화면#2
//SignUp
import React from 'react';
import StatusBar from './StatusBar';
import Button from './Button';
import SocialLoginButton from './SocialLoginButton';

const SignUpScreen: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center pb-80 mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <h1 className="mt-4 ml-2.5 text-xl leading-none text-center text-black">
        MURT
      </h1>
      <Button
        text="Create Account"
        icon="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/0ffcf5d08d8d5fbc824f014ce2f61762c4d0dfec66a319e6cf9eb7f4518408ef?apiKey=79b6de78215c42fdaece1ef61e0a70df&"
        className="mt-48 bg-red-500"
      />
      <SocialLoginButton
        text="Continue with Google"
        icon="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/f0242f77926692a129fbdda4094e5993a5bf49a51ee2b6d628786caba452e27f?apiKey=79b6de78215c42fdaece1ef61e0a70df&"
        className="mt-10 text-neutral-900 border border-solid border-neutral-200"
      />
      <SocialLoginButton
        text="Login with Kakao"
        icon="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/c0a7f8e0a7733c35190b5e4b6837c12e41e40463e8f17cb11f12a12b7d2ae7a0?apiKey=79b6de78215c42fdaece1ef61e0a70df&"
        className="mt-10 text-black bg-yellow-400"
      />
    </main>
  );
};

export default SignUpScreen;

//StatusBar
import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <header className="flex gap-10 justify-end self-stretch py-3 pr-3 pl-8 w-full whitespace-nowrap bg-white backdrop-blur-[20px] text-neutral-800">
      <time className="text-base font-semibold tracking-normal text-center">
        9:41
      </time>
      <div className="flex gap-px">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/e77eca25793fc2f9b93c4edcb9cab2f732b1b9265584261ccb1d7c9581b08ec5?apiKey=79b6de78215c42fdaece1ef61e0a70df&"
          alt=""
          className="object-contain shrink-0 my-auto aspect-[1.7] fill-neutral-800 w-[17px]"
        />
        <span className="text-sm">􀙇</span>
        <span className="text-lg">􀛨</span>
      </div>
    </header>
  );
};

export default StatusBar;

//Button
import React from 'react';

interface ButtonProps {
  text: string;
  icon: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, className }) => {
  return (
    <button
      className={`flex overflow-hidden gap-2 justify-center items-center px-4 py-4 w-full text-xs font-semibold text-white rounded-xl max-w-[303px] min-h-[48px] ${className}`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
      />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
};

export default Button;

//SocialLoginButton
import React from 'react';

interface SocialLoginButtonProps {
  text: string;
  icon: string;
  className?: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  text,
  icon,
  className,
}) => {
  return (
    <button
      className={`flex gap-4 justify-center items-center px-4 py-3.5 w-full text-sm font-semibold text-center rounded-xl max-w-[300px] min-w-[44px] ${className}`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
};

export default SocialLoginButton;

//google login
//GoogleRegistrationScreen
import React from 'react';
import StatusBar from './StatusBar';
import GoogleContinueButton from './GoogleContinueButton';

const GoogleRegistrationScreen: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col pb-60 mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <h1 className="self-center mt-3 text-xl leading-none text-center text-black">
        MURT
      </h1>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/29fdc8feb94722c7085023bb58624c95c2c1763f7f5a909b1300ec0f8aef96f0?apiKey=79b6de78215c42fdaece1ef61e0a70df&" 
        alt="Registration illustration" 
        className="object-contain mt-20 w-full aspect-[1.2] min-h-[312px]"
      />
      <GoogleContinueButton />
    </main>
  );
};

export default GoogleRegistrationScreen;

//StatusBar
import React from 'react';

const StatusBar: React.FC = () => {
    return (
      <header data-layername="iOsStatusBar" className="flex gap-10 justify-end py-3 pr-3 pl-8 w-full whitespace-nowrap bg-white backdrop-blur-[20px] text-neutral-800">
        <time className="text-base font-semibold tracking-normal text-center">
          9:41
        </time>
        <div className="flex gap-px">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/e77eca25793fc2f9b93c4edcb9cab2f732b1b9265584261ccb1d7c9581b08ec5?apiKey=79b6de78215c42fdaece1ef61e0a70df&" 
            alt="" 
            className="object-contain shrink-0 my-auto aspect-[1.7] fill-neutral-800 w-[17px]"
          />
          <span className="text-sm" aria-label="WiFi">􀙇</span>
          <span className="text-lg" aria-label="Battery">􀛨</span>
        </div>
      </header>
    );
  };
  
  export default StatusBar;

//GoogleContinueButton
  import React from 'react';

const GoogleContinueButton: React.FC = () => {
  return (
    <button className="flex gap-4 justify-center items-center self-center px-4 py-3.5 mt-16 w-full text-sm font-semibold text-center rounded-xl border border-solid border-neutral-200 max-w-[300px] min-w-[44px] text-neutral-900">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/0ac02c77f9aa32dc77055fed2fd42b87e0c3c7926cd29fdb2db57eb768699b87?apiKey=79b6de78215c42fdaece1ef61e0a70df&" 
        alt="" 
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <span className="self-stretch my-auto">
        Continue with Google
      </span>
    </button>
  );
};

export default GoogleContinueButton;

//kakao login
//akaoRegistratio
import React from 'react';
import StatusBar from './StatusBar';
import KakaoLoginButton from './KakaoLoginButton';

const KakaoRegistrationScreen: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col pb-60 mx-auto w-full text-black bg-white max-w-[480px]">
      <StatusBar />
      <h1 className="self-center mt-4 text-xl leading-none text-center">
        MURT
      </h1>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/2976a7cc1cd09f846c78874d7981329a7535b15f54789f9d15f15ed8ece1cb7e?apiKey=79b6de78215c42fdaece1ef61e0a70df&" 
        alt="Kakao registration illustration" 
        className="object-contain mt-20 w-full aspect-[1.2] min-h-[312px]"
      />
      <KakaoLoginButton />
    </main>
  );
};

export default KakaoRegistrationScreen;

//StatusBar
import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <header data-layername="iOsStatusBar" className="flex gap-10 justify-end py-3 pr-3 pl-8 w-full whitespace-nowrap bg-white backdrop-blur-[20px] text-neutral-800">
      <time data-layername="time" className="text-base font-semibold tracking-normal text-center">
        9:41
      </time>
      <div className="flex gap-px">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/d057818914d804d04e3eff28c1f3d998a09a2eee1d91233f25f646052b560ac2?apiKey=79b6de78215c42fdaece1ef61e0a70df&" 
          alt="" 
          className="object-contain shrink-0 my-auto aspect-[1.7] fill-neutral-800 w-[17px]"
        />
        <span data-layername="wiFi" className="text-sm" aria-hidden="true">
          􀙇
        </span>
        <span data-layername="battery" className="text-lg" aria-hidden="true">
          􀛨
        </span>
      </div>
    </header>
  );
};

export default StatusBar;

//KakaoLoginButton
import React from 'react';

const KakaoLoginButton: React.FC = () => {
    return (
      <button 
        data-layername="kakaoLogin" 
        className="flex gap-4 items-center self-center px-5 py-3.5 mt-16 w-full text-base bg-yellow-400 rounded-md max-w-[300px] min-h-[45px]"
      >
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/15ada3a29791398fa63e5e2007a22c250a58a19a3fa93f34a8c34f4df4fa3c59?apiKey=79b6de78215c42fdaece1ef61e0a70df&" 
          alt="" 
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
        />
        <span data-layername="loginWithKakao" className="flex-1 shrink gap-2.5 self-stretch my-auto">
          Login with Kakao
        </span>
      </button>
    );
  };
  
  export default KakaoLoginButton;

//home 화면
//HomeScreen
import React from 'react';
import StatusBar from './StatusBar';
import Header from './Header';
import ProductSection from './ProductSection';
import NavigationBar from './NavigationBar';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <main className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <h1 className="z-10 self-center mt-4 text-xl leading-none text-center text-black">
        MURT
      </h1>
      <Header />
      <section className="flex relative z-10 flex-col items-end px-20 pt-40 pb-11 w-full text-xs font-semibold tracking-wide text-center text-white uppercase whitespace-nowrap aspect-[1.652]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/c2c215f78c7b7dfdf9d3847168f52600cffe3aec2a48b5cd4b06af7ec148b81c?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-cover absolute inset-0 size-full" />
        <div className="relative py-1 pr-px pl-1.5 w-3.5 bg-red-500 rounded-3xl min-h-[18px]">
          9
        </div>
      </section>
      <section className="flex flex-col self-start min-h-[617px]">
        <ProductSection title="Perfect for you" />
        <ProductSection title="For this summer" />
      </section>
      <NavigationBar />
    </main>
  );
};

export default HomeScreen;

//StatusBar
import React from 'react';

interface StatusBarProps {}

const StatusBar: React.FC<StatusBarProps> = () => {
  return (
    <header data-layername="iOsStatusBar" className="flex gap-10 justify-end py-3 pr-3 pl-8 w-full whitespace-nowrap bg-white backdrop-blur-[20px] text-neutral-800">
      <div className="text-base font-semibold tracking-normal text-center">
        9:41
      </div>
      <div className="flex gap-px">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/e77eca25793fc2f9b93c4edcb9cab2f732b1b9265584261ccb1d7c9581b08ec5?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 my-auto aspect-[1.7] fill-neutral-800 w-[17px]" />
        <div className="text-sm">􀙇</div>
        <div className="text-lg">􀛨</div>
      </div>
    </header>
  );
};

export default StatusBar;

//Header
import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex gap-10 justify-between items-start p-6 mt-0 w-full bg-white">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/393be87ad9c3f2ce2b184c9d1f6af054b0c3f01d54a543ba276a80e4986119f3?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 w-5 aspect-square" />
      <div className="flex gap-4 items-start">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/2f71d4c44246d075b62418f7dc929ee19862ed6bcb97f0cc30379810beaa2161?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 w-6 aspect-square" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/5c723ff631d6762746d09bdf659eafc76f70d350d1e3c5fcdfe5720a52e0f535?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 w-6 aspect-square" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/0b9ee6afa3ec0fa8f787984187b02919f7bc36fd2373e51991794693f1762877?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 w-6 aspect-square" />
      </div>
    </header>
  );
};

export default Header;

//ProductSection
import React from 'react';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title }) => {
  const products = [
    { id: 1, title: "Amazing T-shirt", price: "€ 12.00", image: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/79ca50d2dfdf723c72d780cff87c3a558968ccac7a8fd883f1d4befc259f8922?apiKey=79b6de78215c42fdaece1ef61e0a70df&" },
    { id: 2, title: "Fabulous Pants", price: "€ 15.00", image: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/f3d2298696765ebbd287095bee4f8b411cbabae539045927e24fa654cfd4fd2e?apiKey=79b6de78215c42fdaece1ef61e0a70df&" },
    { id: 3, title: "Amazing T-shirt", price: "€ 12.00", image: "" },
    { id: 4, title: "Fabulous Pants", price: "€ 15.00", image: "" },
  ];

  return (
    <section className="flex flex-col pt-6 pr-4 pl-1 w-full">
      <div className="flex gap-10 justify-between items-end pl-2 w-full">
        <h2 className="text-sm font-bold text-black">{title}</h2>
        <button className="text-xs font-semibold text-red-500">See more</button>
      </div>
      <div className="flex overflow-x-auto gap-3 items-start mt-4 w-full">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;

//ProductCard
import React from 'react';

interface ProductCardProps {
    title: string;
    price: string;
    image: string;
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
    return (
      <article className="flex overflow-hidden flex-col rounded-2xl bg-slate-50 text-neutral-800 w-[200px]">
        {image ? (
          <img loading="lazy" src={image} alt={title} className="object-contain aspect-[1.67] w-[200px]" />
        ) : (
          <div className="flex flex-col justify-center items-center px-10 py-11 bg-indigo-50 min-h-[120px]">
            <div className="flex w-8 min-h-[32px]" />
          </div>
        )}
        <div className="flex flex-col justify-center p-4 w-full">
          <h3 className="text-xs tracking-normal leading-none">{title}</h3>
          <p className="mt-1 text-sm font-bold">{price}</p>
        </div>
      </article>
    );
  };
  
  export default ProductCard;

//NavigationBar
import React from 'react';

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = () => {
  return (
    <nav className="flex overflow-hidden z-10 gap-5 justify-between mt-0 text-sm font-semibold leading-none text-center text-gray-400 whitespace-nowrap bg-white">
      <div className="flex overflow-hidden flex-col items-center px-5 py-5 bg-white h-[93px] w-[93px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/668f6df114e5f7be61f4c9147636d2f4227da734b7ec012fbc80e88a82f58021?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain aspect-[1.12] w-[27px]" />
        <div className="mt-3">관심상품</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/1cc539b7-393a-4c03-9534-e3c55076142c?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 bg-white aspect-[1.01] h-[93px] w-[93px]" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/d19877dc-4d82-49d1-8ab4-4855c47f4713?apiKey=79b6de78215c42fdaece1ef61e0a70df&" alt="" className="object-contain shrink-0 self-end -mt-6 bg-white aspect-[0.8] w-[93px]" />
    </nav>
  );
};

export default NavigationBar;