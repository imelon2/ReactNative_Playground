import React, { useState } from 'react';
import { Text, View } from 'react-native';
import WheelPicker from 'react-native-wheely';

function PickerOfWheel() {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [selectedIndex2, setSelectedIndex2] = useState(0);
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  const index1 = ['Berlin', 'London', 'Amsterdam']
  const index2 = ['One', 'Two', 'Three']
  return (
    <View style={{flexDirection:'row'}}>
      <Text>
      {data1}  {data2}
      </Text>
      <WheelPicker
        selectedIndex={selectedIndex1}
        options={index1}
        onChange={(index) => setData1(index1[index])}
      />
      <WheelPicker
        selectedIndex={selectedIndex2}
        options={index2}
        onChange={(index) => setData2(index2[index])}
      />
    </View>
  );
}

export default PickerOfWheel;