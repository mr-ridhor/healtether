"use client"
// import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
// import { ChevronRight, ChevronsLeftRight, RotateCw } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import ManageClinic from "./component/ManageClinic";
import Prescription from "./component/Prescription";
import PaymentSettings from "./component/PaymentSettings";
import ClinicDetails from "./component/ClinicDetails";

export default function Home() {
  const link = [
    { id: 1, nav: "/manage-clincs", name: "Manage clincs" },
    { id: 2, nav: "/clinic-details", name: "Clinic Details" },
    { id: 1, nav: "/payment", name: "Payment Settings" },
    { id: 1, nav: "/prescription", name: "Prescription Settings" },
  ];
  const [activeSection, setActiveSection] = useState("Prescription Settings");

  // Function to render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "Manage Clinics":
        return <ManageClinic/>;
      case "Clinic Details":
        return <ClinicDetails />;
      case "Payment Settings":
        return <PaymentSettings />;
      case "Prescription Settings":
        return <Prescription />;
      default:
        return <Prescription />;
    }
  };
  return (
    <div className="h-full m  w-full flex flex-col items-center">
      <div className="w-[95%] flex-1 overflow-y-auto space-y-2">
   
        <div className="grid grid-cols-2 gap-x-4 flex-1">
          <div className="col-span-1 border-t border-l">
            <div className="p-6">
              <div className="p-2 flex gap-4">
                <div className="h-40 w-40 relative rounded-full">
                  <Image
                    className="object-cover"
                    src="/man.png"
                    alt="man"
                    fill
                    priority
                  />
                </div>
                <div className="text-lg space-y-6">
                  <div className="h-10 rounded-md w-max px-2 flex items-center bg-[#FADF49]">
                    <p className="text-#0C091F">Super Admin</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[#000000] text-2xl">Dr. Kim Jones</p>
                    <div className="flex gap-x-2 items-center">
                      <Button className="bg-[#198E79] hover:bg-[#198E79]/80">
                        Save
                      </Button>
                      <Button className="bg-[#F5F5F5] hover:bg-[#F5F5F5]/90 text-[#0C091F]">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="h-2  w-full" />
            </div>
            <hr className="w-full" />
            <div className="p-6 flex flex-col text-lg space-y-3 w-full ">
              {link.map((item, id) => (
                <button  key={id}
                onClick={() => setActiveSection(item.name)}
                
                className={`hover:bg-[#F5F5F5]/80 h-14 text-xl flex items-center px-2 rounded-md ${activeSection ===item.name ?"bg-[#EBEBEB] border-b":"bg-[#F5F5F5]"}`}>
                  {item.name}
                </button>
              ))}
              
            </div>
          </div>
          <div className="col-span-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
