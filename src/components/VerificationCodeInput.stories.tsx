// import React from "react";
// import { Meta, StoryObj } from "@storybook/react";
// import VerificationCodeInput from "./VerificationCodeInput";

// const meta=  {
//     title: "Components/VerificationCodeInput",
//     component: VerificationCodeInput,
//     tags: ["autodocs"],
//     argTypes: {
//         length: { control: "number" },
//     },
// } satisfies Meta<typeof VerificationCodeInput>;

// export default meta;

// const Template: StoryObj<typeof meta> = (args) => (
//     <VerificationCodeInput {...args} />
// );

// export const Default = Template.bind({});
// Default.args = {
//     length: 6,
//     onComplete: (code: string) => alert(`Code entered: ${code}`),
// };

// export const FourDigits = Template.bind({});
// FourDigits.args = {
//     length: 4,
//     onComplete: (code: string) => alert(`Code entered: ${code}`),
// };

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import VerificationCodeInput from "./VerificationCodeInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/VerificationCodeInput",
    component: VerificationCodeInput,

    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        length: {
            control: "number",
            description: "Number of input boxes for the verification code.",
            defaultValue: 6,
        },
        onComplete: {
            action: "completed",
            description:
                "Callback triggered when the user completes entering the verification code.",
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onComplete: fn() },
} satisfies Meta<typeof VerificationCodeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        length: 6,
    },
};

export const FourDigits: Story = {
    args: {
        length: 4,
    },
};
