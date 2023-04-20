import React from 'react';

const TestComponent = () => {
  return (
    <div className='container mx-auto'>
      <div className='lg:columns-3 md:columns-2 p-5 gap-8'>
        <div className='bg-sky-500/100 rounded-lg text-white p-10 flex justify-center mb-5 '>
          <p>column 1</p>
        </div>
        <div className='bg-sky-500/100 rounded-lg text-white p-10 flex justify-center mb-5'>
          <p>column 2</p>
        </div>
        <div className='bg-sky-500/100 rounded-lg text-white p-10 flex justify-center mb-5'>
          <p>column 3</p>
        </div>
        <div className='bg-sky-500/100 rounded-lg text-white p-10 flex justify-center mb-5'>
          <p>column 4</p>
        </div>
        <div className='bg-sky-500/100 rounded-lg text-white p-10 flex justify-center mb-5'>
          <p>column 3</p>
        </div>
        <div className='bg-sky-500/100 rounded-lg text-white p-10 flex justify-center mb-5'>
          <p>column 4</p>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
