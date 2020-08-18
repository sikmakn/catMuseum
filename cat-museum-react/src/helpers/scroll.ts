export default async function scrollWithEvent(to: number, wheelEventHandler: (e: Event) => any, isDown = true, speed = 20) {
    document.removeEventListener('wheel', wheelEventHandler);
    await scrollAnimated(to, isDown, speed);
    document.addEventListener('wheel', wheelEventHandler);
}

async function scrollAnimated(to: number, isDown: boolean, speed: number) {
    const condition = isDown ? () => window.pageYOffset < to : () => window.pageYOffset > to;
    const signedSpeed = isDown ? speed : -speed;
    while (condition()) {
        await new Promise(res => setTimeout(() => {
            window.scrollTo({left: 0, top: window.pageYOffset + signedSpeed});
            res()
        }, 10));
    }
    window.scrollTo({left: 0, top: to});
}