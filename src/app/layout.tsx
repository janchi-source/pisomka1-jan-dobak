// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Menubar from "../components/MenuBar";
import AuthProvider from "../components/AuthProvider";

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
          <Menubar /> {/* Moved Navbar outside of the main container */}
        </AuthProvider>
      </body>
    </html>
  );
}