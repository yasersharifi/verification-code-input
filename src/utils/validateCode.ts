export const validateCode = (code: string, length: number): boolean => {
    return new RegExp(`^\\d{${length}}$`).test(code);
};
