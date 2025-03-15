import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import FaqsAccordion from './faqs-accordion';

export default function FaqsCard({ faq, number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-card" onClick={() => setIsOpen(!isOpen)}>
      {/* Question Section */}
      <div className="faq-header">
        <div className="faqs-number">{number}.</div>
        <div className="faqs-question">{faq.question}</div>
        <div className="faq-icon">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>

      <FaqsAccordion faq={faq} isOpen={isOpen} />
    </div>
  );
}
