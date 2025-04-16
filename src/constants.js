// work process
import process1 from "./assets/working-process-1.png";
import process2 from "./assets/working-process-2.png";
import process3 from "./assets/working-process-3.png";
import process4 from "./assets/working-process-4.png";

// web development services icons
import ecomWebIcon from "./assets/icons/online-shopping.png";
import socialWebIcon from "./assets/icons/socialmedia.png";
import landingWebIcon from "./assets/icons/landing-page.png";
import customWebIcon from "./assets/icons/software-development.png";

// app development services icons
import iosAppIcon from "./assets/icons/ios-development.png";
import androidAppIcon from "./assets/icons/android-development.png";
import flutterAppIcon from "./assets/icons/flutter-development.png";
import hybridAppIcon from "./assets/icons/hybrid-app-development.png";

// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "./assets/web-development-portfolio/5ghomes.png";
import BayutImg from "./assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "./assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "./assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "./assets/web-development-portfolio/flatiorn.png";
import MavenImg from "./assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "./assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "./assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "./assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "./assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "./assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "./assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "./assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "./assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "./assets/app-development-portfolio/namaz.png";
import PoteaImg from "./assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "./assets/app-development-portfolio/rentop bike and car.png";

// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

// logo
import logo from "./assets/logo/logo.png";

export { logo };

// client details
export const clientDetails = {
  phone: "+919656246801",
  whatsup: "919656246801",
  email: "support@thesoftfactory.com",
  address:
    "India Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008",
  linkedin: "https://www.linkedin.com/company/thesoftfactory",
  twitter:"https://x.com/Softfactor?t=hzg_xyim7QMCq0tG7f90eQ&s=09",
  facebook:"https://www.facebook.com/profile.php?id=61564369448329",
  instagram:"https://www.instagram.com/_softfactory_",
};

// landing page header links
export const landingPageHeaderLinks = [
  {
    id: 1,
    title: "Home",
    link: "banner",
  },
  {
    id: 2,
    title: "About Us",
    link: "about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "services",
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   link: "contact",
  // },
];

// website pages
export const websitePagesLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  // {
  //   id: 2,
  //   title: "Industries",
  //   link: "/industries",
  // },
  {
    id: 3,
    title: "Our Services",
    link: "/services",
  },
];

