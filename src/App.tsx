import { useEffect, useState } from 'react';
import './App.scss';

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

  // function for delaying other animations until phone animation ends

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
                src="/assets/phone1.svg"
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
                src="/assets/phone2group.svg"
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
                src="/assets/emptyphoneframe.svg"
                alt="Document Scanning"
                className="content__left-image negativemargin slideup"
              />
              {showOtherAnimations && (
                <>
                  <img
                    src="/assets/paper.svg"
                    alt="Document Scanning"
                    className="paper"
                  />
                  <img
                    src="/assets/paper.svg"
                    alt="Document Scanning"
                    className="paper"
                  />
                  <img
                    src="/assets/paper.svg"
                    alt="Document Scanning"
                    className="paper"
                  />
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
                  src="/assets/leftbar.svg"
                  alt="Document Scanning"
                  className="content__left-image opacityshift negativemargin "
                />
              )}
              <img
                src="/assets/phoneframe3.svg"
                alt="Document Scanning"
                className="content__left-image negativemargin slideup"
              />
              {showOtherAnimations && (
                <img
                  src="/assets/rightbar.svg"
                  alt="Document Scanning"
                  className="content__left-image opacityshift negativemargin "
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
                src="/assets/phoneframe4.svg"
                alt="Document Scanning"
                className="content__left-image negativemargin slideup"
              />
              <img
                src="/assets/pdf.svg"
                alt="Document Scanning"
                className="content__left-image negativemargin slideup"
              />
              <img
                src="/assets/jpg.svg"
                alt="Document Scanning"
                className="content__left-image negativemargin slideup"
              />
              <img
                src="/assets/txt.svg"
                alt="Document Scanning"
                className="content__left-image negativemargin slideup"
              />
            </div>
            <div className="content__right opacityshift">
              <div className="content__right-title">Export & Share</div>
              <div className="content__right-subtitle">
                All-Round Conversion
              </div>
              <div className="content__right-description">
                Export your scans as PDF,JPG,ZIP,TXT and Word.
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
              src="/assets/doscanner.svg"
              alt="Document Scanner"
              className={`${step === 'DocumentScanner' && 'filled'}`}
            />
          </div>
          <div>Document & Scanner</div>
        </div>

        <div className="footer__box" onClick={() => handleStep('SignAndStamp')}>
          <div
            className={`footer__box-icon ${step === 'SignAndStamp' ? 'filled' : ''}`}
          >
            <img
              src="/assets/signnstamp.svg"
              alt="Sign and Stamp"
              className={`${step === 'SignAndStamp' && 'filled'}`}
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
              src="/assets/batchscan.svg"
              alt="Batch Scanning"
              className={`${step === 'BatchScanning' && 'filled'}`}
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
              src="/assets/advanced.svg"
              alt="Advanced Filters"
              className={`${step === 'AdvancedFilters' && 'filled'}`}
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
              src="/assets/doscanner.svg"
              alt="Export and Share"
              className={`${step === 'ExportAndShare' && 'filled'}`}
            />
          </div>
          <div>Export & Share</div>
        </div>
      </footer>

      {/* End of Footer */}
    </>
  );
}
