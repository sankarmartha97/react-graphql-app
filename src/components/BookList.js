import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../components/queries/queries'


// function BookList() {
//   return (
//     <div id="book-list">
//     { console.log(props)}
//       <ui id="book-list">
//           <li>Book name</li>
//       </ui>
//     </div>
//   );
// }

class BookList extends Component {
  displayBooks(){
    var data = this.props.data;
    if(data.loading){
      return (<div>Loading books...</div>)
    }else{
      return data.books.map(book => {
        return(
          <li key={ book.id }>{book.name}</li>
        );
      })
    }
  }
  render(){
      // console.log(this.props)
    return (
      <div id="book-list">
        <ul id="book-list">
            {this.displayBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
