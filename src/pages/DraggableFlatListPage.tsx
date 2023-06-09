import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from 'react-native-draggable-flatlist';

const NUM_ITEMS = 10;
function getColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

type Item = {
  key: string;
  label: string;
  height: number;
  width: number;
  backgroundColor: string;
};

const initialData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
  const backgroundColor = getColor(index);
  return {
    key: `item-${index}`,
    label: String(index) + '',
    height: 100,
    width: 60 + Math.random() * 40,
    backgroundColor,
  };
});

export default function DraggableFlatListPage() {
  const [data, setData] = useState(initialData);

  const renderItem = ({item, drag, isActive}: RenderItemParams<Item>) => {
    return (
      <ScaleDecorator>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPressIn={drag}
            disabled={isActive}
            style={[
              styles.rowItem,
              {backgroundColor: isActive ? 'red' : item.backgroundColor},
            ]}></TouchableOpacity>
          <View
            style={{
              height: 100,
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'gray',
            }}>
            <Text style={styles.text}>{item.label}</Text>
          </View>
        </View>
      </ScaleDecorator>
    );
  };

  return (
    <DraggableFlatList
      data={data}
      onDragEnd={({data}) => setData(data)}
      keyExtractor={item => item.key}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
