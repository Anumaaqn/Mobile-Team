//galio
import { Block, Text, theme } from "galio-framework";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
//argon
import {  argonTheme, html } from "../constants/";
import { Card , Desc, Button} from "../components/";
import React from "react";

const { width } = Dimensions.get("screen");

const cardWidth = width - theme.SIZES.BASE * 2;

class Html extends React.Component {

  
  renderCards = () => {
    const { navigation } = this.props;
    return (
      <Block flex style={styles.group}>  
      <Block style={{ paddingHorizontal: theme.SIZES.BASE* 0.375  }}>
      <Button style={styles.button} onPress={() => navigation.navigate("HtmlCompiler")}>Compiler</Button>
      <Card item={html[5]} full/> 
      <Card item={html[0]} full />
              <Card item={html[1]} full/>
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
 
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Html;