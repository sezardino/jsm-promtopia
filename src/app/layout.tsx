import { Navigation, Provider } from "@/components";
import "@/styles/index.css";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Promptopia",
  description: "A collection of prompts for your next project",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <Provider>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Navigation />

            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
