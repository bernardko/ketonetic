import React from "react"

const AuthorBlock = ({blockData}) => (
    <section id="team" class="gray-section features team p-h-lg">
        <div class="container">
            <div class="row m-b-lg">
                <div class="col-lg-12">
                    <div class="navy-line-left"></div>
                    <h2>{blockData.title}</h2>
                    <p>{blockData.subtitle}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">
                    <div class="team-member wow zoomIn">
                        {blockData.portrait && (
                            <img src={blockData.portrait.src} alt={blockData.portrait.alt} class="img-fluid rounded-circle" />
                        )}
                        <h4><span class="navy">{blockData.first_name}</span> {blockData.last_name}</h4>
                    </div>
                </div>
                <div class="col-sm-10 wow fadeInRight">
                    <p>{blockData.description}</p>
                    {blockData.social && (
                        <ul class="list-inline social-icon">
                            <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            {blockData.footer && (
                <div class="row">
                    <div class="col-lg-12 m-t-lg m-b-lg">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                    </div>
                </div>
            )}
        </div>
    </section>
)

export default AuthorBlock