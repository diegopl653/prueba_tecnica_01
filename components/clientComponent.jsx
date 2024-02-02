"use client";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
  });
export default function ClientHelper({ children }) {
  return (
    <Provider store={store}>
      <html lang="es">
        <body className={poppins.className}>{children}</body>
      </html>
    </Provider>
  );
}
