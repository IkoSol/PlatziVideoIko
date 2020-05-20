import React from 'react';
import '../assets/styles/components/NotFound.scss'
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => (
    <section className="notFound">
        <label className="notFound__title animated pulse">404</label>
        <label className="notFound__subtitle">Page not found</label>
    </section>
)

export default NotFound;