import { useEffect, useState } from 'react';
import './App.scss';

// Import images from src/assets/images
import phone1 from './assets/images/phone1.svg';
import phone2group from './assets/images/phone2group.svg';
import phoneframe3 from './assets/images/phoneframe3.svg';
import phoneframe4 from './assets/images/phoneframe4.svg';
import emptyphoneframe from './assets/images/emptyphoneframe.svg';
import leftbar from './assets/images/leftbar.svg';
import rightbar from './assets/images/rightbar.svg';
import pdf from './assets/images/pdf.svg';
import jpg from './assets/images/jpg.svg';
import txt from './assets/images/txt.svg';
import paper from './assets/images/paper.svg';
import doscanner from './assets/images/doscanner.svg';
import signnstamp from './assets/images/signnstamp.svg';
import batchscan from './assets/images/batchscan.svg';
import advanced from './assets/images/advanced.svg';

export function App() {
  const [step, setStep] = useState<string>();
  const [showOtherAnimations, setShowOtherAnimations] =
    useState<boolean>(false);

  useEffect(() => {
    const lastStep = localStorage.getItem('laststep');
    setStep(lastStep && lastStep !== undefined ? lastStep : 'DocumentScanner');
  }, []);

  const handleStep = (step: string) => {
    setStep(step);
    localStorage.setItem('laststep', step);
  };

  useEffect(() => {
    const phoneAnimationDuration = 1500;
    const timer = setTimeout(() => {
      setShowOtherAnimations(true);
    }, phoneAnimationDuration);

    return () => {
      clearTimeout(timer), setShowOtherAnimations(false);
    };
  }, [step]);

  return (
    <>
      <div className="content">
        {step === 'DocumentScanner' && (
          <>
            <div className="content__left">
              <img
                src={phone1}
                alt="Document Scanning"
                className="content__left-image slideup"
              />
            </div>
            <div className="content__right opacityshift">
              <div className="content__right-title">Document Scanner</div>
              <div className="content__right-subtitle">Scan With Ease</div>
              <div className="content__right-description">
                Scan any document instantly with your mobile device by just a
                few steps. Save as PDF, JPG, ZIP, TXT, and Word format.
              </div>
              <button className="content__right-button">Learn More</button>
            </div>
          </>
        )}
        {step === 'SignAndStamp' && (
          <>
            <div className="content__left">
              <img
                src={phone2group}
                alt="Document Scanning"
                className="content__left-image negativemargin slideup"
              />
            </div>
            <div className="content__right opacityshift">
              <div className="content__right-title">Sign & Stamp</div>
              <div className="content__right-subtitle">One-Tap Focus</div>
              <div className="content__right-description">
                Draw, scan or import your signature and stamp with a simple
                touch. Sign and stamp any document with just a single tap!
              </div>
              <button className="content__right-button">Learn More</button>
            </div>
          </>
        )}
        {step === 'BatchScanning' && (
          <>
            <div className="content__left">
              <img
                src={emptyphoneframe}
                alt="Document Scanning"
                className="content__left-image negativemargin slideup"
              />
              {showOtherAnimations && (
                <>
                  <img src={paper} alt="Document Scanning" className="paper" />
                  <img src={paper} alt="Document Scanning" className="paper" />
                  <img src={paper} alt="Document Scanning" className="paper" />
                </>
              )}
            </div>
            <div className="content__right opacityshift">
              <div className="content__right-title">Batch Scanning</div>
              <div className="content__right-subtitle">Multiple Page Scan</div>
              <div className="content__right-description">
                Scan multiple pages or documents in multiple-scanning mode.
                Batch all scans as a single document.
              </div>
              <button className="content__right-button">Learn More</button>
            </div>
          </>
        )}
        {step === 'AdvancedFilters' && (
          <>
            <div className="content__left">
              {showOtherAnimations && (
                <img
                  src={leftbar}
                  alt="Document Scanning"
                  className="content__left-image opacityshift negativemargin"
                />
              )}
              <img
                src={phoneframe3}
                alt="Document Scanning"
                className="content__left-image negativemargin slideup"
              />
              {showOtherAnimations && (
                <img
                  src={rightbar}
                  alt="Document Scanning"
                  className="content__left-image opacityshift negativemargin"
                />
              )}
            </div>
            <div className="content__right opacityshift">
              <div className="content__right-title">Advanced Filters</div>
              <div className="content__right-subtitle">Unique Filters</div>
              <div className="content__right-description">
                Apply advanced filters and enhance quality with various custom
                made filters. Manually edit brightness and contrast by your own
                choice on the custom filters.
              </div>
              <button className="content__right-button">Learn More</button>
            </div>
          </>
        )}
        {step === 'ExportAndShare' && (
          <>
            <div className="content__left">
              <img
                src={phoneframe4}
                alt="Document Scanning"
                className="content__left-image negativemargin slideup"
              />
              <img
                src={pdf}
                alt="PDF"
                className="content__left-image negativemargin slideup"
              />
              <img
                src={jpg}
                alt="JPG"
                className="content__left-image negativemargin slideup"
              />
              <img
                src={txt}
                alt="TXT"
                className="content__left-image negativemargin slideup"
              />
            </div>
            <div className="content__right opacityshift">
              <div className="content__right-title">Export & Share</div>
              <div className="content__right-subtitle">
                All-Round Conversion
              </div>
              <div className="content__right-description">
                Export your scans as PDF, JPG, ZIP, TXT, and Word.
              </div>
              <button className="content__right-button">Learn More</button>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
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

        <div
          className="footer__box"
          onClick={() => handleStep('BatchScanning')}
        >
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

        <div
          className="footer__box"
          onClick={() => handleStep('ExportAndShare')}
        >
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
    </>
  );
}
