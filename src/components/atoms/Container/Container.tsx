import { Children } from 'src/types'

export interface IContainerProps {
  children: Children
  className?: string
}

const Container = ({ children, className }: IContainerProps) => (
  <div className={`container px-3 mx-auto ${className}`}>{children}</div>
)

export default Container