import HeroBanner from "@/components/common/banner";

import Navbar from "@/components/common/navbar";
import HomePage from "./fetchData";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <HomePage />
    </>
  );
}
