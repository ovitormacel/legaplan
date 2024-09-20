import "./styles/globals.scss";
import { Inter_Tight } from 'next/font/google';

const font = Inter_Tight({
  subsets: ['latin']
});

export const metadata = {
  title: "FocalPoint",
  description: "Sua lista de tarefas simplificada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
