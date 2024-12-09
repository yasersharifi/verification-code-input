import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import VerificationCodeInput from "./VerificationCodeInput";

export default {
    title: "Components/VerificationCodeInput",
    component: VerificationCodeInput,
    argTypes: {
        length: { control: "number" },
    },
} as ComponentMeta<typeof VerificationCodeInput>;

const Template: ComponentStory<typeof VerificationCodeInput> = (args) => (
    <VerificationCodeInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
    length: 6,
    onComplete: (code: string) => alert(`Code entered: ${code}`),
};

export const FourDigits = Template.bind({});
FourDigits.args = {
    length: 4,
    onComplete: (code: string) => alert(`Code entered: ${code}`),
};
