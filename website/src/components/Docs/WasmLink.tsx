import React from 'react';
import { faPuzzle } from '@fortawesome/pro-regular-svg-icons';
import Label from '../../ui/typography/Label';

export interface WasmLinkProps {
	to: string;
	noMargin?: boolean;
}

export default function WasmLink({ to, noMargin }: WasmLinkProps) {
	return (
		<a
			href={to}
			target="_blank"
			className="float-right block"
			style={{ marginTop: noMargin ? 0 : '-3.75em' }}
		>
			<Label text="WASM" icon={faPuzzle} variant="success" />
		</a>
	);
}
