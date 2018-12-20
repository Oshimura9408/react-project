import React, { PureComponent } from 'react';
import Input from './input';
import createRequest from '../../serv-files/create-request';
import { addBook } from '../../serv-files/api-config';
import { Link } from 'react-router-dom';

class Form extends PureComponent {
    state = {};

    fields = [
      { label: 'Название', name: 'name' },
      { label: 'Жанр', name: 'genre' },
      { label: 'Рейтинг', name: 'rating' },
      { label: 'Описание', name: 'description' }
    ];

    onSubmit = (event) => {
      const book = this.state; // нужно как-то получит
      event.preventDefault();
      console.log(book, 'book - state before request');

      createRequest(addBook, null, book).then(({ status, data }) => {
        if (status === 'OK') {
          this.setState({ isLoading: false, books: data });
          console.log(data, this.state, '-add-book');
        }
      });
    };

    handleChange = (name, value) => {
      console.log(name, value);
      this.setState({ [name]: value });
    };

    render() {
      console.log(this.state);
      return (
        <div className="form__page">
          <div className="form__title">
            Добавьте свою книгу
          </div>

          <form onSubmit={this.onSubmit}>
            {this.fields.map(fieldData => (
              <Input {...fieldData} handleChange={this.handleChange} />
            ))}
            <button type="submit">Добавить</button>
          </form>
        </div>
      );
    }
}

export default Form;
