import {
    Image,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import Icon from "react-native-vector-icons/Entypo";
  
  export default function Filter({data}) {
    return (
      <>
        <TouchableOpacity activeOpacity={0.8} className='mr-2 flex flex-row items-center rounded border w-fit px-2 py-1 border-[#969594]'>
            <Text className='font-normal text-[8px] mr-[6px]'>{data}</Text>
            <Icon
              name="chevron-small-down"
              size={12}
              color="black"
              className="hover:opacity-80"
            />
        </TouchableOpacity>
      </>
    );
  }
  