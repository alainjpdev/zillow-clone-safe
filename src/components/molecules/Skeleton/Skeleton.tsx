export interface ISkeletonProps {
  className?: string
}

const Skeleton = ({ className }: ISkeletonProps) => (
  <div className={`bg-gray-200 animate-pulse ${className}`} />
)

export default Skeleton
