import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ISearchData, searchAPI} from '../Data/SearchData';

function Search() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<ISearchData[]>([]);
  const [keyword, setKeyword] = useState<string>('');

  const onChangeKeyword = useCallback((text: string) => {
    setKeyword(text.trim());
  }, []);

  useEffect(() => {
    const getList = () => {
      try {
        setLoading(true);
        // if have API, set here

        // I just use dummy data.
        const data = searchAPI(keyword);
        setList(data);
      } catch (error) {
        // code error
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(() => {
      getList();
    }, 200);

    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 25}}>
        <View style={styles.searchTextInput}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={onChangeKeyword}
            placeholderTextColor={'#929292'}
            style={styles.textInput}
            placeholder="닉네임 검색"
            value={keyword}
          />
        </View>
      </View>
      {loading ? (
        <View
          style={{
            marginTop: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color={'#fff'} />
        </View>
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          disableScrollViewPanResponder={true}
          ListEmptyComponent={() => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#fff',
                  display: loading ? 'none' : 'flex',
                  paddingVertical: 30,
                }}>
                검색 내용이 없습니다.
              </Text>
            </View>
          )}
          renderItem={items => {
            const {item} = items;
            return (
              <TouchableOpacity
                onPressIn={() => Keyboard.dismiss()}
                onPress={() => Alert.alert('클릭 시: 동작 코드')}
                activeOpacity={1}
                style={styles.applicationBox}
                key={items.index}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}></View>
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                  }}>
                  <Text style={styles.fontStyle}>Id {item.id} : </Text>
                  <Text style={[styles.fontStyle, {fontWeight: 'bold'}]}>
                    {item.cityname}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  fontStyle: {
    fontSize: 14,
    color: 'white',
    marginTop: 6,
  },
  applicationBox: {
    borderBottomColor: '#3D3D3D',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  searchTextInput: {
    justifyContent: 'center',
    height: 40,
    lineHeight: 40,
    paddingHorizontal: 5,
    backgroundColor: '#414141',
    marginTop: 15,
    borderRadius: 5,
  },

  textInput: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 8,
    paddingHorizontal: 7,
    paddingVertical: 0,
  },
});

export default Search;
