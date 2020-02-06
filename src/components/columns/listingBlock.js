import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ListItemBlock from "./listItemBlock"

class ListingBlock extends React.Component  {  
    constructor(props) {
        super(props)
        this.state = { currentLimit: 10 }
    }
      
    loadMoreItems() {
        this.setState({ currentLimit: this.state.currentLimit + 10 })
    }

    render() {
        const { pages } = this.props;
        const { currentLimit } = this.state
        return (
            <div className="row">
                <div className="col-lg-12">
                    {(pages || []).map((page, index) => {
                        if (page.page ) {
                            return (
                                <ListItemBlock page={page.page} />
                            )
                        } else {
                            return (
                                <ListItemBlock page={page} />
                            )
                        }
                    })}
                </div>

            </div>  
        )
    }
}

/*
{(pages || []).slice(0, currentLimit).map((page, index) => {

                {(pages || []).length > currentLimit ? (
                    <div className="col-lg-12">
                        <a className="btn btn-primary btn-block m-t" onClick={this.loadMoreItems}>See more</a>
                    </div>
                ) : null}
*/

export default ListingBlock