// working process
export const workingProcess = [
  {
    id: 1,
    title: "In-Depth Consultation",
    description: "Understand your needs, discuss goals.",
    img: process1,
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "Create roadmap, define KPIs, set timeline.",
    img: process2,
  },
  {
    id: 3,
    title: "Design and Development",
    description: "Design visually stunning, develop functional website",
    img: process3,
  },
  {
    id: 4,
    title: "Rigorous Testing",
    description: "Ensure optimal performance, compatibility, security",
    img: process4,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: ecomWebIcon,
    img: require("./assets/landingpage-services-imgs/ecommerce.webp"),
    description:
      "We create powerful e-commerce websites that enhance customer engagement, streamline business operations, and drive sustainable revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialWebIcon,
    img: require("./assets/landingpage-services-imgs/socialmedia.webp"),
    description:
      "Developing dynamic and engaging social media websites designed to foster community interaction, boost brand awareness, and encourage user loyalty.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingWebIcon,
    img: require("./assets/landingpage-services-imgs/landing.webp"),
    description:
      "Crafting high-conversion landing pages that grab attention and drive meaningful action, tailored to showcase your brand and optimize results.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebIcon,
    img: require("./assets/landingpage-services-imgs/customweb.webp"),
    description:
      "Building bespoke websites designed specifically for your business, combining innovative design and seamless functionality for a remarkable online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosAppIcon,
    img: require("./assets/landingpage-services-imgs/ios.webp"),
    description:
      "We create exceptional iOS apps using Swift and Objective-C, delivering seamless performance, modern design, and enhanced user engagement.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidAppIcon,
    img: require("./assets/landingpage-services-imgs/android.webp"),
    description:
      "Our Android apps, crafted with Java and Kotlin, are tailored to your business vision, offering robust features and outstanding user experiences.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterAppIcon,
    img: require("./assets/landingpage-services-imgs/flutter.webp"),
    description:
      "Leverage Flutter’s single codebase to build responsive apps for iOS and Android, ensuring efficiency without compromising on quality.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppIcon,
    img: require("./assets/landingpage-services-imgs/hybrid.webp"),
    description:
      "Our hybrid apps deliver seamless functionality across platforms, combining native performance with versatile design for an enhanced user experience.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img1: require("./assets/services-details/web-development1.webp"),
    img2: require("./assets/services-details/web-development2.webp"),
    title: "Web Development",
    smallPara:
      "A strong online presence is critical in today’s digital-first world. At Softfactory, we create websites that are not only visually appealing but also functional, user-friendly, and optimized for performance. Whether you need a simple informational site or a complex web application, our team works closely with you to deliver a product that aligns with your business goals and provides a seamless experience for your users.",
    keyBenefits: [
      "Tailored Web Design & Development: We design and develop custom websites that are both beautiful and highly functional, perfectly matching your brand’s vision.",
      "E-Commerce Platforms: Build an online store that delivers a smooth, secure shopping experience and helps drive sales.",
      "Content Management Systems (CMS): Easily manage your website’s content with powerful platforms like WordPress or Drupal.",
      "Web Applications: Create custom web applications that provide a rich, interactive experience for your users.",
      "SEO & Performance Optimization: Improve search engine visibility and ensure your website loads quickly with our SEO best practices and performance optimization techniques.",
    ],
    detailsPageContent: {
      firstPara:
        "A strong online presence is critical in today’s digital-first world. At Softfactory, we create websites that are not only visually appealing but also functional, user-friendly, and optimized for performance. Whether you need a simple informational site or a complex web application, our team works closely with you to deliver a product that aligns with your business goals and provides a seamless experience for your users.",
      servicesSection:
        "Let us help you create a website that leaves a lasting impression and drives meaningful engagement with your audience.",
    },
  },
  {
    id: 2,
    img1: require("./assets/services-details/app-development1.webp"),
    img2: require("./assets/services-details/app-development2.webp"),
    title: "App Development",
    smallPara:
      "Mobile apps are no longer just a trend; they are essential tools for engaging your customers and expanding your business. At Softfactory, we specialize in developing mobile applications that are tailored to meet your business objectives. Whether you’re looking for native iOS/Android apps or cross-platform solutions, our team has the expertise to build apps that are user-centric, reliable, and high-performing.",
    keyBenefits: [
      "iOS & Android App Development: We craft powerful, native mobile applications for both platforms, ensuring high-quality performance and seamless user experience.",
      "Cross-Platform App Solutions: Build apps that work seamlessly across multiple devices with frameworks like React Native, Flutter, or Xamarin.",
      "UI/UX Design: Our design team focuses on creating intuitive and engaging user interfaces that provide a great experience for your users.",
      "Testing & Quality Assurance: We thoroughly test your app to ensure it functions flawlessly across all devices and platforms.",
      "App Support & Maintenance: Keep your app updated and secure with ongoing maintenance and feature updates.",
    ],
    detailsPageContent: {
      firstPara:
        "Mobile apps are no longer just a trend; they are essential tools for engaging your customers and expanding your business. At Softfactory, we specialize in developing mobile applications that are tailored to meet your business objectives. Whether you’re looking for native iOS/Android apps or cross-platform solutions, our team has the expertise to build apps that are user-centric, reliable, and high-performing.",
      servicesSection:
        "Turn your ideas into mobile experiences that captivate and engage your audience.",
    },
  },
  {
    id: 3,
    img1: require("./assets/services-details/cloud-computing-1.webp"),
    img2: require("./assets/services-details/cloud-computing-2.webp"),
    title: "Cloud Computing",
    smallPara:
      "The cloud has transformed how businesses operate, offering flexibility, scalability, and reduced operational costs. At Softfactory, we provide a wide range of cloud services that allow businesses to innovate faster, scale seamlessly, and securely manage their data and applications. Whether you’re looking to migrate to the cloud or develop cloud-based applications, we have the expertise to support your digital transformation.",
    keyBenefits: [
      "Cloud Strategy & Consulting: We help you navigate the cloud landscape with tailored advice and strategies that align with your business needs.",
      "Cloud Application Development: Build cloud-native apps that are scalable, secure, and designed to leverage the full power of cloud computing.",
      "Cloud Migration: Migrate your infrastructure, apps, and data to the cloud with minimal disruption and maximum efficiency.",
      "Managed Cloud Services: Let us handle the monitoring, management, and optimization of your cloud infrastructure so you can focus on growing your business.",
      "Cloud Security: Safeguard your business from potential threats with our robust cloud security solutions.",
    ],
    detailsPageContent: {
      firstPara:
        "The cloud has transformed how businesses operate, offering flexibility, scalability, and reduced operational costs. At Softfactory, we provide a wide range of cloud services that allow businesses to innovate faster, scale seamlessly, and securely manage their data and applications. Whether you’re looking to migrate to the cloud or develop cloud-based applications, we have the expertise to support your digital transformation.",
      servicesSection:
        "Unlock the potential of the cloud and take your business to new heights with our cloud computing services.",
    },
  },
  {
    id: 4,
    img1: require("./assets/services-details/data-engineering-1.webp"),
    img2: require("./assets/services-details/data-engineering-2.webp"),
    title: "Custom Software Development",
    smallPara:
      "Off-the-shelf software may work for some, but your business deserves a custom solution built around your unique processes and challenges. At Softfactory, we specialize in creating software that fits your needs perfectly, whether it's a complex enterprise application, a custom CRM, or a business automation tool. We take a hands-on approach to understand your business, ensuring that our solutions help streamline operations, boost efficiency, and drive growth.",
    keyBenefits: [
      "Enterprise Software Development: Build powerful solutions that streamline your business processes and improve operational efficiency.",
      "Custom CRM & ERP Systems: Manage your relationships and resources better with fully integrated, custom-built CRM and ERP systems.",
      "Business Process Automation: Free up your team’s time and reduce errors by automating your repetitive processes with custom software.",
      "API & System Integrations: Integrate your software with third-party systems and services for improved functionality and data flow.",
      "Software Testing & QA: Our extensive testing ensures your software is secure, reliable, and performs at its best.",
    ],
    detailsPageContent: {
      firstPara:
        "Off-the-shelf software may work for some, but your business deserves a custom solution built around your unique processes and challenges. At Softfactory, we specialize in creating software that fits your needs perfectly, whether it's a complex enterprise application, a custom CRM, or a business automation tool. We take a hands-on approach to understand your business, ensuring that our solutions help streamline operations, boost efficiency, and drive growth.",
      servicesSection:
        "We’ll work with you to create a custom software solution that helps your business thrive.",
    },
  },
  {
    id: 5,
    img1: require("./assets/services-details/game-1.webp"),
    img2: require("./assets/services-details/game-2.webp"),
    title: "Game Development",
    smallPara:
      "The gaming industry continues to grow, and now is the perfect time to create an unforgettable experience for players. Whether you’re developing a mobile game, desktop title, or immersive virtual reality game, Softfactory offers end-to-end game development services. From concept to completion, we focus on delivering games that are engaging, exciting, and innovative.",
    keyBenefits: [
      "Mobile Game Development: Build fun and addictive mobile games for iOS and Android that engage players anytime, anywhere.",
      "PC & Console Games: Create rich, high-quality gaming experiences for players on PC and console platforms.",
      "VR & AR Game Development: Step into the future of gaming with immersive virtual and augmented reality experiences.",
      "Game Design & Prototyping: We collaborate with you from the early stages to design and prototype your game before moving into full development.",
      "Game Testing & Optimization: Ensure smooth gameplay with extensive testing, bug fixing, and performance optimization.",
    ],
    detailsPageContent: {
      firstPara:
        "The gaming industry continues to grow, and now is the perfect time to create an unforgettable experience for players. Whether you’re developing a mobile game, desktop title, or immersive virtual reality game, Softfactory offers end-to-end game development services. From concept to completion, we focus on delivering games that are engaging, exciting, and innovative.",
      servicesSection:
        "Let us help you create games that stand out and captivate players worldwide.",
    },
  },
  {
    id: 6,
    img1: require("./assets/services-details/cybersecurity-1.webp"),
    img2: require("./assets/services-details/cybersecurity-2.webp"),
    title: "Cybersecurity Services",
    smallPara:
      "Cyber threats are more prevalent than ever, and safeguarding your business from these risks is crucial. At Softfactory, we offer comprehensive cybersecurity services designed to protect your digital assets, data, and infrastructure from potential attacks. Our team of experts ensures your systems are secure, and your business remains resilient in the face of evolving threats.",
    keyBenefits: [
      "Security Audits & Assessments: Identify weaknesses in your system with detailed security assessments that help you stay ahead of cyber threats.",
      "Network Security: Protect your internal network from attacks and unauthorized access with robust network security measures.",
      "Endpoint Security: Safeguard every device in your organization with advanced endpoint protection solutions.",
      "Data Encryption & Backup: Ensure your sensitive data is encrypted and safely backed up, reducing the risk of data loss or theft.",
      "Incident Response & Recovery: Respond quickly to any security breach and recover lost data to minimize business disruption.",
    ],
    detailsPageContent: {
      firstPara:
        "Cyber threats are more prevalent than ever, and safeguarding your business from these risks is crucial. At Softfactory, we offer comprehensive cybersecurity services designed to protect your digital assets, data, and infrastructure from potential attacks. Our team of experts ensures your systems are secure, and your business remains resilient in the face of evolving threats.",
      servicesSection:
        "With our cybersecurity services, you can confidently operate in the digital world without worrying about data breaches or cyberattacks.",
    },
  },
  {
    id: 7,
    img1: require("./assets/services-details/iot-1.webp"),
    img2: require("./assets/services-details/iot-2.webp"),
    title: "IoT Development",
    smallPara:
      "The Internet of Things (IoT) is changing the way businesses operate by connecting devices and systems for improved efficiency and data-driven decision-making. At Softfactory, we develop IoT solutions that help businesses unlock new opportunities, improve operations, and gain valuable insights through connected devices.",
    keyBenefits: [
      "IoT Strategy & Consulting: Explore the potential of IoT for your business with our expert consulting services.",
      "IoT Solutions Design & Development: Develop custom IoT products and systems that seamlessly integrate with your existing infrastructure.",
      "Sensor & Device Integration: Harness real-time data by integrating IoT sensors and devices across your operations.",
      "IoT Security Solutions: Protect your connected devices with industry-leading security protocols to prevent breaches and unauthorized access.",
      "Data Analytics & Insights: Turn IoT data into actionable insights that help you make smarter business decisions.",
    ],
    detailsPageContent: {
      firstPara:
        "The Internet of Things (IoT) is changing the way businesses operate by connecting devices and systems for improved efficiency and data-driven decision-making. At Softfactory, we develop IoT solutions that help businesses unlock new opportunities, improve operations, and gain valuable insights through connected devices.",
      servicesSection:
        "Join the IoT revolution and leverage the power of connected devices to enhance your business.",
    },
  },
];

