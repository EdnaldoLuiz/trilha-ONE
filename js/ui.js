export function typeEffect(element, text, interval = 15) {
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            element.value += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, interval);
}