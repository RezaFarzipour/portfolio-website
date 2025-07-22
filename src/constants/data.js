import { MdDashboard } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { TbReservedLine } from "react-icons/tb";
import { FaBloggerB, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { GiTrade } from "react-icons/gi";
import { CiWallet } from "react-icons/ci";
import { TbReportAnalytics } from "react-icons/tb";
import { FaChartBar } from "react-icons/fa";
import { MdDataSaverOff } from "react-icons/md";
import { SiPagerduty } from "react-icons/si";
import { CiSearch } from "react-icons/ci";

export const cardsData = [
  {
    titleKey: "card1.title",
    textKey: "card1.text",

    image: "images/personal-image.webp",
    type: "image",
  },
  {
    textKey: "card2.text",
    image: "images/tech4.jpg",
    type: "image",
  },
  {
    titleKey: "card3.title",
    textKey: "card3.text",
    video: "videos/glob.mp4",
    type: "video",
    button: true,
  },
  {
    titleKey: "card4.title",
    textKey: "card4.text",
    image: "images/grid4.png",
    type: "image",
  },
];

export const projects = [
  {
    id: 1,
    title: "Modern Portfolio",
    highlight: "Portfolio",
    videoSrc: "videos/landingpage.webm",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorem non aliquam iusto minus commodi...",
    externalLink: "#",
  },
  {
    id: 2,
    title: "Movie Landing",
    highlight: "Landing",
    videoSrc: "videos/project3.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorem non aliquam iusto minus commodi...",
    externalLink: "#",
  },
  {
    id: 3,
    title: "Animated Gaming",
    highlight: "Gaming",
    videoSrc: "videos/project1.mp4",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolorem non aliquam iusto minus commodi...",
    externalLink: "#",
  },
];

export const images = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/7.png",
  "images/8.png",
  "images/9.png",
];

//project detail page data

