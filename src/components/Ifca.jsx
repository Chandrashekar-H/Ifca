import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Building2, Hotel, Hammer, Contact2 } from 'lucide-react';
import { Users, Globe, Lightbulb} from 'lucide-react';
import ifcaImage from '../assets/ifca.jpg';
import malaysiaBanner from '../assets/Malaysia.png';
import chinaFlag from '../assets/china.png';
import malaysiaFlag from '../assets/malaysia_flag.png';
import singaporeFlag from '../assets/singapore_flag.png';
import indonisiaFlag from '../assets/indonesia_flag.png';
import companyLogo1 from '../assets/logo-customers-01.png';
import companyLogo2 from '../assets/logo-customers-02.png';
import companyLogo3 from '../assets/logo-customers-03.png';
import companyLogo4 from '../assets/logo-customers-04.png';
import companyLogo5 from '../assets/logo-customers-05.png';
import companyLogo6 from '../assets/logo-customers-06.png';
import constructionImage1 from '../assets/construction1.png';
import constructionImage2 from '../assets/construction2.png';
import constructionImage3 from '../assets/construction3.png';
import articlesImage1 from '../assets/articles1.png';
import articlesImage2 from '../assets/articles2.png';
import articlesImage3 from '../assets/articles3.png';
import eVoicingImage3 from '../assets/e-invoicing-article3.png';
import propertyImage1 from '../assets/property1.png';
import propertyImage2 from '../assets/property2.png';
import propertyImage3 from '../assets/property3.png';
import hospitalImage1 from '../assets/hospital1.png';
import hospitalImage2 from '../assets/hospital2.png';
import hospitalImage3 from '../assets/hospital3.png';
import hrImage1 from '../assets/hr1.png';
import hrImage2 from '../assets/hr2.png';
import hrImage3 from '../assets/hr3.png';
import eventImage1 from '../assets/events1.png';
import eventImage2 from '../assets/events2.png';
import eventImage3 from '../assets/events3.png';
import eventImage4 from '../assets/events4.png';
import eventImage5 from '../assets/events5.png';
import eventImage6 from '../assets/events6.png';
import newsImage1 from '../assets/news1.png';
import newsImage2 from '../assets/news2.png';
import newsImage3 from '../assets/news3.jpg';


