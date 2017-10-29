import { trigger, state, style, transition, animate } from '@angular/animations';

export const signUpBoxTrigger = trigger('signUpBoxEnter', [
	transition('void <=> *', [
		style({
			top: '-350px',
			transform: 'scale(1.0)'
		}),
		animate(250),
		animate(220, style({
			top: '230px',
			transform: 'scale(1.01, 1.01)'
		})),
		animate(180, style({
			top: '163px',
			transform: 'scale(1.02)'
		})),
		animate(300, style({
			top: '175px',
			transform: 'scale(1.01)'
		})),
		animate(50, style({
			transform: 'scale(1.0)'
		}))
	])
])

export const expandInputTrigger = trigger('inputEnter', [
	state('focus-in', style({
		transform: 'scale(1.05, 1.25)'
	})),
	state('focus-out', style({
		transform: 'scale(1.0)'
	})),
	transition('focus-in <=> focus-out', animate(150))
])

