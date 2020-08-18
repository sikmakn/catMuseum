import '../../wdyr';

import './exhibition.scss';
import React, {useEffect, useState} from 'react';
import ExhibitionSlider from '../../components/ExhibitionSlider';
import Loader from '../../components/Loader';

const Exhibitions: React.FC = () => {
    const [exhibitions, setExhibitions] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_HOST}/event/all`)
            .then(r => r.json())
            .then((exhibitions) => {
                const exhibitionData = exhibitions.map((ex: any) => {
                    const {from, to, ...remainings} = ex;
                    return {
                        ...remainings,
                        from: new Date(from),
                        to: new Date(to)
                    }
                });
                setExhibitions(exhibitionData);
            });
    }, []);

    if (!exhibitions.length) return (<div className="exhibition-container"><Loader color={'#000000'}/></div>);
    return (
        <div className="exhibition-container">
            <div>
                <div className="common-info">
                    <h2>Выставки и конкурсы</h2>
                    <div className="description-container">
                        <p>В нашем музее работают как постоянно действующая экспозиция,
                            так и временные тематические выставки, посвященные котам.</p>
                        <p>Желате пополнить нашу коллекцию своей работой? Мы предоставляем инструменты для того,
                            чтобы каждый посетитель имел возможность нарисовать своего кота,
                            а затем выставить свой рисунок у нас в музее.</p>
                    </div>
                </div>
                {exhibitions.length && <ExhibitionSlider data={exhibitions}/>}
            </div>
        </div>
    );

};

export default Exhibitions;