const Ifca = () => {

  return (
    <main className="w-full">
      <HeroSection />
      <TeaBanner />
      <WhyIFCA/>
      <OurSolutions/>
      <CompanySuccess/>
      <GlobalPresence/>
      <CompaniesTransformed/>
      <Articles/>
      <Events/>
      <NewsSection/>
      <ContactSection/>
    </main>
  );
};

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-b from-[#fecda5]   to-white overflow-hidden py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-around min-h-[500px]" >
      <div className="relative z-10 max-w-xl space-y-4 text-center md:text-left">
        <span className="hidden md:inline-block bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
          #36YearsOfExellence
        </span>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#2f2e41]">
          Your Digitalisation Partner in Navigating<br />The Future of Work
        </h1>
        <p className="text-gray-700 text-lg">
          Empowering the businesses of today<br />with the tools of tomorrow
        </p>
        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
          <Link
            to="/contact"
            className="bg-[#11245f] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            BE OUR PARTNER
          </Link>
          <Link
            to="/contact"
            className="bg-[#ff9900] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
          >
            OUR SOLUTIONS
          </Link>
        </div>
      </div>

      <div className="relative z-10 mt-10 md:mt-0 md:w-[450px] w-full max-w-md">
        <div className="bg-black rounded-2xl overflow-hidden shadow-xl relative aspect-video">
          {isVideoOpen ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/9ZOGEIo9vUI?autoplay=1"
              title="IFCA Corporate Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              className="w-full h-full bg-cover bg-center cursor-pointer"
              style={{
                backgroundImage:
                  "url('https://ifca.asia/wp-content/uploads/2025/01/Yotube-Cover-for-Ifca-Corporate-video-1.png')",
              }}
              onClick={() => setIsVideoOpen(true)}
            >
              <div className="w-full h-full bg-black/40 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white opacity-90"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                >
                  <circle cx="42" cy="42" r="42" fill="rgba(255,255,255,0.2)" />
                  <polygon points="33,26 60,42 33,58" fill="white" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const TeaBanner = () => {
  return (
    <section className="w-full bg-white py-8 px-4">
      <div className="max-w-screen-xl mx-auto">
        <img
          src={malaysiaBanner}
          alt="Malaysia TEA gray 2025"
          className="w-full h-auto object-contain max-h-[300px] md:max-h-[400px] lg:max-h-[150px]"
          loading="lazy"
        />
      </div>
    </section>
  );
};




const WhyIFCA = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            Why IFCA?
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Image Column (Left) */}
          <div className="w-full">
            <div className="">
              <img
                src={ifcaImage}
                alt="Office workers collaborating"
                className="w-xl h-full"
              />
            </div>
          </div>

          {/* Text Column (Right) */}
          <div className="w-full space-y-8 sm:pt-3">
            {/* Proven */}
            <div className="flex items-start space-x-4">
              <span className="inline-block w-8 h-8 bg-orange-500 rounded-full text-white flex items-center justify-center shrink-0">
               <Users/>
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">Proven</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  IFCA has been the solution of choice for large, successful and growing businesses in the property, construction and hospitality sectors over the last 36 years and Human Resource sector for the last 15 years.
                </p>
              </div>
            </div>

            {/* Experienced */}
            <div className="flex items-start space-x-4">
              <span className="inline-block w-8 h-8 bg-orange-500 rounded-full text-white flex items-center justify-center shrink-0">
                <Globe/>
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">Experienced</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Wisdom comes through experience. Over the course of three decades, we have continued to accumulate, refine and trial that which works best for our customers.
                </p>
              </div>
            </div>

            {/* Innovative */}
            <div className="flex items-start space-x-4">
              <span className="inline-block w-8 h-8 bg-orange-500 rounded-full text-white flex items-center justify-center shrink-0">
                <Lightbulb/>
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">Innovative</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  IFCA is constantly reinventing and investing in R&D to spearhead the property technology of tomorrow. Driven by a purpose-fueled team, we continuously challenge the status quo to establish new and exciting solutions for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};







const OurSolutions = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h6 className="text-lg font-semibold text-orange-500 uppercase tracking-wide mb-2">
            our solutions
          </h6>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Embrace The Future of Work with our Solutions
          </h2>
        </div>

        {/* Solution Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* HRX Solution */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center space-y-4">
              <span className="inline-block w-12 h-12 bg-green-200 rounded-full text-green-500 text-xl flex items-center justify-center">
                <Contact2 className="w-8 h-8 text-orange-500" />
              </span>
              <h3 className="text-xl font-semibold text-gray-800">HRX</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A cloud-based Human Resource Management Solution (HRMS) that enables employees to manage all HR-related business functions simultaneously across all companies even from a mobile device.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-orange-500 hover:text-orange-700 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>

          {/* HotelX Solution */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center space-y-4">
              <span className="inline-block w-12 h-12 bg-blue-200 rounded-full text-blue-500 text-xl flex items-center justify-center">
                <Hotel className="w-8 h-8 text-orange-500" />
              </span>
              <h3 className="text-xl font-semibold text-gray-800">HotelX</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                An award-winning mobile internet hotel management solution that simplifies management, operations and most importantly, your guest experience.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-orange-500 hover:text-orange-700 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>

          {/* PropertyX Solution */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl  hover:bg-#8ed1fc-500 transition-shadow duration-300">
            <div className="flex flex-col items-center space-y-4">
              <span className="inline-block w-12 h-12 bg-pink-200 rounded-full text-pink-500 text-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-orange-500" />
              </span>
              <h3 className="text-xl font-semibold text-gray-800">PropertyX</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                PropertyX is a cloud-based solution that enables developers to oversee their project progress, automate bookings and provide real-time insights for better decision making.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-orange-500 hover:text-orange-700 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>

          {/* ContractX Solution */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center space-y-4">
              <span className="inline-block w-12 h-12 bg-purple-200 rounded-full text-purple-500 text-xl flex items-center justify-center">
                 <Hammer className="w-8 h-8 text-orange-500" />
              </span>
              <h3 className="text-xl font-semibold text-gray-800">ContractX</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A construction management solution that helps analyse data in real-time, monitor site conditions, and facilitates efficient and productive management.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-orange-500 hover:text-orange-700 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};




const Counter = ({ targetNumber, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetNumber.replace(/[^\d]/g, "")); 
    if (start === end) return;

    const incrementTime = 30;
    const step = Math.ceil(end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

const CompanySuccess = () => {
  return (
    <section className="relative w-full bg-gradient-to-bl from-[#a9b8c3]   to-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            Company Success
          </h2>
          <p className="text-gray-600 text-sm mt-4">
            We are the market-leader in providing solutions for the technological transformation of businesses.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Customer Served */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl font-semibold text-orange-500">
                <Counter targetNumber="1300" />
              </h3>
              <p className="text-gray-600 text-sm">Customer Served</p>
            </div>
          </div>

          {/* User License */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl font-semibold text-orange-500">
                <Counter targetNumber="34000" />
              </h3>
              <p className="text-gray-600 text-sm">User License</p>
            </div>
          </div>

          {/* Awards */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl font-semibold text-orange-500">
                <Counter targetNumber="200" />
              </h3>
              <p className="text-gray-600 text-sm">Awards</p>
            </div>
          </div>

          {/* Employees */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl font-semibold text-orange-500">
                <Counter targetNumber="600" />
              </h3>
              <p className="text-gray-600 text-sm">Employees</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://ifca.asia/wp-content/uploads/2025/01/team-background.jpg)",
        }}
      />
    </section>
  );
};



const GlobalPresence = () => {
  const countries = [
    {
      name: 'Malaysia',
      officeCount: '6 Offices',
      flagSrc: malaysiaFlag, 
    },
    {
      name: 'Singapore',
      officeCount: '1 Office',
      flagSrc: singaporeFlag,
    },
    {
      name: 'China',
      officeCount: '5 Offices',
      flagSrc: chinaFlag,
    },
    {
      name: 'Indonesia',
      officeCount: '1 Office',
      flagSrc: indonisiaFlag,
    },
  ];

  return (
    <section className="w-full py-16">
    {/* className=' bg-gradient-to-bl from-[#b6e3d4]   to-white' */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            Global Presence
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            We are the market-leader in providing solutions for the technological transformation of businesses.
          </p>
        </div>

        {/* Country Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-grey-600 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center space-y-4"
            >
              <img
                src={country.flagSrc}
                alt={`${country.name} Flag`}
                className="w-16 h-16 rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800">{country.name}</h3>
              <p className="text-gray-600 text-sm">{country.officeCount}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



const CompaniesTransformed = () => {
  const companies = [
    { name: 'Company 1', logo: companyLogo1 },
    { name: 'Company 2', logo: companyLogo2 },
    { name: 'Company 3', logo: companyLogo3 },
    { name: 'Company 4', logo: companyLogo4 },
    { name: 'Company 5', logo: companyLogo5 },
    { name: 'Company 6', logo: companyLogo6 },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 shadow-md h-64">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            Companies We Digitally Transformed
          </h3>
        </div>

        {/* Carousel Grid */}
        <div className="overflow-hidden ">
          <div className="flex animate-scroll gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="h-full"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate for infinite scroll */}
            {companies.map((company, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 w-48 h-24 flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  className="h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    <style>{`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${companies.length * 128}px);
        }
      }
      .animate-scroll {
        animation: scroll 20s linear infinite;
      }
    `}</style>
    </section>
  );
};


const Articles = () => {
  const [activeTab, setActiveTab] = useState('construction-articles');

  // Define all article categories and their content
  const articlesData = {
    'construction-articles': [
      {
        title: "Trends in the Construction Industry You Need to Look Out For in 2025",
        date: "July 1, 2025",
        image: constructionImage1,
      },
      {
        title: "Mastering Construction Budget Control: Tools and Techniques",
        date: "February 24, 2025",
        image:constructionImage2,
      },
      {
        title: "Automation of the 5-Way Match Process in the Construction Cycle: Enhancing Efficiency and Accuracy",
        date: "January 21, 2025",
        image: constructionImage3,
      }
    ],
    'articles': [
      {
        title: "E-Invoicing Malaysia Explained: Who Issues, Manages & Oversees It?",
        date: "July 21, 2025",
        image: articlesImage1,
      },
      {
        title: "Is E-Invoicing Mandatory in Malaysia?",
        date: "July 11, 2025",
        image: articlesImage2,
      },
      {
        title: "EPF for Foreign Workers? Here’s What Employers Need to Know",
        date: "July 4, 2025",
        image: articlesImage3,
      }
    ],
    'e-invoicing-articles': [
      {
        title: "E-Invoicing Malaysia Explained: Who Issues, Manages & Oversees It?",
        date: "July 21, 2025",
        image: articlesImage2,
      },
      {
        title: "Is E-Invoicing Mandatory in Malaysia?",
        date: "July 11, 2025",
        image: articlesImage3,
      },
      {
        title: "What is the E-Invoicing Process?",
        date: "June 16, 2025",
        image: eVoicingImage3,
      }
    ],
    'property-articles': [
      {
        title: "Enhancing Customer Experience in Real Estate Through Technology",
        date: "July 25, 2024",
        image: propertyImage1,
      },
      {
        title: "Embracing e-Invoicing for Property Developers in Malaysia: A Comprehensive Guide",
        date: "July 1, 2024",
        image: propertyImage2,
      },
      {
        title: "Overcoming the Challenges in Lead Nurturing in Real Estate",
        date: "May 27, 2024",
        image: propertyImage3,
      }
    ],
    'hospitality-articles': [
      {
        title: "The Untold Benefits of E-Invoicing For Hotels and How to Switch Over",
        date: "May 19, 2025",
        image: hospitalImage1,
      },
      {
        title: "It’s The Holidays – Manage Your Guests with HotelX",
        date: "March 24, 2025",
        image: hospitalImage2,
      },
      {
        title: "Future of Hospitality – New Changes in The New Age",
        date: "March 10, 2025",
        image: hospitalImage3,
      }
    ],
    'hr-articles': [
      {
        title: "EPF for Foreign Workers? Here’s What Employers Need to Know",
        date: "July 4, 2025",
        image: hrImage1,
      },
      {
        title: "Expanding to Malaysia? Here are Things You Need to Know About Their Law",
        date: "May 5, 2025",
        image: hrImage2,
      },
      {
        title: "Why Smart Companies Are Ditching Traditional Attendance for Mobile Flexibility",
        date: "April 18, 2025",
        image: hrImage3,
      }
    ]
  };

  const tabs = [
    { id: 'construction-articles', label: 'Construction Articles' },
    { id: 'articles', label: 'Articles' },
    { id: 'e-invoicing-articles', label: 'E-Invoicing Articles' },
    { id: 'property-articles', label: 'Property Articles' },
    { id: 'hospitality-articles', label: 'Hospitality Articles' },
    { id: 'hr-articles', label: 'HR Articles' }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#262262] leading-tight">
            Articles
          </h2>
        </div>

        {/* Tabs Navigation */}
       <div className="flex flex-wrap justify-center mb-10 gap-2 sm:gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 text-sm sm:text-base font-semibold rounded-full border transition-all duration-300 ease-in-out
              ${
                activeTab === tab.id
                  ? "bg-orange-500 text-white border-orange-500 shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-orange-50 hover:border-orange-300"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData[activeTab]?.map((article) => (
            <div key={article.id || article.title} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className=""
                      loading="lazy"
                      decoding="async"
                    />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 mt-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-orange-500 transition-colors duration-200">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-sm font-semibold text-gray-500">
                    {article.date}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};




const EVENTS = [
  {
    img: eventImage1,
    alt: "Mastering E-Invoicing in Hospitality Seminar",
  },
  {
    img: eventImage2,
    alt: "E-Invoicing Event Kuantan, Pahang",
  },
  {
    img: eventImage3,
    alt: "Navigating E-Invoice Seminar",
  },
  {
    img: eventImage4,
    alt: "E-Invoice Sarawak",
  },
  {
    img: eventImage5,
    alt: "E-Invoice JB",
  },
  {
    img: eventImage6,
    alt: "IFCA with KPF Event",
  },
];

const Events = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#262262] mb-12">
          E-Invoice Events
        </h2>

        <div className="flex flex-wrap items-center justify-center w-auto gap-3 mb-12">
          {EVENTS.map((event, i) => (
            <div key={i} className="p-3 text-center">
              <img
                src={event.img}
                alt={event.alt}
                className="mb-4 object-cover w-[320px] h-[320px] rounded-lg shadow-md"
              />
              <Link
                to="/contact"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold rounded hover:scale-105 transition"
              >
                READ MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const NEWS = [
  {
    img: newsImage1,
    title: "Strategic Partnership: HRedge and IFCA Collaborate to Elevate HR Solutions in Malaysia",
    excerpt:
      "Strategic Partnership: HRedge and IFCA Collaborate to Elevate HR Solutions in Malaysia MALAYSIA – July 14, 2025 – Malaysian businesses today face growing pressure to digitalise HR operations while staying",
    date: "July 14, 2025",
    badge: "All",
  },
  {
    img: newsImage2,
    title: "IFCA MSC Berhad Won Prestigious Award in Malaysia Technology Excellence Awards 2025",
    excerpt:
      "IFCA MSC Berhad Won Prestigious Award in Malaysia Technology Excellence Awards 2025 MALAYSIA – March 21, 2025 – IFCA MSC Berhad, an industry leader in property management, succeeded in taking",
    date: "March 21, 2025",
    badge: "ContractX",
  },
  {
    img: newsImage3,
    title:
      "IFCA and Quantity Solutions Inc. (QSI) Announce Strategic Partnership to Drive Digital Transformation in the Philippines",
    excerpt:
      "IFCA and Quantity Solutions Inc. (QSI) Announce Strategic Partnership to Drive Digital Transformation in the Philippines Kuala Lumpur, 17 March 2025 – IFCA, a leading provider of enterprise software solutions,",
    date: "March 17, 2025",
    badge: "All",
  },
];

const NewsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#262262] mb-12">
          News
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] object-cover"
                />
              <div className="px-6 py-4 flex-1 flex flex-col">
                <span className="text-sm font-semibold text-orange-500 uppercase mb-2">
                  {item.badge}
                </span>
                <h3 className="text-lg font-semibold mb-2">
                  <h2 className="hover:text-orange-500 transition">
                    {item.title}
                  </h2>
                </h3>
                <p className="text-sm text-gray-600 flex-1">{item.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.date}</span>
                  <Link
                    to="/contact"
                    className="text-sm text-orange-500 hover:underline font-semibold"
                  >
                    Read More »
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-16" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#262262] mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          We'd love to hear from you. Whether you have a question about solutions, pricing, or anything else, our team is ready to answer all your questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h4 className="text-lg font-semibold text-[#262262] mb-1">Adress</h4>
              <p>Kapil Kavuri Hub, Nanakramguda, Gachibowli, Hyderabad</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#262262] mb-1">Phone</h4>
              <p>+1 6099345788</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#262262] mb-1">Phone</h4>
              <p>+91 8889992186</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#262262] mb-1">Email</h4>
              <p>info@kcs-tech.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#262262] mb-1">Working Hours</h4>
              <p>Mon - Fri: 9:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-lg shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-2 rounded font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};



export default Ifca;