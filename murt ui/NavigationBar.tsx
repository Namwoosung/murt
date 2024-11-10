//HomeScreen
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import StatusBar from './StatusBar';
import Header from './Header';
import FeaturedImage from './FeaturedImage';
import ProductSection from './ProductSection';
import NavigationBar from './NavigationBar';

const HomeScreen: React.FC = () => {
  return (
    <View className="flex overflow-hidden flex-col mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <Text className="z-10 self-center mt-4 text-xl leading-none text-center text-black">MURT</Text>
      <Header />
      <FeaturedImage />
      <ScrollView className="flex-1">
        <View className="flex flex-col self-start min-h-[617px]">
          <ProductSection title="Perfect for you" />
          <ProductSection title="For this summer" />
        </View>
      </ScrollView>
      <NavigationBar />
    </View>
  );
};

export default HomeScreen;

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

//Header
import React from 'react';
import { View, Image } from 'react-native';

const Header: React.FC = () => {
  return (
    <View className="flex gap-10 justify-between items-start p-6 mt-0 w-full bg-white">
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/393be87ad9c3f2ce2b184c9d1f6af054b0c3f01d54a543ba276a80e4986119f3?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
        className="object-contain shrink-0 w-5 aspect-square"
      />
      <View className="flex gap-4 items-start">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/2f71d4c44246d075b62418f7dc929ee19862ed6bcb97f0cc30379810beaa2161?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/5c723ff631d6762746d09bdf659eafc76f70d350d1e3c5fcdfe5720a52e0f535?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/0b9ee6afa3ec0fa8f787984187b02919f7bc36fd2373e51991794693f1762877?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </View>
    </View>
  );
};

export default Header;

//FeaturedImage
import React from 'react';
import { View, Text, Image } from 'react-native';

const FeaturedImage: React.FC = () => {
  return (
    <View className="flex relative z-10 flex-col items-end px-20 pt-40 pb-11 w-full text-xs font-semibold tracking-wide text-center text-white uppercase whitespace-nowrap aspect-[1.652]">
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/c2c215f78c7b7dfdf9d3847168f52600cffe3aec2a48b5cd4b06af7ec148b81c?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
        className="object-cover absolute inset-0 size-full"
      />
      <View className="relative py-1 pr-px pl-1.5 w-3.5 bg-red-500 rounded-3xl min-h-[18px]">
        <Text>9</Text>
      </View>
    </View>
  );
};

export default FeaturedImage;

//ProductSection
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
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
    <View className="flex flex-col pt-6 pr-4 pl-1 w-full">
      <View className="flex gap-10 justify-between items-end pl-2 w-full">
        <Text className="text-sm font-bold text-black">{title}</Text>
        <Text className="text-xs font-semibold text-red-500">See more</Text>
      </View>
      <ScrollView horizontal className="flex gap-3 mt-4 w-full">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductSection;

//ProductCard
import React from 'react';
import { View, Text, Image } from 'react-native';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <View className="flex overflow-hidden flex-col rounded-2xl bg-slate-50 text-neutral-800 w-[200px]">
      {image ? (
        <Image source={{ uri: image }} className="object-contain aspect-[1.67] w-[200px]" />
      ) : (
        <View className="flex flex-col justify-center items-center px-10 py-11 bg-indigo-50 min-h-[120px]">
          <View className="flex w-8 min-h-[32px]" />
        </View>
      )}
      <View className="flex flex-col justify-center p-4 w-full">
        <View className="flex flex-col w-full">
          <Text className="text-xs tracking-normal leading-none">{title}</Text>
          <Text className="mt-1 text-sm font-bold">{price}</Text>
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
    <View className="flex overflow-hidden z-10 gap-5 justify-between mt-0 text-sm font-semibold leading-none text-center text-gray-400 whitespace-nowrap bg-white">
      <View className="flex overflow-hidden flex-col items-center px-5 py-5 bg-white h-[93px] w-[93px]">
        <Image
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/668f6df114e5f7be61f4c9147636d2f4227da734b7ec012fbc80e88a82f58021?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
          className="object-contain aspect-[1.12] w-[27px]"
        />
        <Text className="mt-3">관심상품</Text>
      </View>
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/48b018ab-2eb1-4510-8729-cf944084f8a0?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
        className="object-contain shrink-0 bg-white aspect-[1.01] h-[93px] w-[93px]"
      />
      <Image
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/79b6de78215c42fdaece1ef61e0a70df/329a4edf-9477-4736-8122-b8683a8f4363?apiKey=79b6de78215c42fdaece1ef61e0a70df&" }}
        className="object-contain shrink-0 self-end -mt-6 bg-white aspect-[0.8] w-[93px]"
      />
    </View>
  );
};

export default NavigationBar;
