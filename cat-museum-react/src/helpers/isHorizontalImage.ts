export default function isHorizontalImage(url: string): boolean {
    const img = new Image();
    img.src = url;
    return img.width > img.height;
}