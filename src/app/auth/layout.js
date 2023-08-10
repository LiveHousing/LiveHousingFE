import Header from "@/components/Header";
import "./../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LiveHousing",
  description: "Case de vanzare avem ,caseeeeee",
};

export default function LoginAndSearchLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
