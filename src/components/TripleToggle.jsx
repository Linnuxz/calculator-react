import React, { useState } from 'react';
import { options } from '../constants/index';
const TripleToggle = ({ onChange }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(index);
        onChange(options[index]);
    };
    return (
        <div className="flex items-center justify-center">
            <div
                className={`flex  ${options[activeIndex].toggleBg} rounded-full p-1 w-[71px] h-[26px]`}
            >
                {[0, 1, 2].map((index) => (
                    <button
                        key={index}
                        className={`relative flex-1 py-2 rounded-full text-center transition-colors duration-300 `}
                        onClick={() => handleToggle(index)}
                    >
                        {activeIndex === index && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className={`w-[16px] h-[16px] ${options[activeIndex].equalBg} rounded-full`}
                                ></div>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TripleToggle;
