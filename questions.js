const questions = [
  {
    caseId: "FE-001",
    patient: "Mrs. Linda Johnson",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "Mrs. Johnson is a 74-year-old with CHF receiving IV furosemide. She reports leg cramps, weakness, and palpitations. Telemetry shows flattened T waves and U waves. Which condition is most likely?",
    choices: ["Hyperkalemia", "Hypokalemia", "Hyponatremia", "Hypercalcemia"],
    answer: "Hypokalemia",
    rationale: "Furosemide can cause potassium loss. Hypokalemia causes weakness, cramps, flattened T waves, and U waves."
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
    style: "Priority",
    question: "The provider prescribes IV potassium replacement. What is the nurse's priority action?",
    choices: ["Give potassium IV push", "Place the patient on cardiac monitoring", "Hold all fluids", "Give calcium gluconate first"],
    answer: "Place the patient on cardiac monitoring",
    rationale: "Potassium affects cardiac rhythm. IV potassium requires monitoring and should never be pushed."
  },
  {
    caseId: "FE-001",
    patient: "Mrs. Linda Johnson",
    topic: "Fluids & Electrolytes",
    style: "Safety",
    question: "Which order should the nurse question for Mrs. Johnson?",
    choices: ["Repeat potassium level in 4 hours", "Continuous telemetry", "Potassium chloride IV push", "Potassium infusion pump"],
    answer: "Potassium chloride IV push",
    rationale: "IV potassium is high-alert and never given IV push."
  },
  {
    caseId: "FE-001",
    patient: "Mrs. Linda Johnson",
    topic: "Fluids & Electrolytes",
    style: "Evaluation",
    question: "Which finding best shows treatment is working?",
    choices: ["Potassium 3.8 mEq/L", "New peaked T waves", "Worsening weakness", "Heart rate drops to 42"],
    answer: "Potassium 3.8 mEq/L",
    rationale: "Normal potassium is 3.5–5.0 mEq/L. Returning to normal with symptom improvement shows effectiveness."
  },

  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "Mr. Carter has chronic kidney disease. He reports weakness and palpitations. ECG shows peaked T waves and widened QRS complexes. Which condition is most likely?",
    choices: ["Hypokalemia", "Hyperkalemia", "Hypocalcemia", "Hyponatremia"],
    answer: "Hyperkalemia",
    rationale: "CKD decreases potassium excretion. Hyperkalemia causes peaked T waves, widened QRS, weakness, and dysrhythmias."
  },
  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Priority",
    question: "Mr. Carter's potassium is 6.9 mEq/L with peaked T waves. Which medication should the nurse anticipate first?",
    choices: ["Kayexalate", "IV calcium gluconate", "Oral potassium", "0.45% normal saline"],
    answer: "IV calcium gluconate",
    rationale: "Calcium gluconate stabilizes the cardiac membrane immediately. It protects the heart first."
  },
  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Comparison",
    question: "Which ECG change would the nurse expect with Mr. Carter's condition?",
    choices: ["U waves", "Flattened T waves", "Peaked T waves", "ST depression only"],
    answer: "Peaked T waves",
    rationale: "Peaked T waves are classic for hyperkalemia."
  },
  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Safety",
    question: "Which food choice should the nurse question for Mr. Carter?",
    choices: ["White rice", "Applesauce", "Bananas", "Toast"],
    answer: "Bananas",
    rationale: "Bananas are high in potassium and should be limited during hyperkalemia."
  },
  {
    caseId: "FE-002",
    patient: "Mr. Robert Carter",
    topic: "Fluids & Electrolytes",
    style: "Evaluation",
    question: "Which finding suggests Mr. Carter's condition is worsening?",
    choices: ["Narrowing QRS", "Normal sinus rhythm", "Widened QRS and bradycardia", "Potassium 4.2"],
    answer: "Widened QRS and bradycardia",
    rationale: "Widened QRS and bradycardia show worsening hyperkalemia and risk for cardiac arrest."
  },

  {
    caseId: "FE-003",
    patient: "Emily Carter",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "Emily has small-cell lung cancer and becomes confused with headache and nausea. Sodium is 118 mEq/L. Which condition is most likely?",
    choices: ["Hypernatremia", "Hyponatremia from SIADH", "Hyperkalemia", "Hypercalcemia"],
    answer: "Hyponatremia from SIADH",
    rationale: "SIADH causes water retention, dilutional hyponatremia, and neurological symptoms."
  },
  {
    caseId: "FE-003",
    patient: "Emily Carter",
    topic: "Fluids & Electrolytes",
    style: "Priority",
    question: "Emily has sodium 118 mEq/L and begins having a seizure. What is the priority concern?",
    choices: ["Cerebral edema", "Fluid volume deficit", "Hypocalcemia", "Renal calculi"],
    answer: "Cerebral edema",
    rationale: "Low sodium causes water to move into brain cells, causing cerebral edema, confusion, seizures, and coma."
  },
  {
    caseId: "FE-003",
    patient: "Emily Carter",
    topic: "Fluids & Electrolytes",
    style: "Safety",
    question: "Emily is prescribed 3% saline. Which nursing action is most important?",
    choices: ["Give rapidly by IV push", "Monitor sodium correction rate", "Mix with D5W", "Use a hand IV"],
    answer: "Monitor sodium correction rate",
    rationale: "Sodium must be corrected slowly to prevent osmotic demyelination syndrome."
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
    rationale: "Hypernatremia is often associated with dehydration findings like thirst and dry mucous membranes."
  },
  {
    caseId: "FE-004",
    patient: "Mr. James Wilson",
    topic: "Fluids & Electrolytes",
    style: "Priority",
    question: "Which assessment should the nurse monitor closely in Mr. Wilson?",
    choices: ["Mental status", "Hair growth", "Pupil color", "Bowel sounds only"],
    answer: "Mental status",
    rationale: "Sodium imbalances affect the brain. Neuro status must be monitored."
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
    question: "Mr. Davis had a thyroidectomy this morning. He reports tingling around his mouth and fingers. His hand spasms when a BP cuff is inflated. Which condition is most likely?",
    choices: ["Hypercalcemia", "Hypocalcemia", "Hypermagnesemia", "Hypernatremia"],
    answer: "Hypocalcemia",
    rationale: "Post-thyroidectomy patients are at risk for parathyroid injury causing hypocalcemia."
  },
  {
    caseId: "FE-005",
    patient: "Mr. Robert Davis",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "The hand spasm with BP cuff inflation is called what?",
    choices: ["Chvostek's sign", "Trousseau's sign", "Kussmaul sign", "Murphy's sign"],
    answer: "Trousseau's sign",
    rationale: "Trousseau's sign is carpal spasm triggered by inflating a BP cuff."
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
    choices: ["Tetany", "Positive Chvostek's", "Muscle weakness and constipation", "Laryngospasm"],
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
  },

  {
    caseId: "FE-006",
    patient: "Maria Lopez",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "Maria is receiving IV magnesium sulfate for preeclampsia. She becomes lethargic, RR is 10/min, and deep tendon reflexes are absent. Which condition is most likely?",
    choices: ["Hypomagnesemia", "Hypermagnesemia", "Hypokalemia", "Hyponatremia"],
    answer: "Hypermagnesemia",
    rationale: "Too much magnesium relaxes the body: decreased DTRs, lethargy, bradycardia, hypotension, and respiratory depression."
  },
  {
    caseId: "FE-006",
    patient: "Maria Lopez",
    topic: "Fluids & Electrolytes",
    style: "Priority",
    question: "What should the nurse do first?",
    choices: ["Continue the infusion", "Stop the magnesium infusion", "Ambulate the patient", "Give oral magnesium"],
    answer: "Stop the magnesium infusion",
    rationale: "Absent DTRs and respiratory depression indicate magnesium toxicity. Stop the infusion immediately."
  },
  {
    caseId: "FE-006",
    patient: "Maria Lopez",
    topic: "Fluids & Electrolytes",
    style: "Safety",
    question: "Which medication should be available as the antidote?",
    choices: ["Calcium gluconate", "Potassium chloride", "Insulin", "D50"],
    answer: "Calcium gluconate",
    rationale: "Calcium gluconate antagonizes magnesium and is the antidote for magnesium toxicity."
  },
  {
    caseId: "FE-006",
    patient: "Maria Lopez",
    topic: "Fluids & Electrolytes",
    style: "Safety",
    question: "Before administering IV magnesium, which assessment is most important?",
    choices: ["Deep tendon reflexes, respirations, and urine output", "Pupil size only", "Bowel sounds only", "Appetite"],
    answer: "Deep tendon reflexes, respirations, and urine output",
    rationale: "Magnesium can cause toxicity, especially with low urine output. Assess DTRs, RR, and urine output."
  },
  {
    caseId: "FE-006",
    patient: "Maria Lopez",
    topic: "Fluids & Electrolytes",
    style: "Comparison",
    question: "Which finding would suggest low magnesium instead of high magnesium?",
    choices: ["Absent DTRs", "Respiratory depression", "Hyperactive reflexes and tremors", "Bradycardia"],
    answer: "Hyperactive reflexes and tremors",
    rationale: "Low magnesium makes the body too excited: tremors, hyperactive reflexes, seizures, and dysrhythmias."
  },

  {
    caseId: "FE-007",
    patient: "Sarah Green",
    topic: "Fluids & Electrolytes",
    style: "Recognition",
    question: "Sarah is admitted with severe burns. She gains weight but has BP 86/50, HR 124, decreased urine output, and edema. What is most likely happening?",
    choices: ["Fluid overload only", "Third spacing", "Hypercalcemia", "SIADH"],
    answer: "Third spacing",
    rationale: "Third spacing means fluid is in the body but not available for circulation, causing edema with hypovolemia signs."
  },
  {
    caseId: "FE-007",
    patient: "Sarah Green",
    topic: "Fluids & Electrolytes",
    style: "Comparison",
    question: "Why can Sarah have edema but still appear hypovolemic?",
    choices: ["The fluid is in the vascular space", "The fluid has shifted into a nonfunctional space", "The kidneys are producing too much urine", "Her sodium is always high"],
    answer: "The fluid has shifted into a nonfunctional space",
    rationale: "In third spacing, fluid leaves the intravascular space and becomes unavailable for circulation."
  },
  {
    caseId: "FE-007",
    patient: "Sarah Green",
    topic: "Fluids & Electrolytes",
    style: "Priority",
    question: "Which finding is most concerning?",
    choices: ["Weight gain", "Edema", "Decreased urine output", "Mild pain"],
    answer: "Decreased urine output",
    rationale: "Decreased urine output suggests poor kidney perfusion from low circulating volume."
  },
  {
    caseId: "FE-007",
    patient: "Sarah Green",
    topic: "Fluids & Electrolytes",
    style: "Clinical Judgment",
    question: "Which IV fluid type is commonly used initially to support intravascular volume in third spacing?",
    choices: ["Isotonic fluids", "Hypotonic fluids", "No fluids", "D5W only"],
    answer: "Isotonic fluids",
    rationale: "Isotonic fluids such as normal saline or LR expand intravascular volume."
  },
  {
    caseId: "FE-007",
    patient: "Sarah Green",
    topic: "Fluids & Electrolytes",
    style: "Evaluation",
    question: "Which finding suggests Sarah's perfusion is improving?",
    choices: ["Urine output 35 mL/hr", "BP 78/40", "Capillary refill 5 seconds", "Increasing confusion"],
    answer: "Urine output 35 mL/hr",
    rationale: "Urine output above 30 mL/hr suggests improved renal perfusion."
  },

  {
    caseId: "FE-008",
    patient: "Mr. Alan Brooks",
    topic: "IV Fluids",
    style: "Safety",
    question: "Mr. Brooks has a traumatic brain injury with increased ICP. Which IV fluid order should the nurse question?",
    choices: ["0.9% normal saline", "3% saline via central line", "0.45% normal saline", "Lactated Ringer's"],
    answer: "0.45% normal saline",
    rationale: "Hypotonic fluids can worsen cerebral edema and are dangerous with increased ICP."
  },
  {
    caseId: "FE-008",
    patient: "Mr. Alan Brooks",
    topic: "IV Fluids",
    style: "Recognition",
    question: "Which fluid pulls water out of cells and may help reduce cerebral edema?",
    choices: ["Hypotonic", "Hypertonic", "Isotonic", "Free water"],
    answer: "Hypertonic",
    rationale: "Hypertonic fluids pull fluid from cells into the vascular space."
  },
  {
    caseId: "FE-008",
    patient: "Mr. Alan Brooks",
    topic: "IV Fluids",
    style: "Comparison",
    question: "Which statement best compares hypotonic and hypertonic fluids?",
    choices: ["Hypotonic shrinks cells; hypertonic swells cells", "Hypotonic moves water into cells; hypertonic pulls water out of cells", "Both expand only red blood cells", "Both are safe for increased ICP"],
    answer: "Hypotonic moves water into cells; hypertonic pulls water out of cells",
    rationale: "Hypotonic fluids hydrate cells; hypertonic fluids pull water out of cells."
  },
  {
    caseId: "FE-008",
    patient: "Mr. Alan Brooks",
    topic: "IV Fluids",
    style: "Priority",
    question: "Mr. Brooks is receiving 3% saline. Which monitoring is most important?",
    choices: ["Cardiac and neurological monitoring", "Daily height", "Vision color test", "Avoid all vital signs"],
    answer: "Cardiac and neurological monitoring",
    rationale: "Hypertonic saline requires close monitoring for fluid overload, cardiac effects, and neurological changes."
  },
  {
    caseId: "FE-008",
    patient: "Mr. Alan Brooks",
    topic: "IV Fluids",
    style: "Evaluation",
    question: "Which finding suggests treatment for increased ICP is effective?",
    choices: ["Improved level of consciousness", "Worsening confusion", "New seizure", "Decreased respiratory effort"],
    answer: "Improved level of consciousness",
    rationale: "Improved neurological status suggests decreased cerebral edema and better brain perfusion."
  },

  {
    caseId: "OX-001",
    patient: "Michael Brown",
    topic: "Oxygenation",
    style: "Recognition",
    question: "Michael has pneumonia. He becomes restless and confused. RR is 30/min and SpO₂ is 84%. What problem is most likely?",
    choices: ["Hypoxia", "Hypercalcemia", "Hypokalemia", "Fluid overload only"],
    answer: "Hypoxia",
    rationale: "Restlessness, confusion, tachypnea, and low oxygen saturation are signs of hypoxia."
  },
  {
    caseId: "OX-001",
    patient: "Michael Brown",
    topic: "Oxygenation",
    style: "Priority",
    question: "Michael's SpO₂ drops to 84%. What should the nurse do first?",
    choices: ["Document the finding", "Assess airway and oxygenation", "Prepare discharge teaching", "Give oral fluids only"],
    answer: "Assess airway and oxygenation",
    rationale: "Airway and breathing are priority. The nurse should assess and intervene for oxygenation."
  },
  {
    caseId: "OX-001",
    patient: "Michael Brown",
    topic: "Oxygenation",
    style: "Comparison",
    question: "Which finding is more concerning for hypoxia?",
    choices: ["Restlessness and confusion", "Hunger", "Mild itching", "Increased appetite"],
    answer: "Restlessness and confusion",
    rationale: "Mental status changes can be early signs of hypoxia."
  },
  {
    caseId: "OX-001",
    patient: "Michael Brown",
    topic: "Oxygenation",
    style: "Safety",
    question: "Which action promotes safety for a patient receiving oxygen?",
    choices: ["Keep oxygen away from open flames", "Use petroleum jelly near oxygen", "Smoke near oxygen if flow is low", "Remove oxygen during sleep"],
    answer: "Keep oxygen away from open flames",
    rationale: "Oxygen supports combustion, so fire safety is essential."
  },
  {
    caseId: "OX-001",
    patient: "Michael Brown",
    topic: "Oxygenation",
    style: "Evaluation",
    question: "Which finding suggests oxygen therapy is helping?",
    choices: ["SpO₂ increases to 94%", "Patient becomes more confused", "RR rises to 38/min", "Cyanosis worsens"],
    answer: "SpO₂ increases to 94%",
    rationale: "Improved oxygen saturation suggests better oxygenation."
  },

  {
    caseId: "OX-002",
    patient: "Jessica Moore",
    topic: "Chest Tubes",
    style: "Safety",
    question: "Jessica has a chest tube after pneumothorax. The tubing disconnects from the drainage system. What should the nurse do first?",
    choices: ["Clamp the tube for 30 minutes", "Place the end of the tube in sterile water", "Pull the tube out", "Turn off suction permanently"],
    answer: "Place the end of the tube in sterile water",
    rationale: "Placing the tube in sterile water creates a temporary water seal and prevents air from entering the pleural space."
  },
  {
    caseId: "OX-002",
    patient: "Jessica Moore",
    topic: "Chest Tubes",
    style: "Priority",
    question: "Jessica suddenly develops respiratory distress, tracheal deviation, and absent breath sounds on one side. What complication is most likely?",
    choices: ["Tension pneumothorax", "Hypocalcemia", "SIADH", "Hypernatremia"],
    answer: "Tension pneumothorax",
    rationale: "Respiratory distress with tracheal deviation and absent breath sounds suggests tension pneumothorax."
  },
  {
    caseId: "OX-002",
    patient: "Jessica Moore",
    topic: "Chest Tubes",
    style: "Safety",
    question: "Which chest tube action should the nurse avoid unless specifically prescribed?",
    choices: ["Keep system below chest level", "Assess breath sounds", "Clamp the chest tube routinely", "Monitor drainage"],
    answer: "Clamp the chest tube routinely",
    rationale: "Routine clamping can cause pressure buildup and tension pneumothorax."
  },
  {
    caseId: "OX-002",
    patient: "Jessica Moore",
    topic: "Chest Tubes",
    style: "Evaluation",
    question: "Which finding suggests the chest tube is functioning?",
    choices: ["Improved breath sounds", "Worsening dyspnea", "Tracheal deviation", "Increasing cyanosis"],
    answer: "Improved breath sounds",
    rationale: "Improved breath sounds suggest lung re-expansion."
  },
  {
    caseId: "OX-002",
    patient: "Jessica Moore",
    topic: "Chest Tubes",
    style: "Recognition",
    question: "Why is the chest drainage system kept below chest level?",
    choices: ["To promote drainage by gravity", "To stop all drainage", "To increase air entering the chest", "To prevent oxygen use"],
    answer: "To promote drainage by gravity",
    rationale: "Keeping the system below chest level helps drainage flow out and prevents backflow."
  }
];
