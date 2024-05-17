import React, { useState } from 'react';
import TripleToggle from './components/TripleToggle';
import Calculator from './components/Calculator';

const App = () => {
    const [themeClass, setThemeClass] = useState('bg-[#3A4663]');
    const handleThemeChange = (theme) => {
        setThemeClass(theme);
    };

    return (
        <div className={`${themeClass} min-h-screen`}>
            <div className="p-[24px] pt-[30px] flex justify-between">
              
                <h2 className="text-white text-[32px]">calc</h2>
                <div className="flex items-center gap-3">
                    <p className="pt-1 text-white text-[12px] tracking-[1px]">
                        THEME
                    </p>
                    <div className="mt-[-20px] flex flex-col">
                        <div className="flex justify-around text-white text-[12px]">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                        </div>
                        <TripleToggle onChange={handleThemeChange} />
                    </div>
                </div>
            </div>
            <div>
                <Calculator />
            </div>
        </div>
    );
};

export default App;
