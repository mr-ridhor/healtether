import React from 'react'
import InfoSection, { medicalHistoryDetails, vitalsDetails } from './Info'
import InfoRow, { rows } from './InfoRow'

const PrescriptionPreview = () => {
  return (
    <div>
      <div className="my-4 flex-1  bg-white">
            <div className="h-fit md:h-40 w-full flex-wrap flex flex-col  md:flex-row  items-center gap-x-4 px-2">
              <div className="h-36 w-36 rounded-full bg-[#F1E7F9]"></div>
              <div className="flex-1 flex-wrap">
                <p className="font-semibold text-[#000000]">Kim Jones Clinic</p>
                <p className="font-semibold text-[#000000]">
                  Dr. Ajit Bhalla , Neurologist
                </p>
                <p className="text-[#0C091F]">
                  MBBS | FCPS (Neurology) | MRCP (Ireland) | MRCP (UK)American
                  Board of Electro Diagnostic Medicine
                </p>
                <p className="font-semibold text-[#000000]">
                  Reg no : <span className="font-normal">G1235465</span>
                </p>
              </div>
            </div>
            <hr className="w-full h-1" />
            <div className="my-3 px-2  justify-between w-full flex md:flex-row flex-col md:items-center ">
              <div className="flex items-center gap-x-0.5 textm">
                <p className="font-semibold">Patient details: </p>
                <p>Jane Doe, Female, 36 yrs , 9653256421</p>
              </div>
              <div className=" text-">
                <p>Date : 27 June, 2024 , 04:37pm</p>
                <p>Patient ID: 100325</p>
              </div>
            </div>
            <div className="space-y-4 px-2">
              <InfoSection
                title="Patient medical history"
                details={medicalHistoryDetails}
              />
              <InfoSection title="Vitals" details={vitalsDetails} />
              <div className="mb-4 p">
                <div className="border-b border-black flex items-center gap-x-2">
                  <div className="w-1/2">
                    <p className="font-bold">Chief Complaints</p>
                  </div>
                  <div className="w-1/2">
                    <p className="font-bold">Clinical Findings</p>
                  </div>
                </div>
                {rows.map((row, index) => (
                  <InfoRow key={index} label={row.label} notes={row.notes} />
                ))}
              </div>
              <div className="mb-4 ">
                <div className="border-b border-black flex items-center gap-x-2">
                  <div className="w-full">
                    <p className="font-bold">Diagnosis</p>
                  </div>
                </div>
                <div className="">
                  <p>Pneumonia</p>
                </div>
              </div>
              <div className="mb-4 ">
                <div className="border-b border-black flex items-center gap-x-2">
                  <div className="w-full flex">
                    <div className="w-[25%] ">
                      <p className="font-bold">Drugs</p>
                    </div>
                    <div className="flex-1 grid grid-cols-5 gap-x-1 font-bold">
                      <p className="flex justify-center">Dosage</p>
                      <p className="flex justify-center">Time</p>
                      <p className="flex justify-center">Frequency</p>
                      <p className="flex justify-center">Duration</p>
                      <p className="flex justify-center">Notes</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-1 py-1">
                  <div className="flex ">
                    <div className="w-[25%]">
                      <p>Tab DOLO 500mg</p>
                    </div>
                    <div className="flex-1 grid-cols-5 grid gap-x-2 ">
                      <p className="flex justify-center">1</p>
                      <p className="flex justify-center">Before Meal</p>
                      <p className="flex justify-center">1-0-1</p>
                      <p className="flex justify-center">5 days</p>
                      <p className="flex justify-center">Notes</p>
                    </div>
                  </div>
                  <hr className="w-full bg-black h-0.5" />
                  <div className="flex w-full py-1">
                    <div className="w-[25%]">
                      <p>Syp Ambrodel</p>
                    </div>
                    <div className="flex-1 grid-cols-5 grid gap-x-2 ">
                      <p className="flex justify-center">10ml</p>
                      <p className="flex justify-center">After Meal</p>
                      <p className="flex justify-center">1-0-1</p>
                      <p className="flex justify-center">5 days</p>
                      <p className="flex justify-center">Notes</p>
                    </div>
                  </div>
                  <hr className="w-full bg-black h-0.5 mt-" />
                </div>
              </div>
              <div className="mb-4 ">
                <div className="border-b border-black flex items-center gap-x-2">
                  <div className="w-full flex">
                    <div className="w- ">
                      <p className="font-bold">Advice/Insctructions</p>
                    </div>
                 
                  </div>
                </div>
                <div className="">
                  <p>Eat a balanced diet with lots of fibre. Drink lots of water. Drink Electrolyte Solution to stay hydrated.</p>
                </div>
                </div>
              <div className="mb-4 pb-14 gap-x-4 flex items-center">
                <p className="underline font-bold">

                Follow up
                </p>
                <p>None</p>
                </div>
                <hr className="w-full  h-0.5" />

          <div className="pb-14 grid grid-cols-2">
            <div className="">

            <p>Ph:   9659856321</p>
            <p>email : Bhallaclinic@gmail.com</p>
            </div>
            <div className="">
              <p>Add. : 123 Street near HN Market, 2nd floor, Hyderabad, Telangana, 659632</p>
              <p>Timings : 8:30 am - 10:50 pm  Mon-Fri</p>
            </div>
          </div>

            </div>
          </div>
    </div>
  )
}

export default PrescriptionPreview
