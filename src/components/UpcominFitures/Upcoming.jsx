import Carousel  from 'react-material-ui-carousel'
import React from 'react'
import "./upcoming.css"

const Upcoming = () => {
  return (
    <section id='upcoming'>
      <h2>Upcoming Matches</h2>
      <h3>All Matches</h3>

        <div className="about__content">
          <Carousel  className='card-container' animation='slider'>
          <div className="about__cards">
            <article className="about__card">
              <h5>Sunday 11 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Academica SC    vs   Jesikal</h4>
            </article>
            <article className="about__card">
              <h5>Sunday 11 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Academica SC    vs   Jesikal</h4>
            </article>
            <article className="about__card">
              <h5>Monday 12 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Academica SC    vs   Jesikal</h4>
            </article>
            <article className="about__card">
              <h5>Tuesday 13 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Academica SC    vs   Jesikal</h4>
            </article>
            <article className="about__card">
              <h5>Wednesday 14 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Academica SC    vs   Jesikal</h4>
            </article>
            <article className="about__card">
              <h5>Sunday 11 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Academica SC    vs   Jesikal</h4>
            </article>
            <article className="about__card">
              <h5>Sunday 11 June 2022</h5>
              <small>1:00pm,Besease Primary Park</small>
              <h4>Academica SC    vs   Jesikal</h4>
            </article>
          </div>
          </Carousel>
        </div>
    </section>
  )
}

export default Upcoming