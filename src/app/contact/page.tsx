import { ContactForm } from "../components/ContactForm";
import Image from "next/image";
import contactpageImage from "../../../public/contactpage.jpg";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="flex flex-row">
        {/* Image Section - 50% width */}
        <section className="w-1/2">
          <Image
            src={contactpageImage}
            alt="Contact Us"
            className="w-full h-screen object-cover"
            priority
          />
        </section>

        {/* Contact Form Section - 50% width */}
        <section className="w-1/2 flex items-center justify-center bg-grey-50">
          <div className="w-full mx-8">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
