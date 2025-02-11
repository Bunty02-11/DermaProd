import React, { useContext } from "react";
import { LanguageContext } from "../../pages/_app";

const FaqsListing = ({ faqsList }) => {
  const { language } = useContext(LanguageContext);
  if (!faqsList || faqsList.length === 0) {
    return <p>No FAQs available at the moment.</p>;
  }

  return (
    <div style={{ flex: "100%", width: "100%" }}>
      <div className="accordion" id="accordionExample">
        {faqsList.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2
              className={`accordion-header ${language === "ar" && "acc_ar"}`}
              id={`heading${index}`}
            >
              <button
                className="accordion-button collapsed acc_ar"
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

export default FaqsListing;
