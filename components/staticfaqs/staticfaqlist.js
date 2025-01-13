import React from "react";

const StaticFaqsLisiting = () => {
  const staticFaqs = [
    {
      question: "What services does DermaTech Polyclinic offer?",
      answer:
        "We provide a wide range of aesthetic services, from skincare treatments to weight loss and wellness therapies.",
    },
    {
      question: "How can I find a cosmetic clinic near me?",
      answer:
        "DermaTech Polyclinic is conveniently located in Dubai, offering premier cosmetic treatments and services.",
    },
    {
      question: "Does DermaTech offer treatments for men?",
      answer:
        "Yes, our skin care clinic in Dubai offers personalized treatments for both men and women.",
    },
    {
        question: "Is DermaTech a skin hospital?",
        answer:
          "DermaTech is a state-of-the-art skin hospital providing advanced skincare treatments and aesthetic services",
      },
      {
        question: "Can I get weight loss treatments at DermaTech?",
        answer:
          "DermaTech is a state-of-the-art skin hospital providing advanced skincare treatments and aesthetic services",
      },
      {
        question: "Can I schedule an appointment online?",
        answer:
          "Yes, you can easily book an appointment through our online system for your convenience.",
      },
      

  ];

  return (
    <div style={{ flex: "100%", width: "100%" }}>
      <div className="accordion" id="accordionExample">
        {staticFaqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticFaqsLisiting;
