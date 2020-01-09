import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktail",
                info: "This Website is not a template. This is made by medhansh!"
            },
            {
                icon: <FaHiking />,
                title: "medhansh Hiking",
                info: "This Website is not a template. This is made by medhansh!"
            },
            {
                icon: <FaShuttleVan />,
                title: "free cocktail",
                info: "This Website is not a template. This is made by medhansh!"
            },
            {
                icon: <FaBeer />,
                title: "ed-sheeran cocktail",
                info: "This Website is not a template. This is made by medhansh!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">{this.state.services.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}</div>
                {/* This Website is not a template. This is made by medhansh! */}
            </section>
        )
    }
}
