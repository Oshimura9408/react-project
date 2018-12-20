import React, { PureComponent } from 'react';
import Input from './input';
import createRequest from '../../serv-files/create-request';
import { addBook } from '../../serv-files/api-config';

class Form extends PureComponent {
    state = {};

    fields = [
      { label: 'Name', name: 'name' },
      { label: 'Genre', name: 'genre' },
      { label: 'Rating', name: 'rating' },
      { label: 'Description', name: 'description' }
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
        <form onSubmit={this.onSubmit} addBook={addBook}>
          {this.fields.map(fieldData => (
            <Input {...fieldData} handleChange={this.handleChange} />
          ))}
          <button type="submit">add</button>
        </form>
      );
    }
}

export default Form;
