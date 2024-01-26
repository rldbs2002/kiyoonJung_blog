import type { Metadata } from "next";
import "./style/globals.css";
import { suit } from "./style/fonts/suit";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GoogleAnalytics from "@/components/google-analytics";
import { ThemeProvider } from "./components/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={suit.className} suppressHydrationWarning>
      <body className="max-w-screen-md min-w-[320px] mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col">
            <Header />
            {children}
          </main>
        </ThemeProvider>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "kiyoonjung | Frontend Developer",
  description:
    "kiyoonjung, 프론트엔드 개발자의 블로그, Frontend Developer who likes football",
  verification: {
    google: "p1o3jiRcmsisv5ooPtGe_KWJwD1Sp1s9zPg5S4GUQvg",
  },
};
