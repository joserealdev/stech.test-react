import React, { Component } from 'react';
import { requestYoutube } from '../../utils/helper';
import './Results.scss';

interface IProps {
  match: {
    params: {
      id: string
    }
  }
}

interface IState {
  data: {
    id: string,
    thumbnail: string,
    title: string,
    viewers: number
  }[] | unknown,
  error: string
}

class Results extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: [
        {
          id: '',
          thumbnail: '',
          title: '',
          viewers: 0
        }
      ],
      error: ''
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    requestYoutube(id)
      .then(res => {
        this.setState({ data: res })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const { data } = this.state;
    console.log(data)
    return (
      <div>RESULTS</div>
    );
  } 
};

export default Results;
