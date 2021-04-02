export function copyTxt(content: string) {
    const textField = document.createElement('textarea');
    textField.innerText = content;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
}

export const createItemsMap = (items: any, key: string | number) => {
    return items.reduce((prev, next) => {
        prev[next[key]] = next;
        return prev;
    }, {});
};
