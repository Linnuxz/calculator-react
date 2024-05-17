import React, { useState } from 'react';

const TripleToggle = ({ onChange }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const options = ['bg-[#3A4663]', 'bg-[#E6E6E6]', 'bg-[#17062A]'];

    const handleToggle = (index) => {
        setActiveIndex(index);
        onChange(options[index]);
    };
    return (
        <div className="flex items-center justify-center">
            <div className="flex bg-[#242D44] rounded-full p-1 w-[71px] h-[26px]">
                {[0, 1, 2].map((index) => (
                    <button
                        key={index}
                        className={`relative flex-1 py-2 rounded-full text-center transition-colors duration-300 `}
                        onClick={() => handleToggle(index)}
                    >
                        {activeIndex === index && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[16px] h-[16px] bg-[#D03F2F] rounded-full"></div>
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TripleToggle;
