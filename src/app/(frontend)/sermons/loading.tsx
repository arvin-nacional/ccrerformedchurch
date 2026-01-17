import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="pt-24 pb-24">
      <div className="prose dark:prose-invert max-w-none text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 pt-2">Sermon Archive</h2>
        <p className="text-gray-600 text-sm">
          Browse our complete collection of sermons. Watch, listen, and grow in your faith journey.
        </p>
      </div>

      <div className="container mb-8">
        <Skeleton className="h-5 w-48" />
      </div>

      <div className="container">
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 bg-white p-4 rounded-2xl">
            <Skeleton className="h-10 flex-1 rounded-xl" />
            <Skeleton className="h-10 w-56 rounded-xl" />
            <Skeleton className="h-10 w-56 rounded-xl" />
            <Skeleton className="h-10 w-44 rounded-xl" />
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="col-span-4">
              <div className="bg-white rounded-2xl overflow-hidden">
                <Skeleton className="aspect-video w-full" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
