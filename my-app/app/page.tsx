import Image from "next/image";
import Main from "@/components/main";
import Navbar from "@/components/main-nav";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
