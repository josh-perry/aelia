import { createAction, props } from '@ngrx/store';

import { Ticket } from '../../ticket';

export const setTicket = createAction('[Ticket] Set ticket', props<{ ticket: Ticket }>());
