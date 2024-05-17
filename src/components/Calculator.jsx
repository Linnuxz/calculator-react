import React, { useState } from 'react';

const Calculator = () => {
    const buttons = [
        { id: 1, value: '7' },
        { id: 2, value: '8' },
        { id: 3, value: '9' },
        { id: 4, value: 'DEL' },
        { id: 5, value: '4' },
        { id: 6, value: '5' },
        { id: 7, value: '6' },
        { id: 8, value: '+' },
        { id: 9, value: '1' },
        { id: 10, value: '2' },
        { id: 11, value: '3' },
        { id: 12, value: '-' },
        { id: 13, value: '.' },
        { id: 14, value: '0' },
        { id: 15, value: '/' },
        { id: 16, value: 'x' },
    ];

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
            <div className="w-[327px] h-[88px] bg-[#181F33] rounded-[10px] flex items-center justify-end">
                <h2 className="text-white px-[24px] text-[40px]">
                    {expression}
                </h2>
            </div>
            <div className="bg-[#242D44] w-[327px] h-[420px] rounded-[10px]">
                <div className="grid grid-cols-4 m-[24px] gap-[13px]">
                    {buttons.map((button) => (
                        <div
                            key={button.id}
                            className={`w-[60px] h-[64px] flex items-center justify-center font-bold text-[#434A59] hover:shadow-none ${
                                button.id === 4
                                    ? 'text-[20px] bg-[#647198] text-white shadow-firstTheme-delete-inset'
                                    : 'bg-[#EAE3DC] text-[32px]'
                            }  rounded-[5px] shadow-firstTheme-inset`}
                        >
                            <button onClick={() => handleClick(button.value)}>
                                {button.value}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-[13px] text-[20px]">
                    <button className="w-[133px] h-[64px] text-white bg-[#647198] flex justify-center items-center rounded-[5px]">
                        RESET
                    </button>
                    <button
                        className="w-[133px] h-[64px] text-white bg-[#D03F2F] flex justify-center items-center rounded-[5px]"
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
