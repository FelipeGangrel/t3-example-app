import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority"


const buttonStyles = cva(`
    flex items-center justify-center
    rounded-md
    text-white
`, {
    variants: {
        size: {
            sm: `h-6 px-3 text-sm`,
            md: `h-9 px-4 text-base`,
            lg: `h-11 px-5 text-lg`
        },
        intent: {
            primary: `bg-blue-500 hover:bg-blue-600 active:bg-blue-800`,
            secondary: `bg-gray-500 hover:bg-gray-600 active:bg-gray-800`,
            danger: `bg-red-500 hover:bg-red-600 active:bg-red-800`
        },
        outlined: {
            true: `
                border-2 
                border-current 
                bg-transparent 
                hover:bg-transparent 
                active:bg-transparent
            `
        }
    },
    compoundVariants: [
        {
            intent: "primary",
            outlined: true,
            class: `text-blue-500 hover:text-blue-600 active:text-blue-800`
        },
        {
            intent: "secondary",
            outlined: true,
            class: `text-gray-500 hover:text-gray-600 active:text-gray-800`,
        },
        {
            intent: "danger",
            outlined: true,
            class: `text-red-500 hover:text-red-600 active:text-red-800`,
        }
    ],
    defaultVariants: {
        size: "md",
        intent: "primary",
    }
})

type StyledButtonProps = VariantProps<typeof buttonStyles>

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & StyledButtonProps

export const Button = ({ size, intent,outlined, ...props }: ButtonProps) => {
    return <button className={buttonStyles({ size, intent, outlined })} {...props} />
}