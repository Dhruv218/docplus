import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { debounce } from 'lodash'
import { useCallback, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Filter from "../components/filter";
import Transaction_card from "../components/transaction_card";

const data=[
  {
    name:'Vivek Agnihotri',
    date: '30 Jul 2023',
    price:'650',
  },
  {
    name:'Vivek mehra',
    date: '29 Jul 2023',
    price:'750',
  },
  {
    name:'Nawab verma',
    date: '28 Jul 2023',
    price:'650',
  },
  {
    name:'Krishna Agnihotri',
    date: '30 Jul 2023',
    price:'60',
  },
  {
    name:'dhoni Agnihotri',
    date: '2 Jul 2023',
    price:'650',
  },
  {
    name:'virat kohli',
    date: '30 Jul 2023',
    price:'600',
  },
  {
    name:'Vivek aggarwal',
    date: '30 Jul 2023',
    price:'650',
  },
  {
    name:'dhruv Agnihotri',
    date: '30 Jul 2023',
    price:'650',
  },
  {
    name:'dhrek Agnihotri',
    date: '30 Jul 2023',
    price:'750',
  },
  {
    name:'ashwin chhetri',
    date: '30 Jul 2023',
    price:'620',
  },
]

export default function Transaction_history() {
  const [r_data, setr_data] = useState(data)

  const totalPrice = r_data.reduce((total, item) => {
    return total + parseInt(item.price);
  }, 0);

  const handleSearch = search=>{
    if(search && search.length>2){
      setr_data(
        data.filter((item) => {
          return Object.values(item.name)
            .join("")
            .toLowerCase()
            .includes(search.toLowerCase());
        })
      );
    }
    if(search==''){
      setr_data(data)
    }
  }

const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);    

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView className='bg-[#F9F9F9]'>
      <View className="relative mb-[20px]">
          <TextInput
            onChangeText={handleTextDebounce}
            className="m-4 mt-8 relative px-2 pl-10 bg-transparent font-normal text-[14px] text-gray-600 py-1"
            placeholder="Search by name, or number"
          />
          <TouchableOpacity className="absolute left-[25] top-[38] z-30">
            <Icon
              name="search"
              size={20}
              color="gray"
              className="hover:opacity-80"
            />
          </TouchableOpacity>
        <View className='flex flex-row justify-between items-center px-4'>
        <Filter data={'Total Payment Recieve'} />
        <View className='flex flex-row items-center'>
        <Filter data={'Year'} />
        <Filter data={'Month'} />
        </View>
        </View>
        </View>
        <View className='px-4 bg-[#D1D9E6] flex flex-row justify-between items-center py-2 '>
        <Text className='font-normal text-[#242121] text-[10px] leading-normal'>July 2023</Text>
        <Text className='font-normal text-[#242121] text-[10px] leading-normal'>₹ {totalPrice}</Text>
        </View>
      {r_data.map((item,i)=>{
        return(<Transaction_card kay={i} data={item}/>)

      })}
      </ScrollView>
    </>
  );
}
