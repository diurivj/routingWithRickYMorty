import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
const endpoint = 'https://rickandmortyapi.com/api/character/1,2,3,4,5'

class Home extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    Axios.get(endpoint)
      .then(response => {
        this.setState({ characters: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  changePath = () => {
    this.props.history.push('/character/1')
  }

  render() {
    const { characters } = this.state
    if (characters.length === 0) return <div>Loading...</div>
    return (
      <div>
        <h1>Characters</h1>
        {characters.map(character => {
          return (
            <div key={character.id}>
              <img src={character.image} alt={character.name} width="100" />
              <Link to={`/character/${character.id}`}>
                <p>{character.name}</p>
              </Link>
            </div>
          )
        })}
        <button onClick={this.changePath}>Go random</button>
      </div>
    )
  }
}

export default Home
