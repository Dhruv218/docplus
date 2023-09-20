import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Transaction_card({data}) {
  return (
    <>
      <TouchableOpacity activeOpacity={0.8} className='shadow-inner border-b border-gray-200'>
        <View className='flex shadow-md flex-row justify-between items-center px-4 my-4'>
          <View className='flex flex-row items-center'>
          <Image source={require('../../assets/profile_pic.png')} className='rounded-full w-[48px] h-[48px]'/>
          
          <View className='ml-3 flex flex-col justify-start items-start'>
          <Text className='font-normal text-[#242121] mb-2 text-[16px] leading-normal'>{data.name}</Text>
          <Text className='font-normal text-[#242121] text-[10px] leading-normal'>{data.date}</Text>
          </View>
          </View>
          <View className='flex flex-col justify-end items-end'>
          <Text className='text-[#15AEB2] font-normal mb-2 text-[16px] leading-normal'>₹ {data.price} </Text>
          <View className='flex flex-row items-center justify-center'>
          <Text className='font-normal mr-[5px] text-[8px] leading-normal'>Credited to </Text>
          <Image source={require('../../assets/bank_image.png')} className='rounded-full pl-2 w-[16px] h-[16px]'/>
          </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
