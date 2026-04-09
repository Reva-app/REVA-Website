import { LaunchPage } from "@/components/LaunchPage";
import { HomePage } from "@/components/HomePage";

// Zet NEXT_PUBLIC_LAUNCH_MODE=true in .env.local om de launch pagina te tonen.
// Zeg "Launch aan" of "Launch uit" om dit te wisselen.
const isLaunchMode = process.env.NEXT_PUBLIC_LAUNCH_MODE === "true";

export default function Home() {
  if (isLaunchMode) return <LaunchPage />;
  return <HomePage />;
}
