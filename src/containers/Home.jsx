import React from 'react';
import { connect } from 'react-redux'
import '../assets/styles/App.scss'
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header'

const Home = props => { //Se ponen estos 3 props por destructuración, ya que abajo en el connect se mandan llamar
    const { myList, trends, originals, filteredList } = props
    return (
        <>
            <Header />
            <Search isHome />
            {filteredList?.length !== 0 &&
                    <Categories title="Búsqueda">
                        <Carousel>
                        {filteredList.map(item => (
                            <CarouselItem 
                                key={item.id} 
                                {...item}
                                isList
                            />
                        ))}
                        </Carousel>
                    </Categories>
                
            }
            {myList?.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                    {myList.map(item => (
                        <CarouselItem 
                            key={item.id} 
                            {...item}
                            isList
                        />
                    ))}
                    </Carousel>
                </Categories>
            }
            <Categories title="Tendencias">
                <Carousel>
                    {trends.map(item => (
                        <CarouselItem key={item.id} {...item}/>
                    ))}
                </Carousel>
            </Categories>
            <Categories title="Originales de Platzi Video">
                <Carousel>
                    {originals.map(item => (
                        <CarouselItem key={item.id} {...item}/>
                    ))}
                </Carousel>
            </Categories>
        </>
    )
}

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        filteredList: state.filteredList
    }
}

export default connect(mapStateToProps, null)(Home);