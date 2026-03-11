export default function BaseSkeleton({ className }) {
  return (
    <div
      className={`bg-zinc-800/70 animate-pulse rounded-md ${className}`}
    ></div>
  );
}
