import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps?.selected?.id !== this.props?.selected?.id) {
            this.setState({ done: false })
        }
    }

    getRandom = () => {
        this.setState({ isRandoming: true })
        let intervel = setInterval(() => {
            if (!this.state.isRandoming) clearInterval(intervel)
            else {
                let number = Math.floor(Math.random() * 10) + 1;
                this.setState({ number })
            }
        }, 10);
    }

    stopRandom = () => {
        this.setState({
            isRandoming: false,
            number: this.props?.selected?.id || Math.floor(Math.random() * 10) + 1,
            done: true,
        }, () => {
            if (this.props?.selected?.id) this.props.setNumber(this.props?.selected?.id, this.props?.selected?.choosen)
        })
    }

    render() {
        const { number, isRandoming, done } = this.state;
        const { selected } = this.props;
        return (
            <div className='h-100' >
                <div class="alert alert-primary" role="alert">
                    Chọn sinh viên bên bảng bên trái để bắt đầu
                </div>
                <div className='h-100 d-flex flex-column align-items-center' style={{ paddingTop: 100 }}>
                    <h1>{selected?.name}</h1>
                    <h1 className='number pb-5'>{number}</h1>
                    {(!done || !selected?.id) && (isRandoming ?
                        <button type="button" class="btn btn-danger" onClick={this.stopRandom}>STOP</button>
                        :
                        <button type="button" class="btn btn-primary" onClick={this.getRandom}>Random</button>)
                    }
                </div>
            </div>
        )
    }
}