import { useRouter } from "next/router";
import React from "react";

function index(props) {
  const { faqsList } = props;

  return (
    <div>
      <div class="accordion" id="accordionExample">
        {faqsList?.map((accordion, i) => (
          <div class="accordion-item">
            <h2 class="accordion-header">
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
