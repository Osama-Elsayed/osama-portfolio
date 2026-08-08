/* ============================================================
   OSAMA ELSAYED — PORTFOLIO DATA
   ============================================================
   This is the only file you need to edit to update your site.
   Do NOT touch index.html or style.css unless you want to change
   the design itself.

   TO ADD A NEW PROJECT: copy one of the objects inside PROJECTS,
   paste it below the last one, add a comma, and fill in your own
   values. The site rebuilds itself automatically — just save and
   refresh the page.

   Field guide for each project:
     id        - short lowercase code, no spaces (used internally)
     title     - project name shown as the card headline
     tag       - 2-4 word category, shown as a small pill
     period    - e.g. "2025 – 2026" or "Feb 2026"
     summary   - 1-3 sentences. What it is and what it solved.
     stack     - array of tool names, shown as chips
     highlights- array of short bullet strings (results/details)
     metrics   - up to 3 {label, value} pairs shown as big numbers
     link      - optional URL to a live demo/repo. Leave "" to hide.
   ============================================================ */

const PROJECTS = [
  {
    id: "pharmacy",
    title: "7777 Pharmacy Group — Multi-Branch Analytics Platform",
    tag: "End-to-end BI system",
    period: "2025 – 2026",
    summary:
      "A complete analytics system for a three-branch Saudi pharmacy chain (Ranyah, Makkah, Al-Laith): a SQL Server star schema, a Python ETL desktop/web app, and a 4-page Power BI dashboard with row-level security by branch.",
    stack: ["SQL Server", "Power BI", "DAX", "Power Query", "Python", "FastAPI"],
    highlights: [
      "Repaired corrupted, semicolon-delimited POS exports and mismatched product-category names across two source systems",
      "Designed a star schema (Fact_Sales, Fact_Inventory, Dim_Products, Dim_Branch, Dim_Pharmacists) with 40+ DAX measures",
      "Found and fixed a critical stock-quantity bug that was silently excluding ~35% of inventory units",
      "Built a Python ETL app (desktop, then converted to a multi-user FastAPI web app with authentication)",
    ],
    metrics: [
      { label: "Branches", value: "3" },
      { label: "DAX measures", value: "40+" },
      { label: "Report pages", value: "4" },
    ],
    link: "",
  },
  {
    id: "attrition",
    title: "Teleperformance — HR Attrition & People Analytics",
    tag: "Workforce analytics",
    period: "2025",
    summary:
      "A multi-page Power BI report analyzing employee attrition and retention, built for workforce planning — with derived risk scoring and satisfaction indices leadership could act on directly.",
    stack: ["Power BI", "DAX", "Power Query"],
    highlights: [
      "Modeled derived dimensions: age group, income bucket, distance category, and promotion group",
      "Built an Attrition Risk Index and Job Satisfaction score from raw HR fields",
      "Added filter-reset bookmarks and dynamic HTML headers for a cleaner executive UX",
      "Corrected schema issues and fixed mismatched visual types inherited from an earlier draft",
    ],
    metrics: [
      { label: "Custom measures", value: "50+" },
      { label: "Risk dimensions", value: "4" },
    ],
    link: "",
  },
  {
    id: "globalsales",
    title: "Global Sales Performance Dashboard",
    tag: "Multi-currency sales analytics",
    period: "2025",
    summary:
      "A global sales performance model spanning multiple currencies and territories, with year-over-year growth tracking and live currency conversion built directly into the DAX layer.",
    stack: ["Power BI", "DAX", "SQL"],
    highlights: [
      "Built dynamic currency conversion so revenue can be viewed in any reporting currency",
      "Modeled YoY growth two different ways to validate results against each other",
      "Segmented performance by sales territory and product for regional decision-making",
    ],
    metrics: [
      { label: "Currencies", value: "Multi" },
      { label: "Comparison", value: "YoY" },
    ],
    link: "",
  },
  {
    id: "realestate",
    title: "Real Estate Market Data Cleaning & Analysis",
    tag: "Python · data cleaning",
    period: "2024",
    summary:
      "An end-to-end Python pipeline cleaning and combining two messy real-world datasets — property listings and customer records — into a single analysis-ready table.",
    stack: ["Python", "Pandas", "NumPy", "Jupyter"],
    highlights: [
      "Diagnosed and resolved inconsistent formatting, missing values, and mismatched keys across two sources",
      "Documented the pipeline as a beginner-friendly 14-step reusable data-cleaning checklist",
      "Combined properties and customer tables into one clean dataset ready for analysis",
    ],
    metrics: [
      { label: "Source tables", value: "2" },
      { label: "Cleaning steps", value: "14" },
    ],
    link: "",
  },
];

