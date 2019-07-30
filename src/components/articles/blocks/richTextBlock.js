import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const RichTextBlock = ({richText}) => (
    <div class="row">
        <div class="col-lg-12 wow fadeInLeft">
            <h2>How to Discover great feautres from here?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a orci semper, venenatis ligula in, accumsan leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet sapien purus, ac rhoncus magna lacinia at. Quisque eu eros nec quam sodales commodo non at lacus. Donec eget sem vulputate, scelerisque diam maximus, dignissim libero. Donec neque ex, ornare sit amet lorem eget, gravida consequat nisl. Pellentesque ut ante vel ex commodo sodales id id nulla. Integer id aliquam tortor. Vestibulum iaculis luctus lacus. Etiam efficitur dui vitae augue varius accumsan vel vel ipsum. Etiam et sagittis purus. Duis porta imperdiet molestie.</p>
            <p>Vestibulum dapibus, magna quis faucibus varius, elit dui convallis dui, in scelerisque nunc ligula eget turpis. Praesent sit amet pharetra purus, et consequat ligula. Ut vel hendrerit lorem. Proin congue condimentum neque eget faucibus. Praesent in venenatis elit, vel ornare mi. Sed sodales nulla vitae mauris volutpat, ut ullamcorper augue lobortis. Etiam et lacus tortor. Nam sodales auctor ligula non porttitor. Suspendisse egestas nisi ac posuere finibus. Nulla ut felis nisl.</p>
            <h2>What about this?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a orci semper, venenatis ligula in, accumsan leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet sapien purus, ac rhoncus magna lacinia at. Quisque eu eros nec quam sodales commodo non at lacus. Donec eget sem vulputate, scelerisque diam maximus, dignissim libero. Donec neque ex, ornare sit amet lorem eget, gravida consequat nisl. Pellentesque ut ante vel ex commodo sodales id id nulla. Integer id aliquam tortor. Vestibulum iaculis luctus lacus. Etiam efficitur dui vitae augue varius accumsan vel vel ipsum. Etiam et sagittis purus. Duis porta imperdiet molestie.</p>
            <p>Vestibulum dapibus, magna quis faucibus varius, elit dui convallis dui, in scelerisque nunc ligula eget turpis. Praesent sit amet pharetra purus, et consequat ligula. Ut vel hendrerit lorem. Proin congue condimentum neque eget faucibus. Praesent in venenatis elit, vel ornare mi. Sed sodales nulla vitae mauris volutpat, ut ullamcorper augue lobortis. Etiam et lacus tortor. Nam sodales auctor ligula non porttitor. Suspendisse egestas nisi ac posuere finibus. Nulla ut felis nisl.</p>
        </div>
    </div>
)

RichTextBlock.propTypes = {
}

RichTextBlock.defaultProps = {
}

export default RichTextBlock