import React, { Component } from 'react';
import { requestYoutube, IResponse } from '../../utils/helper';
import ResultsMock from './loadingMock/ResultsMock';
import Error from '../error/Error';
import Card from '../../modules/card/Card';
import './Results.scss';

interface IProps {
  match: {
    params: {
      id: string
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
    const { id } = this.props.match.params;

    requestYoutube(id)
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

    console.log(data)
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

    return (
      <div className="results container">
        {videoCards}
      </div>
    );
  } 
};

export default Results;
