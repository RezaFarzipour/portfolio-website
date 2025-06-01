import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import SectionTitle from '../common/Tilte';
const KeyFeatures = ({KeyFeatures}) => {
  return (
   <>
   <SectionTitle
          icon={<MdOutlineStar className="text-xl text-purple-600" />}
          text={"Key Features"}
        />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {KeyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-blue-100 text-purple-600 p-2 rounded-full">
                  <Icon size={20} />
                </div>
                <p className="text-sm md:text-lg text-white">{feature.text}</p>
              </div>
            );
          })}
        </div>
   </>
  )
}

export default KeyFeatures