import React, { useState } from 'react';
import Joyride from 'react-joyride';

const DashboardTour = () => {
  const [run, setRun] = useState(true);

  const steps = [
    {
      target: '.notification-icon',
      content: 'This is where you can see your notifications.',
    },
    {
      target: '.search-bar',
      content: "Use this search bar to find what you're looking for.",
    },
    {
      target: '.create-account-btn',
      content: 'Click here to create a new account.',
    },
    {
      target: '.click-here-btn',
      content: 'Tap this button to proceed further.',
    },
  ];

  const handleTourCallback = (data) => {
    const { status } = data;
    if (['finished', 'skipped'].includes(status)) {
      setRun(false); // Stops the tour when it's finished or skipped
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <img
        src="/W.jpeg"
        alt="Dashboard Screenshot"
        style={{ width: '100%', height: 'auto' }}
      />
      <div
        className="notification-icon"
        style={{
          position: 'absolute',
          top: '5%',
          left: '90%',
          width: '40px',
          height: '40px',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
      />
      <div
        className="search-bar"
        style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '90%',
          height: '40px',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
      />
      <button
        className="create-account-btn"
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          padding: '10px',
        }}
      >
        Create Account
      </button>
      <button
        className="click-here-btn"
        style={{
          position: 'absolute',
          top: '75%',
          left: '30%',
          padding: '10px',
        }}
      >
        Click Here
      </button>

      <Joyride
        steps={steps}
        continuous
        showProgress
        showSkipButton
        run={run}
        callback={handleTourCallback}
        styles={{
          options: {
            zIndex: 1000,
          },
        }}
      />
    </div>
  );
};

export default DashboardTour;
