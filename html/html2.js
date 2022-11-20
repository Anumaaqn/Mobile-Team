import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Images } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
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
               
                <Block style={styles.info}>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                   HTML элемэнтүүд
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block flex>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: "left" }}
                    >
                         &#60;!DOCTYPE html&#62;  {'\n'}
                         &#60;html&#62;{'\n'}
                         &#60;head&#62;{'\n'}
                         &#60;meta charset="utf-8"&#62;{'\n'}
                         &#60;/head&#62;{'\n'}
                         &#60;body&#62;{'\n'}

                         &#60;h1&#62;Энэ бол гарчиг&#60;/h1&#62;{'\n'}
                         &#60;p&#62;Энэ бол догол мөр&#60;/p&#62;{'\n'}

                         &#60;/body&#62;{'\n'}
                         &#60;/html&#62; {'\n'}
                    </Text>
                  </Block>
                  <Block flex>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: "left" }}
                    >
                      -Элемент нь &#60;html&#62; үндсэн элемент бөгөөд &#60;HTML&#62; баримтыг бүхэлд нь тодорхойлдог.
                    </Text>
                  </Block>
                  <Block flex>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: "left" }}
                    >
                      -Дараа нь &#60;html элемент дотор нэг body элемент байна.
                    </Text>
                  </Block>
                  <Block flex>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: "left" }}
                    >
                      -Дээрх жишээ нь зургаан нь HTML элементийг агуулсан бөгөөд &#60;html&#62; tag-aac эхлээд &#60;/html&#62; tag-д дууссан байна.
                    </Text>
                  </Block>
                  <Block flex>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: "left" }}
                    >
                      -Тэгвэл &#60;body&#62; tag-нь &#60;html&#62; tag-д агуулагдаж байгаа тул тус tag-ийн элемент гэж ойлгоно. 
                    </Text>
                  </Block>
                  <Block flex>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: "left" }}
                    >
                     - Анхаар: Хэрэв та хаалтын tag-ийг мартсан бол гэнэтийн замбараагүй үр дүн гарах эсвэл алдаа үүсгэх болно. Иймд хаалтын Tag маш чухал гэдгийг сайн санах хэрэгтэй.
                    </Text>
                  </Block>
                  <Block flex>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: "left" }}
                    >
                     - Хоосон элементийг &#60;br /&#62; гэж хааж болно.
                    </Text>
                  </Block>
                 
                 
                 
                </Block>
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
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },


});

export default Profile;
