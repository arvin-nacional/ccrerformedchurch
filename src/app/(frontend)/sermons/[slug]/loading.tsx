import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <article className="pt-12">
      {/* Back to Sermons Link */}
      <div className="container pt-12">
        <Skeleton className="h-5 w-32" />
      </div>

      <div className="container pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          {/* Main Content */}
          <div>
            {/* Hero Video/Image */}
            <div className="pb-6">
              <Skeleton className="w-full aspect-video rounded-2xl" />
            </div>

            {/* Sermon Title and Meta */}
            <div className="pb-8">
              <div className="mb-4">
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-10 w-3/4 mb-4" />
                <div className="flex flex-wrap items-center gap-4">
                  <Skeleton className="h-5 w-28" />
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-5 w-20" />
                  <Skeleton className="h-5 w-36" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About the Speaker */}
            <div className=" rounded-2xl p-6">
              <Skeleton className="h-4 w-32 mb-4" />
              <Skeleton className="h-6 w-40 mb-1" />
              <Skeleton className="h-4 w-24 mb-3" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>

            {/* About This Series */}
            <div className=" rounded-2xl p-6">
              <Skeleton className="h-4 w-32 mb-4" />
              <Skeleton className="h-6 w-48 mb-3" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
              </div>
            </div>

            {/* Have Questions? CTA */}
            <div className=" rounded-2xl p-6">
              <Skeleton className="h-4 w-32 mb-4" />
              <div className="space-y-2 mb-4">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
              </div>
              <Skeleton className="h-10 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
