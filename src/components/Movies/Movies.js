import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';

function Movies (props) {
  return(
    <main>
      <SearchForm/>
      {/* <Preloader/> */}
      <MoviesCardList onCards = {props.onCards} 
        isQuantityCards={props.isQuantityCards} handleOnClickButtonMore={props.handleOnClickButtonMore}
      />
    </main>
  )
}

export default Movies