/* ------------------------------------------------------------
   EXPERIENCE — reverse-chronological. Same idea: copy, paste,
   edit. This drives the timeline section.
   ------------------------------------------------------------ */
const EXPERIENCE = [
  {
    role: "Senior Data Analyst",
    org: "Z2Data",
    period: "Jan 2022 – Present",
    points: [
      "Lead BI reporting for major public-company accounts (Google, Apple, GM), automating recurring dashboards",
      "Chair weekly KPI review sessions with leadership",
      "Re-engineer SQL queries and data models, cutting query run times and recurring data errors",
      "Mentor junior analysts on SQL, Power BI, and data modeling",
    ],
  },
  {
    role: "Data Analyst II",
    org: "Z2Data",
    period: "Jan 2020 – Jan 2022",
    points: [
      "Built interactive Power BI dashboards for supplier risk and KPI tracking",
      "Delivered time-sensitive alerts on critical business changes",
      "Ran data validation and root-cause analysis to improve report reliability",
    ],
  },
  {
    role: "Junior Data Analyst",
    org: "Z2Data",
    period: "Jun 2018 – Jan 2020",
    points: [
      "Collected, validated, and structured large multi-source datasets",
      "Cleaned and transformed data for recurring reporting",
      "Collaborated cross-functionally to align data structures with business needs",
    ],
  },
];

/* ------------------------------------------------------------
   SKILLS — grouped chips. Add/remove freely.
   ------------------------------------------------------------ */
const SKILLS = [
  { group: "Databases & SQL", items: ["SQL Server", "CTEs & Window Functions", "Query Optimization", "Star Schema Design"] },
  { group: "BI & Visualization", items: ["Power BI", "DAX", "Power Query", "Deneb / Vega-Lite", "Row-Level Security"] },
  { group: "Programming", items: ["Python", "Pandas", "NumPy", "Matplotlib"] },
  { group: "Practice", items: ["Data Cleaning & Validation", "KPI Design", "Report Automation", "Stakeholder Reporting"] },
];

/* ------------------------------------------------------------
   PROFILE — top-level facts used in the hero / about / footer.
   ------------------------------------------------------------ */
const PROFILE = {
  name: "Osama Elsayed",
  fullName: "Osama Elsayed Mohamed Ibrahim",
  title: "Senior Data Analyst",
  location: "Cairo, Egypt",
  email: "osama.sayed1993@gmail.com",
  phone: "01064334319",
  linkedin: "https://www.linkedin.com/in/osama-el-sayed-b67027a5/",
  summary:
    "Senior Data Analyst with 6+ years designing end-to-end BI solutions — from data cleaning and star-schema modeling to DAX measures and executive-ready Power BI dashboards. Delivered recurring analytics and supplier-risk reporting for Fortune 500 accounts including Google, Apple, and GM.",
  achievements: [
    "3rd Place, Data Analysis Hackathon — Orange Digital Center (95% score, 28-hour case competition, Feb 2026)",
    "Power BI, DAX, Power Query & Data Modeling — 365 Data Science",
    "Advanced SQL & SQL Fundamentals — 365 Data Science",
    "Python & Pandas for Data Analysis — 365 Data Science",
    "Data Analysis Program (Excel, Power BI, SQL, Python) — EraaSoft Academy",
  ],
};
