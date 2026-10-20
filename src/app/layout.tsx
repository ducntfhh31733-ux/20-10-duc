
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1c0512",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vo-yeu-20-10.vercel.app"),

  title: "Món Quà 20/10 Dành Tặng Mẹ Yêu ❤️",

  description:
    "Món quà nhỏ chứa đựng tình yêu thương, lòng biết ơn và những lời chúc chân thành nhất con dành tặng mẹ nhân ngày Phụ nữ Việt Nam 20/10.",

  openGraph: {
    title: "Món Quà 20/10 Dành Tặng Mẹ Yêu ❤️",

    description:
      "Gửi mẹ những lời yêu thương, những kỷ niệm đẹp và lời chúc hạnh phúc từ tận đáy lòng con.",

    images: [
      {
        url: "/images/bouquet.jpg",
        width: 1200,
        height: 1200,
        alt: "Bó hoa tươi thắm con dành tặng mẹ nhân ngày 20/10",
      },
    ],

    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
