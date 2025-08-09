import React, { useEffect, useRef } from "react";
import { srConfig } from "../config";
import sr from "../utils/sr";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export default function Projects() {
  const styles = {
    projectsSection: `py-20`,
    projectsHeading: `text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-violet-500 to-sky-300 text-left font-bold mb-10 lg:mb-7`,
    projectsContent: `space-y-8`,
    projectItem: `p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-500 transition-colors duration-300`,
    projectHeader: `flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4`,
    projectTitle: `text-xl font-semibold text-gray-900 dark:text-white`,
    projectCategory: `text-violet-600 dark:text-violet-400 font-medium`,
    projectDescription: `text-gray-700 dark:text-gray-300 leading-relaxed mb-4`,
    projectFeatures: `space-y-2 mb-4`,
    projectFeature: `text-sm text-gray-600 dark:text-gray-400 before:content-['▸'] before:mr-2 before:text-violet-500`,
    projectSkills: `flex flex-wrap gap-2`,
    skillTag: `px-3 py-1 text-xs font-medium bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 rounded-full`,
    projectLink: `inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors duration-200`,
    projectLinkIcon: `w-4 h-4 hover:scale-110 transition-transform duration-200`,
  };

  const projects = [
    {
      title: "SEMPOA ERP",
      category: "Enterprise Resource Planning System",
      description: "Developed an ERP system using Laravel 10 and jQuery for comprehensive financial management and business operations.",
      link: "https://sempoa.id/",
      features: [
        "Implemented features for asset management and automatic depreciation",
        "Created multi-company financial reporting with automated monthly reports",
        "Developed and integrated APIs for system functionality and external interfaces",
        "Asset Addition & Depreciation: Module for adding new assets and automatic monthly depreciation journaling via cron jobs",
        "Consolidated Reports: Supports multi-company functionality for balance sheets and profit & loss reports",
        "Multi-Company Structure: Enables parent companies, financial reports, and journal entries for multiple child companies"
      ],
      skills: ["Laravel 10", "jQuery", "MySQL", "API Development", "ERP Systems", "Financial Management", "Multi-company Architecture", "Cron Jobs", "Asset Management"]
    },
    {
      title: "BIKO PROCESSING",
      category: "Invoice Processing System",
      description: "Designed and implemented APIs for seamless integration between Biko, Sempoa, and the POS system QUINOS using Express.js and MySQL.",
      link: "https://biko.sempoa.id/login",
      features: [
        "Managed invoice mapping and Chart of Accounts (COA) integration",
        "Generated daily financial reports and developed features for partner-specific product management",
        "Ensured compatibility and data flow with QUINOS",
        "Daily Report: Generates daily reports based on the report date, downloadable in Excel format",
        "Partner Management: Allows the addition of partners",
        "Good Receipt: Created functionality for managing good receipts",
        "Partner Products: Enables each partner to add and manage their own products",
        "API Development: Developed APIs for invoices, partners, and products to integrate between Sempoa and Biko"
      ],
      skills: ["Express.js", "MySQL", "API Development", "Invoice Processing", "Financial Reporting", "System Integration", "Partner Management", "Excel Export"]
    },
    {
      title: "NEXUS (ACCOUNT CENTER FOR MANAGEMENT)",
      category: "Centralized System Management",
      description: "Developed the NEXUS web application as a centralized hub for integrated system management.",
      link: "https://nexus-staging.sempoa.id/login",
      features: [
        "Provided a Company module for configuring systems built by the organization",
        "Implemented separate User and Roles modules to allow customizable access control after system registration",
        "Integrated robust authentication features, including login and forgot password, to ensure security and user convenience",
        "Centralized hub for integrated system management",
        "Company module for configuring systems built by the organization",
        "User and Roles modules for customizable access control",
        "Robust authentication features including login and forgot password"
      ],
      skills: ["Web Application", "System Management", "User Management", "Role-based Access Control", "Authentication", "Security", "Centralized Management"]
    },
    {
      title: "SEMPOA ERP V2",
      category: "Enhanced ERP System",
      description: "Advanced version of the ERP system with enhanced features for comprehensive business management.",
      features: [
        "Create Company – Users can create and manage multiple company profiles within the system",
        "Roles and Permissions – Define and manage different roles for users, granting appropriate access and permissions",
        "User Management – Create and manage user accounts with varying levels of access to the ERP system",
        "General Journal – Record all financial transactions and maintain a comprehensive general ledger",
        "Invoice Management – Create, send, and track invoices for goods and services",
        "Voucher System – Generate and manage vouchers for internal or external use",
        "Expense Management – Track and categorize business expenses for better financial oversight",
        "Account Product – Manage products and services associated with different accounts",
        "Partner Management – Add and manage business partners within the ERP system",
        "Account Configuration – Configure account settings for accounting purposes, including tax rates and financial settings",
        "Account Migration from Excel – Import account data from Excel files for seamless data migration into the ERP system"
      ],
      skills: ["Laravel", "MySQL", "ERP Systems", "Financial Management", "User Management", "Invoice Management", "Voucher System", "Expense Management", "Partner Management", "Excel Import"]
    },
    {
      title: "SNAPTIX ID (PLATFORM TICKETING)",
      category: "Event Ticketing Platform",
      description: "Comprehensive ticketing platform for event management and ticket sales with multiple features.",
      link: "https://snaptix.id/",
      features: [
        "Allows users to sign in or register using their Google account for secure and seamless access",
        "Admins can create and manage multiple organizations to host and oversee various events",
        "Users can create events with full details such as event name, date, location, and description",
        "Organizers can create multiple ticket types (e.g., VIP, Regular) with customizable pricing and quotas",
        "Voucher Code Support – Users can apply voucher codes for discounts and promotional offers during ticket purchases",
        "Point of Sales (POS) for Offline Sales – Supports on-site ticket sales using a POS system",
        "Mobile & Desktop Applications – Desktop Application with Handheld Scanner Support",
        "Generates detailed reports on ticket sales, event performance, and attendee statistics",
        "Displays a list of attendees who purchased tickets, including ticket type, payment status, and contact details"
      ],
      skills: ["React.js", "Node.js", "Mobile Development", "POS System", "Google OAuth", "Event Management", "Ticket Sales", "Voucher System", "Reporting", "Scanner Integration"]
    },
    {
      title: "SNAPTIX SCANNER MOBILE APP",
      category: "Mobile Ticket Scanning Application",
      description: "Mobile application development for barcode ticket scanning, enabling quick and efficient ticket validation on both iOS and Android platforms.",
      features: [
        "Implemented login functionality and organization/event selection to customize the scanning experience",
        "Enabled barcode scanning for ticket validation and manual ticket input for quick corrections",
        "Displayed real-time total scanned tickets and sold tickets for event tracking",
        "Offline and Online Mode Configuration – Integrated an automatic switch between online and offline modes",
        "Configured the system to always use intranet mode when available, and automatically switch to internet mode if internet access is detected",
        "Enabled offline mode when no internet connection is available, ensuring continuous scanning functionality",
        "Developed a system to switch between e-ticket scanning and wristband ticket scanning based on the event's requirements"
      ],
      skills: ["React Native", "Mobile Development", "Barcode Scanning", "Offline Mode", "Real-time Data", "iOS", "Android", "Event Management", "Ticket Validation"]
    },
    {
      title: "E-SNAP (SURAT KUASA)",
      category: "Legal Authorization System",
      description: "Developed 'Surat Kuasa' feature for secure concert ticket transfers with legal authorization and identity verification.",
      features: [
        "Enabled legal authorization and identity verification for ticket handovers",
        "Ensured validation at check-in to prevent fraudulent access",
        "Secure concert ticket transfers with legal documentation",
        "Identity verification system for ticket transfers"
      ],
      skills: ["Legal Systems", "Identity Verification", "Ticket Transfers", "Security", "Authorization", "Fraud Prevention"]
    },
    {
      title: "E-SNAP SCANNER",
      category: "Advanced Ticket Scanning System",
      description: "Advanced scanning system supporting multiple modes for uninterrupted ticket scanning during events.",
      features: [
        "Supports Offline, Online, Intranet, and Hybrid modes to ensure uninterrupted ticket scanning",
        "All scans are logged locally during offline mode and automatically synchronized to the server when the connection is restored",
        "Seamlessly switches between intranet and internet without interrupting the scanning process",
        "Instantly identifies previously scanned QR codes and displays clear scan status",
        "Provides instant visual and sound alerts for each scan result, enhancing gate efficiency and user experience",
        "Scans tickets using a local server/network (LAN) when internet access is unavailable",
        "Allows QR data to be loaded before the event, enabling fully offline ticket validation if needed"
      ],
      skills: ["QR Code Scanning", "Offline Mode", "Real-time Synchronization", "Network Management", "Event Management", "Ticket Validation", "Local Server", "Hybrid Systems"]
    },
    {
      title: "ABACUS POS (BACK OFFICE)",
      category: "Point of Sale Management System",
      description: "Comprehensive back office system to manage POS operations, enhancing efficiency across multiple retail outlets.",
      link: "https://pos-staging.sempoa.id/login",
      features: [
        "Implemented robust menu management with AI-powered category creation",
        "Designed an item management system with attributes such as name, price, and unit, incorporating AI-powered unit conversion",
        "Integrated multi-outlet functionality, enabling centralized control for multiple retail locations",
        "Enabled creation of user accounts and outlet management, including QR code-based login for user authentication and attendance tracking",
        "Developed an invoice creation feature to streamline the billing process",
        "Added a vendor management system to handle supplier details and product sourcing efficiently",
        "Integrated a table management feature, allowing the creation and assignment of table numbers for restaurant-style POS operations"
      ],
      skills: ["POS System", "AI Integration", "Menu Management", "Multi-outlet", "QR Code Authentication", "Invoice Management", "Vendor Management", "Table Management", "Retail Systems"]
    },
    {
      title: "SNAPTIX (BACK OFFICE)",
      category: "Event Management Back Office",
      description: "Comprehensive back office system for event organizers with advanced management features.",
      link: "https://backoffice-snaptix-production.up.railway.app/login",
      features: [
        "Developed and implemented tax schema setup for event organizers",
        "Created and managed event category system",
        "Built account creation flow for event organizers",
        "Designed and implemented organization verification (e.g., ID/NPWP upload)",
        "Developed ticket resend functionality for attendees",
        "Built event preview feature before approval",
        "Developed organization info preview (KTP/NPWP)",
        "Implemented API to enable POS system",
        "Designed revenue dashboard (overall & per event)",
        "Developed transaction queue setting per event"
      ],
      skills: ["Back Office Systems", "Event Management", "Tax Management", "Organization Verification", "Revenue Dashboard", "API Development", "Transaction Management", "User Management"]
    },
    {
      title: "POINT OF SALES MOBILE APP",
      category: "Mobile POS Application",
      description: "Mobile point of sale application with advanced features for retail and restaurant operations.",
      features: [
        "Integrated QR code scanning for user check-in/check-out, logging attendance with time and user details",
        "Implemented login functionality via QR code, allowing staff to log in automatically by scanning their unique QR code",
        "Integrated Bluetooth printer support to print receipts and bills to both cashier and kitchen printers",
        "Added printer settings to allow selection of different printers for tasks, using libraries like escpos-php for receipt printing",
        "Created a page to display and summarize closed bills, showing total sales, transactions, and product breakdowns with filters by time or cashier",
        "Developed a page to manage open (unpaid) bills, allowing cashiers to sort, filter, and close bills",
        "Created an order management page with unique order codes, allowing order creation, viewing, and status updates"
      ],
      skills: ["Mobile Development", "QR Code Scanning", "Bluetooth Printing", "POS System", "Order Management", "Billing System", "Attendance Tracking", "Receipt Printing", "Sales Reporting"]
    }
  ];

  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    // Optimized scroll reveal configuration for better performance
    const optimizedConfig = {
      origin: "bottom",
      distance: "20px",
      duration: 300, // Reduced from 500
      delay: 100, // Reduced from 500
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Faster easing
      mobile: true,
      reset: false,
      useDelay: "always",
      viewFactor: 0.1, // Reduced from 0.25 for earlier trigger
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    if (revealContainer.current) {
      sr.reveal(revealContainer.current, optimizedConfig);
    }
  }, []);

  return (
    <section id="projects" ref={revealContainer} className={styles.projectsSection}>
      <div className="inline-flex space-x-2">
        <h1 className={styles.projectsHeading}>Projects</h1>
      </div>
      <div className={styles.projectsContent}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.projectHeader}>
              <div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectCategory}>{project.category}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Visit Website
                  <FaExternalLinkSquareAlt className={styles.projectLinkIcon} />
                </a>
              )}
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.projectFeatures}>
              {project.features.map((feature, featureIndex) => (
                <p key={featureIndex} className={styles.projectFeature}>
                  {feature}
                </p>
              ))}
            </div>
            <div className={styles.projectSkills}>
              {project.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
