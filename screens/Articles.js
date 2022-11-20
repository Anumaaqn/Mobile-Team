//galio
import { Block, Text, theme } from "galio-framework";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
//argon
import {  argonTheme, articles } from "../constants/";

import { Card } from "../components/";
import React from "react";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

class Articles extends React.Component {

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
      
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE* 0.375  }}>
          <Card item={articles[0]} full />
              <Card item={articles[1]} full/>
              <Card item={articles[2]} full/>
            <Card item={articles[3]} full />
            <Card item={articles[4]} full />
              <Card item={articles[5]} full  />
              <Card item={articles[6]} />
            <Card item={articles[7]} full />
            <Card item={articles[8]} full />
              <Card item={articles[9]} full/>
              <Card item={articles[10]} full/>
            <Card item={articles[11]} full />
            <Card item={articles[12]} full />
              <Card item={articles[13]} full />
              <Card item={articles[14]} full/>
            <Card item={articles[15]} full />
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

export default Articles;
