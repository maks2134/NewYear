import React from 'react';
import Confetti from 'react-confetti';

const NewYearFireworks = () => {
    return (
        <div>
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                />
        </div>
    );
};

export default NewYearFireworks;