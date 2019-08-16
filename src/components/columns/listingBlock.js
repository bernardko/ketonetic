import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Columns from "../../components/columns/columns"
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
        const { pages, columnLayout } = this.props;
        const { currentLimit } = this.state
        return (
            <Columns columnLayout={columnLayout}>
                <div className="row">
                    <div className="col-lg-12">
                        {(pages || []).slice(0, currentLimit).map((page, index) => (
                            <ListItemBlock page={page} />
                        ))}
                    </div>
                    {(pages || []).length > currentLimit ? (
                        <div className="col-lg-12">
                            <a className="btn btn-primary btn-block m-t" onClick={this.loadMoreItems}>See more</a>
                        </div>
                    ) : null}
                </div>
            </Columns>  
        )
    }
}

export default ListingBlock