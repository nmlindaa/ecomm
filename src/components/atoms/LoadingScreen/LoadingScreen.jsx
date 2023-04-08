/** @jsxImportSource @emotion/react */

import Typography from '../Typography'
import { containerStyle, spinnerStyle } from './LoadingScreen.style'

const LoadingScreen = () => {
  return (
    <div css={containerStyle}>
      <div css={spinnerStyle} data-testid="spinner"></div>
      <Typography variant="heading" mt={16}>
        Please wait...
      </Typography>
    </div>
  )
}

export default LoadingScreen
