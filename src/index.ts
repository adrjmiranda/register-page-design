/**
 * Changes Password Visibility
 */
const passwordInput = document.querySelector('#password') as HTMLInputElement;
const passwordConfirmationInput = document.querySelector(
	'#password-confirmation'
) as HTMLInputElement;

const passwordVisibilityButton = document.querySelector(
	'.password-visibility'
) as HTMLButtonElement;
const passwordConfirmationVisibilityButton = document.querySelector(
	'.password-confirmation-visibility'
) as HTMLButtonElement;

interface InputField {
	input: HTMLInputElement;
	button: HTMLButtonElement;
}

const HIDDEN_CLASS: string = 'hidden';

const changeVisibility = ({ input, button }: InputField): void => {
	const inputType: string = input.getAttribute('type') ?? 'password';
	const newType: string = inputType === 'text' ? 'password' : 'text';

	input.setAttribute('type', newType);

	(button.querySelectorAll('i') as NodeListOf<HTMLElement>).forEach((icon) =>
		icon.classList.toggle(HIDDEN_CLASS)
	);
};

if (
	passwordInput &&
	passwordVisibilityButton &&
	passwordConfirmationInput &&
	passwordConfirmationVisibilityButton
) {
	const inputFieldList: Array<InputField> = [
		{
			input: passwordInput,
			button: passwordVisibilityButton,
		},
		{
			input: passwordConfirmationInput,
			button: passwordConfirmationVisibilityButton,
		},
	];

	inputFieldList.forEach((inputField: InputField) => {
		inputField.button.addEventListener('click', () =>
			changeVisibility(inputField)
		);
	});
}

/**
 * Scroll Reveal Animation
 */
import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('.form-text', {
	delay: 400,
	opacity: 0,
	origin: 'bottom',
	distance: '100%',
	duration: 1600,
	easing: 'ease-in-out',
});

ScrollReveal().reveal('.form-box', {
	delay: 450,
	opacity: 0,
	duration: 1600,
	easing: 'ease-in-out',
});
