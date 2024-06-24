import { FaIndustry, FaBuilding, FaChartPie, FaShippingFast, FaMoneyBillAlt, FaHospital, FaUserTie, FaCar, FaShoppingCart, FaRegHandshake, FaCogs, FaGraduationCap, FaPlane, FaHotel, FaStore, FaWarehouse } from "react-icons/fa";
import { AnimatedText } from "./AnimatedText";

const industries = [
  { key: 1, name: "Manufacturing", iconClass: "text-red-500", icon: <FaIndustry /> }, // Manufacturing - red
  { key: 2, name: "Real Estate", iconClass: "text-blue-500", icon: <FaBuilding /> }, // Real Estate - blue
  { key: 3, name: "Finance", iconClass: "text-green-500", icon: <FaMoneyBillAlt /> }, // Finance - green
  { key: 4, name: "Healthcare", iconClass: "text-purple-500", icon: <FaHospital /> }, // Healthcare - purple
  { key: 5, name: "Transportation", iconClass: "text-yellow-500", icon: <FaShippingFast /> }, // Transportation - yellow
  { key: 6, name: "Professional Services", iconClass: "text-indigo-500", icon: <FaUserTie /> }, // Professional Services - indigo
  { key: 7, name: "Automotive", iconClass: "text-orange-500", icon: <FaCar /> }, // Automotive - orange
  { key: 8, name: "Retail", iconClass: "text-pink-500", icon: <FaShoppingCart /> }, // Retail - pink
  { key: 9, name: "Legal", iconClass: "text-teal-500", icon: <FaRegHandshake /> }, // Legal - teal
  { key: 10, name: "Engineering", iconClass: "text-gray-500", icon: <FaCogs /> }, // Engineering - gray
  { key: 11, name: "Education", iconClass: "text-yellow-500", icon: <FaGraduationCap /> }, // Education - yellow
  { key: 12, name: "Travel", iconClass: "text-blue-500", icon: <FaPlane /> }, // Travel - blue
  { key: 13, name: "Hospitality", iconClass: "text-red-500", icon: <FaHotel /> }, // Hospitality - red
  { key: 14, name: "E-commerce", iconClass: "text-purple-500", icon: <FaStore /> }, // E-commerce - purple
  { key: 15, name: "Warehousing", iconClass: "text-yellow-500", icon: <FaWarehouse /> }, // Warehousing - yellow
  { key: 16, name: "Business Services", iconClass: "text-green-500", icon: <FaChartPie /> }, // Business Services - green
];

const CompanyRegistration = () => {
  return (
    <>
      <div className="mt-8 mb-16">
        <AnimatedText text="Comprehensive Company Registration Solutions Tailored to Every Sector." />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry.key}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer transition duration-300 flex flex-col items-center justify-center"
            >
              <div className={`text-6xl mb-4 ${industry.iconClass}`}>{industry.icon}</div>
              <p className="text-xl text-center text-bold">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompanyRegistration;
