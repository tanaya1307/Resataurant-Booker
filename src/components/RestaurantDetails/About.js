import { View, Text ,Image,Button} from 'react-native'
import React,{useState} from 'react'
import Ratings from './Rating';





const description='Find the best sushi in India ,now in your city'
export default function About(props) {
  if (!props.route || !props.route.params || !props.route.params.name) {
    return <Text>Error: name parameter not found.</Text>;
  }

  const {name,image}=props.route.params;
 
  
  return (
    <View >
     <RestaurantImage image={image}/>
     <RestaurantTitle title={name}/>
     <RestaurantDescription description={description}/>
     <Ratings/>
    
      </View>
  )
  }
 


const RestaurantImage=(props)=>{
  return(
  <Image
  style={{ height:180, width:'100%'}}
  source={{uri: props.image}}/>)
}
const RestaurantTitle=(props)=>(
  <Text
  style={{
    
    fontSize:30,
    fontWeight:'700',
    marginTop:10,
    marginHorizontal:15
  }}
  
  >{props.title}</Text>
)

const RestaurantDescription=(props)=>(
  <>
  <Text
  style={{
    fontFamily:'nunito-light',
    fontSize:15,
    fontWeight:'400',
    marginTop:10,
    marginHorizontal:15
  }}
  
  >{props.description}</Text>
  
  </>
)
