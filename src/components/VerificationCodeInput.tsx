import React, { useState, useRef } from "react";
import styles from "./VerificationCodeInput.module.css";

interface VerificationCodeInputProps {
    length: number;
    onComplete: (code: string) => void;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
    length,
    onComplete,
}) => {
    const [values, setValues] = useState<string[]>(Array(length).fill(""));
    const inputsRef = useRef<HTMLInputElement[]>([]);

    const handleChange = (value: string, index: number) => {
        if (/^\d*$/.test(value)) {
            const updatedValues = [...values];
            updatedValues[index] = value;
            setValues(updatedValues);

            if (value && index < length - 1) {
                inputsRef.current[index + 1].focus();
            }

            if (updatedValues.every((val) => val !== "")) {
                onComplete(updatedValues.join(""));
            }
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === "Backspace" && !values[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <div className={styles.verificationCodeInput}>
            {Array.from({ length }).map((_, i) => (
                <input
                    key={i}
                    type="text"
                    maxLength={1}
                    value={values[i]}
                    onChange={(e) => handleChange(e.target.value, i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    ref={(el) => (inputsRef.current[i] = el!)}
                />
            ))}
        </div>
    );
};

export default VerificationCodeInput;
