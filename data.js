/* ============================================================
   OSAMA ELSAYED — PORTFOLIO DATA
   ============================================================
   This is the only file you need to edit to update your site.
   Do NOT touch index.html or style.css unless you want to change
   the design itself.

   TO ADD A NEW PROJECT: copy one of the objects inside PROJECTS,
   paste it where you want it in the list, add a comma, and fill
   in your own values. Save and refresh — the site rebuilds itself.

   Field guide for each project:
     id        - short lowercase code, no spaces (used internally)
     featured  - true = shown as the large card at the top (use on ONE project)
     title     - project name shown as the card headline
     tag       - 2-4 word category, shown as a small pill
     period    - e.g. "2025 – 2026" or "Feb 2026"
     image     - screenshot path, e.g. "images/pharmacy.jpg" (16:9 works best).
                 Leave "" to show a clean placeholder instead.
     summary   - 1-3 sentences. What it is and what it solved.
     stack     - array of tool names, shown as chips (also drives the filters)
     highlights- array of short bullet strings (shown in the "Case study" popup)
     metrics   - up to 3 {label, value} pairs shown as big numbers
     link      - optional URL to a live demo/repo. Leave "" to hide.
     linkLabel - optional button text. Defaults to "Live dashboard".
   ============================================================ */

const PROJECTS = [
  {
    id: "pharmacy",
    featured: true,
    title: "7777 Pharmacy Group — Multi-Branch Analytics Platform",
    tag: "End-to-end BI system",
    period: "2025 – 2026",
    image: "images/pharmacy.jpg",
    summary:
      "A complete analytics system for a three-branch Saudi pharmacy chain (Ranyah, Makkah, Al-Laith): a SQL Server star schema, a Python ETL desktop/web app, and a Power BI dashboard with row-level security by branch.",
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
    link: "https://app.powerbi.com/view?r=eyJrIjoiNTcxOWI1ZmQtNzlkYS00MjJkLThiODItMjgwZjk0YmU5MWMyIiwidCI6IjQxNTRmZDBlLTY5OTMtNDFmNS1iMmQ3LTY5OWU0ZjBiZjA2ZSJ9",
  },
  {
    id: "salespulse",
    title: "Sales Pulse — Fast-Food Sales Audit & Rebuild",
    tag: "Audit & rebuild",
    period: "2026",
    image: "images/salespulse.jpg",
    summary:
      "A 7-page Power BI report auditing two months of sales for a fast-food chain in Makkah, Jeddah and Taif. It proves the +54% month-over-month jump was a Ramadan calendar effect, not growth, and ships a data-quality page that shows every fix.",
    stack: ["Power BI", "DAX", "Power Query"],
    highlights: [
      "Showed the +54% May jump was Ramadan timing: daily sales fell 44% during Ramadan, then ran 10% above pre-Ramadan after Eid",
      "Built a data-quality log that recalculates on every refresh: 9 checks, affected rows, treatment and status for each",
      "Traced a 3× gap between line totals and order totals across 39K orders and flagged the definition question for the data owner",
      "Corrected future-dated timestamps and flagged unverifiable branches instead of silently dropping them",
      "Star schema with two fact tables (order lines and order headers) sharing Date, Branch and Hour dimensions",
    ],
    metrics: [
      { label: "Report pages", value: "7" },
      { label: "Orders audited", value: "39K" },
      { label: "Quality checks", value: "9" },
    ],
    link: "https://app.powerbi.com/view?r=eyJrIjoiMTczYzc0ODItMWY4MS00OWFmLWI3NDUtNDhkOGRlNjBhNTVjIiwidCI6IjQxNTRmZDBlLTY5OTMtNDFmNS1iMmQ3LTY5OWU0ZjBiZjA2ZSJ9",
  },
  {
    id: "attrition",
    title: "Teleperformance — HR Attrition & People Analytics",
    tag: "Workforce analytics",
    period: "2025",
    image: "images/attrition.jpg",
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
      { label: "Employees analyzed", value: "1,470" },
      { label: "Custom measures", value: "50+" },
      { label: "Risk dimensions", value: "4" },
    ],
    link: "https://app.powerbi.com/view?r=eyJrIjoiNmU4NjY0NDctZjhiYy00OWIxLWJmY2YtYmVlNjJlYzZiODI4IiwidCI6IjQxNTRmZDBlLTY5OTMtNDFmNS1iMmQ3LTY5OWU0ZjBiZjA2ZSJ9",
  },
  {
    id: "globalsales",
    title: "Global Sales Performance Dashboard",
    tag: "Multi-currency sales analytics",
    period: "2025",
    image: "images/globalsales.jpg",
    summary:
      "A global sales performance model spanning six currencies and six countries, with year-over-year growth tracking and live currency conversion built directly into the DAX layer.",
    stack: ["Power BI", "DAX", "SQL"],
    highlights: [
      "Built dynamic currency conversion so revenue can be viewed in any of six reporting currencies",
      "Modeled YoY growth two different ways to validate results against each other",
      "Segmented performance by country, customer and product for regional decision-making",
    ],
    metrics: [
      { label: "Currencies", value: "6" },
      { label: "Countries", value: "6" },
    ],
    link: "https://app.powerbi.com/view?r=eyJrIjoiZjY5NWJmOWYtYmQ5OS00Mjk2LWE2ZDYtM2E5YzUxNjg2M2NhIiwidCI6IjQxNTRmZDBlLTY5OTMtNDFmNS1iMmQ3LTY5OWU0ZjBiZjA2ZSJ9",
  },
  {
    id: "realestate",
    title: "Real Estate Market Data Cleaning & Analysis",
    tag: "Python · data cleaning",
    period: "2024",
    image: "",
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
    link: "Data Analyst Career Track Project.html",
    linkLabel: "View notebook",
  },
];

