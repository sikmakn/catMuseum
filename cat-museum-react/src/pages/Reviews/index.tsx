import '../../wdyr';

import './reviews.scss';
import React, {DragEvent, MouseEvent, useCallback, useState} from 'react';
import Header from "../../components/Header";

const Index: React.FC = () => {
    const images = [
        'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697',
        'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        'https://previews.123rf.com/images/yommy8008/yommy80081708/yommy8008170800031/84413318-vertical-photo-of-few-weeks-old-kitten-the-cat-has-white-fur-with-tabby-spots-on-head-and-back-anima.jpg',
        'https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg',
        'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2',
        'https://previews.123rf.com/images/yommy8008/yommy80081708/yommy8008170800031/84413318-vertical-photo-of-few-weeks-old-kitten-the-cat-has-white-fur-with-tabby-spots-on-head-and-back-anima.jpg',
        'https://previews.123rf.com/images/yommy8008/yommy80081708/yommy8008170800031/84413318-vertical-photo-of-few-weeks-old-kitten-the-cat-has-white-fur-with-tabby-spots-on-head-and-back-anima.jpg',
        'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/5/14/w900X450/cat-whiskers-kitty-tabby-20787_1.jpg',
        'https://theloon.com/wp-content/uploads/2019/11/cat.jpeg',
        'https://a-static.besthdwallpaper.com/cat-posmotret-predstavlyayut-oboi-2560x1080-4078_14.jpg',
        'https://www.lookslikefilm.com/wp-content/uploads/2019/04/Sarah-Monroe-Rodgers-www.sarahmichellephotos.com_.jpg',
        'https://cdn.pixabay.com/photo/2016/01/05/21/08/cat-1123244_960_720.jpg',
        'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        'https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg',
        'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2',
        'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/5/14/w900X450/cat-whiskers-kitty-tabby-20787_1.jpg',
        'https://theloon.com/wp-content/uploads/2019/11/cat.jpeg',
        'https://www.lookslikefilm.com/wp-content/uploads/2019/04/Sarah-Monroe-Rodgers-www.sarahmichellephotos.com_.jpg',
        'https://cdn.pixabay.com/photo/2016/01/05/21/08/cat-1123244_960_720.jpg',
        'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://www.lookslikefilm.com/wp-content/uploads/2019/04/Sarah-Monroe-Rodgers-www.sarahmichellephotos.com_.jpg',
        'https://cdn.pixabay.com/photo/2016/01/05/21/08/cat-1123244_960_720.jpg',
        'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        'https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg',
        'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2',
        'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/5/14/w900X450/cat-whiskers-kitty-tabby-20787_1.jpg',
        'https://theloon.com/wp-content/uploads/2019/11/cat.jpeg',
        'https://www.lookslikefilm.com/wp-content/uploads/2019/04/Sarah-Monroe-Rodgers-www.sarahmichellephotos.com_.jpg',
        'https://cdn.pixabay.com/photo/2016/01/05/21/08/cat-1123244_960_720.jpg',
        'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://www.lookslikefilm.com/wp-content/uploads/2019/04/Sarah-Monroe-Rodgers-www.sarahmichellephotos.com_.jpg',
        'https://cdn.pixabay.com/photo/2016/01/05/21/08/cat-1123244_960_720.jpg',
        'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        'https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg',
        'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2',
        'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/5/14/w900X450/cat-whiskers-kitty-tabby-20787_1.jpg',
        'https://theloon.com/wp-content/uploads/2019/11/cat.jpeg',
        'https://www.lookslikefilm.com/wp-content/uploads/2019/04/Sarah-Monroe-Rodgers-www.sarahmichellephotos.com_.jpg',
        'https://cdn.pixabay.com/photo/2016/01/05/21/08/cat-1123244_960_720.jpg',
        'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697',
        'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        'https://previews.123rf.com/images/yommy8008/yommy80081708/yommy8008170800031/84413318-vertical-photo-of-few-weeks-old-kitten-the-cat-has-white-fur-with-tabby-spots-on-head-and-back-anima.jpg',
        'https://news.cgtn.com/news/77416a4e3145544d326b544d354d444d3355444f31457a6333566d54/img/37d598e5a04344da81c76621ba273915/37d598e5a04344da81c76621ba273915.jpg',
        'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2',
        'https://previews.123rf.com/images/yommy8008/yommy80081708/yommy8008170800031/84413318-vertical-photo-of-few-weeks-old-kitten-the-cat-has-white-fur-with-tabby-spots-on-head-and-back-anima.jpg',
        'https://previews.123rf.com/images/yommy8008/yommy80081708/yommy8008170800031/84413318-vertical-photo-of-few-weeks-old-kitten-the-cat-has-white-fur-with-tabby-spots-on-head-and-back-anima.jpg',
        'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/5/14/w900X450/cat-whiskers-kitty-tabby-20787_1.jpg',
        'https://theloon.com/wp-content/uploads/2019/11/cat.jpeg',
    ];

    const marginHorizontal = 60;
    const marginVertical = 180;
    const width = 270;
    const height = 410;
    const columnCount = Math.round(window.innerWidth / (width + marginHorizontal));
    const rowCount = Math.round(images.length / columnCount);
    let fullHeight = (height + marginVertical) * rowCount;
    if (fullHeight < window.innerHeight) fullHeight = window.innerHeight;
    const fullWidth = window.innerWidth;

    function recountCoordinate(i: number, size: number, margin: number, coordinate: number, fullSize: number, shift: number = 0): number {
        let newCoord = (i * (size + margin) + coordinate) % (fullSize + size) + shift;
        if (newCoord > fullSize) newCoord = newCoord - fullSize - size;
        if (newCoord < -size) newCoord = fullSize + newCoord + size;
        return newCoord;
    }

    const onDragStartImage = (e: DragEvent) => e.preventDefault();

    function getImageMatrix() {
        const imageMatrix: JSX.Element[] = [];
        let k = 0;
        for (let i = 0; i < rowCount; i++) {
            for (let j = 0; j < columnCount; j++) {
                if (k >= images.length) break;

                let imgX = recountCoordinate(j, width, marginHorizontal, coordinate.x, fullWidth);
                const shift = j % 2 === 0 ? 180 : 0;
                let imgY = recountCoordinate(i, height, marginVertical, coordinate.y, fullHeight, shift);
                imageMatrix.push(<img
                    key={i + '' + j}
                    src={images[k]}
                    alt="отзыв"
                    style={{transform: `translate(${imgX}px, ${imgY}px)`}}
                    draggable={false}
                    onDragStart={onDragStartImage}
                />);
                k++;
            }
        }
        return imageMatrix;
    }

    const [isDownMouse, setIsDownMouse] = useState(false);
    const [coordinate, setCoordinate] = useState<{ x: number, y: number }>({x: 0, y: 0});

    const onMouseDownHandler = useCallback(() => setIsDownMouse(true), []);

    const onMouseMove = (event: MouseEvent) => {
        if (!isDownMouse) return;
        let newX = coordinate.x + event.movementX;
        let newY = coordinate.y + event.movementY;
        setCoordinate({x: newX, y: newY});
    };

    const onMouseUpHandler = useCallback(() => setIsDownMouse(false), []);

    return (
        <>
            <Header isDarkPageArr={[false]}/>
            <div
                className="reviews-container"
                onMouseDown={onMouseDownHandler}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUpHandler}
                onMouseLeave={onMouseUpHandler}
                style={{height: fullHeight}}
            >
                {getImageMatrix()}
            </div>
        </>
    );
};

export default Index;