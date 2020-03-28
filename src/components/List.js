import React, { Component } from 'react';

export default class extends Component {
    render() {
        const { data, onChoose } = this.props;
        return (
            <div class="card" style={{ height: '100%' }}>
                <div class="card-header">
                    <h5 class="card-title">Danh sách sinh viên</h5>
                </div>
                <div className="tableFixHead">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr className="table-info">
                                <th scope="col" className="text-center">#</th>
                                <th scope="col">Họ và tên</th>
                                <th scope="col" className="text-center">Chủ đề</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr>
                                    <th scope="row" className="text-center">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td className="text-center">{item.number ? item.number : (
                                        <span className="cursor-pointer btn-link" onClick={() => onChoose(item)}>Chọn</span>
                                    )}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}