import { createReducer, on } from '@ngrx/store';
import { setTicket, setTitle, setDescription } from './ticket.actions';

import { Ticket } from '../../ticket';

const initialState = new Ticket();

export const ticketReducer = createReducer(
  initialState,
  on(setTicket, (state, { ticket }) => ticket),
  on(setTitle, (state, { title }) => Object.assign({}, state, { title: title })),
  on(setDescription, (state, { description }) => Object.assign({}, state, { description: description }))
);
