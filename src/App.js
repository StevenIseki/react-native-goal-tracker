import React, { Component } from 'react'
import { Font } from 'expo'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components/native'

import store from './store'
import Navigator from './Navigator'
import { colors } from './styles/colors'
import { AppLoader } from './components/AppLoader'

const Root = styled.View`
  flex: 1;
  background-color: ${props => props.theme.LIGHT_BLUE};
`

class RootContainer extends Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
        <Root>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Navigator />
        </Root>
      </ThemeProvider>
    )
  }
}

class App extends Component {
  state = {
    fontsLoaded: false
  }

  async componentWillMount() {
    /* await Font.loadAsync({}) */
    this.setState({ fontsLoaded: true })
  }

  render() {
    const { fontsLoaded } = this.state
    return (
      <Provider store={store}>
        {fontsLoaded ? <RootContainer /> : <AppLoader />}
      </Provider>
    )
  }
}

export default App