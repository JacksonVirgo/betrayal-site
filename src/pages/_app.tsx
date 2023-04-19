import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
    fas,
    faMagnifyingGlass,
    faFaceDizzy,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(fas, faFaceDizzy, faMagnifyingGlass);

const MyApp: AppType = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
