import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import BlockContent from '../components/BlockContent'

export default props => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      alignSelf: 'center',
      lineHeight: 2,
      margin: 0,
      flexBasis: '85%',
      flexShrink: 0,
      fontWeight: 700,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
      flexBasis: '15%',
      textAlign: 'center',
    },
  }))

  const classes = useStyles()

  const { faq } = props

  return (
    <ExpansionPanel
      expanded={expanded === `panel${props.key}`}
      onChange={handleChange(`panel${props.key}`)}
      key={props.key}
      className="expansion-panel"
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <p className={classes.heading}>{faq.question}</p>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <BlockContent
          blocks={faq._rawAnswer}
          className="main page-single__body-content"
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
