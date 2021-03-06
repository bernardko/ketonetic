import React from 'react'
import qs from 'query-string'
import { request } from 'graphql-request'
import { previewFragments } from '../fragments'
import LandingPage, {
    previewQuery as landingPageQuery
  } from '../templates/core/landingPage'
  import CategoryPage, {
    previewQuery as categoryPageQuery
  } from '../templates/core/categoryPage'

// const path = require(`path`)

const previewMappings = {
    'core.landingpage': {
        query: landingPageQuery,
        template: LandingPage,
    },
    'core.categorypage': {
        query: categoryPageQuery,
        template: CategoryPage,
    }
}

class WagtailPreview extends React.Component {
    state = { Template: null, propOverides: null }

    componentDidMount() {
        this.fetchToken()
    }

    fetchToken = async () => {
        if (typeof window !== 'undefined') {
            const { pageContext } = this.props
            const { token, content_type, review_token, allow_responses } = qs.parse(window.location.search)

           const pageMap = previewMappings[content_type]
           const pageTemplate = pageMap['template']
           const query = previewFragments + pageMap['query']

            if (token) {
                this.setState({ Template: pageTemplate })
                try {
                    const wagtail = await request(
                        process.env.GATSBY_WAGTAIL_ENDPOINT ||
                        'http://localhost:8000/graphql/',
                        query,
                        { ...pageContext, previewToken: token }
                    )
                    this.setState({
                    propOverides: { ...this.state.propOverides, data: { wagtail } },
                    }, () => {
                    // Initialise review UI
                    
                    });
                } catch (e) {
                    console.error(e)
                }
            }
        }
    }

    render() {
        const { Template, propOverides } = this.state
        console.log(propOverides)
        if (propOverides !== null && Template !== null) {
            return <Template {...this.props} {...propOverides} />
        }

        return <p>Rendering preview...</p>
    }
        
}

export default WagtailPreview