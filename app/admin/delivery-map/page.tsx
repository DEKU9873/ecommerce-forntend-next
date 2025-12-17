"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./_components/Map"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export default function Page() {
  return (
    <>
        <Map />
    </>
  );
}
