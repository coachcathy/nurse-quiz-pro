const fluidsQuestions = [
  {
    caseId: "FE-001",
    patient: "Mrs. Linda Johnson",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "Mrs. Johnson is a 74-year-old with CHF receiving IV furosemide. She reports leg cramps, weakness, and palpitations. Telemetry shows flattened T waves and U waves. Which condition is most likely?",
    choices: ["Hyperkalemia", "Hypokalemia", "Hyponatremia", "Hypercalcemia"],
    answer: "Hypokalemia",
    rationale: "Furosemide can cause potassium loss. Hypokalemia causes muscle weakness, cramps, flattened T waves, and U waves."
  },
  {
    caseId: "FE-001",
    patient: "Mrs. Linda Johnson",
    topic: "Fluids & Electrolytes",
    style: "Comparison",
    question: "Which finding best separates Mrs. Johnson's condition from hyperkalemia?",
    choices: ["Palpitations", "Weakness", "Flattened T waves and U waves", "History of CHF"],
    answer: "Flattened T waves and U waves",
    rationale: "Hypokalemia causes flattened T waves and U waves. Hyperkalemia causes peaked T waves and widened QRS."
  },
  {
    caseId: "FE-001",
    patient: "Mrs. Linda Johnson",
    topic: "Fluids & Electrolytes",
    style: "Safety",
    question: "The provider orders potassium chloride IV push. What should the nurse do?",
    choices: ["Administer it as ordered", "Question the order", "Give it rapidly through a central line", "Mix it with sterile water"],
    answer: "Question the order",
    rationale: "IV potassium is high-alert and should never be given IV push."
  },
  {
    caseId: "FE-001",
    patient: "Mrs. Linda Johnson",
    topic: "Fluids & Electrolytes",
    style: "Priority",
    question: "Before administering IV potassium replacement, which nursing action is most important?",
    choices: ["Place the patient on cardiac monitoring", "Give the potassium as a bolus", "Hold all oral fluids", "Administer calcium gluconate first"],
    answer: "Place the patient on cardiac monitoring",
    rationale: "Potassium affects cardiac conduction. IV potassium requires monitoring and an infusion pump."
  },
  {
    caseId: "FE-001",
    patient: "Mrs. Linda Johnson",
    topic: "Fluids & Electrolytes",
    style: "Evaluation",
    question: "Which finding best shows Mrs. Johnson is improving after potassium replacement?",
    choices: ["Potassium 3.8 mEq/L", "New peaked T waves", "Worsening muscle weakness", "Heart rate 42/min"],
    answer: "Potassium 3.8 mEq/L",
    rationale: "Normal potassium is 3.5–5.0 mEq/L. Returning to normal with symptom improvement indicates treatment is working."
  },

  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "Mr. Carter has chronic kidney disease and reports weakness and palpitations. ECG shows peaked T waves and widened QRS complexes. Which condition is most likely?",
    choices: ["Hypokalemia", "Hyperkalemia", "Hypocalcemia", "Hyponatremia"],
    answer: "Hyperkalemia",
    rationale: "Chronic kidney disease decreases potassium excretion. Hyperkalemia causes weakness, peaked T waves, widened QRS, and dangerous dysrhythmias."
  },
  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Priority",
    question: "Mr. Carter's potassium is 6.9 mEq/L with peaked T waves. Which medication should the nurse anticipate first?",
    choices: ["Sodium polystyrene sulfonate", "IV calcium gluconate", "Oral potassium chloride", "0.45% normal saline"],
    answer: "IV calcium gluconate",
    rationale: "Calcium gluconate stabilizes the cardiac membrane immediately. It protects the heart first, even though it does not lower potassium."
  },
  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Comparison",
    question: "Which ECG finding fits Mr. Carter's condition?",
    choices: ["U waves", "Flattened T waves", "Peaked T waves", "ST depression only"],
    answer: "Peaked T waves",
    rationale: "Peaked T waves are classic for hyperkalemia. Hypokalemia causes flat T waves and U waves."
  },
  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Safety",
    question: "Which food choice should the nurse question for Mr. Carter?",
    choices: ["White rice", "Applesauce", "Bananas", "Toast"],
    answer: "Bananas",
    rationale: "Bananas are high in potassium and should be limited when a patient has hyperkalemia."
  },
  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Evaluation",
    question: "Which finding suggests Mr. Carter's condition is worsening?",
    choices: ["Narrowing QRS", "Normal sinus rhythm", "Widened QRS and bradycardia", "Potassium 4.2 mEq/L"],
    answer: "Widened QRS and bradycardia",
    rationale: "Widened QRS and bradycardia suggest worsening hyperkalemia and risk for cardiac arrest."
  },

  {
    caseId: "FE-003",
    patient: "Emily Carter",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "Emily has small-cell lung cancer and becomes confused with headache and nausea. Her sodium is 118 mEq/L. Which condition is most likely?",
    choices: ["Hypernatremia", "Hyponatremia from SIADH", "Hyperkalemia", "Hypercalcemia"],
    answer: "Hyponatremia from SIADH",
    rationale: "SIADH causes water retention, dilutional hyponatremia, and neurological symptoms such as confusion, headache, seizures, and coma."
  },
  {
    caseId: "FE-003",
    patient: "Emily Carter",
    topic: "Fluids & Electrolytes",
    style: "Priority",
    question: "Emily has sodium 118 mEq/L and begins having a seizure. What is the priority concern?",
    choices: ["Cerebral edema", "Fluid volume deficit", "Hypocalcemia", "Renal calculi"],
    answer: "Cerebral edema",
    rationale: "Low sodium causes water to move into brain cells, causing cerebral edema and seizure risk."
  },
  {
    caseId: "FE-003",
    patient: "Emily Carter",
    topic: "Fluids & Electrolytes",
    style: "Safety",
    question: "Emily is prescribed 3% saline. Which nursing action is most important?",
    choices: ["Give rapidly by IV push", "Monitor sodium correction rate", "Mix with D5W", "Use a hand IV"],
    answer: "Monitor sodium correction rate",
    rationale: "Sodium must be corrected slowly. Rapid correction can cause osmotic demyelination syndrome."
  },
  {
    caseId: "FE-003",
    patient: "Emily Carter",
    topic: "Fluids & Electrolytes",
    style: "Comparison",
    question: "Which symptom fits hyponatremia more than hypernatremia?",
    choices: ["Dry mucous membranes", "Extreme thirst", "Confusion and seizures", "Poor skin turgor"],
    answer: "Confusion and seizures",
    rationale: "Hyponatremia primarily affects the brain and can cause confusion, seizures, and coma."
  },
  {
    caseId: "FE-003",
    patient: "Emily Carter",
    topic: "Fluids & Electrolytes",
    style: "Evaluation",
    question: "Which finding suggests Emily is improving?",
    choices: ["Sodium rises from 118 to 140 in 2 hours", "Less confusion and sodium 124", "New seizure activity", "Worsening headache"],
    answer: "Less confusion and sodium 124",
    rationale: "Improving neuro status and gradual sodium correction indicate improvement."
  },

  {
    caseId: "FE-004",
    patient: "Mr. James Wilson",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "Mr. Wilson is admitted from a nursing home after poor oral intake. He has dry mucous membranes, restlessness, intense thirst, and sodium 156 mEq/L. Which imbalance is most likely?",
    choices: ["Hyponatremia", "Hypernatremia", "Hypokalemia", "Hypocalcemia"],
    answer: "Hypernatremia",
    rationale: "Hypernatremia causes cellular dehydration, thirst, dry mucous membranes, restlessness, and confusion."
  },
  {
    caseId: "FE-004",
    patient: "Mr. James Wilson",
    topic: "Fluids & Electrolytes",
    style: "Comparison",
    question: "Which assessment finding supports hypernatremia rather than SIADH?",
    choices: ["Confusion", "Seizure risk", "Dry mucous membranes and thirst", "Low serum sodium"],
    answer: "Dry mucous membranes and thirst",
    rationale: "Hypernatremia is commonly associated with dehydration findings such as thirst and dry mucous membranes."
  },
  {
    caseId: "FE-004",
    patient: "Mr. James Wilson",
    topic: "Fluids & Electrolytes",
    style: "Priority",
    question: "Which assessment should the nurse monitor closely in Mr. Wilson?",
    choices: ["Mental status", "Hair growth", "Pupil color", "Bowel sounds only"],
    answer: "Mental status",
    rationale: "Sodium imbalances affect the brain. Neuro status and level of consciousness should be monitored."
  },
  {
    caseId: "FE-004",
    patient: "Mr. James Wilson",
    topic: "Fluids & Electrolytes",
    style: "Safety",
    question: "Which intervention should the nurse question?",
    choices: ["Monitor sodium levels", "Assess neurological status", "Correct sodium rapidly", "Administer fluids as prescribed"],
    answer: "Correct sodium rapidly",
    rationale: "Rapid sodium correction can cause dangerous neurological complications."
  },
  {
    caseId: "FE-004",
    patient: "Mr. James Wilson",
    topic: "Fluids & Electrolytes",
    style: "Evaluation",
    question: "Which finding indicates improvement?",
    choices: ["Sodium 145 mEq/L", "Increasing restlessness", "New seizure", "Worsening thirst"],
    answer: "Sodium 145 mEq/L",
    rationale: "Normal sodium is 135–145 mEq/L."
  },

  {
    caseId: "FE-005",
    patient: "Mr. Robert Davis",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "Mr. Davis had a thyroidectomy this morning. He reports tingling around his mouth and fingers. His hand spasms when a blood pressure cuff is inflated. Which condition is most likely?",
    choices: ["Hypercalcemia", "Hypocalcemia", "Hypermagnesemia", "Hypernatremia"],
    answer: "Hypocalcemia",
    rationale: "Post-thyroidectomy patients are at risk for parathyroid injury, which can cause hypocalcemia."
  },
  {
    caseId: "FE-005",
    patient: "Mr. Robert Davis",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "The hand spasm with blood pressure cuff inflation is called what?",
    choices: ["Chvostek's sign", "Trousseau's sign", "Kussmaul sign", "Murphy's sign"],
    answer: "Trousseau's sign",
    rationale: "Trousseau's sign is carpal spasm triggered by inflating a blood pressure cuff."
  },
  {
    caseId: "FE-005",
    patient: "Mr. Robert Davis",
    topic: "Fluids & Electrolytes",
    style: "Priority",
    question: "Which complication is the nurse most concerned about with hypocalcemia?",
    choices: ["Laryngospasm", "Constipation", "Kidney stones", "Decreased reflexes"],
    answer: "Laryngospasm",
    rationale: "Hypocalcemia increases neuromuscular excitability and can cause life-threatening laryngospasm."
  },
  {
    caseId: "FE-005",
    patient: "Mr. Robert Davis",
    topic: "Fluids & Electrolytes",
    style: "Comparison",
    question: "Which finding would be more consistent with hypercalcemia?",
    choices: ["Tetany", "Positive Chvostek's sign", "Muscle weakness and constipation", "Laryngospasm"],
    answer: "Muscle weakness and constipation",
    rationale: "Hypercalcemia decreases neuromuscular excitability, causing weakness, lethargy, constipation, and decreased reflexes."
  },
  {
    caseId: "FE-005",
    patient: "Mr. Robert Davis",
    topic: "Fluids & Electrolytes",
    style: "Evaluation",
    question: "Which finding suggests the hypocalcemia is improving?",
    choices: ["Less tingling", "New carpal spasm", "Positive Chvostek's sign", "Seizure activity"],
    answer: "Less tingling",
    rationale: "Decreased paresthesias and fewer spasms indicate improvement."
  }
];
