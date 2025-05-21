import AboutBlock from "@/components/about_block";
import IntroBlock from "../components/intro_block";

export default function Home() {

  return (
    <div className="mx-auto w-full">
      <div className="bg-[url(/images/background/BackgroundLight.jpg)] dark:bg-[url(/images/background/BackgroundDark.jpg)] bg-center">
        <IntroBlock />
      </div>
      <div className="bg-gray-400 dark:bg-gray-900 max-w-full">
        <AboutBlock />
      </div>
    </div>
  );
}
