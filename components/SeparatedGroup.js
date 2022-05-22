const SeparatedGroup = ({ separator, children }) => {
    let newChildren = []
    for (let i = 0; i < children.length; i++) {
        newChildren.push(children[i])
        if (i != children.length - 1) {
            newChildren.push("|")
        }
    }
    children = newChildren
    return children
}

export default SeparatedGroup