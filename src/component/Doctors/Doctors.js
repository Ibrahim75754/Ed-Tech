import React, { useEffect, useState } from 'react';
import Service from '../Home/Service';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Doctors = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="container py-5">
            <div className="text-center pb-4">
                <h1>FEATURED COURSES</h1>
                <p>ALL THE TOP COURSES WE OFFERED.</p>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Doctors;