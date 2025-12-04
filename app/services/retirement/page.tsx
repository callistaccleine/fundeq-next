import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ServiceDetailView, serviceDetails } from "../../../components/ServiceDetail";

export default function RetirementPage() {
  return (
    <main>
      <Navbar />
      <ServiceDetailView service={serviceDetails["retirement"]} />
      <Footer />
    </main>
  );
}
