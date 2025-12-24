import { Graduate } from '@/lib/data'

interface TestimonialCardProps {
  graduate: Graduate
}

export function TestimonialCard({ graduate }: TestimonialCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
          <span className="text-white font-bold text-lg">{graduate.name.charAt(0)}</span>
        </div>
        <div>
          <h3 className="font-bold text-white">{graduate.name}</h3>
          <p className="text-primary text-sm">{graduate.job}</p>
        </div>
      </div>

      <p className="text-gray-300 italic mb-4">"{graduate.testimonial}"</p>

      <div className="text-sm text-gray-500">
        <span>Graduate from {graduate.province}</span>
      </div>
    </div>
  )
}