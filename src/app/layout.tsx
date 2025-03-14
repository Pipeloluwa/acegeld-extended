import type { Metadata } from "next";
import "./globals.css";
import StateProvider from "./state_management/provider";
import PageContainer from "./PageContainer";
import { interFont } from "./fonts/fontsConfig";


export const metadata: Metadata = {
  title: "AceGeld",
  description: "AceGeld is a leading construction, design, and interior decoration company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  
  return (
    <html lang="en">
      <body
        id="parentDivRef"
        className={`${interFont.className} antialiased overflow-hidden text-gray-900 bg-gray-400`}
      >
        <StateProvider>
          <PageContainer>
            {children}
          </PageContainer>
          
        </StateProvider>
      </body>
    </html>
  );
}
