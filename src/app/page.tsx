import HomePage from "@/app/home/page";
import ContactUsPage from "./contactus/page";
import AboutUsPage from "./aboutus/page";
import ServicesPage from "./services/page";
import PortfolioPage from "./portfolio/page";

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutUsPage />
      <ServicesPage />
      <PortfolioPage />
      <ContactUsPage />
    </>
  );
}
