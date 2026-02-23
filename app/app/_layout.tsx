import { Stack } from "expo-router";
import {useFonts} from "expo-font"

const RootLayout = () => {
  
  const [loaded, error] = useFonts({
    Bold: require('../assets/fonts/static/GoogleSans-Bold.ttf'),
    SemiBold: require('../assets/fonts/static/GoogleSans-SemiBold.ttf'),
    Medium: require('../assets/fonts/static/GoogleSans-Medium.ttf'),
    Regular: require('../assets/fonts/static/GoogleSans-Regular.ttf'),
  }) 


  if (!loaded){
    return null;
  }

  return (
    <Stack screenOptions ={{headerShown: false}}>

    </Stack>
  )
}
export default RootLayout;