import React, { useEffect } from 'react'
import { useDynamicHeight } from '../hooks/useDynamicHeight'
import lineAcc from '../images/line-acc.png'

export default function FaqsAccordion({ faq, isOpen }) {

  const contentRef = useDynamicHeight(isOpen)
  return (
    <>
      <div ref={contentRef} className={`faqs-answer`}>
      <img src={lineAcc} width={'100%'} alt="line-acc" />
        {faq.answer}</div>
    </>
  )
}
