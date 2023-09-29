import "./globals.css";
import { Outfit } from "next/font/google";
import { Navbar, Footer } from "@/components/index";
import { Toaster } from "react-hot-toast";

const font = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Depression counselor chatbot",
  description:
    "Depression counselor chatbot - if you are feeling depressed, try talking to this chatbot. say whatever you feel - Powered by Openai ChatGPT ",
  icons: {
    icon: { url: "/logo.png", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="grid min-h-screen grid-rows-[auto,1fr,auto]"
        style={font.style}
      >
        <Navbar />
        <div className="container mx-auto p-4 sm:p-8">{children}</div>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
