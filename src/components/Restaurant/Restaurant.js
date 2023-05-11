import React, { useState, useEffect } from 'react';
import { View, Text, FlatList ,Image,TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import { StyleSheet, TextInput} from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';



const RestaurantList = () => {
  const navigation=useNavigation()
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await axios.get('https://run.mocky.io/v3/44a3a6da-324c-470c-9fa9-a1ad68c1f2f1');
      setRestaurants(response.data);
    };

    fetchRestaurants();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.Restaurant_Name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('RestaurantDetailScreen',
        {
          name:item.Restaurant_Name,
          image:item.Image_url,
        
        }
        )
        } >
      <RestaurantImage image={item.Image_url}/>
      <RestaurantInfo name={item.Restaurant_Name} rating={item.Rating}/>
    </TouchableOpacity>
    </View>
  );

  return (
    <View>
      
      <SearchBar
      placeholder="Search Restaurants"
      onChangeText={handleSearch}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      value={searchText}
   
     
      
    />
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>
        Restaurants
      </Text>
      <FlatList
        data={filteredRestaurants}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RestaurantList;

const styles = StyleSheet.create({
    container: {
      marginTop: 15,
      backgroundColor:'none',
      border:'none'
    },
    inputContainer: {
      backgroundColor: '#eee',
      borderRadius: 20,
      border:'none'
    },
    input: {
      fontSize: 16,
      color: '#555',
      border:'none'
    },
    image:{
      
      width:'100%',
      height:180,
      borderRadius:8,
      
    }
  });

  
  const RestaurantImage=(props)=>
  ( <>
      <Image source={{uri:props.image} }
      style={styles.image}/>
      <TouchableOpacity style={{position:'absolute',right:20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>
      </TouchableOpacity>
    </>
  );

  const RestaurantInfo=(props)=>
  (
    <>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:10}}>
    <Text style={{fontSize:15,fontWeight:'bold'}}>{props.name}</Text>
    <View style={{backgroundColor:'#eee' ,height:30,width:30,borderRadius:15,padding:5}}><Text >{props.rating}</Text></View>
    </View>
    </>
  )
  