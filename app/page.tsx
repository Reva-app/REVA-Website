import { LaunchPage } from "@/components/LaunchPage";
import { HomePage } from "@/components/HomePage";
import { LAUNCH_MODE } from "@/config/launch";

export default function Home() {
  if (LAUNCH_MODE) return <LaunchPage />;
  return <HomePage />;
}
