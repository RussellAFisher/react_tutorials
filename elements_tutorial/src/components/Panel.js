import classNames from "classnames";

function Panel({children, className, ...rest}) {
    const joinedClassNames = classNames('border rounded p-3 shadow bg-white w-full', className);

    return <div className={joinedClassNames} {...rest}>{children}</div>
}

export default Panel;