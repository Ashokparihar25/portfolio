import capstoneDoc from "@/assets/projects/Capstone_COVID19_Mental_Health_Analytics.docx";
import lungCancerPdf from "@/assets/projects/Lung_Cancer_Prediction_ML.pdf";
import lungCancerPptx from "@/assets/projects/Lung_Cancer_Prediction_ML.pptx";
import titansBotPptx from "@/assets/projects/TITANs_Bot_Course_Registration.pptx";
import airCargoPptx from "@/assets/projects/Air_Cargo_Database_System.pptx";

export const contact = {
  name: "Ashok Kumar Parihar",
  title: "Data Analytics Professional",
  headline: "Data Analyst | SQL · Python · Power BI · Tableau | ETL & Machine Learning",
  email: "ashokkumasirvi110@gmail.com",
  phone: "+1 (313) 213-3109",
  location: "Detroit, MI, USA",
  linkedin: "https://www.linkedin.com/in/ashok-kumar-parihar",
  linkedinLabel: "linkedin.com/in/ashok-kumar-parihar",
  github: "https://github.com/Ashokparihar25",
  githubLabel: "github.com/Ashokparihar25",
  portfolioUrl: "https://www.linkedin.com/in/ashok-kumar-parihar",
  resumeFilename: "Ashok_Kumar_Parihar_Resume.pdf",
};

export const summary = {
  short:
    "Data analytics professional with 2+ years at Tata Consultancy Services, an MS in Applied Data Analytics from the University of Detroit Mercy (May 2025, CGPA 3.5), and 1+ year of nonprofit data analytics work at Saayam for All.",
  paragraphs: [
    "I am a data analytics professional with 2+ years of experience at Tata Consultancy Services, specializing in IT infrastructure analytics, automation, and data-driven decision-making. I am proficient in SQL, Python, PowerShell, and machine learning, with hands-on experience in reporting, predictive modeling, and dashboard delivery.",
    "I earned my Master of Science in Applied Data Analytics from the University of Detroit Mercy (graduated May 2025, CGPA 3.5). My capstone project — submitted to Dr. Douglas MacDonald — analyzed COVID-19 mental health medication usage using U.S. Census Household Pulse Survey data, Random Forest forecasting (R² = 0.94), and demographic trend analysis.",
    "At UDM, I completed course projects in lung cancer prediction (Data Mining), air cargo database design (Database Design), and an AI-powered course registration chatbot (TiTAns Bot). I also served as a Graduate Assistant, Aeroponics Project Manager, Audio Assistant, and Research Assistant in the Vehicle Cyber Engineering Lab.",
    "Since graduation, I have contributed to the Data Analytics team at Saayam for All, a 501(c)(3) nonprofit building a global volunteer-matching platform — delivering KPI dashboards, request/volunteer analytics, and chart-ready reporting APIs.",
  ],
};

export const heroStats = [
  { value: "2+", label: "Years at TCS" },
  { value: "1+", label: "Year at Saayam" },
  { value: "97.5%", label: "ML Model Accuracy" },
  { value: "R² 0.94", label: "Capstone Model" },
  { value: "25%", label: "Task Automation" },
  { value: "Power BI", label: "SQL · Python · Tableau" },
];

