import { useGlobalContext } from "@/state/GlobalContext";
import { ListenForSearchRequests } from "@/utils/ListenForSearchRequests";
import { lazy, memo, Suspense } from "react";

const Footer = lazy(() => import("@/components/Footer"));
const Header = lazy(() => import("@/components/Header"));
const ImageGrid = lazy(() => import("@/components/ImageGrid"));
const SearchToolBar = lazy(() => import("@/components/SearchToolBar"));

function App() {
  const { state, setState, setIsLoading } = useGlobalContext();
  ListenForSearchRequests(state, setIsLoading, setState);

  return (
    <Suspense fallback={<span />}>
      <Header />
      <SearchToolBar />
      <ImageGrid />

      {/* Dynamically render footer */}
      <Footer finishedLazyLoading={state.finishedLazyLoading} />
    </Suspense>
  );
}

export default memo(App);
