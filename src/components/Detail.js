import React from 'react'
import Axios from 'axios'
import Character from './Character'
const endpoint = 'https://rickandmortyapi.com/api/character/'

class Detail extends React.Component {
  state = {
    character: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params
    Axios.get(endpoint + id)
      .then(response => {
        this.setState({ character: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { character } = this.state
    return <Character {...character} />
  }
}

export default Detail
