import { ChevronRight, ChevronsLeftRight, RotateCw } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className="w-full flex it justify-center">

    <div className='w-[95%]'>
      <div className="h-20 items-center flex justify-between w-full border-b">
          <div className="flex items-center gap-x-1 text-[#868686] text-lg">
            <ChevronsLeftRight className="text-l" />
            <p>Home</p>
            <ChevronRight className="size" />
            <p className="text-lg">User Profile</p>
          </div>
          <div className="flex gap-x-2 text-[#0F0B28] text-lg items-center">
            <RotateCw />
            <p>Refresh</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Header
