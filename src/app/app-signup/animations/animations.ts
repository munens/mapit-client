import { trigger, state, style, transition, animate } from '@angular/animations';

export const signUpBoxTrigger = trigger('signUpBoxEnter', [
	state('in-position', style({
		top: '180px'
	})),
	transition('void => in-position', [
		style({
			top: '0px'
		}),
		animate(500)
	])
])