export const experiences = [
  {
    company: "Saayam for All",
    role: "Data Analyst",
    period: "May 2025 – Jun 2026",
    location: "Remote · San Jose, CA (Nonprofit)",
    highlight: "Analytics for global volunteer-matching platform (501(c)(3))",
    bullets: [
      "Contributed to the Data Analytics sub-team building dashboards, KPI reporting, and insights for a nonprofit platform connecting beneficiaries with volunteers and NGOs worldwide.",
      "Supported analytics initiatives including request volume trends, volunteer activity analysis, and application metrics using Python, SQL, and PostgreSQL on AWS.",
      "Collaborated with Data Engineering and Frontend teams via GitHub issue tracking to deliver chart-ready JSON APIs for Super Admin dashboard widgets.",
      "Worked on NGO organization data initiatives that aggregate nonprofit listings to help beneficiaries find relevant local charitable support.",
    ],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "System Engineer — Amway-Alticor Client Project",
    period: "Nov 2021 – Dec 2023",
    location: "Hyderabad, India",
    highlight: "Automated 25% of tasks; reduced downtime 20% across 500+ servers",
    bullets: [
      "Utilized SQL to query and analyze large datasets from IT infrastructure systems, identifying trends and optimizing resource utilization across servers and virtual machines.",
      "Developed and automated performance reports using PowerShell scripting to analyze server health metrics, enabling data-driven decision-making and improving system reliability.",
      "Conducted data analysis on incident logs and infrastructure performance, presenting actionable insights to reduce system downtime and streamline operations.",
      "Created dashboards and visual reports to monitor key performance indicators (KPIs) for server environments, facilitating proactive management and reporting.",
      "Generated compliance reports and audited server activities, ensuring alignment with organizational standards and security protocols.",
      "Collaborated with cross-functional teams to analyze process gaps and implement automation solutions, increasing operational efficiency by reducing manual effort.",
      "Supported Amway-Alticor infrastructure operations — migrated and upgraded 500+ Windows servers (2008/2012 to 2019 OS), maintaining system health through VMware, SCCM, and Active Directory administration.",
    ],
  },
  {
    company: "University of Detroit Mercy",
    role: "Research Assistant — Vehicle Cyber Engineering (VCE) Lab",
    period: "Jan 2025 – Apr 2025",
    location: "Detroit, MI, USA",
    highlight: "99%+ accuracy in CAN bus anomaly detection models",
    bullets: [
      "Developed Python scripts to automate the conversion of CAN log files into CSV format, enhancing data preprocessing for analysis workflows.",
      "Performed anomaly detection and CAN ID classification using Isolation Forest and Random Forest models, achieving over 99% accuracy.",
      "Built a secure Python-based MQTT bridge to transmit CAN data with cloud certificates, enabling remote monitoring of vehicle telemetry.",
      "Reviewed research papers on ECU fingerprinting, anomaly detection, and automotive digital forensics; documented findings in the VCE lab notebook.",
      "Contributed weekly project status updates and shared scripts via the official VCE GitHub repository.",
    ],
  },
  {
    company: "University of Detroit Mercy",
    role: "Audio Assistant — Podcast Analytics",
    period: "Oct 2024 – Dec 2024",
    location: "Detroit, MI, USA",
    highlight: "Built tracking system for podcast performance and listener data",
    bullets: [
      "Developed and maintained a tracking system for podcast schedules and performance data, providing insights into content reach and engagement.",
      "Analyzed listener data to identify trends and improve future content strategies.",
      "Managed podcast metadata and website uploads; streamlined workflows by automating routine content management tasks.",
    ],
  },
  {
    company: "University of Detroit Mercy",
    role: "Graduate Assistant — Boys and Girls Club Research",
    period: "Jan 2024 – Apr 2024",
    location: "Detroit, MI, USA",
    highlight: "Community impact research with data-driven reporting",
    bullets: [
      "Conducted data analysis and report writing for a research project on the Boys and Girls Club, improving understanding of community impact.",
      "Assisted in designing research methodologies and performed data collection to ensure accurate reporting and actionable outcomes.",
    ],
  },
  {
    company: "University of Detroit Mercy",
    role: "Aeroponics Project Manager",
    period: "Jan 2024 – Apr 2024",
    location: "Detroit, MI, USA",
    highlight: "Excel-based performance tracking for plant health metrics",
    bullets: [
      "Managed data monitoring for plant health and nutrient systems in the aeroponics project, analyzing performance trends and documenting results to support future research.",
      "Utilized Excel and other reporting tools to measure project metrics and streamline documentation for progress analysis.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Programming & Analytics",
    skills: [
      "Python (pandas, scikit-learn, matplotlib)",
      "SQL (PostgreSQL, MySQL, Oracle)",
      "R",
      "PowerShell",
      "Jupyter Notebooks",
      "Data Cleaning & ETL",
      "Exploratory Data Analysis",
      "Feature Selection",
      "Statistical Modeling",
    ],
  },
  {
    title: "BI, Visualization & Statistics",
    skills: [
      "Power BI",
      "Tableau",
      "Excel Dashboards",
      "STATA",
      "SPSS",
      "Matplotlib",
      "Seaborn",
      "KPI Reporting",
      "Data Storytelling",
    ],
  },
  {
    title: "ML, Big Data & Cloud",
    skills: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Random Forest",
      "Logistic Regression",
      "Decision Tree",
      "Isolation Forest",
      "Apache Spark",
      "Hadoop",
      "Snowflake",
      "Amazon Redshift",
      "MongoDB",
      "AWS",
      "Git / GitHub",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Applied Data Analytics",
    school: "University of Detroit Mercy, Detroit, MI",
    year: "Graduated May 2025 · CGPA 3.5",
    detail:
      "Capstone (DATA 5130): Evaluating the Impact of COVID-19 on Mental Health Using Global Datasets — Advisor: Dr. Douglas MacDonald · Student ID: T02208727 · Submitted April 11, 2025",
    download: { label: "Download Capstone Report", href: capstoneDoc, filename: "Capstone_COVID19_Mental_Health_Analytics.docx" },
  },
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    school: "Anurag University, Hyderabad, India",
    year: "Graduated 2021 · CGPA 7.98",
    detail: null,
    download: null,
  },
];

