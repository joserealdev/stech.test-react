import React, { Component } from 'react';
import { requestYoutube, IResponse } from '../../utils/helper';
import ResultsMock from './loadingMock/ResultsMock';
import Error from '../error/Error';
import Card from '../../modules/card/Card';
import './Results.scss';

interface IProps {
  match: {
    params: {
      q: string
    }
  }
}

interface IState {
  data: IResponse,
  error: string,
  loading: boolean
}

class Results extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: [
        {
          id: '',
          thumbnail: '',
          title: ''
        }
      ],
      error: '',
      loading: true
    }
  }

  componentDidMount() {
    const { q } = this.props.match.params;

    requestYoutube(q)
      .then(res => {
        this.setState({ data: res, loading: false })
      })
      .catch(error => {
        this.setState({ error, loading: false })
      })
  }

  render() {
    const { data, error, loading } = this.state;
    if (loading) return <ResultsMock />;
    if (error) return <Error error={error} />;

    const videoCards = Array.isArray(data) && data.map((item) => {
      return (
        <Card
          key={item.id}
          id={item.id}
          image={item.thumbnail}
          title={item.title}
        />
      )
    });

    const notFound = (!videoCards || videoCards.length < 1) ?
      (
        <div>No videos found containing {this.props.match.params.q}</div>
      )
      : null;

    return (
      <div className="results container">
        {notFound || videoCards}
      </div>
    );
  } 
};

export default Results;
