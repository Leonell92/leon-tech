import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieConsent from "@/components/ui/CookieConsent";

export default function Layout() {
  const location = useLocation();
  const hideFooter = ["/client-login"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}
