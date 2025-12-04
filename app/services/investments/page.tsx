import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ServiceDetailView, serviceDetails } from "../../../components/ServiceDetail";

export default function InvestmentsPage() {
  return (
    <main>
      <Navbar />
      <ServiceDetailView service={serviceDetails["investments"]} />
      <Footer />
    </main>
  );
}
