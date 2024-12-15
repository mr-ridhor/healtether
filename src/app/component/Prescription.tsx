import React from "react";
import { Switch } from "@/components/ui/switch";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Prescription = () => {
  return (
    <div>
      <div className="mt-14">
        <div className="space-y-4">
          <p className="underline uppercase font-semibold">Settings</p>
          <div className="w-full flex justify-between">
            <p className="font-bold text-xl">Ai Predictive Search</p>
            <div className="">
              <Switch />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#777777]">The Ai search allows you to give predictive analysis based on the patient’s vitals, examinations, lab and reports</p>
         <p className="text-xl">
         Prescription layout
         </p>
         <p className="text-sm text-[#777777]">Choose from the templates available or add your own template.</p>
          </div>
          <div className="flex gap-x-4">
            <div className="flex  flex-col items-ceter px-3 gap-y-4 justify-center h-40 w-40 bg-[#D9D9D9]">
                <div className="">
                    <p>Add custom template</p>
                </div>
                <div className="">
                <LogOut className=" -rotate-90" />
                </div>
            </div>
            <div className="flex  flex-col items-center px-3 gap-y-4 justify-center h-40 w-40 bg-[#D9D9D9]">
            <div className="h-[90%] w-[80%] relative">
                 <Image
                                    className="object-cover"
                                    src="/Letterhead.png"
                                    alt="man"
                                    fill
                                    priority
                                  />
            </div>
            </div>
          </div>
            <Link href={"preview"} className="text-sm text-[#1227E3]">
            Change contents in the prescriptions
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Prescription;
