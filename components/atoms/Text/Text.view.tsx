import classNames from "classnames"
import { TextColorEnum, TextProps, TextTypeEnum } from "./Text.types"

const TextView: React.FC<TextProps> = (props) => {
    const { as, color, children, type } = props
    const Component = as || 'span'

    const typeClass = classNames({
        'text-6xl font-medium uppercase': TextTypeEnum.HEADING1 === type,
        'text-4xl font-medium uppercase': TextTypeEnum.HEADING2 === type,
        'text-2xl font-normal italic': TextTypeEnum.SUBTITLE === type,
        'text-sm font-light': TextTypeEnum.BODY === type,
    })

    const colorClass = classNames({
        'text-superlightgray dark:text-darkgray': color === TextColorEnum.LIGHT,
        'text-darkgray dark:text-superlightgray': color === TextColorEnum.DARK,
    })

    return (
        <Component className={`${typeClass}${color ? ` ${colorClass}` : ''}`}>
            {children}
        </Component>
    )
}

export default TextView