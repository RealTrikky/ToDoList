import React from 'react'
import ListerItem from './ListerItem'
//mport PropTypes from 'prop-types'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function ListerMain(props) {
    return (
        <ul style={styles.ul}>
            { props.deals.map((deal, cnt) => {
                return <ListerItem
                    deal={deal}
                    cnt={cnt+1}
                    key={deal.id}
                    onCheckBox={props.onCheck}
                    onDeletBox={props.onPush}
                />
            })}
        </ul>
    )
}

//ListerMain.propTypes = {
//    deals: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onCheck: PropTypes.func.isRequired,
//    onPush: PropTypes.func.isRequired
//}

export default ListerMain