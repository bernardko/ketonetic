import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ReactHtmlParser from "react-html-parser"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const tableBlock = ({blockData}) =>  {
    var tableHeader, showFirstRow
    if (blockData.value.first_row_is_table_header) {
        tableHeader = blockData.value.data[0]
        showFirstRow = false
    } else {
        showFirstRow = true
    }
    return (
        <div class="row">
             <div id={blockData.value.section_id} class={"col-lg-12 wow fadeInLeft table-box " + blockData.value.section_classes} style={{margin:"5px 0 10px 0"}}>
                <Table className="table table-striped">
                    {tableHeader && (
                        <Thead>
                            <Tr>
                                {tableHeader.map((itemData, index) => (
                                    <Th key={itemData+index}>{itemData}</Th>
                                ))}
                            </Tr>
                        </Thead>
                    )}
                    <Tbody>
                        {blockData.value.data.map((itemRow, index) => (
                            <>
                            {(index!=0 || showFirstRow) && (
                                <Tr>
                                    {itemRow.map((itemData, index) => (
                                        <Td key={itemData+index}>{itemData}</Td>
                                    ))}
                                </Tr>
                            )}
                            </>
                        ))}
                    </Tbody>
                </Table>
            </div>
        </div>
    )
}

// 

export default tableBlock