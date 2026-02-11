import LeftPane from "@/components/LeftPane";
import RightPaneProjects from "@/components/RightPaneProjects";

export default function Home() {
  return (
    <div className="split-root flex min-h-screen min-w-0 flex-col lg:flex-row lg:overflow-hidden">
      <LeftPane />
      <RightPaneProjects />
    </div>
  );
}
