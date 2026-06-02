import "./globals.css";

export const metadata = {
  title: "Ebus Dental Clinic",
  description:
    "Excellent and compassionate dental care for preventive, restorative, and cosmetic oral health needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
