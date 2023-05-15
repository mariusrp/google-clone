import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://media.snl.no/media/129947/standard_1280px-Google_2015_logo.svg.png"
          width="300"
          height="100"
          alt="Image"
        />
        <HomeSearch />
      </div>

    </>
  )
}
