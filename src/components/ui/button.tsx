interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    variant: "primary" | "secondary" | "destructive" | "disabled";
    disabled?: boolean;
    outlined?: boolean;
}

const Button = (props: ButtonProps) => {
    let classes;

    switch (props.variant) {
        case "primary":
            classes = props.outlined ? "bg-transparent text-hm-orange border border-hm-orange hover:border-hm-orange/10 hover:bg-hm-orange/10" : "bg-hm-orange hover:bg-hm-orange/80 text-white";
            break;
        case "secondary":
            classes = props.outlined ? "bg-transparent text-hm-blue border border-hm-blue hover:border-hm-blue/10 hover:bg-hm-blue/10" : "bg-hm-blue hover:bg-hm-blue/60 text-white";
            break;
        case "destructive":
            classes = props.outlined ? "bg-transparent text-hm-red border border-hm-red hover:border-hm-red/10 hover:bg-hm-red/10" : "bg-hm-red hover:bg-hm-red/60 text-white";
            break;
        case "disabled":
            classes = "bg-transparent text-hm-gray/30 border border-hm-gray/30";
            break;
        default:
            classes = "bg-hm-blue";
            break;
    }

    return (
        <button type={props.type} className={`${classes} rounded-3xl font-oswald text-sm px-5 py-2 uppercase`} {...props}>{props.name}</button>
    );
}

export default Button;