import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ServiceDetailView, serviceDetails } from "../../../components/ServiceDetail";

export default function TaxPage() {
  return (
    <main>
      <Navbar />
      <ServiceDetailView service={serviceDetails["tax"]} />
      <Footer />
    </main>
  );
}