/* ------------------------------------------------------------
   EXPERIENCE — reverse-chronological. Same idea: copy, paste,
   edit. This drives the timeline section.
   type: optional small label, e.g. "Part-time · Remote"
   ------------------------------------------------------------ */
const EXPERIENCE = [
  {
    role: "Power BI Developer",
    org: "7777 Pharmacy Group",
    type: "Part-time · Remote (KSA)",
    period: "Sep 2026 – Present",
    points: [
      "Built a SQL Server star schema with stored procedures to load sales and inventory data for a three-branch pharmacy chain",
      "Developed a multi-branch Power BI dashboard with DAX measures and Row-Level Security by branch",
    ],
  },
  {
    role: "Senior Data Analyst",
    org: "Z2Data",
    type: "Full-time",
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
  { group: "Databases & SQL", items: ["SQL Server", "T-SQL", "Stored Procedures", "CTEs & Window Functions", "Query Optimization"] },
  { group: "BI & Visualization", items: ["Power BI", "DAX", "Power Query", "Deneb / Vega-Lite", "Row-Level Security"] },
  { group: "Data Modeling", items: ["Star Schema Design", "KPI Design", "Data Reconciliation", "Data Quality Checks"] },
  { group: "Programming", items: ["Python", "Pandas", "NumPy", "FastAPI", "Matplotlib"] },
];

/* ------------------------------------------------------------
   PROFILE — top-level facts used in the hero / about / footer.
   Leave any link "" to hide its button.
   ------------------------------------------------------------ */
const PROFILE = {
  name: "Osama Elsayed",
  fullName: "Osama Elsayed Mohamed Ibrahim",
  title: "Senior Data Analyst",
  subtitle: "Senior Data Analyst & Power BI Developer",
  location: "Cairo, Egypt",
  email: "osama.sayed1993@gmail.com",
  phone: "+20 106 433 4319",
  linkedin: "https://www.linkedin.com/in/osama-el-sayed-b67027a5/",
  github: "",
  facebook: "https://www.facebook.com/osama.el.sayed.631557/",
  cvLink: "Osama_Elsayed.pdf",
  yearsExperience: "7+",
  available: "Open to BI Developer & Senior Data Analyst roles",
  headline: "I turn messy data into numbers leaders can trust.",
  summary:
    "Senior Data Analyst with 7+ years designing end-to-end BI solutions — from data cleaning and star-schema modeling to DAX measures and executive-ready Power BI dashboards. Delivered recurring analytics and supplier-risk reporting for Fortune 500 accounts including Google, Apple, and GM.",
  about1:
    "By day I lead BI reporting for some of the largest public companies in the world. On the side I build the whole stack for smaller businesses — the database, the pipeline and the dashboard. Both taught me the same lesson: a dashboard is only as good as the table underneath it.",
  about2:
    "Based in Cairo, Egypt — working across BI, data engineering, and analytics tooling, with a habit of tracing every dashboard number back to the raw table it came from.",
  clients: ["Google", "Apple", "GM"],
  education: "B.A. in Commerce (English Section) — Ain Shams University, 2016",
  award: "3rd Place, Data Analysis Hackathon — Orange Digital Center (95% score, 28-hour case competition, Feb 2026)",
  certifications: [
    "Power BI, DAX, Power Query & Data Modeling — 365 Data Science",
    "Advanced SQL & SQL Fundamentals — 365 Data Science",
    "Python & Pandas for Data Analysis — 365 Data Science",
    "Advanced Excel & Pivot Tables for Data Analysis — 365 Data Science",
    "Data Analysis Program (Excel, Power BI, SQL, Python) — EraaSoft Academy",
  ],
};
