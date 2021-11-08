import { createAction, props } from '@ngrx/store';

import { Ticket } from '../../ticket';

export const setTicket = createAction('[Ticket] Set ticket', props<{ ticket: Ticket }>());
export const setTitle = createAction('[Ticket] Set title', props<{ title: string }>());
export const setDescription = createAction('[Ticket] Set description', props<{ description: string }>());
