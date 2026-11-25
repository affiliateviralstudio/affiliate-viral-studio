
import "./globals.css";

export const metadata = {
  title: "Affiliate Viral Studio",
  description: "Your AI-powered affiliate content command center.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
