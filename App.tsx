import "react-native-gesture-handler";
import { AppProviders } from "~/providers";
import { RootStack } from "~/stack";

export default function App() {
  return (
    <AppProviders>
      <RootStack />
    </AppProviders>
  );
}
