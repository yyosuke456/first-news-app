import React from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "./components/ListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        author="SampleNews"
        title="はい、Webの開発経験はあるけどアプリの開発は初めてという方、エンジニアになりたての人にお薦めのReact
        Native入門講座。2019年に導入されたHooksの記法にも対応。React
        Native現場歴3年の講師が基礎から丁寧に解説します。"
        imageUrl="https://picsum.photos/id/10/200/200"
      />
      <ListItem
        author="SampleNews2"
        title="2Webの開発経験はあるけどアプリの開発は初めてという方、エンジニアになりたての人にお薦めのReact
        Native入門講座。2019年に導入されたHooksの記法にも対応。React
        Native現場歴3年の講師が基礎から丁寧に解説します。"
        imageUrl="https://picsum.photos/200/200"
      />
      <ListItem
        author="SampleNews3"
        title="3Webの開発経験はあるけどアプリの開発は初めてという方、エンジニアになりたての人にお薦めのReact
        Native入門講座。2019年に導入されたHooksの記法にも対応。React
        Native現場歴3年の講師が基礎から丁寧に解説します。"
        imageUrl="https://picsum.photos/id/12/200/200"
      />
    </View>
  );
}
