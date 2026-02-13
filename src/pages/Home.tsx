import React from 'react';
import ProductSection from '../components/ProductSection';


interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = () => {
    return (
        <div className="mt-20">
            <ProductSection />
        </div>
    );
}
export default Home;