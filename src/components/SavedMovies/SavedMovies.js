import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardListSaved from '../SavedMovies/MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';

function Movies (props) {
  return(
    <main>
      <SearchForm/>
      {/* <Preloader/> */}
      <MoviesCardListSaved onCards = {props.onCards} 
        isQuantityCards={props.isQuantityCards} handleOnClickButtonMore={props.handleOnClickButtonMore}
      />
    </main>
  )
}

export default Movies