import React from 'react';

const Form = () => {
	return (
		<form className='form' name='contact' method='post'>
			<input type='hidden' name='form-name' value='contact' />
			<div className='form__group'>
				<label className='form__label' htmlFor='name'>
					Name
				</label>
				<input className='form__input' type='text' name='name' id='name' required />
			</div>
			<div className='form__group'>
				<label className='form__label' htmlFor='email'>
					Email
				</label>
				<input className='form__input' type='email' name='email' id='email' required />
			</div>
			<div className='form__group'>
				<label className='form__label' htmlFor='message'>
					Message
				</label>
				<textarea
					className='form__input form__input--message'
					name='message'
					id='message'
					required
				></textarea>
			</div>
			<div className='form__group'>
				<input className='form__input form__input--submit' type='submit' value='send' />
			</div>
		</form>
	);
};

export default Form;
