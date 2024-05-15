import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../reducer/counterSlice';

function Homepage() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View>
      <Text>Homepage</Text>
      <View style={stylesHomepage.row}>
        <TouchableOpacity
          style={stylesHomepage.button}
          onPress={() => dispatch(decrement())}
        >
          <Text style={stylesHomepage.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={stylesHomepage.text}>{count}</Text>
        <TouchableOpacity
          style={stylesHomepage.button}
          onPress={() => dispatch(increment())}
        >
          <Text style={stylesHomepage.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const stylesHomepage = StyleSheet.create({
  row: {
    
    backgroundColor: 'white',
    flexDirection: "row",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  button: {
    backgroundColor: 'gray',
    padding: 30,
    borderRadius: 10,
    margin: 40,
 

  },
  buttonText: {
    color: "black",
    fontSize: 20,
    textAlign:"center"
  },
  text: {
    fontSize: 20,
  }
});

export default Homepage