export const certifications = [
  {
    title: "Social and Behavioural Responsible Conduct of Research Course 1",
    org: "Research Ethics Certification",
  },
];

export const achievements = [
  {
    title: "First Prize — Detroit Urban Health AI Challenge (Chatbot AI Track)",
    desc: "Collaborated on designing and developing an Insomnia Personal Assistant Chatbot using Generative AI on the Scholar AID platform. Created and trained datasets, refined bot responses, and enhanced functionality to assist patients with insomnia management.",
  },
];

export const outcomes = [
  {
    metric: "97.5%",
    title: "Lung Cancer ML Accuracy",
    desc: "Decision Tree and Random Forest both achieved 97.5% accuracy on 980 preprocessed samples with 12 selected features (Data Mining project, Prof. Dr. Mina Maleki).",
  },
  {
    metric: "R² 0.94",
    title: "Capstone Forecast Model",
    desc: "Random Forest Regressor for COVID-19 mental health medication usage achieved R² = 0.94 and RMSE = 1.84 on U.S. Census Household Pulse Survey data.",
  },
  {
    metric: "19.22%",
    title: "Capstone Jan 2025 Forecast",
    desc: "Predicted mental health medication usage for the 18–29 age group in January 2025, supporting continued demand for mental health services.",
  },
  {
    metric: "25%",
    title: "Registration & Automation Gains",
    desc: "TiTAns Bot increased successful course registrations by 25% in the first month; TCS PowerShell/SQL automation reduced manual operational tasks by 25%.",
  },
  {
    metric: "20%",
    title: "Infrastructure Downtime Reduced",
    desc: "Server migration and optimization on the Amway-Alticor project at TCS reduced system downtime by 20% across 500+ migrated servers.",
  },
  {
    metric: "1st Prize",
    title: "Detroit Urban Health AI Challenge",
    desc: "First Prize — Chatbot AI Track. Collaborated on an Insomnia Personal Assistant Chatbot using Generative AI on the Scholar AID platform.",
  },
];

