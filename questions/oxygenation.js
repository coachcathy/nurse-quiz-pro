const oxygenationQuestions = [
  {
    caseId: "OX-001",
    patient: "Michael Brown",
    topic: "Oxygenation",
    style: "Recognition",
    question: "Michael has pneumonia. He becomes restless and confused. Respirations are 30/min and SpO₂ is 84%. What problem is most likely?",
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
    rationale: "Airway and breathing are priority. The nurse should assess oxygenation and intervene promptly."
  },
  {
    caseId: "OX-001",
    patient: "Michael Brown",
    topic: "Oxygenation",
    style: "Comparison",
    question: "Which finding is most concerning for early hypoxia?",
    choices: ["Restlessness and confusion", "Increased appetite", "Mild itching", "Warm dry skin"],
    answer: "Restlessness and confusion",
    rationale: "Mental status changes such as restlessness and confusion can be early signs of decreased oxygenation."
  },
  {
    caseId: "OX-001",
    patient: "Michael Brown",
    topic: "Oxygenation",
    style: "Safety",
    question: "Which action promotes safety for Michael while receiving oxygen?",
    choices: ["Keep oxygen away from open flames", "Use petroleum jelly around the nares", "Allow smoking if oxygen is low flow", "Remove oxygen during sleep"],
    answer: "Keep oxygen away from open flames",
    rationale: "Oxygen supports combustion. Fire safety is essential for all patients receiving oxygen."
  },
  {
    caseId: "OX-001",
    patient: "Michael Brown",
    topic: "Oxygenation",
    style: "Evaluation",
    question: "Which finding shows oxygen therapy is effective?",
    choices: ["SpO₂ increases to 94%", "Respirations increase to 38/min", "Cyanosis worsens", "Confusion increases"],
    answer: "SpO₂ increases to 94%",
    rationale: "Improved oxygen saturation and improved mental status indicate better oxygenation."
  },

  {
    caseId: "OX-002",
    patient: "Jessica Moore",
    topic: "Chest Tubes",
    style: "Safety",
    question: "Jessica has a chest tube after a pneumothorax. The tubing disconnects from the drainage system. What should the nurse do first?",
    choices: ["Clamp the tube for 30 minutes", "Place the end of the tube in sterile water", "Pull the tube out", "Turn off suction permanently"],
    answer: "Place the end of the tube in sterile water",
    rationale: "Placing the tube in sterile water creates a temporary water seal and helps prevent air from entering the pleural space."
  },
  {
    caseId: "OX-002",
    patient: "Jessica Moore",
    topic: "Chest Tubes",
    style: "Recognition",
    question: "Jessica suddenly develops respiratory distress, tracheal deviation, and absent breath sounds on one side. What complication is most likely?",
    choices: ["Tension pneumothorax", "Hypocalcemia", "SIADH", "Hypernatremia"],
    answer: "Tension pneumothorax",
    rationale: "Respiratory distress, tracheal deviation, and absent breath sounds suggest tension pneumothorax."
  },
  {
    caseId: "OX-002",
    patient: "Jessica Moore",
    topic: "Chest Tubes",
    style: "Safety",
    question: "Which chest tube action should the nurse avoid unless specifically prescribed?",
    choices: ["Keep system below chest level", "Assess breath sounds", "Clamp the chest tube routinely", "Monitor drainage"],
    answer: "Clamp the chest tube routinely",
    rationale: "Routine clamping can cause pressure buildup and may lead to tension pneumothorax."
  },
  {
    caseId: "OX-002",
    patient: "Jessica Moore",
    topic: "Chest Tubes",
    style: "Evaluation",
    question: "Which finding suggests Jessica's chest tube is functioning effectively?",
    choices: ["Improved breath sounds", "Worsening dyspnea", "Tracheal deviation", "Increasing cyanosis"],
    answer: "Improved breath sounds",
    rationale: "Improved breath sounds suggest lung re-expansion."
  },
  {
    caseId: "OX-002",
    patient: "Jessica Moore",
    topic: "Chest Tubes",
    style: "Recognition",
    question: "Why should the chest drainage system be kept below chest level?",
    choices: ["To promote drainage by gravity", "To stop all drainage", "To increase air entering the chest", "To prevent oxygen use"],
    answer: "To promote drainage by gravity",
    rationale: "Keeping the system below chest level supports drainage and helps prevent backflow."
  },

  {
    caseId: "OX-003",
    patient: "David Lewis",
    topic: "Oxygenation",
    style: "Recognition",
    question: "David has COPD and arrives short of breath with pursed-lip breathing and use of accessory muscles. Which problem is most likely?",
    choices: ["Impaired gas exchange", "Hypercalcemia", "Hypokalemia", "Fluid volume excess only"],
    answer: "Impaired gas exchange",
    rationale: "COPD can impair ventilation and gas exchange, causing dyspnea, accessory muscle use, and oxygenation problems."
  },
  {
    caseId: "OX-003",
    patient: "David Lewis",
    topic: "Oxygenation",
    style: "Priority",
    question: "David's oxygen saturation is below the prescribed range. What should the nurse do first?",
    choices: ["Assess respiratory status and apply oxygen as prescribed", "Wait 30 minutes", "Remove all oxygen", "Give oral fluids first"],
    answer: "Assess respiratory status and apply oxygen as prescribed",
    rationale: "The nurse should prioritize breathing and oxygenation while following the ordered oxygen parameters."
  },
  {
    caseId: "OX-003",
    patient: "David Lewis",
    topic: "Oxygenation",
    style: "Safety",
    question: "Which teaching is most appropriate for David with COPD?",
    choices: ["Use pursed-lip breathing during shortness of breath", "Hold your breath during activity", "Avoid rest periods", "Lie flat when short of breath"],
    answer: "Use pursed-lip breathing during shortness of breath",
    rationale: "Pursed-lip breathing helps keep airways open longer and improves ventilation."
  },
  {
    caseId: "OX-003",
    patient: "David Lewis",
    topic: "Oxygenation",
    style: "Comparison",
    question: "Which finding would be more concerning than chronic shortness of breath in a COPD patient?",
    choices: ["New confusion", "Occasional cough", "Barrel chest", "Long history of smoking"],
    answer: "New confusion",
    rationale: "New confusion can indicate worsening hypoxia or carbon dioxide retention and needs prompt follow-up."
  },
  {
    caseId: "OX-003",
    patient: "David Lewis",
    topic: "Oxygenation",
    style: "Evaluation",
    question: "Which finding shows David's breathing intervention helped?",
    choices: ["Less accessory muscle use", "Increased restlessness", "Worsening cyanosis", "SpO₂ continues to fall"],
    answer: "Less accessory muscle use",
    rationale: "Reduced work of breathing suggests improved ventilation."
  },

  {
    caseId: "OX-004",
    patient: "Olivia Harris",
    topic: "Oxygenation",
    style: "Recognition",
    question: "Olivia has asthma and presents with wheezing, chest tightness, and difficulty speaking in full sentences. Which condition is most likely?",
    choices: ["Asthma exacerbation", "Hypernatremia", "Hypocalcemia", "Fluid overload"],
    answer: "Asthma exacerbation",
    rationale: "Wheezing, chest tightness, and difficulty speaking are consistent with an asthma exacerbation."
  },
  {
    caseId: "OX-004",
    patient: "Olivia Harris",
    topic: "Oxygenation",
    style: "Priority",
    question: "Olivia is wheezing and short of breath. Which medication would the nurse expect first?",
    choices: ["Short-acting beta-2 agonist", "Oral iron", "Potassium chloride", "Calcium carbonate"],
    answer: "Short-acting beta-2 agonist",
    rationale: "A short-acting beta-2 agonist is used for quick bronchodilation during acute asthma symptoms."
  },
  {
    caseId: "OX-004",
    patient: "Olivia Harris",
    topic: "Oxygenation",
    style: "Safety",
    question: "Which finding is most concerning in Olivia?",
    choices: ["Silent chest", "Mild wheezing after exercise", "Occasional dry cough", "Speaking in full sentences"],
    answer: "Silent chest",
    rationale: "A silent chest can indicate minimal air movement and severe airway obstruction."
  },
  {
    caseId: "OX-004",
    patient: "Olivia Harris",
    topic: "Oxygenation",
    style: "Teaching",
    question: "Which statement shows Olivia understands rescue inhaler teaching?",
    choices: ["I use it when I have sudden wheezing or shortness of breath", "I only use it once a month no matter what", "I stop using all inhalers when I feel better", "I use it instead of seeking help during severe distress"],
    answer: "I use it when I have sudden wheezing or shortness of breath",
    rationale: "Rescue inhalers are used for quick relief of acute bronchospasm."
  },
  {
    caseId: "OX-004",
    patient: "Olivia Harris",
    topic: "Oxygenation",
    style: "Evaluation",
    question: "Which finding shows Olivia is improving after bronchodilator therapy?",
    choices: ["Decreased wheezing and easier breathing", "Worsening retractions", "SpO₂ decreases", "Unable to speak"],
    answer: "Decreased wheezing and easier breathing",
    rationale: "Less wheezing and easier breathing suggest improved airway movement."
  },

  {
    caseId: "OX-005",
    patient: "Karen White",
    topic: "Oxygenation",
    style: "Recognition",
    question: "Karen is postoperative and suddenly reports sharp chest pain and shortness of breath. HR is 124, RR is 32, and SpO₂ is 86%. Which complication is most likely?",
    choices: ["Pulmonary embolism", "Hypocalcemia", "Hyperkalemia", "SIADH"],
    answer: "Pulmonary embolism",
    rationale: "Sudden dyspnea, chest pain, tachycardia, tachypnea, and low oxygen saturation after surgery suggest pulmonary embolism."
  },
  {
    caseId: "OX-005",
    patient: "Karen White",
    topic: "Oxygenation",
    style: "Priority",
    question: "Karen is suspected of having a pulmonary embolism. What is the nurse's priority?",
    choices: ["Stay with the patient and support oxygenation", "Ambulate the patient", "Give a large meal", "Delay reporting symptoms"],
    answer: "Stay with the patient and support oxygenation",
    rationale: "Pulmonary embolism can quickly become life-threatening. Airway and breathing are the priority."
  },
  {
    caseId: "OX-005",
    patient: "Karen White",
    topic: "Oxygenation",
    style: "Comparison",
    question: "Which finding helps distinguish pulmonary embolism from mild postoperative discomfort?",
    choices: ["Sudden dyspnea with low SpO₂", "Mild incisional pain", "Slight fatigue", "Dry mouth"],
    answer: "Sudden dyspnea with low SpO₂",
    rationale: "Sudden respiratory distress and hypoxemia are not expected mild postoperative findings."
  },
  {
    caseId: "OX-005",
    patient: "Karen White",
    topic: "Oxygenation",
    style: "Safety",
    question: "Which postoperative action helps reduce risk for venous thromboembolism?",
    choices: ["Early ambulation as prescribed", "Keeping the patient immobile", "Restricting all fluids without order", "Avoiding leg exercises"],
    answer: "Early ambulation as prescribed",
    rationale: "Early ambulation improves venous return and reduces risk for clot formation. "
  },
  {
    caseId: "OX-005",
    patient: "Karen White",
    topic: "Oxygenation",
    style: "Evaluation",
    question: "Which finding suggests Karen's oxygenation is improving?",
    choices: ["SpO₂ increases from 86% to 94%", "Respirations increase to 40/min", "Chest pain worsens", "Cyanosis develops"],
    answer: "SpO₂ increases from 86% to 94%",
    rationale: "Improved oxygen saturation suggests improved oxygenation."
  }
];
