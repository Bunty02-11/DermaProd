import React, { useContext } from "react";
import { LanguageContext } from "../../pages/_app";

const StaticFaqsLisiting1 = () => {
  const { language } = useContext(LanguageContext);
  const staticFaqs = [
    {
      question: "What treatments do you offer?",
      answer:
        "We provide a wide range of aesthetic and wellness treatments, including fat freezing, skin rejuvenation, anti-aging therapies, and body contouring.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "Appointments can be scheduled online through our website, via phone, or by visiting the clinic in person.",
    },
    {
      question: "Are the treatments safe?",
      answer:
        "Yes, all our procedures are performed by licensed professionals using state-of-the-art equipment and FDA-approved products, ensuring your safety and comfort.",
    },
    {
      question: "Do you provide follow-up care?",
      answer:
        "Absolutely! Our team ensures comprehensive post-treatment support and guidance to help you achieve the best possible results.",
    },
  ];

  return (
    <div style={{ flex: "100%", width: "100%" }}>
      <div className="accordion" id="accordionExample">
        {staticFaqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2
              className={`accordion-header ${language === "ar" && "acc_ar"}`}
              id={`heading${index}`}
            >
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

export default StaticFaqsLisiting1;
