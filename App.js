import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {

  const onSubmit = () => {
  
      var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: '', //enter your key
      amount: '5000',
      name: 'Acme Corp',
      // order_id: 'order_DslnoIgkIDL8Zt',
      // prefill: {
      //   email: 'gaurav.kumar@example.com',
      //   contact: '9191919191',
      //   name: 'Gaurav Kumar'
      // },
      theme: {color: '#53a20e'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      console.log(error)
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }


  return (
            <Button title="Make payment"  onPress={() => { onSubmit()}}/>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
