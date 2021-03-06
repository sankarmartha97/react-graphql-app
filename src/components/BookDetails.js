import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getBookQuery} from './queries/queries';

class BookList extends Component {
    displayBookDetails(){
      var { book } = this.props.data;
      if(book){
        return(
            <div>
                <h2>{ book.name }</h2>
                <p> {book.genre} </p>
                <p> {book.author.name} </p>
                <p>All books by the author:</p>
                <ul className="other-books">
                    { book.author.books.map(item =>{
                        return <li key={ item.id }>{item.name}</li>
                    })
                    }
                </ul>
            </div>
        )
      }else{
          return(
              <div>No book selected...</div>
          )
      }
    }
    render(){
        // console.log(this.props);
      return (
        <div >
            <p>Book Details will show here</p>
            {this.displayBookDetails()}
        </div>
      );
    }
  }
  
export default graphql(getBookQuery,{
    options:(props) => {
        return{
            variables:{
                id:props.bookId
            }
        }
    }
})(BookList);
  