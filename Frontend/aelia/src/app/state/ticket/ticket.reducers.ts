import { createReducer, on } from '@ngrx/store';
import { setTicket } from './ticket.actions';

import { Ticket } from '../../ticket';

const initialState = new Ticket();

export const ticketReducer = createReducer(
  initialState,
  on(setTicket, (state, { ticket }) => ticket)
);
