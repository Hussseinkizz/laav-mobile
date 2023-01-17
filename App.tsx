import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { SvgUri } from 'react-native-svg';
import * as Icons from './node_modules/react-icons/hi';
import PadlockSVG from './assets/svgs/padlock.svg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
      {/* <SvgUri
        width="100%"
        height="100%"
        uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/debian.svg"
      /> */}
      <PadlockSVG width={200} height={200} />
      <Icons.HiFire />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
