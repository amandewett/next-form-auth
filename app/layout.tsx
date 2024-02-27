import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layout/MainLayout";
import Header from "@/components/header/Header";
import ReduxProviderLayout from "@/layout/ReduxProviderLayout";
import { SessionProvider } from "next-auth/react";
import AppSessionProvider from "@/components/providers/AppSessionProvider";

const robotoFont = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Form + Auth",
  description: "NextJS example of form and authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoFont.variable} font-mRoboto`}>
      <body>
        <AppSessionProvider>
          <ReduxProviderLayout>
            <MainLayout>
              <Header />
              {children}
            </MainLayout>
          </ReduxProviderLayout>
        </AppSessionProvider>
      </body>
    </html>
  );
}
