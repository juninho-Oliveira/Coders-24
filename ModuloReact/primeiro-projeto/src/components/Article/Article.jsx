
import React from "react";

import articleImg from '../../assets/img/article.png'

import "./style.css"

export class Article extends React.Component {
    render () {
        return (
            <article id="article">
                <img src={articleImg} alt="" />

                <div className="article-infos">
                    <h2>Designing Dashboards</h2>
                    <h3>NASA</h3>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                        do amet sint. Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                </div>
            </article>
        )
    }
}