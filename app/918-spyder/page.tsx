import type { Metadata } from "next";
import { PorscheShowcase } from "@/components/porsche-showcase";

export const metadata: Metadata = {
  title: "Porsche 918 Spyder — VELOCITY MOTORS",
  description: "A dedicated look at the design, hybrid performance and details of the Porsche 918 Spyder."
};

export default function Porsche918Page() {
  return <PorscheShowcase />;
}