export const projects = [
  {
    title: "MS Capstone — COVID-19 Mental Health Medication Analytics",
    subtitle: "DATA 5130 · Python · Scikit-learn · Matplotlib · Seaborn · U.S. Census Pulse Survey",
    meta: "Ashok Kumar Parihar · Advisor: Dr. Douglas MacDonald · April 11, 2025 · Student ID: T02208727",
    problem:
      "The COVID-19 pandemic created a global mental health emergency. This capstone investigates which demographic groups used mental health medications most frequently, how usage changed over time, and whether future trends can be forecasted using data-driven models.",
    approach:
      "Used the U.S. Census Bureau Household Pulse Survey dataset (3,800+ records, mid-2020 to early 2021). Applied missing value imputation, label encoding, IQR outlier removal, descriptive analysis, correlation heatmaps, and a Random Forest Regressor for forecasting mental health medication usage by demographic group.",
    dashboards:
      "Demographic usage bar charts, temporal trend line graphs, correlation heatmaps, feature importance analysis, and a January 2025 forecast for the 18–29 age group (19.22% predicted usage).",
    outcomes: [
      { metric: "R² 0.94", desc: "Random Forest model" },
      { metric: "RMSE 1.84", desc: "Low prediction error" },
      { metric: "19.22%", desc: "Jan 2025 forecast" },
      { metric: "3,800+", desc: "Survey records" },
    ],
    downloads: [
      { label: "Capstone Report (DOCX)", href: capstoneDoc, filename: "Capstone_COVID19_Mental_Health_Analytics.docx" },
    ],
    resumeLine:
      "Capstone: COVID-19 mental health medication analytics using U.S. Census Pulse Survey (3,800+ records); Random Forest Regressor achieved R² = 0.94, RMSE = 1.84; forecasted 19.22% usage for ages 18–29 in Jan 2025.",
  },
  {
    title: "Lung Cancer Prediction Using Machine Learning",
    subtitle: "DATA 5310 Data Mining · Python · scikit-learn · pandas · matplotlib · Kaggle",
    meta: "Team: Manav Shah, Baskaran Palanisamy, Ashok Kumar Parihar · Prof. Dr. Mina Maleki · Aug–Dec 2024",
    problem:
      "Lung cancer remains one of the deadliest cancers, and early detection is critical. This project develops a machine learning model to assess lung cancer risk using patient-specific data including age, gender, smoking habits, coughing blood, and chest pain.",
    approach:
      "Used a Kaggle dataset (1,000 samples, 26 attributes → 980 samples, 12 features after preprocessing). Applied IQR outlier removal, one-hot encoding, Min-Max normalization, and Information Gain feature selection. Trained Logistic Regression, Decision Tree, and Random Forest with 70/30 train-test split.",
    dashboards:
      "Feature importance tables, model comparison charts (accuracy, precision, recall, F1-score), 10-fold cross-validation results, and gender-based risk distribution visualizations.",
    outcomes: [
      { metric: "97.5%", desc: "Best model accuracy" },
      { metric: "980", desc: "Samples analyzed" },
      { metric: "12", desc: "Selected features" },
      { metric: "3", desc: "Models compared" },
    ],
    downloads: [
      { label: "Research Paper (PDF)", href: lungCancerPdf, filename: "Lung_Cancer_Prediction_ML.pdf" },
      { label: "Presentation (PPTX)", href: lungCancerPptx, filename: "Lung_Cancer_Prediction_ML.pptx" },
    ],
    resumeLine:
      "Lung Cancer Prediction (Data Mining): 980 samples, 12 features; Decision Tree & Random Forest achieved 97.5% accuracy; top predictors — coughing of blood, wheezing, chest pain.",
  },
  {
    title: "Air Cargo Database System",
    subtitle: "DATA 5550 Database Design · MySQL · ER Modeling · SQL Reporting",
    meta: "Team: Abhijit Shine, Vineeth Kumar Baradi, Baskaran Palanisamy, Ashok Kumar Parihar, Shanmukha Santosh Reddy Kallam · Prof. Vijaya Sastry",
    problem:
      "Air cargo logistics lacked a centralized relational database for real-time shipment tracking, route optimization, and operational reporting across customers, carriers, cargo, and invoices.",
    approach:
      "Designed a normalized relational database in MySQL Workbench through 1NF, 2NF, and 3NF. Established entity relationships (Customers, Carriers, Cargo, Shipments, Routes, Airports, Invoices) with primary/foreign key constraints and built SQL queries for tracking and reporting.",
    dashboards:
      "Shipment Tracking Report (status and location), Customer Shipment History (frequency, items, destinations, cost), and Carrier Performance Report (delivery times and delays).",
    outcomes: [
      { metric: "3NF", desc: "Normalized schema" },
      { metric: "3", desc: "SQL reports built" },
      { metric: "MySQL", desc: "Database platform" },
      { metric: "ER", desc: "Diagram designed" },
    ],
    downloads: [
      { label: "Project Presentation (PPTX)", href: airCargoPptx, filename: "Air_Cargo_Database_System.pptx" },
    ],
    resumeLine:
      "Air Cargo Database System: MySQL 3NF schema with Shipment Tracking, Customer Shipment History, and Carrier Performance SQL reports.",
  },
  {
    title: "TiTAns Bot — AI-Powered Course Registration Chatbot",
    subtitle: "Python · chainlit · langchain · sentence_transformers · NLP · Jan–Apr 2024",
    meta: "Team: Rajiv Satish, Ashok Kumar Parihar, Parvez Ahamed · University of Detroit Mercy",
    problem:
      "Manual course registration created bottlenecks for engineering students and administrative staff, with limited visibility into registration success rates.",
    approach:
      "Developed a Python-based conversational AI chatbot using NLP techniques (Lemmatization), chainlit, langchain, and sentence_transformers to streamline the University of Detroit Mercy's course registration process with intent detection and automated response logic.",
    dashboards:
      "Registration workflow automation, course query handling (prerequisites, schedules), and user interaction tracking for process improvement.",
    outcomes: [
      { metric: "25%", desc: "Registration increase" },
      { metric: "NLP", desc: "Lemmatization pipeline" },
      { metric: "1 mo", desc: "Measured impact" },
      { metric: "AI", desc: "Conversational bot" },
    ],
    downloads: [
      { label: "Project Presentation (PPTX)", href: titansBotPptx, filename: "TITANs_Bot_Course_Registration.pptx" },
    ],
    resumeLine:
      "TiTAns Bot: NLP chatbot (chainlit, langchain) for UDM course registration; increased successful registrations by 25% in the first month.",
  },
  {
    title: "Amway-Alticor Infrastructure Support — TCS",
    subtitle: "SQL · PowerShell · Power BI · KPI Dashboards · VMware · SCCM · Nov 2021 – Dec 2023",
    meta: "Tata Consultancy Services, Hyderabad · Client: Amway-Alticor · Role: System Engineer · Team size: 15",
    problem:
      "Enterprise IT teams lacked automated visibility into server health, incident trends, and infrastructure KPIs across 500+ Windows servers.",
    approach:
      "Automated server health and performance reports using PowerShell and SQL. Analyzed incident logs and infrastructure datasets to identify trends, built KPI dashboards for proactive monitoring, and generated compliance audit reports while managing server migrations and OS upgrades.",
    dashboards:
      "Server health KPI dashboards, incident trend analysis reports, compliance audit summaries, and automated weekly/monthly performance reports for management.",
    outcomes: [
      { metric: "25%", desc: "Tasks automated" },
      { metric: "20%", desc: "Downtime reduced" },
      { metric: "500+", desc: "Servers migrated" },
      { metric: "KPI", desc: "Dashboard reporting" },
    ],
    downloads: [],
    resumeLine:
      "TCS Amway-Alticor: SQL/PowerShell KPI dashboards, incident log analytics; automated 25% of tasks, reduced downtime 20% across 500+ servers.",
  },
];

