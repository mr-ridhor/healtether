import React from 'react';

interface SectionProps {
  title: string;
  details: {
    label: string;
    value: string;
  }[];
}
export const medicalHistoryDetails = [
    { label: 'Family history', value: 'Asthama, Hypertension' },
    { label: 'Medical Procedures', value: 'Heart Surgery' },
    { label: 'Medication', value: 'Dolo 650mg, Paracetamol' },
    { label: 'Allergies', value: 'Pollen, Sunlight' },
    { label: 'Phobias/Fears', value: 'Pollen, Sunlight' },
  ];

 export const vitalsDetails = [
    { label: 'Family history', value: 'Asthama, Hypertension' },
    { label: 'Medical Procedures', value: 'Heart Surgery' },
    { label: 'Medication', value: 'Dolo 650mg, Paracetamol' },
    { label: 'Allergies', value: 'Pollen, Sunlight' },
    { label: 'Phobias/Fears', value: 'Pollen, Sunlight' },
  ];
const InfoSection: React.FC<SectionProps> = ({ title, details }) => {
  return (
    <div className="mt-4">
      <div className="border-b mt-3 border-black">
        <p className="font-bold">{title} :</p>
      </div>
      <div className="space-y-2">
        {details.map((item, index) => (
          <div key={index} className="flex gap-x-2 items-center">
            <p className="font-bold">{item.label} :</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
