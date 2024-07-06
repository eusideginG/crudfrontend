import "./globals.css";
import Menu from "@/components/menu";

export const metadata = {
  title: "CRUD APP",
  description: "Form application app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-full min-w-full flex">
      <body className="min-w-full outline outline-green-500">
        <header>
          <Menu/>
        </header>
        {children}
        </body>
    </html>
  );
}
