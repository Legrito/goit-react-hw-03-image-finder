import './App.css';
import { Component } from 'react';
import { fetchArticlesWithQuery } from './api';
import { Searchbar } from './Searchbar';
import { Button } from './Button';
import { Modal } from './Modal';
import { ImageLoader } from './Loader';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGallery/ImageGalleryItem';



class App extends Component {

  state = {
    articles: [],
    isLoading: false,
    isLoadingMore: false,
    error: null,
    searchQuery: '',
    showModal: false,
    modalSrc: '',
    modalTag: '',
    currentPage: 1,
  }

  
  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value});
  }

  clearInput = () => {
    this.setState({ searchQuery: '' })
  }

  resetPage = () => {
    console.log('reset', this.state.currentPage)
    return this.setState({ currentPage: 1 });

  }

  handlerSubmit = (e) => {
    e.preventDefault();    
    this.setState({ isLoading: true });
    this.resetPage();
    console.log('submit', this.state);
    if(!this.state.searchQuery) {
      alert('Please enter some query');
      return;
    }
    fetchArticlesWithQuery(this.state.searchQuery, 1)
      .then(articles => {
        if(articles.length < 1) {
          alert('Nothing found');
        }
        this.setState({ articles: articles });
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  openModal = (e) => {
    this.setState({ showModal: true, modalSrc: e.currentTarget.dataset.url, modalTag: e.currentTarget.alt})
  }

  closeModal = () => {
    this.setState({ showModal: false})
  }

  onLoadMore = (e) => {
    e.preventDefault();
    this.setState({ isLoadingMore: true });
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }));
    console.log('load more', this.state);
    fetchArticlesWithQuery(this.state.searchQuery, this.state.currentPage + 1)
      .then(articles => {
        if(articles.length < 1) {
          alert('Nothing found');
        }
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...articles],
        }));
      })
      .catch(error => this.setState({ error: error.message }))
      .finally(() => {
        this.setState({ isLoadingMore: false });
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      });
  }


  render() {
    const { articles, isLoading, error, searchQuery, showModal, modalSrc, modalTag, isLoadingMore } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handlerSubmit} searchQuery={searchQuery} onChange={this.handleChange} />
        {error && <p className="Error"> {error} </p>}
        { isLoading ? <ImageLoader />
        : <ImageGallery pictures={articles} onClick={this.openModal} onLoadMore={this.onLoadMore} />}
        { isLoadingMore && <ImageLoader /> }
        { this.state.articles.length > 0 && <Button onLoadMore={this.onLoadMore} /> }
      { showModal && < Modal src={modalSrc} alt={modalTag} onClick={this.closeModal} />} 
    </div>
    )
  }
}

export default App;
