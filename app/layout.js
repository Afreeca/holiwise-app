import Sidebar from "@/components/Sidebar";
import { GlobalContextProvider } from "@/context/global";
import { SidebarContextProvider } from "@/context/useSidebar";
import { appDescription, appName } from "@/utils/constants";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: appName,
  description: appDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex`}>
        <GlobalContextProvider>
          <SidebarContextProvider>
            <Sidebar />
            <div className="px-3 flex-grow transition-all duration-300">
              {children}
            </div>
          </SidebarContextProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
