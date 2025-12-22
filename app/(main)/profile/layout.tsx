import InfoCard from "./_components/InfoCard";

export default function ProfileLayout({ tabs }: { tabs: React.ReactNode }) {
  return (
    <div className="container">
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
        <InfoCard />

        <div className="lg:col-span-3">
          <div className="flex flex-col gap-4">{tabs}</div>
        </div>
      </div>
    </div>
  );
}
