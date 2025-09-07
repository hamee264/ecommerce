import { useState, useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const VerificationScreen = ({ onBack, onVerify, email, isForgotPassword = false }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [canResend, setCanResend] = useState(true);
  const [resendCountdown, setResendCountdown] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendCountdown]);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const verificationCode = code.join('');
    if (verificationCode.length === 6) {
      onVerify(verificationCode);
    }
  };

  const handleResend = () => {
    setCanResend(false);
    setResendCountdown(30);
    // Here you would typically call an API to resend the code

  };

  const isCodeComplete = code.every(digit => digit !== '');

  return (
    <div className="verification-screen">
      <div className="verification-container">
        {/* Header */}
        <div className="verification-header">
          <button className="back-btn" onClick={onBack}>
            <ArrowLeft size={24} />
          </button>
          <div className="verification-title-section">
            <h1 className="verification-title">
              {isForgotPassword ? 'Forgot Password' : 'Verification Email'}
            </h1>
          </div>
        </div>

        {/* Verification Info */}
        <div className="verification-info">
          <p className="verification-text">
            {isForgotPassword 
              ? 'Code was sent to email'
              : 'We\'ve sent a 6-digit code to your email'
            }
          </p>
          {!isForgotPassword && (
            <p className="verification-email">{email}</p>
          )}
        </div>

        {/* Code Input */}
        <div className="code-input-section">
          <div className="code-inputs">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="code-input"
                placeholder=""
              />
            ))}
          </div>
        </div>

        {/* Resend Code */}
        <div className="resend-section">
          {canResend ? (
            <button className="resend-btn" onClick={handleResend}>
              Resend code
            </button>
          ) : (
            <p className="resend-countdown">
              Resend code in {resendCountdown}s
            </p>
          )}
        </div>

        {/* Verify Button */}
        <button 
          className={`verify-btn ${isCodeComplete ? 'active' : 'disabled'}`}
          onClick={handleVerify}
          disabled={!isCodeComplete}
        >
          {isForgotPassword ? 'Verify' : 'Verify'}
        </button>
      </div>
    </div>
  );
};

export default VerificationScreen;
