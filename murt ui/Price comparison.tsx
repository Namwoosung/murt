//1
//MurtCollection
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import StatusBar from './StatusBar';
import Header from './Header';
import CollectionTitle from './CollectionTitle';
import CollectionGrid from './CollectionGrid';
import NavigationBar from './NavigationBar';

const MurtCollection: React.FC = () => {
  return (
    <ScrollView>
      <View className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
        <StatusBar />
        <Header />
        <CollectionTitle />
        <CollectionGrid />
        <NavigationBar />
      </View>
    </ScrollView>
  );
};

export default MurtCollection;

//StatusBar
import React from 'react';
import { View, Text, Image } from 'react-native';

const StatusBar: React.FC = () => {
  return (
    <View data-layername="iOsStatusBar" className="flex gap-10 justify-end py-3 pr-3 pl-8 w-full whitespace-nowrap bg-white backdrop-blur-[20px] text-neutral-800">
      <View data-layername="time" className="text-base font-semibold tracking-normal text-center">
        <Text>9:41</Text>
      </View>
      <View className="flex gap-px">
        <Image
          loading="lazy"
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

//Header
import React from 'react';
import { View, Text, Image } from 'react-native';

const Header: React.FC = () => {
  return (
    <View className="flex flex-col pr-px pl-3 mt-4 w-full">
      <View className="flex gap-5 justify-between w-full">
        <Image
          loading="lazy"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/a4dc036bfdc5701376765321d38ba7ab6cd9bb91bbe9838a54ed7677220c3db7?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain shrink-0 self-start w-5 aspect-square"
        />
        <View className="flex gap-10">
          <View data-layername="murt" className="self-start text-xl leading-none text-center text-black">
            <Text>MURT</Text>
          </View>
          <View data-layername="rightOptions" className="flex gap-4 items-start">
            <Image
              loading="lazy"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/d9fdb47c7cb7634ded4ba2651bdb366c49552c7ca3d9c7a54a92a9ab99f9e737?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <Image
              loading="lazy"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/498e33bcdf519fc05b62287eade31f4694cea38baf2da6a53f9309da4b6e7334?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <Image
              loading="lazy"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/822f34238c311bc4a890d4f6669a6f7c88aa8ebd7b15cc9f32458d9dae4183eb?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
              className="object-contain shrink-0 w-6 aspect-square"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

//CollectionTitle
import React from 'react';
import { View, Text } from 'react-native';

const CollectionTitle: React.FC = () => {
  return (
    <View className="flex flex-col self-center mt-5 text-black uppercase">
      <View data-layername="subtitle" className="flex gap-10 items-center">
        <View data-layername="collection" className="self-stretch my-auto text-xl leading-snug w-[220px]">
          <Text>Collection</Text>
        </View>
        <View data-layername="seeAll" className="self-stretch my-auto text-sm font-bold leading-none text-right w-[60px]">
          <Text>See All</Text>
        </View>
      </View>
    </View>
  );
};

export default CollectionTitle;

//CollectionGrid
import React from 'react';
import { View, Image } from 'react-native';

interface CollectionItemProps {
  imageUri: string;
  className: string;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ imageUri, className }) => (
  <Image
    loading="lazy"
    source={{ uri: imageUri }}
    className={`object-contain shrink-0 max-w-full bg-rose-100 rounded-none ${className}`}
  />
);

const CollectionGrid: React.FC = () => {
  const collectionItems = [
    { imageUri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/a8fcd899-0265-435c-b2a2-60d80f662b78?apiKey=79b6de78215c42fdaece1ef61e0a70df&", className: "aspect-[0.72] w-[181px]" },
    { imageUri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/1fe26f02-1d16-40e1-8733-057f51a50719?apiKey=79b6de78215c42fdaece1ef61e0a70df&", className: "aspect-[0.72] w-[181px]" },
    { imageUri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/52543b2a-003c-49e5-aa64-73ef6777aa71?apiKey=79b6de78215c42fdaece1ef61e0a70df&", className: "aspect-[0.7] w-[178px] mt-1" },
    { imageUri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/21807d87-4b0d-4773-8f2c-70a6b964d0d7?apiKey=79b6de78215c42fdaece1ef61e0a70df&", className: "aspect-[0.72] w-[180px] self-start" },
  ];

  return (
    <View>
      <View className="flex mt-6">
        {collectionItems.slice(0, 2).map((item, index) => (
          <CollectionItem key={index} {...item} />
        ))}
      </View>
      <View className="flex gap-1 mt-5">
        {collectionItems.slice(2).map((item, index) => (
          <CollectionItem key={index} {...item} />
        ))}
      </View>
    </View>
  );
};

export default CollectionGrid;

//NavigationBar
import React from 'react';
import { View, Text, Image } from 'react-native';

interface NavItemProps {
  imageUri: string;
  label: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ imageUri, label, className = "" }) => (
  <View className={`flex overflow-hidden flex-col items-center px-5 py-6 bg-white h-[93px] w-[93px] ${className}`}>
    <Image
      loading="lazy"
      source={{ uri: imageUri }}
      className="object-contain aspect-[1.12] w-[27px]"
    />
    <View className="mt-3">
      <Text>{label}</Text>
    </View>
  </View>
);

const NavigationBar: React.FC = () => {
  const navItems = [
    { imageUri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/668f6df114e5f7be61f4c9147636d2f4227da734b7ec012fbc80e88a82f58021?apiKey=79b6de78215c42fdaece1ef61e0a70df&", label: "관심상품" },
    { imageUri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/d661efe7-278f-4f2e-bef0-89facaeacc0e?apiKey=79b6de78215c42fdaece1ef61e0a70df&", label: "", className: "object-contain shrink-0 bg-white aspect-square h-[93px] w-[93px]" },
    { imageUri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/dc77a84419775d20f2b959d3a497d1178b2dc4f581a0488a76ca8aa95de892ff?apiKey=79b6de78215c42fdaece1ef61e0a70df&", label: "개인정보" },
  ];

  return (
    <View className="flex overflow-hidden gap-5 justify-between mt-10 text-sm font-semibold leading-none text-center text-gray-400 whitespace-nowrap bg-white">
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </View>
  );
};

export default NavigationBar;

//2
//MurtScreen
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import StatusBar from './StatusBar';
import Header from './Header';
import CollectionSection from './CollectionSection';
import ProductCard from './ProductCard';
import NavigationBar from './NavigationBar';

const productData = [
  { id: 1, name: '바디워시- A마트', price: '25,000 원', image: 'https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/9ca5e05d81127e7bd6a72aeb6f54bf6ec7b01bff64d391916706c2c9950589e3?apiKey=79b6de78215c42fdaece1ef61e0a70df&' },
  { id: 2, name: '바디워시- B마트', price: '15,000 원', image: 'https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/9ca5e05d81127e7bd6a72aeb6f54bf6ec7b01bff64d391916706c2c9950589e3?apiKey=79b6de78215c42fdaece1ef61e0a70df&' },
  { id: 3, name: '바디워시- C마트', price: '20,000 원', image: 'https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/6882ccf27772f709390cd0df27d55a7e70e40341cdd50c9e12234419234cbe34?apiKey=79b6de78215c42fdaece1ef61e0a70df&' },
  { id: 4, name: '바디워시- D마트', price: '27,000 원', image: 'https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/9ca5e05d81127e7bd6a72aeb6f54bf6ec7b01bff64d391916706c2c9950589e3?apiKey=79b6de78215c42fdaece1ef61e0a70df&' },
  { id: 5, name: '바디워시- E마트', price: '17,000 원', image: 'https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/c75cfb1bea1d2ef16942deee49c214dd721f505bb2efc07e3e0de4200fdbccf6?apiKey=79b6de78215c42fdaece1ef61e0a70df&' },
  { id: 6, name: '바디워시- F마트', price: '28,000 원', image: 'https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/9e08ab5a08e46cc76ca9028c51e5a8fe902c297b117bf47c70b69672c6b0aa28?apiKey=79b6de78215c42fdaece1ef61e0a70df&' },
];

const MurtScreen: React.FC = () => {
  return (
    <View className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <View className="z-10 self-center mt-4 text-xl leading-none text-center text-black">
        <Text>MURT</Text>
      </View>
      <Header />
      <View className="z-10 self-end pr-1.5 pl-1.5 mt-0 text-xs font-semibold tracking-wide text-center text-white uppercase whitespace-nowrap bg-red-500 rounded-3xl h-[18px] min-h-[18px] w-[18px]">
        <Text>9</Text>
      </View>
      <ScrollView className="flex flex-col mt-4 w-full text-black">
        <CollectionSection />
        <View className="flex gap-3 mt-20 w-full leading-none">
          {productData.slice(0, 3).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </View>
        <View className="flex gap-5 items-start mt-12 leading-none">
          {productData.slice(3).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

export default MurtScreen;

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

//Header
import React from 'react';
import { View, Image } from 'react-native';

const Header: React.FC = () => {
  return (
    <View className="flex gap-10 justify-between items-start p-6 mt-0 w-full bg-white">
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/99e38cd9d7f028529dccdf3a07ee109117bb8e1998b76fe88141b869d945eeaf?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
        className="object-contain shrink-0 w-5 aspect-square"
      />
      <View className="flex gap-4 items-start">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/2f71d4c44246d075b62418f7dc929ee19862ed6bcb97f0cc30379810beaa2161?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/c8b7cc35efa092abfd2d19481c2db0004e8af00f90e9de6e191b82298022978c?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </View>
    </View>
  );
};

export default Header;

//CollectionSection
import React from 'react';
import { View, Text } from 'react-native';

const CollectionSection: React.FC = () => {
  return (
    <View className="flex gap-10 items-center self-center uppercase">
      <View className="self-stretch my-auto text-xl leading-snug w-[220px]">
        <Text>Collection</Text>
      </View>
      <View className="self-stretch my-auto text-sm font-bold leading-none text-right w-[60px]">
        <Text>See All</Text>
      </View>
    </View>
  );
};

export default CollectionSection;

//ProductCard
import React from 'react';
import { View, Text, Image } from 'react-native';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <View className="flex gap-5 items-start">
      <View className="flex flex-col items-center pb-5 bg-rose-100 rounded-3xl w-[116px]">
        <Image
          source={{ uri: image }}
          className="object-contain w-full rounded-3xl aspect-square"
        />
        <View className="flex flex-col mt-3.5 w-full">
          <View className="w-full text-sm font-medium">
            <Text>{name}</Text>
          </View>
          <View className="mt-3.5 text-xs font-light">
            <Text>{price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

//NavigationBar
import React from 'react';
import { View, Text, Image } from 'react-native';

const NavigationBar: React.FC = () => {
  return (
    <View className="flex overflow-hidden gap-5 justify-between mt-16 text-sm font-semibold leading-none text-center text-gray-400 whitespace-nowrap bg-white">
      <View className="flex overflow-hidden flex-col items-center px-5 py-6 bg-white h-[93px] w-[93px]">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/668f6df114e5f7be61f4c9147636d2f4227da734b7ec012fbc80e88a82f58021?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain aspect-[1.12] w-[27px]"
        />
        <View className="mt-3">
          <Text>관심상품</Text>
        </View>
      </View>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/ceaff8dc-00ca-4225-840e-6d180bc7dfb7?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
        className="object-contain shrink-0 bg-white aspect-square h-[93px] w-[93px]"
      />
      <View className="flex overflow-hidden flex-col items-center px-5 py-5 bg-white h-[93px] w-[93px]">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/dc77a84419775d20f2b959d3a497d1178b2dc4f581a0488a76ca8aa95de892ff?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain aspect-[0.83] w-[19px]"
        />
        <View className="mt-3.5">
          <Text>개인정보</Text>
        </View>
      </View>
    </View>
  );
};

export default NavigationBar;
