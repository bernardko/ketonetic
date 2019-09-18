import React from "react"

const AuthorBlock = ({blockData}) => (
    <section id="team" class="gray-section features team p-h-lg">
        <div class="container">
            <div class="row m-b-lg">
                <div class="col-lg-12">
                    <div class="navy-line-left"></div>
                    <h2>{blockData.value.title}</h2>
                    <p>{blockData.value.subtitle}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-2">
                    <div class="team-member wow zoomIn">
                        {blockData.value.portrait && (
                            <img src={blockData.portrait.src} alt={blockData.portrait.alt} class="img-fluid rounded-circle" />
                        )}
                        <h4><span class="navy">{blockData.value.first_name}</span> {blockData.value.last_name}</h4>
                    </div>
                </div>
                <div class="col-sm-10 wow fadeInRight">
                    <p>{blockData.value.description}</p>
                    {blockData.value.social && (
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
            {blockData.value.footer && (
                <div class="row">
                    <div class="col-lg-12 m-t-lg m-b-lg">
                        {blockData.value.footer}
                    </div>
                </div>
            )}
        </div>
    </section>
)

export default AuthorBlock