import "dotenv/config";
import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: "Islamic Relief Australia",
    slug: "islamic-relief-australia",
    owner: "kndwin",
    extra: {
      eas: {
        projectId: "c0b66d79-0c91-4d21-ae87-ca4411cb452d",
      },
    },
  };
};
