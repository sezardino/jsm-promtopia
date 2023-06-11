import "@/styles/index.css";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Promptopia",
  description: "A collection of prompts for your next project",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
