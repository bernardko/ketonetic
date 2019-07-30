import React from "react"

const FeatureGrid = () => (
    <section  class="container features">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="navy-line"></div>
                <h1>Over 40+ unique view<br/> <span class="navy"> with many custom components</span> </h1>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 text-center wow fadeInLeft">
                <div>
                    <i class="fa fa-mobile features-icon"></i>
                    <h2>Full responsive</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                </div>
                <div class="m-t-lg">
                    <i class="fa fa-bar-chart features-icon"></i>
                    <h2>6 Charts Library</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                </div>
            </div>
            <div class="col-md-6 text-center  wow zoomIn">
                <img src="img/landing/perspective.png" alt="dashboard" class="img-fluid">
            </div>
            <div class="col-md-3 text-center wow fadeInRight">
                <div>
                    <i class="fa fa-envelope features-icon"></i>
                    <h2>Mail pages</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                </div>
                <div class="m-t-lg">
                    <i class="fa fa-google features-icon"></i>
                    <h2>AngularJS version</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                </div>
            </div>
        </div>
    </section>
)

export default FeatureGrid