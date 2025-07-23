import React from 'react'
import Mark from '../../assets/images/tickMark.png'

const CheckIcon = () => (
  <div
    className="flex !h-[33px] max-h-[33px] min-h-[33px] !w-[33px] min-w-[33px] max-w-[33px] items-center justify-center overflow-visible rounded-full border-[3px] border-[#00B67A]"
    style={{ boxSizing: 'border-box' }}
  >
    <img
      src={Mark}
      alt="mark"
      className="h-[24px] w-[24px] object-contain"
      draggable={false}
    />
  </div>
)

export default CheckIcon