export const contactHighlights = [
  "2+ years data analytics at TCS (Amway-Alticor)",
  "1+ year Data Analytics at Saayam for All",
  "MS Applied Data Analytics, UDM (CGPA 3.5)",
  "Capstone: COVID-19 mental health forecasting",
  "Lung Cancer ML — 97.5% model accuracy",
  "SQL, Python, Power BI, Tableau, scikit-learn",
];

export const contactTags = [
  "SQL · Python · R",
  "Power BI · Tableau",
  "Scikit-learn · ML",
  "PostgreSQL · MySQL",
  "Spark · AWS",
  "ETL · Dashboards",
];

export const aboutSkillCards = [
  { label: "Data & SQL", desc: "PostgreSQL, MySQL, Oracle, Snowflake, Amazon Redshift, MongoDB" },
  { label: "BI & Visualization", desc: "Power BI, Tableau, Excel dashboards, KPI reporting, Matplotlib" },
  { label: "ML & Statistics", desc: "Scikit-learn, PyTorch, TensorFlow, STATA, SPSS, ETL & data cleaning" },
  { label: "Big Data & Cloud", desc: "Apache Spark, Hadoop, AWS, Git, Jupyter Notebooks" },
];

/** Resume PDF — single 720×1520 page; healthcare template density with portfolio content */
export const resume = {
  pageSize: [720, 1520] as [number, number],
  title: "Data Analyst",
  summary:
    "Data Analyst with 3+ years of analytics experience delivering data-driven solutions across enterprise IT operations, nonprofit technology, and academic research environments. Experienced generating insights through SQL analysis, KPI dashboard reporting, trend monitoring, and predictive modeling across large-scale operational datasets. Proven expertise analyzing infrastructure incident logs, volunteer platform metrics, and survey datasets exceeding 3,800+ records. Proficient in SQL, Python, Power BI, Tableau, and Advanced Excel for building analytics pipelines, ETL workflows, machine learning models, and executive dashboards. Hands-on experience with PostgreSQL, MySQL, AWS, scikit-learn, and cross-functional stakeholder reporting enabling data-driven decision making.",
  skillCategories: [
    {
      label: "Data Analytics & Business Intelligence",
      items:
        "Data Analysis, Data Analytics, Business Intelligence, Predictive Analytics, Exploratory Data Analysis (EDA), Descriptive Analytics, Statistical Analysis, Trend Analysis, Root Cause Analysis, KPI Reporting, Dashboard Development, Data Visualization, Operational Analytics, Decision Support Analytics",
    },
    {
      label: "Programming & Query Languages",
      items:
        "SQL (Advanced Queries, Joins, CTEs, Window Functions, Query Optimization), Python, R Programming, PowerShell, Advanced Excel (Pivot Tables, Power Query, Lookup Functions)",
    },
    {
      label: "Data Visualization & Reporting Tools",
      items:
        "Power BI, Tableau, Power Query, DAX, Matplotlib, Seaborn, Interactive Dashboard Development, Executive Reporting, Self-Service BI Reporting, KPI Dashboards",
    },
    {
      label: "Machine Learning & Statistical Methods",
      items:
        "Machine Learning, Predictive Modeling, Regression Analysis, Classification Models, Forecasting, Feature Engineering, Model Evaluation, Random Forest, Logistic Regression, Decision Tree, Isolation Forest, Scikit-learn, Supervised Learning, Data Mining",
    },
    {
      label: "Python Libraries & Analytics Tools",
      items: "Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, Jupyter Notebooks, chainlit, langchain, NLP",
    },
    {
      label: "Data Engineering & Databases",
      items:
        "ETL Processes, Data Pipelines, Data Transformation, Data Integration, Data Modeling, Dimensional Modeling (3NF), Data Cleansing, Data Validation, Data Profiling, Workflow Automation, MySQL, PostgreSQL, SQL Server",
    },
    {
      label: "Cloud & Collaboration Platforms",
      items: "AWS, Git, GitHub, JSON APIs, MQTT, Cross-Functional Collaboration, Stakeholder Communication, Agile Analytics Support",
    },
    {
      label: "Methods Applied in Experience Below",
      items:
        "Incident Log Analysis, Server Health Monitoring, Compliance Reporting, Survey Design, Data Collection, Anomaly Detection, Correlation Analysis, Feature Importance Analysis, NGO Directory Analytics",
    },
  ],
  certifications: [
    { title: "Excel Skills Job Simulation", org: "JPMorgan Chase & Co." },
    { title: "Data Analytics Essentials", org: "Cisco Networking Academy" },
    { title: "Tableau Training Certification", org: "Simplilearn" },
    { title: "Data Science Certification Program", org: "Simplilearn" },
    { title: "Responsible Conduct of Research Course 1", org: "Research Ethics Certification" },
  ],
  experience: [
    {
      role: "Data Analyst",
      company: "Saayam for All",
      location: "Remote, USA",
      period: "May 2025 – Jun 2026",
      bullets: [
        "Built KPI dashboards and analytics reports for a nonprofit volunteer-matching platform, delivering request volume trends, volunteer activity analysis, and application metrics using Python, SQL, and PostgreSQL on AWS.",
        "Collaborated with Data Engineering and Frontend teams via GitHub issue tracking to deliver chart-ready JSON APIs for Super Admin dashboard widgets supporting data-driven platform monitoring.",
        "Analyzed structured operational datasets to identify utilization patterns and performance trends, enabling stakeholders to improve volunteer matching and beneficiary outreach initiatives.",
        "Strengthened data quality and reporting readiness for NGO organization directory initiatives through data profiling, validation, and structured analytics workflows.",
      ],
    },
    {
      role: "Data Analyst – Infrastructure & KPI Analytics",
      company: "Tata Consultancy Services (TCS)",
      location: "Hyderabad, India",
      period: "Nov 2021 – Dec 2023",
      bullets: [
        "Analyzed large-scale IT infrastructure and incident log datasets using advanced SQL queries and Python/PowerShell automation, identifying utilization trends and reducing system downtime by approximately 20% across 500+ servers.",
        "Developed automated performance reports and KPI dashboards for server health monitoring, enabling data-driven decision-making and automating 25% of manual reporting tasks for Amway-Alticor client operations.",
        "Conducted trend analysis on infrastructure performance data and presented actionable insights to cross-functional teams, improving operational efficiency through process gap remediation.",
        "Created visual reports and compliance audit summaries aligned with organizational standards, strengthening reliability of enterprise analytics reporting environments.",
      ],
    },
    {
      role: "Graduate Data Analyst & Research Assistant",
      company: "University of Detroit Mercy",
      location: "Detroit, MI, USA",
      period: "Jan 2024 – Apr 2025",
      bullets: [
        "Performed anomaly detection and CAN ID classification using Isolation Forest and Random Forest models in Python, achieving over 99% accuracy on vehicle telemetry datasets at the Vehicle Cyber Engineering Lab.",
        "Developed Python scripts to automate CAN log-to-CSV preprocessing pipelines and built secure MQTT-based data transmission workflows for remote monitoring and analytics.",
        "Conducted data analysis and report writing for Boys and Girls Club community impact research, including survey design, data collection, cleaning, and stakeholder visualizations.",
        "Built Excel-based performance tracking dashboards for aeroponics research and developed podcast listener engagement analytics to improve content planning and operational reporting.",
      ],
    },
  ],
  projectEntries: [
    {
      name: "COVID-19 Mental Health Capstone Analytics",
      tools: "Python, Scikit-learn, SQL, Matplotlib, Seaborn, U.S. Census Pulse Survey",
      bullets: [
        "Analyzed 3,800+ U.S. Census Household Pulse Survey records using data cleaning, label encoding, IQR outlier removal, and correlation analysis to evaluate mental health medication usage trends.",
        "Built a Random Forest Regressor forecasting model achieving R² = 0.94 and RMSE = 1.84, predicting 19.22% medication usage for the 18–29 age group in January 2025.",
        "Delivered demographic bar charts, temporal trend visualizations, and feature importance analysis supporting data-driven mental health service planning.",
        "Applied statistical modeling and exploratory data analysis workflows under faculty advisor Dr. Douglas MacDonald (DATA 5130 Capstone).",
      ],
    },
    {
      name: "Lung Cancer Predictive Analytics",
      tools: "Python, Pandas, Scikit-learn, SQL, Matplotlib, Kaggle Dataset",
      bullets: [
        "Preprocessed 980 patient samples with 12 selected features using IQR outlier removal, one-hot encoding, Min-Max normalization, and Information Gain feature selection.",
        "Trained and compared Logistic Regression, Decision Tree, and Random Forest models with 70/30 train-test split and 10-fold cross-validation.",
        "Achieved 97.5% classification accuracy with Decision Tree and Random Forest; top predictors included coughing of blood, wheezing, and chest pain.",
        "Produced model comparison charts for accuracy, precision, recall, and F1-score supporting early risk identification use cases.",
      ],
    },
    {
      name: "Air Cargo Database & SQL Reporting",
      tools: "MySQL, SQL, ER Modeling, Database Design",
      bullets: [
        "Designed a normalized relational database in MySQL through 1NF, 2NF, and 3NF for shipment tracking across customers, carriers, cargo, routes, and invoices.",
        "Built Shipment Tracking, Customer Shipment History, and Carrier Performance SQL reports for operational analytics and logistics reporting.",
        "Established primary and foreign key constraints and entity relationships supporting scalable reporting environments for analytics teams.",
        "Delivered database documentation and SQL query logic supporting real-time shipment status and carrier performance monitoring.",
      ],
    },
    {
      name: "TiTAns Bot — Course Registration Analytics",
      tools: "Python, NLP, chainlit, langchain, sentence_transformers",
      bullets: [
        "Developed a Python-based conversational AI chatbot using NLP lemmatization, chainlit, and langchain to streamline University of Detroit Mercy course registration.",
        "Implemented intent detection, entity extraction, and automated response logic to reduce manual advisor workload and improve student self-service enrollment.",
        "Increased successful course registrations by 25% in the first month through workflow automation and user interaction tracking for process improvement.",
        "Collaborated with engineering teammates to deliver an AI-powered registration assistant supporting prerequisites, schedules, and enrollment queries.",
      ],
    },
  ],
  educationLines: [
    "Master's in Applied Data Analytics | University of Detroit Mercy | Detroit, USA | May 2025",
    "Bachelor's in Mechanical Engineering | Anurag University | Hyderabad, India | Jun 2021",
  ],
  achievement: {
    title: "First Prize — Detroit Urban Health AI Challenge (Chatbot AI Track)",
    desc: "Collaborated on designing and developing an Insomnia Personal Assistant Chatbot using Generative AI on the Scholar AID platform. Created and trained datasets, refined bot responses, and enhanced functionality to assist patients with insomnia management.",
  },
};
