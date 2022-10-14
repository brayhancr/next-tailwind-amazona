import React from 'react';

const ChekoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className="mb-5 flex flex-wrap">
      {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2 text-center p-2 font-semibold ${
              index <= activeStep
                ? 'border-indigo-500 text-indigo-500'
                : 'border-gray-400 text-gray-400'
            }`}
          >
            <span
              className={`mr-1 rounded-full px-2 py-1 text-xs font-bold ${
                index <= activeStep
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-400 text-white'
              }`}
            >
              {index + 1}
            </span>
            {step}
          </div>
        )
      )}
    </div>
  );
};

export default ChekoutWizard;
