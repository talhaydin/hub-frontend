import React from 'react';

import doscanner from '../assets/images/doscanner.svg';
import signnstamp from '../assets/images/signnstamp.svg';
import batchscan from '../assets/images/batchscan.svg';
import advanced from '../assets/images/advanced.svg';

interface FooterProps {
  step: string;
  setStep: (step: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ step, setStep }) => {
  const handleStep = (step: string) => {
    setStep(step);
    localStorage.setItem('laststep', step);
  };

  return (
    <footer className="footer">
      <div
        className="footer__box"
        onClick={() => handleStep('DocumentScanner')}
      >
        <div
          className={`footer__box-icon ${step === 'DocumentScanner' ? 'filled' : ''}`}
        >
          <img
            src={doscanner}
            alt="Document Scanner"
            className={step === 'DocumentScanner' ? 'filled' : ''}
          />
        </div>
        <div>Document & Scanner</div>
      </div>

      <div className="footer__box" onClick={() => handleStep('SignAndStamp')}>
        <div
          className={`footer__box-icon ${step === 'SignAndStamp' ? 'filled' : ''}`}
        >
          <img
            src={signnstamp}
            alt="Sign and Stamp"
            className={step === 'SignAndStamp' ? 'filled' : ''}
          />
        </div>
        <div>Sign & Stamp</div>
      </div>

      <div className="footer__box" onClick={() => handleStep('BatchScanning')}>
        <div
          className={`footer__box-icon ${step === 'BatchScanning' ? 'filled' : ''}`}
        >
          <img
            src={batchscan}
            alt="Batch Scanning"
            className={step === 'BatchScanning' ? 'filled' : ''}
          />
        </div>
        <div>Batch Scanning</div>
      </div>

      <div
        className="footer__box"
        onClick={() => handleStep('AdvancedFilters')}
      >
        <div
          className={`footer__box-icon ${step === 'AdvancedFilters' ? 'filled' : ''}`}
        >
          <img
            src={advanced}
            alt="Advanced Filters"
            className={step === 'AdvancedFilters' ? 'filled' : ''}
          />
        </div>
        <div>Advanced Filters</div>
      </div>

      <div className="footer__box" onClick={() => handleStep('ExportAndShare')}>
        <div
          className={`footer__box-icon ${step === 'ExportAndShare' ? 'filled' : ''}`}
        >
          <img
            src={doscanner}
            alt="Export and Share"
            className={step === 'ExportAndShare' ? 'filled' : ''}
          />
        </div>
        <div>Export & Share</div>
      </div>
    </footer>
  );
};
