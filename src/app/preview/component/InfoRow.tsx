import React from 'react';

interface InfoRowProps {
  label: string;
  notes: string;
}
export const rows = [
    { label: 'Fever', notes: 'Notes' },
    { label: 'Fever', notes: 'Notes' },
   
  
  ];

const InfoRow: React.FC<InfoRowProps> = ({ label, notes }) => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <p className="font-bold">{label}</p>
      </div>
      <div className="w-1/2">
        <p>{notes}</p>
      </div>
    </div>
  );
};

export default InfoRow;
