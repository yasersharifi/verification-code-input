import React from "react";
import VerificationCodeInput from "./components/VerificationCodeInput/VerificationCodeInput";

const App: React.FC = () => {
    const handleComplete = (code: string) => {
        alert(`Verification code entered: ${code}`);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Enter Verification Code</h1>
            <VerificationCodeInput
                length={6}
                onComplete={handleComplete}
            />
        </div>
    );
};

export default App;
