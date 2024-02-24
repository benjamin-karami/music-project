import React from 'react';
import messages from './partials/instruments.messages';
import Instrument from './partials/Instrument'

const Instruments = () => {
    return (
        <div className='mt-5'>
            <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
            {messages.TITLE}
          </p>
            <Instrument />
        </div>
    )
}

export default Instruments;