import React from 'react';

import phone1 from '../assets/images/phone1.svg';
import phone2group from '../assets/images/phone2group.svg';
import phoneframe3 from '../assets/images/phoneframe3.svg';
import phoneframe4 from '../assets/images/phoneframe4.svg';
import emptyphoneframe from '../assets/images/emptyphoneframe.svg';
import leftbar from '../assets/images/leftbar.svg';
import rightbar from '../assets/images/rightbar.svg';
import pdf from '../assets/images/pdf.svg';
import jpg from '../assets/images/jpg.svg';
import txt from '../assets/images/txt.svg';
import paper from '../assets/images/paper.svg';

interface ContentProps {
  step: string;
  showOtherAnimations: boolean;
}

export const Content: React.FC<ContentProps> = ({
  step,
  showOtherAnimations,
}) => {
  return (
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
              Scan any document instantly with your mobile device by just a few
              steps. Save as PDF, JPG, ZIP, TXT, and Word format.
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
              Draw, scan or import your signature and stamp with a simple touch.
              Sign and stamp any document with just a single tap!
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
              Scan multiple pages or documents in multiple-scanning mode. Batch
              all scans as a single document.
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
            <div className="content__right-subtitle">All-Round Conversion</div>
            <div className="content__right-description">
              Export your scans as PDF, JPG, ZIP, TXT, and Word.
            </div>
            <button className="content__right-button">Learn More</button>
          </div>
        </>
      )}
    </div>
  );
};
