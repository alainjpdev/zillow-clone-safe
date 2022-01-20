import React from 'react'

import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import Link from 'src/components/atoms/Link'

// // Exports
// export const HoverCard = HoverCardPrimitive.Root
// export const HoverCardTrigger = HoverCardPrimitive.Trigger
// export const HoverCardContent = StyledContent
// export const HoverCardArrow = StyledArrow

// Your app...

export interface IHoverCardRadixProps {}

const HoverCardDemo = () => (
  <div className='flex justify-around'>
    <HoverCardPrimitive.Root defaultOpen openDelay={300}>
      <HoverCardPrimitive.Trigger asChild>
        <Link href='/'>
          <img
            alt=''
            className='w-12 h-12 rounded-full '
            src='https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
          />
        </Link>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content>
        <Link href='/' className='w-56 p-3 text-white bg-black'>
          hello
        </Link>
        <Link href='/' className='w-56 p-3 text-white bg-black'>
          hello 2
        </Link>
        <Link href='/' className='w-56 p-3 text-white bg-black'>
          hello 2
        </Link>
        <HoverCardPrimitive.Arrow offset={4} />
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
    <HoverCardPrimitive.Root>
      <HoverCardPrimitive.Trigger asChild>
        <Link href='/'>
          <img
            alt=''
            className='w-12 h-12 rounded-full '
            src='https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
          />
        </Link>
      </HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content>
        <a className='w-56 p-3 text-white bg-black'>hello</a>
        <a className='w-56 p-3 text-white bg-black'>hello 2</a>
        <a className='w-56 p-3 text-white bg-black'>hello 3</a>
        <HoverCardPrimitive.Arrow offset={4} />
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  </div>
)

export default HoverCardDemo
