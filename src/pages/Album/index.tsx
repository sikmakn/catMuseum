import '../../wdyr';

import './album.scss';
import React from "react";
import Top from "../../pageParts/Top";
import PhotoAlbum from "../../components/PhotoAlbum";

const Album: React.FC = () => (
    <>
        <Top darken={0.25} header="Фотоальбом" backgroundUrl="album-top.jpg"/>
        <div className="album-container">
            <div className="album-content-container">
                <PhotoAlbum urls={[
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
                    'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                ]}/>
            </div>
        </div>
    </>
);

export default Album;