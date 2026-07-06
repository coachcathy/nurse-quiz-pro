const questions = [
  {
    caseId: "FE-001",
    patient: "Mrs. Linda Johnson",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    difficulty: "ATI",
    question: "Mrs. Johnson is a 74-year-old patient with CHF receiving IV furosemide. She reports leg cramps, weakness, and palpitations. Telemetry shows flattened T waves and U waves. Which condition is most likely?",
    choices: [
      "Hyperkalemia",
      "Hypokalemia",
      "Hyponatremia",
      "Hypercalcemia"
    ],
    answer: "Hypokalemia",
    rationale: "Furosemide can cause potassium loss. Hypokalemia causes muscle weakness, cramps, flattened T waves, and U waves."
  },
  {
    caseId: "FE-001",
    patient: "Mrs. Linda Johnson",
    topic: "Fluids & Electrolytes",
    style: "Safety",
    difficulty: "ATI",
    question: "The provider orders potassium chloride IV push for Mrs. Johnson. What should the nurse do?",
    choices: [
      "Administer the medication as ordered",
      "Question the order",
      "Dilute it with sterile water and give rapidly",
      "Give it through the closest IV port"
    ],
    answer: "Question the order",
    rationale: "IV potassium is high-alert and is never given IV push. It must be diluted and infused using a pump."
  },
  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    difficulty: "ATI",
    question: "Mr. Carter has chronic kidney disease and reports weakness and palpitations. His ECG shows peaked T waves and widened QRS complexes. Which condition is most likely?",
    choices: [
      "Hypokalemia",
      "Hyperkalemia",
      "Hypocalcemia",
      "Hyponatremia"
    ],
    answer: "Hyperkalemia",
    rationale: "Kidney disease can prevent potassium excretion. Hyperkalemia causes peaked T waves, widened QRS complexes, weakness, and dangerous dysrhythmias."
  },
  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Priority",
    difficulty: "ATI",
    question: "Mr. Carter's potassium is 6.9 mEq/L with peaked T waves. Which medication should the nurse anticipate FIRST?",
    choices: [
      "Sodium polystyrene sulfonate",
      "IV calcium gluconate",
      "Oral potassium chloride",
      "0.45% normal saline"
    ],
    answer: "IV calcium gluconate",
    rationale: "IV calcium gluconate is given first to stabilize the cardiac membrane. It does not lower potassium, but it protects the heart immediately."
  }
];
