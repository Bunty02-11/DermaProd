import { useRouter } from "next/router";
import React, { useContext } from "react";
import { LanguageContext } from "../../pages/_app";

function index(props) {
  const { language } = useContext(LanguageContext);
  const { faqsList } = props;

  return (
    <div>
      <div class="accordion" id="accordionExample">
        {faqsList?.map((accordion, i) => (
          <div class="accordion-item">
            <h2 class={`accordion-header ${language === "ar" && "acc_ar"}`}>
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseTY${i}`}
                aria-expanded="true"
                aria-controls={`collapseTY${i}`}
              >
                {accordion?.question}
              </button>
            </h2>
            <div
              id={`collapseTY${i}`}
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">{accordion?.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
