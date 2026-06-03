import React from 'react';
import './SpriteByte.css';

export default class SpriteByte extends React.Component<{ byte: number }> {
    constructor(props: any) {
        super(props);
    }

    private getBit(index: number): boolean {
        return ((this.props.byte << index) & 128) === 128;
    }

    public render() {
        var pixels: any[] = [];
        for (let index = 0; index < 8; ++index) {
            let onOff = this.getBit(index) ? "black" : "aliceblue";
            let style = {
                backgroundColor: onOff
            };

            pixels.push(<div className='SpriteByte-pixel' style={style}>
            </div>);
        }
        return (<div style={{ display: "inline-block" }}>{pixels}</div>);
    }
}