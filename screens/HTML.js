//galio
import { Block, Text, theme } from "galio-framework";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
//argon
import {  argonTheme, html } from "../constants/";
import { html1 } from '../html/html1';
import { html2 } from '../html/html2';
import { Card } from "../components/";
import React from "react";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

class Html extends React.Component {
  
  renderCards = () => {
    return (
      <Block flex style={styles.group}>
      
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE* 0.375  }}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}><Card item={html[0]} full /></TouchableWithoutFeedback>
              <Card item={html[1]} full onPress={() => navigation.navigate("App")}/>
              <Card item={html[2]} full/>
            <Card item={html[3]} full />
            <Card item={html[4]} full />
              <Card item={html[5]} full  />
              <Card item={html[6]} />
            <Card item={html[7]} full />
            <Card item={html[8]} full />
              <Card item={html[9]} full/>
              <Card item={html[10]} full/>
            <Card item={html[11]} full />
            <Card item={html[12]} full />
              <Card item={html[13]} full />
              <Card item={html[14]} full/>
            <Card item={html[15]} full />
            <Block flex card shadow style={styles.category}>
            </Block>
            
          </Block>
          <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2,
              }}
            >
             
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderCards()}
          
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
 
});

export default Html;