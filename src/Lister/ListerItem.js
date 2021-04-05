import { getQueriesForElement } from '@testing-library/dom'
import React from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'
//import PropTypes from 'prop-types'

const styles = {
    li : {
        display: 'flex',
        padding: '0.5rem 1rem',
        border: '5px solid #123',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input : {
        marginLeft: '15px',
    },
    button : {
        background: 'black',
        color: 'white',
    }
}


function ListerItem({deal, cnt, onCheckBox, onDeletBox}) {

    const classes = []
    if (deal.done) {
        classes.push('checked');
    }
    
    return (
        <li style={styles.li}>
            <button style={styles.button} 
            onClick={() => onDeletBox(deal.id)}>Delete</button>
            <span className={classes.join(' ')}>
            <strong>{cnt} - </strong>
            {deal.title}
            <input type='checkbox' checked={deal.done}
            style={styles.input}
            onChange={() => onCheckBox(deal.id)}
            />
            </span>
        </li>
    )

}

//ListerItem.propTypes = {
//    deal: PropTypes.object.isRequired,
//    cnt: PropTypes.number,
//   onCheckBox: PropTypes.func.isRequired,
//   onDeletBox: PropTypes.func.isRequired
//}

export default ListerItem