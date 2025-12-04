import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ServiceDetailView, serviceDetails } from "../../../components/ServiceDetail";

export default function EstatePlanningPage() {
  return (
    <main>
      <Navbar />
      <ServiceDetailView service={serviceDetails["estate-planning"]} />
      <Footer />
    </main>
  );
}
