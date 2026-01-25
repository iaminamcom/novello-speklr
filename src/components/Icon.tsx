type IconProps = {
    id: string;
    height?: number;
    width?: number;
    className?: string;
}

export function Icon({ id, height = 24, width = 24, className }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
        >
            <use href={`/images/icons.svg#${id}`} />
        </svg>
    )
}
