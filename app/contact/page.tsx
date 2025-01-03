import Link from "next/link";
import { Container } from "../components/container";
import Navbar from "../components/navbar";
import ContactSection from "../components/ContactSection";

export default async function AanbodPage() {
  return (
    <div className="bg-amber-50/[50%] min-h-screen">
      <Navbar className="!text-green-950 " />
      <Container size={"sm"} className="pt-0 space-y-6 pb-0 ">
        <div className="py-6">
          <Link href="/" className="hover:underline">
            ← Terug naar home
          </Link>
        </div>
      </Container>
      <ContactSection />
    </div>
  );
}
