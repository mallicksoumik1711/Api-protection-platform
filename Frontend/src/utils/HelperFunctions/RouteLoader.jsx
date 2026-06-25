import { Suspense } from "react";
import DocsSkeleton from "../../layouts/skeletons/DocsSkeleton";

export function RouteLoader({ children }) {
  return (
    <Suspense
      fallback={
        <div>
          <DocsSkeleton/>
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
