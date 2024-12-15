"use client"
import React from "react";

import PrescriptionPreview from "./component/PrescriptionPreview";
import { Camera } from "lucide-react";
import { Form, FormLabel } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";



 type detailsTpe={
name:string;
speciality:string;
info:string;
address:string;
phone:string;
email:string;


}

const detailTypeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  speciality: z.string().min(1, "Speciality is required"),
  info: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  email: z.string().email("Invalid email format"),
});

// TypeScript type inferred from the Zod schema


const page = () => {
  // const form = ({
  //   resolver: zodResolver(detailTypeSchema),
  //   defaultValues: {
  //     email: "",
  //    name:"",
  //    info:"",
  //    phone:"",
  //    speciality:"",
  //    address:"",

  //   },
  // });
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-[95%] grid grid-cols-1 lg:grid-cols-2 gap-x-3  ">
        <div className=" col-span-1 p-4 bg-[#F5F5F5] flex-1">
          <p className="text-[#A1A1A1] font-medium text-xl ">
            Preview of the prescription
          </p>
          <PrescriptionPreview/>
        </div>
        <div className=" col-span-1 p-4">
          <div className="uppercase border-black font-bold border-b w-full">Settings</div>
          <div className="my-2 space-y-2">
            <p className="font-bold">Prescription Contents</p>
            <p className="text-[#A1A1A1] text-sm">Fill in the Clinic details on the prescription</p>
          </div>
          <div className="">
            <p className="text-[#777777] font-extrabold">Header info</p>
          </div>
          <div className="flex items-center justify-between py-2">
          <div className="">
            <p className="text-[#0C091F]">Add Clinic Logo </p>
          </div>
          <div className="h-40 w-40 bg-[#F1E7F9] flex justify-center items-center rounded-full">
          <Camera />
          </div>
          </div>
          <div className="">
            {/* <Form {...form}>
              <form>
                <div className="">
                  <FormLabel>
                  Doctor’s Name
                  </FormLabel>
                  {/* <Input> */}
                </div>
              </form>
            </Form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
