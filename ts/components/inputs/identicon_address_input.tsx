import * as _ from 'lodash';
import * as React from 'react';
import {colors} from 'material-ui/styles';
import {Blockchain} from 'ts/blockchain';
import {Identicon} from 'ts/components/ui/identicon';
import {RequiredLabel} from 'ts/components/ui/required_label';
import {AddressInput} from 'ts/components/inputs/address_input';
import {InputLabel} from 'ts/components/ui/input_label';

interface IdenticonAddressInputProps {
    initialAddress: string;
    isRequired?: boolean;
    label: string;
    updateOrderAddress: (address?: string) => void;
}

interface IdenticonAddressInputState {
    address: string;
}

export class IdenticonAddressInput extends React.Component<IdenticonAddressInputProps, IdenticonAddressInputState> {
    constructor(props: IdenticonAddressInputProps) {
        super(props);
        this.state = {
            address: props.initialAddress,
        };
    }
    public render() {
        const label = this.props.isRequired ? <RequiredLabel label={this.props.label} /> :
                      this.props.label;
        return (
            <div className="relative" style={{width: '100%'}}>
                <InputLabel text={label} />
                <div className="flex">
                    <div className="col col-1 pb1 pr1" style={{paddingTop: 13}}>
                        <Identicon address={this.state.address} diameter={25} />
                    </div>
                    <div className="col col-11 pb1 pl1" style={{height: 65}}>
                        <AddressInput
                            hintText="0x75bE4F78AA3699B3A348c84bDB2a96c3Dbb5E2EF"
                            shouldHideLabel={true}
                            initialAddress={this.props.initialAddress}
                            updateAddress={this.updateAddress.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
    private updateAddress(address?: string): void {
        this.setState({
            address,
        });
        this.props.updateOrderAddress(address);
    }
}
