import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import Constants from "expo-constants"
import { Banner } from "../components/banner";
 
const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView style={{flex: 1}} className="bg-slate-200 " showsHorizontalScrollIndicator={false}>
      <View className="w-full px-4" style={{marginTop: statusBarHeight - 25}}>
        <Header />

        <Banner />
      </View>
    </ScrollView>
  );
}
