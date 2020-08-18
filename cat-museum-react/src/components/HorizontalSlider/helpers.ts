export function makeActive(target: HTMLElement, newActiveNode: HTMLElement) {
    for (let i = 0; i < target.children.length; i++)
        target.children[i].classList.remove('active');
    newActiveNode.classList.add('active');
}