export const projectsDetails = [
  {
    id: 1,
    slug: "metallugical_research_center",
    title: " Metallugical Research Center",
    Role: "Frontend Developer",
    highlight: "Metallugical Research ",
    videoSrcWebm: "videos/metallugicallanding.webm",
    videoSrcMp4:"videos/metallugicallanding.mp4",
    client: "Islamic Azad University ",
    description: `This project was developed for the Metallurgy Research Center at Islamic Azad University, aimed at streamlining the process of managing laboratory services and bookings. The platform enables the admin team to upload and manage all available services, while customers can easily browse, reserve, and interact with the system.`,
    technologies: [
      {
        name: "NextJs",
        icon: RiNextjsFill,
        bgColor: "bg-white text-black",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        bgColor: "bg-blue-200 text-blue-800",
      },
      {
        name: "React Query",
        icon: SiReactquery,
        bgColor: "bg-white text-red-500",
      },

      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        bgColor: "bg-blue-50 text-blue-400",
      },
      {
        name: "Zustand",
        svg: "/images/zustand2.svg",
        bgColor: "bg-purple-100 text-purple-500",
      },
      {
        name: "Framer Motion",
        svg: "/images/framer-motion.svg",
        bgColor: "bg-purple-100 text-purple-500",
      },
      {
        name: "GraphQL",
        svg: "/images/graphql-icon.svg",
        bgColor: "bg-purple-100 text-purple-500",
      },
      {
        name: "React Hook Form",
        svg: "/images/react-hook-form.svg",
        bgColor: "bg-purple-100 text-purple-500",
      },
      {
        name: "Python",
        svg: "/images/python.svg",
        bgColor: "bg-purple-100 text-purple-500",
      },
      {
        name: "Django",
        svg: "/images/django.svg",
        bgColor: "bg-[#1a6045] text-purple-500",
      },

      {
        name: "MongoDB",
        icon: FaDatabase,
        bgColor: "bg-green-50 text-green-700",
      },
    ],
    KeyFeatures: [
      {
        icon: MdDashboard,
        text: "Dual Dashboard System: Separate, role-based dashboards for admins and customers with tailored access and control",
      },
      {
        icon: MdManageAccounts,
        text: "Service Management: Admins can add, update, or remove services from the platform.",
      },
      {
        icon: TbReservedLine,
        text: "Online Reservations: Customers can view available services and make real-time reservations.",
      },
      {
        icon: FaBloggerB,
        text: "Blog Module: A blog section for publishing updates, articles, and research-related news",
      },
    ],
    challenges: [
      "implementing a secure and scalable authentication system suitable for a dual-dashboard architecture",
      "services had to be shown as available or unavailable based on date/time and admin-defined capacity.",
      "Providing admins with an easy way to post research updates and articles without using a full CMS.",
    ],

    solutions: [
      "I implemented an authentication flow based on access tokens, refresh tokens, and HttpOnly cookies.",
      "Designed a dynamic scheduling system backed by real-time validation logic on both frontend and backend",
      "Developed a custom blog module with rich text editing and image upload functionality, integrated directly into the admin dashboard.",
    ],

    liveUrl: "https://project-two.vercel.app",
    githubUrl: "https://github.com/RezaFarzipour/Metallugical_Research_Center",
    features: [
      {
        name: "Admin Dashboard",
        slides: [
          {
            title: "Dashboard Home",
            src: "/images/lab/admindashboard.png",
            desc: "This image displays the Admin Dashboard of the laboratory management system. At the top, quick summary cards provide an overview of key metrics including the number of users, reservations, services, and blog entries.Below, the Recent Reservations section shows a detailed list of the latest booking records. Each entry includes information such as:User namePhone numberService nameReservation duration and priceNotesReservation datesPayment status (e.g., pending or completed)The design is clean and intuitive, helping the admin monitor user activity and service reservations efficiently.",
          },
          {
            title: "Ongoing Reservations",
            src: "/images/lab/admin2.png",
            desc: "In this section, the admin can view all ongoing reservations along with detailed information such as the user's name, service name, reservation date, notes, reservation price, payment status, and the latest step in the reservation process.The admin can filter the table based on any of these parameters to quickly access relevant data.Additionally, by clicking the action button associated with each reservation, the admin can be redirected to the corresponding step in the workflow for further management.",
          },
          {
            title: "All Users",
            src: "/images/lab/admin3.png",
            desc: "In this slide, the admin can view the details of all registered users, including their assigned roles — either Admin or Customer.By clicking the action button, the admin can edit each user's information, which is demonstrated in the next slide.",
          },
          {
            title: " Users Edit Information",
            src: "/images/lab/admin4.png",
            desc: "Following the previous slide, this view shows that the admin can edit user details such as first name, last name, email address, and user role.",
          },
          {
            title: "Admin Services",
            src: "/images/lab/admin5.png",
            desc: "The image above shows the Services section, where the admin can view all active services along with their details and images.The admin has the ability to edit, delete, or add new services.Adding a new service is a two-step process, which is demonstrated in the following slides.",
          },
          {
            title: "adding Service Step 1",
            src: "/images/lab/admin6.png",
            desc: "In this step, the admin is required to enter the service name, service description, reservation price, and upload a cover image for the service.",
          },
          {
            title: "adding Service Step 2",
            src: "/images/lab/admin7.png",
            desc: "In this step, the admin needs to specify the desired rental dates for the equipment, along with uploading several images for the gallery.",
          },
          {
            title: "Weblog Category",
            src: "/images/lab/admin8.png",
            desc: "The Blog section is divided into two parts: Categories and Posts.In the Categories section, the admin can view all existing categories, edit or delete them, and also add new ones.",
          },
          {
            title: "Weblog Posts",
            src: "/images/lab/admin9.png",
            desc: "This image shows the Posts section, where blog posts are fetched using GraphQL.The admin can edit, delete, or add blog posts.The blog creation process is demonstrated in the next slide.",
          },
          {
            title: "Create Weblog Step 1",
            src: "/images/lab/admin10.png",
            desc: "the first step, the admin needs to provide the following details for the blog post:Post title,Select a category from the existing categories,Choose tags and define a slug,Upload a cover image for the blog post",
          },
          {
            title: "Create Weblog Step 2",
            src: "/images/lab/admin11.png",
            desc: "In the second step of blog creation, the admin needs to add the header description and the main content of the blog post.This is implemented using the Tiptap library — a highly customizable and modern rich-text editor built on top of ProseMirror, designed to offer a smooth and flexible writing experience.",
          },
        ],
      },
      {
        name: "Customer Dashboard",
        slides: [
          {
            title: "Dashboard Home",
            src: "/images/lab/customer1.png",
            desc: "This image displays the Customer Dashboard of the laboratory management system. At the top, quick summary cards provide an overview of key metrics including the number of Reserves, Ongoing Reservations and Cancelled Reservations.Below, the Recent Reservations section shows a detailed list of the latest booking records. Each entry includes information such as:User name,Phone number,Service name,Reservation duration, , peyment status,Reservation dates, and the latest step in the reservation process (e.g., pending or completed).",
          },
          {
            title: "User Reservations",
            src: "/images/lab/customer2.png",
            desc: "In this section, the user can view their active reservations along with all related details.They can also see the latest completed step of each reservation. By clicking the action button, the user is redirected to the corresponding step to continue and complete the remaining reservation process.additionally, the user can create a new reservation by clicking the Add button — the full process is explained in the Reservation Feature section.",
          },
          {
            title: "Reports ",
            src: "/images/lab/customer3.png",
            desc: "The user also has access to a Reports feature, where they can view detailed records of reservations that have either been canceled or successfully completed, along with all related reservation information.",
          },
        ],
      },

      {
        name: "Auth page(send & check otp and Signup Information)",
        slides: [
          {
            title: "send otp",
            src: "/images/lab/auth1.png",
            desc: "This image shows the user registration process, where the user enters their phone number and receives an OTP. The OTP is used to verify the user's identity and ensure secure login.",
          },
          {
            title: "check otp",
            src: "/images/lab/auth2.png",
            desc: "This image represents Step 2 of the authentication process, where the verification code is checked.Once the user enters the code, the system determines whether it's their first time logging into the platform.If it's the first login, the user is redirected to the registration information form.If not, they are directed to the appropriate dashboard based on their role — Admin or Customer.For enhanced security, both the access token and refresh token are stored in HTTP-only cookies.",
          },
          {
            title: "Signup Information",
            src: "/images/lab/auth3.png",
            desc: "This image shows  Step Three of  the User Registration process, where the user fills in their personal information.Form handling is managed using the react-hook-form library for efficient and streamlined validation. ",
          },
        ],
      },

      {
        name: "Services",
        slides: [
          {
            title: "Choose Service",
            src: "/images/lab/services1.png",
            desc: "On this page, the user can view all devices that have been added by the admin under the Services section.By clicking on View More, the user is redirected to the detailed page of the selected device — which is explained in the next slide.",
          },
          {
            title: "Service Details Page",
            src: "/images/lab/services2.png",
            desc: "On this page, the user can view detailed information about the device, including:Device name,Description,Image gallery,Available reservation dates,After selecting a desired date, the user can proceed to the reservation process, which is explained in the Reservation Feature section.",
          },
        ],
      },

      {
        name: "Reservation",
        slides: [
          {
            title: "Choose Service(stage1)",
            src: "/images/lab/reserve1.png",
            desc: "The user can initiate a reservation from two different sections:1-By browsing the Services section and selecting the desired device to start the reservation process.2-From the My Reservations section in the user panel, by clicking the Add New Reservation button — which is the method shown here.In the first step, the user selects the desired service and clicks the Reserve button.The continuation of the process is explained in the next slide.",
          },
          {
            title: "Reservation Modal",
            src: "/images/lab/reserve2.png",
            desc: "After clicking the Reserve button in the previous step, a modal opens displaying the service details — including the reservation price, description, and image gallery.At this stage, the user can only select from the available dates that the admin has predefined for this device. Once a date is selected, the user can proceed to the next step.",
          },
          {
            title: "stage2(customer)",
            src: "/images/lab/reserve3.png",
            desc: "At this stage, the admin and user see two different views based on their roles.The user sees a Waiting for Admin Approval page, which includes the service details and the selected reservation date, as shown in the image above.The admin view is explained in the next slide.",
          },
          {
            title: "stage2(Admin)",
            src: "/images/lab/reserve4.png",
            desc: "This is Stage 2 for the admin, where they are required to enter details such as the rental duration, total price, and additional notes.The form is built using the react-hook-form library for efficient and scalable form handling.At each stage, the admin has the option to approve, reject, or cancel the reservation:Canceling means the entire reservation is deleted.Rejecting sends the process one step back.For example, if the admin rejects the request at this stage, the customer is taken back to the previous step and must select a different reservation date.",
          },

          {
            title: "stage4(Customer Payment)",
            src: "/images/lab/reserve5.png",
            desc: "The next stage involves payment by the user.At this point, the user is required to pay the amount specified by the admin and upload the payment receipt as proof of transaction.Meanwhile, the admin is in a waiting state, pending the user’s payment submission.",
          },
          {
            title: "stage5(Admin Approval)",
            src: "/images/lab/reserve6.png",
            desc: "After the user uploads the payment receipt, the admin can view it in the next stage. Based on the uploaded receipt, the admin can choose to approve, reject, or cancel the payment.If the admin rejects the payment, they are required to provide a reason for the rejection.In this case, the reservation process moves one step back, allowing the user to re-upload a corrected receipt.",
          },
          {
            title: "Reservation Done!",
            src: "/images/lab/reserve7.png",
            desc: "In the final step, the admin performs the final approval.Once approved, the reservation is successfully completed, and both the customer and the admin see a confirmation page (as shown above) displaying the full reservation details.",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "laser-clinic",
    title: " Laser Hair Removal Clinic",
    Role: "Frontend Developer",
    highlight: "Laser Hair Removal ",
    videoSrcWebm: "videos/laserlanding.webm",
    videoSrcMp4:"videos/laserlanding.mp4",
    client: "Laser  Hair Removal Clinic",
    description: `This platform is specially designed for laser hair removal clinics to make the work easier for admins, receptionists, and clients.

It includes three separate dashboards, each made for a different type of user:

Admin Dashboard,

Receptionist Dashboard and

Client Dashboard,

Each dashboard has its own features that help manage daily tasks, improve communication, and make the overall process faster and more organized.
More details about each dashboard and its features are provided below.

`,
    technologies: [
      {
        name: "NextJs",
        icon: RiNextjsFill,
        bgColor: "bg-white text-black",
      },

      {
        name: "Redux",
        svg: "/images/redux.svg",
        bgColor: "bg-white text-red-500",
      },

      {
        name: "Chakra Ui",
        svg: "/images/chakra.svg",
        bgColor: "bg-blue-50 text-blue-400",
      },

      {
        name: "Framer Motion",
        svg: "/images/framer-motion.svg",
        bgColor: "bg-purple-100 text-purple-500",
      },

      {
        name: "Formik",
        svg: "/images/formik.svg",
        bgColor: "bg-blue-200 text-purple-500",
      },
      {
        name: "Chart.Js",
        svg: "/images/chart.svg",
        bgColor: "bg-white text-purple-500",
      },
      {
        name: "Python",
        svg: "/images/python.svg",
        bgColor: "bg-purple-100 text-purple-500",
      },
      {
        name: "Django",
        svg: "/images/django.svg",
        bgColor: "bg-[#1a6045] text-purple-500",
      },

      {
        name: "Postgresql",
        svg: "/images/postgress.svg",
        bgColor: "bg-gray-100 text-purple-500",
      },
    ],
    KeyFeatures: [
      {
        icon: MdDashboard,
        text: "Multi-role Dashboards: Three separate dashboards tailored for admin, receptionist, and client roles.",
      },
      {
        icon: FaChartBar,
        text: "Advanced Data Visualization: Admins can track performance and trends with interactive charts and graphs.",
      },
      {
        icon: TbReservedLine,
        text: "End-to-End Booking Flow: Clients can easily complete the entire reservation process within the platform.",
      },
      {
        icon: FaBloggerB,
        text: "Comprehensive Activity Reports: Admins have full access to detailed logs of all client interactions and bookings.",
      },
    ],
    challenges: [
      "Managing Role-Based Access and Views",
      "Handling Complex Booking Flows",
      "Ensuring Data Accuracy in Reports",
      "Creating a Flexible Time-Slot Selection Table for Admins",
    ],

    solutions: [
      "Implemented a structured permission system to ensure each user type (admin, receptionist, client) only accesses relevant features and data.",
      " Designed a step-by-step, user-friendly booking process with validation at each stage to reduce confusion and errors.",
      " Built automated reporting tools with filters and export options to provide admins with reliable insights into user activity and clinic performance.",
      "We developed a custom calendar table where admins can easily select available time slots. Time slots are color-coded for clarity, and the system prevents overlapping or invalid entries to ensure accurate scheduling.",
    ],

    liveUrl: "https://project-two.vercel.app",
    githubUrl: "https://github.com/EmadARN/clinic",
    features: [
      {
        name: "Admin Dashboard",
        slides: [
          {
            title: "Dashboard Home",
            src: "/images/laser/admin1.png",
            desc: "This section displays the Admin Dashboard, which includes features such as the Home page, Weekly Schedule Management, Employee Management, Laser Treatment Area Setup with Pricing, Client List, Reports, and Settings.In the image shown, the Home page of the admin panel is visible. It provides key information such as the number of clients for morning and evening shifts, estimated revenue, and a chart visualizing income trends.",
          },
          {
            title: "Weekly Calender",
            src: "/images/laser/admin2.png",
            desc: "The Weekly Calendar is one of the platform’s most essential features. It allows the admin to set the weekly schedule for all operators, which serves as the basis for booking appointments.Operators work according to this schedule, and clients can view available time slots and select their preferred operator when making a reservation through their dashboard.Additionally, the admin has the option to print the schedule or download it as a file for offline access.",
          },
          {
            title: "Employers",
            src: "/images/laser/admin3.png",
            desc: "In this section, the admin can view all staff members along with their assigned roles.They can edit employee information, add new team members such as operators or receptionists, and remove any staff member when needed.",
          },
          {
            title: " Laser Areas",
            src: "/images/laser/admin4.png",
            desc: "In this section, the admin can view all active laser treatment areas, along with their associated prices and durations. They can edit or delete existing areas, as well as add new treatment areas when needed.",
          },
          {
            title: "Customers",
            src: "/images/laser/admin5.png",
            desc: "In this section, the admin can view a list of all clients. By selecting any individual, the admin can access their full profile along with detailed session reports, which are showcased in the next slide.",
          },
          {
            title: "Customer Details Section",
            src: "/images/laser/admin6.png",
            desc: "This page displays each user's profile, including details such as full name, phone number, medical history, and session history, allowing the admin to review all relevant information at a glance.",
          },
          {
            title: "Setting",
            src: "/images/laser/admin7.png",
            desc: "In the Settings section, the admin can change their password, define the start and end hours for appointment scheduling, and set the minimum prepayment amount required for reservations.",
          },
        ],
      },
      {
        name: "Customer Dashboard",
        slides: [
          {
            title: "Dashboard Home",
            src: "/images/laser/customer1.png",
            desc: "This image shows the Home page of the customer dashboard. From this screen, the user can create a new reservation, view reports of previous sessions, and complete their profile information. The next slide provides more details about the profile section.",
          },
          {
            title: "Personal Information",
            src: "/images/laser/customer3.png",
            desc: "In this section, the user can view and update their personal information, including full name, national ID number, phone number, medical history, current medications, and home address.",
          },
          {
            title: "Reservation(Choose Area)",
            src: "/images/laser/customer4.png",
            desc: "In the first step of the reservation process, the user must select the desired areas for laser treatment, as shown in the image above.",
          },
          {
            title: "Reservation(Choose Date and Time)",
            src: "/images/laser/customer5.png",
            desc: "In this step, the user must select their preferred appointment time, including both date and hour.All available time slots have been pre-defined by the admin.",
          },
          {
            title: "Reservation(Final Confirmation & Payment)",
            src: "/images/laser/customer6.png",
            desc: "In the final step, the user can review all personal details and reservation information. By confirming this step, the reservation process will be completed successfully.",
          },
          {
            title: "Session Reports",
            src: "/images/laser/customer7.png",
            desc: "After completing a reservation, the user can view the status of their bookings in the Session Reports section of the dashboard.This section displays key details such as reservation status, session date and time, selected treatment areas, and the total price.",
          },
        ],
      },

      {
        name: "Auth page(customer)",
        slides: [
          {
            title: "send otp",
            src: "/images/laser/auth1.png",
            desc: "This image shows the user registration process, where the user enters their phone number and receives an OTP. The OTP is used to verify the user's identity and ensure secure login.",
          },
          {
            title: "check otp",
            src: "/images/laser/auth2.png",
            desc: "This step is for entering the verification code sent to the user's phone number. Once verified, the user is redirected to the customer dashboard.The login pages for the admin and receptionist are separated from the customer login flow for enhanced security and role management.Authentication tokens are securely stored using  cookies to protect against unauthorized access.",
          },
        ],
      },

      {
        name: "Auth page(Admin and Reseption)",
        slides: [
          {
            title: "Admin and Reseption Login Page",
            src: "/images/laser/auth3.png",
            desc: "As shown in the image above, the login page for admins and staff is separate from the user login.Admins and staff must log in using a username and password.In case of a forgotten password, they can reset it by entering their username in the Forgot Password section and creating a new one.",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "gold-store",
    title: "Modern Gold Store",
    Role: "Frontend Developer",
    client: "Hossain Gold Store",
    highlight: "Gold Store",
    videoSrcWebm: "videos/landingpage.webm",
    videoSrcMp4:"videos/landingpage.mp4",
    description: `We have developed a fully responsive gold trading platform built with React and TypeScript, optimized for all screen sizes. The platform features two separate dashboards: one for customers and one for administrators.

Customers can easily buy and sell gold, top up their wallet, withdraw funds, and even request physical gold withdrawals. On the admin side, the dashboard provides tools for monitoring transaction reports, managing deposits and withdrawals, setting gold prices, and more.

This powerful and user-friendly system ensures a seamless and secure experience for both users and administrators.

`,
    technologies: [
      {
        name: "React Js",
        svg: "/images/react.svg",
        bgColor: "bg-white text-black",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        bgColor: "bg-blue-200 text-blue-800",
      },
      {
        name: "React Query",
        icon: SiReactquery,
        bgColor: "bg-white text-red-500",
      },

      {
        name: "Material UI",
        svg: "/images/material.svg",
        bgColor: "bg-blue-50 text-blue-400",
      },

      {
        name: "React Hook Form",
        svg: "/images/react-hook-form.svg",
        bgColor: "bg-purple-100 text-purple-500",
      },
      {
        name: "Python",
        svg: "/images/python.svg",
        bgColor: "bg-purple-100 text-purple-500",
      },
      {
        name: "Django",
        svg: "/images/django.svg",
        bgColor: "bg-[#1a6045] text-purple-500",
      },
    ],

    KeyFeatures: [
      {
        icon: MdDashboard,
        text: "Dual Dashboard System: Separate, role-based dashboards for admins and customers with tailored access and control",
      },
      {
        icon: GiTrade,
        text: "Online Buying and Selling with Identity Verification",
      },
      {
        icon: CiWallet,
        text: "Gold Wallet (Digital Gold Storage)",
      },
      {
        icon: TbReportAnalytics,
        text: "Comprehensive reporting of all user activities available to the admin for monitoring and analysis.",
      },
    ],
    challenges: [
      "Handling role-based dashboard access and UI logic",
      "Building user trust in virtual gold storage",
    ],

    solutions: [
      " Implemented dynamic routing and conditional rendering based on user roles (admin/customer) at both backend and frontend levels.",
      " Developed a transparent gold wallet with real-time balances, full history, and withdrawal options.",
    ],

    liveUrl: "https://project-one.vercel.app",
    githubUrl: "https://github.com/RezaFarzipour/Goldstore-Final-Version",
    features: [
      {
        name: "Admin Dashboard",
        slides: [
          {
            title: "Admin view",
            src: "/images/gold/admindashboard/admin1.png",
            desc: "This image provides an overview of the admin dashboard, showcasing its key features, including account balance reports, cash withdrawals, gold withdrawals, gold sales, transaction history, and system settings.",
          },
          {
            title: "Sell Gold Report",
            src: "/images/gold/admindashboard/admin2.png",
            desc: "This image displays the section of the admin dashboard related to customer gold sales reports. It includes parameters such as the customer's full name, phone number, sale date, sale amount, gold quantity, and transaction status",
          },
          {
            title: "Admin Setting Page",
            src: "/images/gold/admindashboard/adminsetting.png",
            desc: "This image shows the admin settings page, featuring options such as setting the gold price, adjusting the store's gold inventory, and configuring the buy-sell price differenceAdditionally, the admin can view the current gold price and the total gold available in the store.",
          },
        ],
      },
      {
        name: "Customer Dashboard",
        slides: [
          {
            title: "Customer Dashboard Home",
            src: "/images/gold/customerdashboard/customerview.png",
            desc: "This image shows the Home section of the customer dashboard, where users can view the current gold buying price, wallet balance, and gold wallet balance.Additional features available in other sections include cash withdrawal, gold purchase, gold sale, transaction reports, and requests for physical gold delivery.",
          },
          {
            title: "Gold Purchase",
            src: "/images/gold/customerdashboard/buygold.png",
            desc: "This image shows the Gold Purchase page, where the customer can view their wallet and gold wallet balances, and proceed to buy gold accordingly.",
          },
          {
            title: "Sell Gold",
            src: "/images/gold/customerdashboard/sellgold.png",
            desc: "This image shows the Sell Gold  page, where the customer can view their wallet and gold wallet balances, and proceed to sell gold accordingly.",
          },
          {
            title: "Reports",
            src: "/images/gold/customerdashboard/reports.png",
            desc: "In this section, the user can view detailed reports of cash deposits and withdrawals, as well as records of gold purchases and sales.",
          },
        ],
      },

      {
        name: "Price Calculator",
        slides: [
          {
            title: "Price Calculator",
            src: "/images/gold/landingbox.png",
            desc: "This feature is implemented on the landing page and allows users to view both the buy and sell prices of gold. By entering either the amount of gold or the total price, the corresponding value is automatically calculated in real time",
          },
        ],
      },
    ],
  },

  //crypto app

  {
    id: 4,
    slug: "crypto-app",
    title: "Crypto App With React.js",
    Role: "Frontend Developer",
    client: "Practice Project",
    highlight: "Crypto App ",
    videoSrcWebm: "videos/crypto.webm",
    videoSrcMp4:"videos/crypto.mp4",
    description: `A fully responsive React crypto tracker that fetches real-time data from CoinGecko, including prices, market cap, and ATH. It features live charts and  search to explore any coin instantly.



`,
    technologies: [
      {
        name: "React Js",
        svg: "/images/react.svg",
        bgColor: "bg-white text-black",
      },
      {
        name: "Recharts",
        svg: "/images/chart.svg",
        bgColor: "bg-white text-purple-500",
      },
    ],

    KeyFeatures: [
      {
        icon: MdDataSaverOff,
        text: "Live Data Fetching from CoinGecko API",
      },
      {
        icon: FaChartBar,
        text: "Interactive Chart for Visualizing Coin Metrics",
      },
      {
        icon: SiPagerduty,
        text: "Pagination Support for Browsing Multiple Coins",
      },
      {
        icon: CiSearch,
        text: "Search Functionality with API-based Querying",
      },
    ],
    challenges: [
      "Handling Large API Responses Efficiently",
      "Keeping Data Up-to-Date in Real-Time",
    ],

    solutions: [
      " Implemented pagination to load and render data in smaller chunks, improving performance and user experience.",
      " Used interval-based live fetching to refresh coin data at regular intervals, ensuring users always see up-to-date information.",
    ],

    liveUrl: "https://project-one.vercel.app",
    githubUrl: "https://github.com/RezaFarzipour/crypto-app",
    features: [
      {
        name: "Multi-Currency Price Support",
        slides: [
          {
            title: "multi-currency",
            src: "/images/crypto/crypto1.png",
            desc: "This feature allows users to view real-time cryptocurrency prices not only in USD, but also in EUR and JPY, enabling a more localized and flexible experience for international users.",
          },
         
        ],
      },
      {
        name: "Interactive Chart Visualization",
        slides: [
          {
            title: "Interactive Chart",
            src: "/images/crypto/crypto2.png",
            desc: "This feature provides an interactive chart displaying key metrics such as price trends, market capitalization, and total trading volume over time. It helps users easily analyze historical performance and market movements of selected cryptocurrencies.",
          },
         
        ],
      },

      {
        name: "Dynamic Coin Search",
        slides: [
          {
            title: "Dynamic Coin Search",
            src: "/images/crypto/crypto3.png",
            desc: "This feature enables users to search for cryptocurrencies by name. As the user types, the app sends live API requests to fetch and display coins that match or closely resemble the entered keyword, making it easy to find specific assets quickly.",
          },
        ],
      },
    ],
  },
];
