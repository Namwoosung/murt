//MurtComponent
import React from 'react';
import { View, Text, Image } from 'react-native';

type MurtComponentProps = {
  imageUri: string;
};

const MurtComponent: React.FC<MurtComponentProps> = ({ imageUri }) => {
  return (
    <View data-layername="시작화면" className="flex overflow-hidden flex-col items-center px-20 pt-14 pb-96 mx-auto w-full text-base text-black whitespace-nowrap bg-white max-w-[480px] tracking-[3.84px]">
      <View className="flex flex-col max-w-full w-[168px]">
        <View data-layername="murt" className="self-center">
          <Text>MURT</Text>
        </View>
        <Image
          loading="lazy"
          source={{ uri: imageUri }}
          className="object-contain mt-32 w-full rounded-3xl aspect-square"
        />
      </View>
    </View>
  );
};

export default MurtComponent;

//App
import React from 'react';
import MurtComponent from './MurtComponent';

const App: React.FC = () => {
  return (
    <MurtComponent imageUri="https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/894d0e4174d7d99a247e92c3d41dab34c2c030f6258d5f1f64863bc3229c7dc6?apiKey=79b6de78215c42fdaece1ef61e0a70df&" />
  );
};

export default App;
