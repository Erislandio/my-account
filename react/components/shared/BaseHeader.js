import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { IconArrowBack, Button } from 'vtex.styleguide'
import ClearButton from '../../components/shared/ClearButton'

const BaseHeader = ({
  titleId,
  shouldAlwaysShowBackButton,
  backButton,
  actionButton,
  intl,
  history,
}) => {
  return (
    <header className="vtex-account__page-header flex flex-column flex-row-ns flex-wrap items-center-ns justify-between-ns">
      <div>
        <div className={shouldAlwaysShowBackButton ? '' : 'dn-m-2'}>
          <ClearButton onClick={() => history.push(backButton.path)}>
            <IconArrowBack size={14} color="currentColor" />
            <span className="ml2">
              {intl.formatMessage({ id: backButton.id })}
            </span>
          </ClearButton>
        </div>
        <h1 className="b c-on-base mb0 mt4 f3">
          {intl.formatMessage({ id: titleId })}
        </h1>
      </div>
      {actionButton && (
        <div className="mt6 mt5-ns mr5-ns flex-none">
          <Link to={actionButton.path}>
            <Button variation="primary" block size="small">
              {intl.formatMessage({ id: actionButton.id })}
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}

BaseHeader.defaultProps = {
  shouldAlwaysShowBackButton: false,
  backButton: { id: 'pages.myAccount', path: '/' },
}

BaseHeader.propTypes = {
  titleId: PropTypes.string,
  shouldAlwaysShowBackButton: PropTypes.bool.isRequired,
  backButton: PropTypes.object.isRequired,
  actionButton: PropTypes.object,
  intl: intlShape.isRequired,
  history: PropTypes.any,
}

export default withRouter(injectIntl(BaseHeader))