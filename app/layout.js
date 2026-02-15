import { Montserrat } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title:
    "Frontend Web Developer and Digital Marketing Specialist - Shawn Stone",
  description:
    "Experienced Frontend Developer with a specialty in UX/UI design along with Digital Marketing.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
