import LoadingWrapper from "./_components/LoadingWrapper/LoadingWrapper";
import { LoginProvider } from "./_context/LoginProvider";
import type { Metadata } from "next";
import "./_styles/globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/Variant3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <LoginProvider>
          <LoadingWrapper>{children}</LoadingWrapper>
        </LoginProvider>
      </body>
    </html>
  );
}
