jest
  .unmock('redux')
  .unmock('react-redux')
  .unmock('../ItemListContainer')
  .unmock('../../../../js/reducers/items')
  .unmock('../../../../js/reducers/events')
;

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history';
import { ActionTypes } from '../../../constants';
import ItemListContainer from '../ItemListContainer';
import items from '../../../reducers/items';
import events from '../../../reducers/events';

describe('We can render an ItemListContainer', () => {
  it('contains content', () => {

    const combinedReducers1 = combineReducers({
      items,
      events
    });

    const combinedReducers2 = combineReducers({
      app: combinedReducers1
    });

    const initialContent = {
      app: {
        items: [],
        events: []
      }
    };

    const store = createStore(
      combinedReducers2,
      initialContent,
      applyMiddleware(thunk)
    );

    const history = createHistory({ basename: '/' });

    store.dispatch({
      type: ActionTypes.FETCH_ITEMS_SUCCESS,
      items: [{ text: "Lassie", description: "Big dog", value: 67 }],
      meta: {
        log: ['item changed']
      }
    });

    const itemList =
      ReactTestUtils.renderIntoDocument(
        <div>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <Route component={ItemListContainer}/>
            </ConnectedRouter>
          </Provider>
        </div>
      );

    const itemListNode = ReactDOM.findDOMNode(itemList);

    expect(itemListNode.textContent).toContain('Add Item'); // above table

    /*
    expect(itemListNode.textContent).toContain('Value'); // in table header

    expect(itemListNode.textContent).toContain('Lassie'); // in item text
    expect(itemListNode.textContent).toContain('Big dog'); // in item description
    */
  });
});
