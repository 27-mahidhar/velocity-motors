import { notFound } from "next/navigation";
import { CarDetail } from "@/components/car-detail";
import { cars } from "@/data/cars";

export function generateStaticParams() {
  return cars.filter((car) => car.slug !== "porsche-918-spyder").map((car) => ({ slug: car.slug }));
}

export default async function CarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug);
  if (!car) notFound();
  return <CarDetail car={car} />;
}
