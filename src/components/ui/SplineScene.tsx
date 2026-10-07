import Spline from "@splinetool/react-spline/next";

interface SplineSceneProps {
  /** Fill in your scene URL from the Spline editor export, e.g. https://prod.spline.design/... */
  scene?: string;
  className?: string;
}

export default function SplineScene({ scene, className }: SplineSceneProps) {
  if (!scene) {
    return (
      <div
        className={
          className ??
          "flex h-full min-h-[320px] w-full items-center justify-center rounded-lg border border-surface-border bg-surface-raised"
        }
      >
        <span className="text-sm text-muted">Spline scene goes here</span>
      </div>
    );
  }

  return <Spline scene={scene} className={className} />;
}
