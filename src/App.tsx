import { useEffect, useState } from 'react';
import './App.scss';

import { Footer } from './components/Footer';
import { Content } from './components/Content';

export function App() {
  const [step, setStep] = useState<string>('');

  const [showOtherAnimations, setShowOtherAnimations] =
    useState<boolean>(false);

  useEffect(() => {
    const lastStep = localStorage.getItem('laststep');
    setStep(lastStep && lastStep !== undefined ? lastStep : 'DocumentScanner');
  }, []);

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
      {/* Content */}
      <Content step={step} showOtherAnimations={showOtherAnimations} />

      {/* Footer */}
      <Footer step={step} setStep={setStep} />
    </>
  );
}
