/* eslint-disable react/prop-types */
import React from 'react';
import { PodsDFVBaseInput } from 'dfv/src/components/base-input';
import { emailFormat } from 'dfv/src/validation/validation-rules';

export const PodsDFVEmail = ( props ) => {
	props.validation.addRules( [
		{
			rule: emailFormat( props.value ),
			condition: true,
		},
	] );

	// noinspection JSUnresolvedVariable
	return (
		<PodsDFVBaseInput
			type={'1' === props.fieldConfig.email_html5 ? 'email' : 'text'}
			{...props}
		/>
	);
};
