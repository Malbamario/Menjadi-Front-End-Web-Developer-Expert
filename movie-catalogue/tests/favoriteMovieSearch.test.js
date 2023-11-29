import {
  beforeEach, describe, expect, it,
} from '@jest/globals';
import { spyOn } from 'jest-mock';
import FavoriteMovieSearchPresenter from '../src/scripts/views/pages/liked-movies/favorite-movie-search-presenter';
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';
import FavoriteMovieSearchView
  from '../src/scripts/views/pages/liked-movies/favorite-movie-search-view';

describe('Searching movies', () => {
  let presenter;
  let favoriteMovies;
  let view;

  const searchMovies = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setMovieSearchContainer = () => {
    view = new FavoriteMovieSearchView();
    document.body.innerHTML = view.getTemplate();
  };
  const constructPresenter = () => {
    spyOn(FavoriteMovieIdb, 'favoriteMovies');
    presenter = new FavoriteMovieSearchPresenter({
      favoriteMovies,
      view,
    });
  };

  beforeEach(() => {
    setMovieSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      FavoriteMovieIdb.searchMovies.mockImplementation(() => []);
      searchMovies('film a');
      expect(presenter.latestQuery).toEqual('film a');
    });

    it('should ask the model to search for liked movies', () => {
      FavoriteMovieIdb.searchMovies.mockImplementation(() => []);
      searchMovies('film a');
      expect(FavoriteMovieIdb.searchMovies).toHaveBeenCalledWith('film a');
    });

    it('should show the movies found by Favorite Movies', (done) => {
      document
        .getElementById('movie-search-container')
        .addEventListener('movies:searched:updated', () => {
          expect(document.querySelectorAll('.movie').length).toEqual(3);
          done();
        });
      favoriteMovies.searchMovies.mockImplementation((query) => {
        if (query === 'film a') {
          return [
            { id: 111, title: 'film abc' },
            { id: 222, title: 'ada juga film abcde' },
            { id: 333, title: 'ini juga boleh film a' },
          ];
        }
        return [];
      });
      searchMovies('film a');
    });

    it('should show the name of the movies found by Favorite Movies', (done) => {
      document
        .getElementById('movie-search-container')
        .addEventListener('movies:searched:updated', () => {
          const movieTitles = document.querySelectorAll('.movie__title');
          expect(movieTitles.item(0).textContent).toEqual('film abc');
          expect(movieTitles.item(1).textContent).toEqual('ada juga film abcde');
          expect(movieTitles.item(2).textContent).toEqual('ini juga boleh film a');
          done();
        });
      favoriteMovies.searchMovies.mockImplementation((query) => {
        if (query === 'film a') {
          return [
            { id: 111, title: 'film abc' },
            { id: 222, title: 'ada juga film abcde' },
            { id: 333, title: 'ini juga boleh film a' },
          ];
        }
        return [];
      });
      searchMovies('film a');
    });

    it('should show - when the movie returned does not contain a title', (done) => {
      document.getElementById('movie-search-container')
        .addEventListener('movies:searched:updated', () => {
          const movieTitles = document.querySelectorAll('.movie__title');
          expect(movieTitles.item(0).textContent)
            .toEqual('-');

          done();
        });

      favoriteMovies.searchMovies.mockImplementation((query) => {
        if (query === 'film a') {
          return [{ id: 444 }];
        }

        return [];
      });

      searchMovies('film a');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      favoriteMovies.getAllMovies.mockImplementation(() => []);
      searchMovies(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchMovies('    ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchMovies('');
      expect(presenter.latestQuery.length).toEqual(0);
      searchMovies('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite movies', () => {
      favoriteMovies.getAllMovies.mockImplementation(() => []);
      searchMovies('    ');
      expect(favoriteMovies.getAllMovies).toHaveBeenCalled();
    });

    describe('When no favorite movies could be found', () => {
      it('should show the empty message', (done) => {
        document
          .getElementById('movie-search-container')
          .addEventListener('movies:searched:updated', () => {
            expect(document.querySelectorAll('.movies__not__found').length).toEqual(1);
            done();
          });
        favoriteMovies.searchMovies.mockImplementation((query) => {
          if (query === 'film a') {
            return [
              { id: 111, title: 'film abc' },
              { id: 222, title: 'ada juga film abcde' },
              { id: 333, title: 'ini juga boleh film a' },
            ];
          }

          return [];
        });
        searchMovies('film a');
      });

      it('should not show any movie', (done) => {
        document.getElementById('movie-search-container')
          .addEventListener('movies:searched:updated', () => {
            expect(document.querySelectorAll('.movie').length).toEqual(0);
            done();
          });
        favoriteMovies.searchMovies.mockImplementation((query) => {
          if (query === 'film a') {
            return [
              { id: 111, title: 'film abc' },
              { id: 222, title: 'ada juga film abcde' },
              { id: 333, title: 'ini juga boleh film a' },
            ];
          }

          return [];
        });
        searchMovies('film a');
      });
    });
  });
});
