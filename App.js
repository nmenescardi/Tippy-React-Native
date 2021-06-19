import {View, Text, Item, Input} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Slider from '@react-native-community/slider';

const App = () => {
  const [sliderValue, setSliderValue] = useState(5);
  const [tipMessage, setTipMessage] = useState('Good');
  const [amount, setAmount] = useState(0);

  handleTip = () => {
    setSliderValue(setSliderValue);
  };
  const total = parseInt(amount) + parseInt(sliderValue);
  return (
    <View style={{flex: 1, backgroundColor: '#8a8787'}}>
      <View style={styles.card}>
        <View style={styles.row1}>
          <Text style={{fontSize: 26}}>Base : </Text>
          <Item bordered>
            <Input
              placeholder="Enter Amount"
              keyboardType="numeric"
              value={amount}
              onChangeText={value => setAmount(parseInt(value))}
            />
          </Item>
        </View>
        <View style={styles.row2}>
          <Text style={{fontSize: 26}}>{sliderValue.toFixed()}% :</Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={25}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            value={sliderValue}
            onValueChange={setSliderValue}
          />
        </View>
        {sliderValue <= 10 ? (
          <Text style={{fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
            {' '}
            Good{' '}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              color: 'green',
              fontWeight: 'bold',
            }}>
            {' '}
            Great{' '}
          </Text>
        )}
        <View style={styles.row2}>
          <Text style={{fontSize: 26}}>Tip : </Text>
          <Text style={{fontSize: 32}}>{sliderValue.toFixed()}</Text>
        </View>
        <View style={styles.row2}>
          <Text style={{fontSize: 28}}>Total : </Text>
          <Text style={{fontSize: 42}}>{total.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: wp('90%'),
    height: hp('60%'),
    backgroundColor: 'white',
    marginTop: hp('20%'),
    marginLeft: wp('5%'),
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  row1: {
    paddingTop: hp('10%'),
    paddingHorizontal: wp('10%'),
    paddingRight: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('70%'),
  },
  row2: {
    paddingTop: hp('2%'),
    paddingHorizontal: wp('13%'),
    paddingRight: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('80%'),
  },
});

export default App;
