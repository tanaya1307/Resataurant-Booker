import React from 'react';
import { ScrollView ,StyleSheet} from 'react-native';
import { PricingCard, lightColors } from '@rneui/themed';

const Offer = () => {
return (
  <>
    <ScrollView>
    <PricingCard
  color='black'
  title="Summer Deal"
  price="Get 30% cashback"
  info={['Dining', 'Multi-cuisine', 'Upto 50 people']}
  button={{ title: 'Book Now' }}
  containerStyle={styles.container}
  titleStyle={styles.title}
  pricingStyle={styles.pricing}
  infoStyle={styles.info}
  buttonStyle={styles.button}
/>
<PricingCard
  color='black'
  
  price="Get coupons worth 500 "
  info={['Dining', 'Multi-cuisine', 'Upto 50 people']}
  button={{ title: 'Book Now' }}
  containerStyle={styles.container}
  titleStyle={styles.title}
  pricingStyle={styles.pricing}
  infoStyle={styles.info}
  buttonStyle={styles.button}
/>
    </ScrollView>
  </>
);
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.1,
      shadowRadius: 20,
      padding: 16,
      maxWidth: 500,
      height:350,
      margin: '0 auto',
      textAlign: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      marginBottom: 10,
    },
    pricing: {
      fontSize: 32,
      marginBottom:10,
    },
    info: {
      fontSize: 16,
      marginBottom:10,
      lineHeight: '1.5em',
    },
    button: {
      backgroundColor: 'black',
      color: '#fff',
      fontWeight: 'bold',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 24,
      fontSize: 16,
    },
  });

export default Offer
