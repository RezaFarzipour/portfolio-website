import React from 'react'
import SectionTitle from '../common/Tilte'
import { IoExtensionPuzzleSharp } from 'react-icons/io5'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const Challenges = ({challenges,solutions,challengLabel,solutionsLabel,and}) => {
  return (
    <>
            {/* Header */}
            <SectionTitle
          icon={<IoExtensionPuzzleSharp className="text-xl text-purple-600" />}
          text={`${challengLabel} ${and} ${solutionsLabel}`}
        />

        {/* Content */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenges */}
          <div>
            <h3 className="text-red-600 font-semibold mb-3 text-sm md:text-lg">
              {challengLabel}
            </h3>
            <ul className="space-y-3">
              {challenges.map((item, index) => (
                <li
                key={index}
                className="flex items-start gap-2 text-sm md:text-[17px] text-white leading-relaxed"
                >
                  <FaExclamationCircle
                    className="text-red-500 mt-1 min-w-[20px] text-xl"
                    size={16}
                  />
                <span className="block text-justify">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-green-600 font-semibold mb-3 text-sm md:text-lg">
          {solutionsLabel}
            </h3>
            <ul className="space-y-3">
              {solutions.map((item, index) => (
                <li
                key={index}
                className="flex items-start gap-2 text-sm md:text-[17px] text-white leading-relaxed"
              >
                <FaCheckCircle className="text-green-500 mt-1 min-w-[20px] text-md" />
                <span className="block text-justify">{item}</span>
              </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  )
}

export default Challenges