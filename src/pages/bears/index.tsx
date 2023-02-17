import { useBearStore } from "@/stores";

export default function Bear() {
  const bears = useBearStore((state) => state.bears);
  const increaseBears = useBearStore((state) => state.increase);
  const resetBears = useBearStore((state) => state.reset);

  return (
    <div>
      <p>test1</p>
      <p>
        <span>bears : </span>
        <span>{bears}</span>
        <button onClick={increaseBears}>+</button>
        <button onClick={resetBears}>reset</button>
      </p>
    </div>
  );
}
