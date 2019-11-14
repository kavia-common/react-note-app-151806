import React from 'react';

const About: React.FC<{}> = () => {
    return (
        <div className="block w-full text-justify p-4">
            <p className="m-auto">
                Welcome to Derozan, the self-care note taking application. Create an account, make private entries and
                rate your own mood. Over time, you can see how your mood is shifting and track how you've grown over
                time.
            </p>
        </div>
    );
};

export default About;
