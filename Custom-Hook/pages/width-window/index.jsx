import useWindowSize from "@/components/hooks/useWindowSize";

function Index() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <div>Window Width: {width}px</div>
      <div>Window Height: {height}px</div>
    </div>
  );
}
export default Index;
