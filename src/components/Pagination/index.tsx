'use client'
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { cn } from '@/utilities/ui'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

type PaginationProps = {
  className?: string
  page: number
  totalPages: number
  basePath?: string
}

const PaginationInner: React.FC<PaginationProps> = (props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { className, page, totalPages, basePath = '/posts' } = props

  const buildPageUrl = (pageNum: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('page')
    const queryString = params.toString()
    const base = pageNum === 1 ? basePath : `${basePath}/page/${pageNum}`
    return queryString ? `${base}?${queryString}` : base
  }
  const hasNextPage = page < totalPages
  const hasPrevPage = page > 1

  const hasExtraPrevPages = page - 1 > 1
  const hasExtraNextPages = page + 1 < totalPages

  return (
    <div className={cn('my-12', className)}>
      <PaginationComponent>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={!hasPrevPage}
              onClick={() => {
                router.push(buildPageUrl(page - 1))
              }}
            />
          </PaginationItem>

          {hasExtraPrevPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {hasPrevPage && (
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  router.push(buildPageUrl(page - 1))
                }}
              >
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink
              isActive
              onClick={() => {
                router.push(buildPageUrl(page))
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>

          {hasNextPage && (
            <PaginationItem>
              <PaginationLink
                onClick={() => {
                  router.push(buildPageUrl(page + 1))
                }}
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {hasExtraNextPages && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              disabled={!hasNextPage}
              onClick={() => {
                router.push(buildPageUrl(page + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationComponent>
    </div>
  )
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <Suspense fallback={<div className="my-12" />}>
      <PaginationInner {...props} />
    </Suspense>
  )
}
