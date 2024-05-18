import React, { useState } from 'react';
import TripleToggle from './components/TripleToggle';
import Calculator from './components/Calculator';
import { options } from './constants';
const App = () => {
    const [themeClass, setThemeClass] = useState(options[0]);

    const handleThemeChange = (theme) => {
        setThemeClass(theme);
    };

    return (
        <div
            className={`${themeClass.bg} min-h-screen flex flex-col justify-center`}
        >
            <div className="p-[24px] pt-[30px] flex w-full mx-auto">
                <div className="flex mx-auto w-[327px] sm:w-[540px] justify-between">
                    <h2 className={`${themeClass.numberColor} text-[32px]`}>
                        calc
                    </h2>
                    <div className="flex items-center gap-3">
                        <p
                            className={`pt-1 ${themeClass.numberColor} text-[12px] tracking-[1px]`}
                        >
                            THEME
                        </p>
                        <div className="mt-[-20px] flex flex-col">
                            <div
                                className={`flex justify-around ${themeClass.numberColor} text-[12px]`}
                            >
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                            </div>
                            <TripleToggle onChange={handleThemeChange} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Calculator themeClass={themeClass} />
            </div>
        </div>
    );
};

export default App;
