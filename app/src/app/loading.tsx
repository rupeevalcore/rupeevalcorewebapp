export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-background pt-10">
      <div className="container-rv">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="h-8 w-36 rounded-full bg-muted animate-pulse" />
            <div className="space-y-4">
              <div className="h-12 w-full max-w-2xl rounded-xl bg-muted animate-pulse" />
              <div className="h-12 w-5/6 max-w-xl rounded-xl bg-muted animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-full max-w-xl rounded bg-muted animate-pulse" />
              <div className="h-4 w-4/5 max-w-lg rounded bg-muted animate-pulse" />
            </div>
            <div className="flex gap-3">
              <div className="h-12 w-40 rounded-xl bg-muted animate-pulse" />
              <div className="h-12 w-36 rounded-xl bg-muted animate-pulse" />
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl border border-border bg-muted/70 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
