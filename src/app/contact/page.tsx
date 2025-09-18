import { ContactForm } from "@/components/Contact/ContactForm";
import { GetInTouch } from "@/components/Contact/GetInTouch";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <GetInTouch />
      <ContactForm />
    </main>
  );
}
