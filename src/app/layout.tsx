
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <header className="p-4 bg-black text-white font-semibold">House of EdTech</header>
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
        <footer className="p-4 text-xs text-center text-gray-500">
          Md Arif Atther Usmani | GitHub | LinkedIn
        </footer>
      </body>
    </html>
  );
}
