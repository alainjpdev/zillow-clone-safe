/* eslint-disable camelcase */
import {
  User_Homes_Types_Enum,
  useInsertUserHomeMutation,
} from 'src/generated/graphql'
import Image from 'src/components/atoms/Image'
import { useGetHighlightedHomeData } from 'src/store/home/homeNetwork'
import HeartIconReg from '@heroicons/react/outline/HeartIcon'
import HeartIconSolid from '@heroicons/react/solid/HeartIcon'
import { useAppSelector } from 'src/store'
import { selectUid } from 'src/store/user/userSlice'
import Link from 'src/components/atoms/Link'
import Skeleton from 'src/components/molecules/Skeleton'
import { ErrorSkeleton } from '../PopupRegionContent/PopupRegionContent'

export interface IPopupHomesContentProps {
  id: number
  wishlisted: boolean
}

const HomeContentSkeleton = () => (
  <div className='flex flex-col w-48 text-gray-200 '>
    <Image src='https://via.placeholder.com/150' className='w-48 h-36' alt='' />
    <div className='flex flex-col p-2 bg-white/90 backdrop-filter backdrop-blur-sm filter'>
      <Skeleton className='w-full h-6' />
      <Skeleton className='w-3/4 h-4 mt-4' />
      <Skeleton className='w-1/2 h-4 mt-1' />
      <Skeleton className='w-3/4 h-4 mt-2' />
    </div>
  </div>
)

const PopupHomesContent = ({ id, wishlisted }: IPopupHomesContentProps) => {
  const [{ fetching: wishlistLoading }, updateHomeMutation] =
    useInsertUserHomeMutation()
  const uid = useAppSelector(selectUid)
  const highlightedHomeDetails = useGetHighlightedHomeData(id)
  const { data, fetching, error } = highlightedHomeDetails!
  console.log('highlightedHomeDetails ', highlightedHomeDetails)

  if (fetching) return <HomeContentSkeleton />
  if (error) return <ErrorSkeleton error='Something went wrong...' />

  return (
    <Link href={`/home/${id}`} className='flex flex-col w-48 '>
      <div className='relative h-36'>
        <Image
          src='https://via.placeholder.com/150'
          className='h-full'
          alt=''
        />
      </div>
      <div className='relative flex flex-col bg-white/50 backdrop-filter backdrop-blur-sm filter'>
        <div className='p-2'>
          <div className='flex items-baseline justify-between'>
            <div className='mb-1 text-2xl font-light leading-none'>
              ${data?.homes_by_pk?.price.toLocaleString()}
            </div>
            <button
              type='button'
              onClick={() => {
                const hId = id
                if (!hId || !uid) return
                updateHomeMutation({
                  hId,
                  type: wishlisted
                    ? User_Homes_Types_Enum.RemovedFromWishlist
                    : User_Homes_Types_Enum.Wishlisted,
                  uid,
                })
              }}
            >
              {!wishlisted ? (
                <HeartIconReg className='w-6 h-6 text-red-600 hover:fill-red-100' />
              ) : (
                <HeartIconSolid className='w-6 h-6 fill-red-600' />
              )}
            </button>
          </div>
          <div className='flex flex-wrap mt-2 text-sm'>
            <div className='text-sm '>
              {data?.homes_by_pk?.sqft.toLocaleString()} sqft
            </div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>{data?.homes_by_pk?.beds} bd</div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>{data?.homes_by_pk?.bath} ba</div>
            <span className='mx-1 text-gray-300'>•</span>
            <div>{data?.homes_by_pk?.style}</div>
          </div>
        </div>
        <div className='p-2 text-xs bg-gray-50 line-clamp-2'>
          {data?.homes_by_pk?.address}
        </div>
      </div>
    </Link>
  )
}

export default PopupHomesContent