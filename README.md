<p align="center">
  <img src="https://patiants-project.vercel.app/assets/icons/logo-full.svg" width="300" />
</p>
<p align="center">
    <h1 align="center">PATIENTS_PROJECT</h1>
</p>
<p align="center">
    <em><code>► visit : https://patiants-project.vercel.app</code></em>
</p>
<p align="center">
 <img src="https://img.shields.io/github/license/mohammedzkullab/patiants_project?style=flat&color=0080ff" alt="license">
 <img src="https://img.shields.io/github/last-commit/mohammedzkullab/patiants_project?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
 <img src="https://img.shields.io/github/languages/top/mohammedzkullab/patiants_project?style=flat&color=0080ff" alt="repo-top-language">
 <img src="https://img.shields.io/github/languages/count/mohammedzkullab/patiants_project?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
  <em>Developed with the software and tools below.</em>
</p>
<p align="center">
 <img src="https://img.shields.io/badge/Next.js-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
 <img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
 <img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
 <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
 <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
 <img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running patiants_project](#-running-patiants_project)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The Patients Project is a comprehensive system designed to manage patient information and medical records. This project is built to streamline the process of handling patient data, appointments, and medical histories, making it easier for healthcare providers to manage their day-to-day operations. It leverages modern web technologies to provide a responsive and user-friendly interface, ensuring that medical professionals can access the data they need quickly and efficiently.

The system is developed using a robust tech stack, ensuring scalability, security, and ease of maintenance. This project serves as an excellent foundation for healthcare management systems and can be expanded to include additional features and integrations as needed.

---

## 📦 Features

- Patient Management: Easily add, edit, and delete patient records, including personal details and medical history.
- Appointment Scheduling: Schedule, view, and manage appointments with a calendar view, ensuring efficient time management.
- Medical Records: Store and access detailed medical records for each patient, including diagnosis, treatment plans, and prescription history.
- Responsive Design: The interface is designed to work seamlessly across various devices, including desktops, tablets, and smartphones.
- Data Security: Implement secure user authentication and data encryption to protect sensitive patient information.
- Search and Filter: Quickly search and filter patient records and appointments, allowing for efficient data retrieval.
- User Management: Handle multiple user roles, such as doctors, nurses, and administrators, with appropriate access control.
- Notifications: Send reminders and alerts for upcoming appointments or required actions, improving workflow efficiency.

---

## 📂 Repository Structure

```sh
└── patiants_project/
    ├── README.md
    ├── components.json
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── assets
    │   │   ├── gifs
    │   │   ├── icons
    │   │   └── images
    │   ├── favicon.ico
    │   ├── next.svg
    │   └── vercel.svg
    ├── sentry.client.config.ts
    ├── sentry.edge.config.ts
    ├── sentry.server.config.ts
    ├── src
    │   ├── app
    │   │   ├── admin
    │   │   │   ├── page.tsx
    │   │   │   └── test.ts
    │   │   ├── api
    │   │   │   └── sentry-example-api
    │   │   │       └── route.ts
    │   │   ├── favicon.ico
    │   │   ├── global-error.tsx
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   └── patients
    │   │       └── [userId]
    │   │           ├── new-appointment
    │   │           └── register
    │   ├── components
    │   │   ├── AppointmentModal.tsx
    │   │   ├── CustomFormField.tsx
    │   │   ├── FileUploader.tsx
    │   │   ├── Forms
    │   │   │   ├── AppointmentForm
    │   │   │   ├── PatientForm
    │   │   │   ├── RegisterForm
    │   │   │   └── index.ts
    │   │   ├── PasskeyModal.tsx
    │   │   ├── StatCard.tsx
    │   │   ├── StatusBadge.tsx
    │   │   ├── SubmitButton.tsx
    │   │   ├── ThemeProvider
    │   │   │   └── index.tsx
    │   │   ├── table
    │   │   │   ├── DataTable.tsx
    │   │   │   └── columns.tsx
    │   │   └── ui
    │   │       ├── alert-dialog.tsx
    │   │       ├── button.tsx
    │   │       ├── checkbox.tsx
    │   │       ├── dialog.tsx
    │   │       ├── form.tsx
    │   │       ├── input-otp.tsx
    │   │       ├── input.tsx
    │   │       ├── label.tsx
    │   │       ├── radio-group.tsx
    │   │       ├── select.tsx
    │   │       ├── table.tsx
    │   │       └── textarea.tsx
    │   ├── constants
    │   │   └── index.ts
    │   ├── instrumentation.ts
    │   ├── lib
    │   │   ├── Providers.tsx
    │   │   ├── actions
    │   │   │   ├── appointment.actions.ts
    │   │   │   └── patient.actions.ts
    │   │   ├── appwrite.config.ts
    │   │   ├── utils.ts
    │   │   └── validation.ts
    │   └── types
    │       ├── appwrite.types.ts
    │       └── index.d.ts
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the patiants_project repository:

```sh
git clone https://github.com/mohammedzkullab/patiants_project
```

2. Change to the project directory:

```sh
cd patiants_project
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running patiants_project

Use the following command to run patiants_project:

```sh
npm run dev
```

---

## 📄 License

open source repository.

## 👏 Acknowledgments

- jsMastery [https://youtu.be/lEflo_sc82g?si=EXnsllTZmtDKgl4q](https://youtu.be/lEflo_sc82g?si=EXnsllTZmtDKgl4q)
  [**Return**](#-quick-links)

---
