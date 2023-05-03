"use client"

import React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Ecommerce - StoryDots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: '0px' }}>
        <header>
          <Header />
        </header>


        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