// trusted clients
export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Sarah M.",
    title: "Marketing Director",
    description:
      "The team at Softfactory transformed our online presence with a website that not only looks fantastic but also functions seamlessly. We’ve seen a significant improvement in both engagement and conversions. It’s been an absolute pleasure working with them!",
  },
  {
    id: 2,
    img: "",
    name: "John R.",
    title: "CEO",
    description:
      "We approached Softfactory with a vision for our website, and they brought it to life exactly how we wanted. Their expertise, attention to detail, and quick turnaround time made the process smooth and efficient. Since the launch, we’ve noticed a considerable increase in traffic and user interaction.",
  },
  {
    id: 3,
    img: "",
    name: "Emily P.",
    title: "Product Manager",
    description:
      "Partnering with Softfactory to develop our mobile app was one of the best decisions we made. They built an app that is not only functional but also intuitive and user-friendly. The feedback from our customers has been overwhelmingly positive.",
  },
  {
    id: 4,
    img: "",
    name: "Michael T.",
    title: "CTO",
    description:
      "The app created by Softfactory has had an immediate and significant impact on our business. They delivered a polished, user-friendly app that seamlessly integrates with our existing systems. Their team was highly collaborative throughout the process.",
  },
  {
    id: 5,
    img: "",
    name: "Lisa W.",
    title: "Operations Manager",
    description:
      "We’ve been working with Softfactory for our cloud migration, and their team made the entire process effortless. They tailored a solution that met our specific needs and provided ongoing support to ensure our operations run smoothly.",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("./assets/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "Retail",
    img: require("./assets/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Fintech",
    img: require("./assets/industries/Fintech.webp"),
    desc: "Streamlining financial services with AI-driven fraud detection, automated customer support, and predictive analytics.",
  },
  {
    id: 4,
    title: "Insurance",
    img: require("./assets/industries/Insurance.webp"),
    desc: "Improving risk assessment, claims processing, and customer engagement through advanced analytics and AI solutions.",
  },
  {
    id: 5,
    title: "Hospitality",
    img: require("./assets/industries/Hospitality.webp"),
    desc: "Enhancing guest experiences with smart booking systems, personalized services, and efficient resource management.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("./assets/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "On Demand",
    img: require("./assets/industries/On Demand.webp"),
    desc: "Empowering on-demand platforms with intelligent matchmaking, real-time tracking, and user-centric analytics.",
  },
  {
    id: 8,
    title: "Food & Restaurant",
    img: require("./assets/industries/Food & Restaurant.webp"),
    desc: "Optimizing food services with smart inventory, personalized menus, and efficient order management solutions.",
  },
  {
    id: 9,
    title: "Logistics",
    img: require("./assets/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("./assets/industries/Education.webp"),
    desc: "Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 11,
    title: "Game",
    img: require("./assets/industries/Game.webp"),
    desc: "Elevating game development with AI-enhanced graphics, player behavior analytics, and immersive experiences.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
