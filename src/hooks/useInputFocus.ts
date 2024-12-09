import { useRef } from "react";

const useInputFocus = () => {
    const inputsRef = useRef<HTMLInputElement[]>([]);

    const focusInput = (index: number) => {
        inputsRef.current[index]?.focus();
    };

    return { inputsRef, focusInput };
};

export default useInputFocus;
