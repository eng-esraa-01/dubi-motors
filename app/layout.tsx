import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dubi Motors | منصة إعلانات في 37 قسم",
  description:
    "Landing page احترافية لترويج تطبيق Dubi Motors لنشر الإعلانات والوصول إلى العملاء عبر 37 قسماً متنوعاً.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
