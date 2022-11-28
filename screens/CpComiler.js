import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import {  Input, Button} from '../components';
import { Images } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class CpCompiler extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >    
      
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}
            >
              <Block flex style={styles.profileCard}>
              <Input value='#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
'
              placeholder="Кодоо бичнэ үү"    />
              <Button color="primary"  textStyle={{ fontSize: 15, fontWeight: '500' }} style={styles.smallButton}>Run</Button>
              <Text>Үр дүн</Text>
              <Input  placeholder=""    />
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },


  info: {
    paddingHorizontal: 40
  },

  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default CpCompiler;
