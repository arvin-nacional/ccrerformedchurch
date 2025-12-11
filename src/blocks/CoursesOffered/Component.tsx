import React from 'react'
import RichText from '@/components/RichText'
import type { CoursesOfferedBlock as CoursesOfferedBlockType } from '@/payload-types'
import { BookOpen, GraduationCap, Library, FileText } from 'lucide-react'

type Props = {
  className?: string
  disableInnerContainer?: boolean
} & CoursesOfferedBlockType

const iconMap = {
  book: BookOpen,
  graduationCap: GraduationCap,
  bookOpen: BookOpen,
  library: Library,
  fileText: FileText,
}

const iconColorMap = {
  orange: {
    bg: 'bg-orange-50',
    icon: 'text-orange-600',
    border: 'border-orange-200',
  },
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    border: 'border-blue-200',
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-600',
    border: 'border-purple-200',
  },
  green: {
    bg: 'bg-green-50',
    icon: 'text-green-600',
    border: 'border-green-200',
  },
}

export const CoursesOfferedBlock: React.FC<Props> = ({
  className,
  title,
  subtitle,
  backgroundColor,
  courses,
}) => {
  return (
    <section className={`py-16 ${backgroundColor || 'bg-gray-50'} ${className || ''}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>}
          {subtitle && (
            <div className="text-gray-600 max-w-3xl mx-auto text-sm">
              <RichText data={subtitle} enableGutter={false} />
            </div>
          )}
        </div>

        {/* Courses Grid */}
        {courses && courses.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => {
              const IconComponent = iconMap[course.icon as keyof typeof iconMap] || BookOpen
              const colors =
                iconColorMap[course.iconColor as keyof typeof iconColorMap] || iconColorMap.blue
              const tags = course.tags ? course.tags.split(',').map((tag) => tag.trim()) : []

              return (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-full flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      {course.courseNumber && (
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          {course.courseNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Title */}
                  {course.courseTitle && (
                    <h3 className="text-base font-bold text-gray-900 mb-2">{course.courseTitle}</h3>
                  )}

                  {/* Program Name */}
                  {course.programName && (
                    <p className="text-sm text-blue-600 font-medium mb-3">{course.programName}</p>
                  )}

                  {/* Tags */}
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
