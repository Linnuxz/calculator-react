import React, { useState } from 'react';
import { buttons } from '../constants/index.js';

const Calculator = ({ themeClass }) => {
    const [expression, setExpression] = useState('');
    const handleClick = (value) => {
        if (value === '=') {
            calculateResult();
        } else if (value === 'DEL') {
            setExpression((prevExpression) => prevExpression.slice(0, -1));
        } else {
            const operator = value === 'x' ? '*' : value;
            setExpression((prevExpression) => prevExpression + operator);
        }
    };
    const handleReset = () => {
        setExpression('');
    };

    const calculateResult = () => {
        try {
            const result = eval(expression);
            if (result !== undefined) {
                setExpression(result.toString());
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col items-center gap-[24px]">
            <div
                className={`w-[327px] sm:w-[540px] h-[88px]  ${themeClass.innerBgScreen} rounded-[10px] flex items-center justify-end`}
            >
                <h2
                    className={`${themeClass.numberColor} px-[24px] text-[40px]`}
                >
                    {expression}
                </h2>
            </div>
            <div
                className={`${themeClass.innerBgCalculator} w-[327px] sm:w-[540px] h-[420px] rounded-[10px]`}
            >
                <div className="grid grid-cols-4 m-[24px] gap-[13px]">
                    {buttons.map((button) => (
                        <div
                            key={button.id}
                            className={`w-[60px] sm:w-[101px] h-[64px] flex items-center justify-center font-bold text-[#434A59] ${
                                button.id === 4
                                    ? `text-[20px] sm:text-[28px] ${themeClass.deleteresetBg} ${themeClass.hoverDeleteResetColor} ${themeClass.shadowDeleteReset} text-white`
                                    : `${themeClass.buttonBg} ${themeClass.buttonNumColor} ${themeClass.hoverNumberColor} text-[32px] sm:text-[40px] ${themeClass.shadowNumbers}`
                            }  rounded-[5px] `}
                            onClick={() => handleClick(button.value)}
                        >
                            <button>{button.value}</button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-[13px] sm:gap-[24px] text-[20px]">
                    <button
                        className={`w-[133px] sm:w-[227px] h-[64px] text-white ${themeClass.deleteresetBg} flex justify-center items-center rounded-[5px] ${themeClass.shadowDeleteReset} ${themeClass.hoverDeleteResetColor}`}
                        onClick={handleReset}
                    >
                        RESET
                    </button>
                    <button
                        className={`w-[133px] sm:w-[227px] h-[64px] ${themeClass.equalBg} flex justify-center items-center rounded-[5px] ${themeClass.equalShadow} ${themeClass.equalColor} ${themeClass.hoverEqualColor}`}
                        onClick={() => handleClick('=')}
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
