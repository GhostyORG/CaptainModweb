import "../public/css/global.css";
import "../public/css/tippy.css";
import "../public/css/customColors.css";
import "tailwindcss/tailwind.css";
import NProgress from "nprogress";
import Router, { useRouter } from "next/router";
import Head from "next/head";

import Header from "../components/Static/Header.jsx";
import Footer from "../components/Static/Footer.jsx";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

import { ThemeProvider } from 'next-themes'

export default function AwardApp({ Component, pageProps }) {
 
  const NavItems = [
    {
      link: true,
      name: "Home",
      icon: "fal fa-home",
      activeIcon: "fa fa-home",
      href: "/",
    },
    {
      link: true,
      name: "Commands",
      icon: "fa fa-list-alt",
      activeIcon: "fa fa-list-alt",
      href: "/commands",
    },
    {
      link: true,
      name: "Support",
      icon: "fab fa-discord",
      activeIcon: "fab fa-discord",
      href: "https://discord.gg/F8tkBafhUa",
    },
    {
      link: true,
      name: "Add Bot",
      icon: "fal fa-roMod",
      activeIcon: "fab fa-roMod",
      href: "https://discordapp.com/api/oauth2/authorize?client_id=1002586082694672445&permissions=8&scope=bot",
    },
       {
      link: true,
      name: "Vote",
      icon: "fa fa-plus",
      activeIcon: "fa fa-plus",
      href: "https://radarbotdirectory.xyz/bot/1002586082694672445",
    },
    {
      link: true,
      name: "Partners",
      icon: "fal fa-handshake",
      activeIcon: "fa fa-handshake",
      href: "/partners",
    }
  ]

  return (
    <ThemeProvider defaultTheme='violet'>
    <div className="h-screen relative border-t-4 border-amber-600">
      <div
        className="bg-gradient-to-b z-10 opacity-[25%] absolute top-0 w-full from-amber-600 to-transparent"
        style={{ height: "500px" }}
      />
      <Head>
        <title>
          CaptainMod
        </title>
      </Head>
      <main className="transition-all duration-200 z-10 absolute inset-0 px-5 h-screen max-w-7xl w-full mx-auto">
        <Header NavItems={NavItems} />
        <div className="block px-5 md:px-0">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
      <div>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
        <script src="/js/main.js?i=2" />
      </div>
    </div>
    </ThemeProvider>
  );
}
