import React from 'react';

const Form = () => {
	return (
		<form className='form' name='contact' method='post'>
			<input type='hidden' name='form-name' value='contact' />
			<div className='form__group'>
				<label className='form__label' htmlFor='r_name'>
					Name
				</label>
				<input className='form__input' type='text' name='r_name' id='r_name' />
			</div>
			<div className='form__group'>
				<label className='form__label' htmlFor='r_email'>
					Email
				</label>
				<input className='form__input' type='email' name='r_email' id='r_email' />
			</div>
			<div className='form__group'>
				<label className='form__label' htmlFor='r_message'>
					Message
				</label>
				<textarea
					className='form__input form__input--message'
					name='r_message'
					id='r_message'
					cols='30'
					rows='10'
				></textarea>
			</div>
			<div className='form__group'>
				<input className='form__input form__input--submit' type='submit' value='send' />
			</div>
		</form>
	);
};

export default Form;
