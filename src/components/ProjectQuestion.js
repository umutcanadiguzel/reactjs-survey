import React from 'react';

class ProjectQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peopleCount: [],
            totalMonth: [],
            status: [],
            methodology: [],
        }
        this.onPeopleChange = this.onPeopleChange.bind(this);
        this.onTotalMonthChange = this.onTotalMonthChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
        this.onMethodologyChange = this.onMethodologyChange.bind(this);
    }
    onPeopleChange() {
        let peopleInput = document.querySelectorAll("input[name^=peopleCount]");
        let newPeopleCount = [];
        for (let i = 0; i < peopleInput.length; i++) {
            newPeopleCount[i] = peopleInput[i].value;
        }
        this.setState({ peopleCount: newPeopleCount }, () => {
            this.props.onPeopleChange(this.state.peopleCount);
            //console.log(this.state.peopleCount);
        });

    }
    onTotalMonthChange() {
        let totalMonthInput = document.querySelectorAll("input[name^=totalMonth]");
        let newTotalMonth = [];
        for (let i = 0; i < totalMonthInput.length; i++) {
            newTotalMonth[i] = totalMonthInput[i].value;
        }
        this.setState({ totalMonth: newTotalMonth }, () => {
            this.props.onTotalMonthChange(this.state.totalMonth);
        });

    }
    onStatusChange() {
        let statusRadio = document.querySelectorAll("input[name^=status]");
        let newStatus = [];
        for (let i = 0; i < statusRadio.length; i++) {
            if (statusRadio[i].checked) {
                newStatus[newStatus.length] = statusRadio[i].value;
            }
        }
        this.setState({ status: newStatus }, () => {
            this.props.onStatusChange(this.state.status);
        });

    }
    onMethodologyChange() {
        let methodologyRadio = document.querySelectorAll("input[name^=methodology]");
        let newMethodology = [];
        for (let i = 0; i < methodologyRadio.length; i++) {
            if (methodologyRadio[i].checked) {
                newMethodology[newMethodology.length] = methodologyRadio[i].value;
            }
        }

        this.setState({ methodology: newMethodology }, () => {
            this.props.onMethodologyChange(this.state.methodology);
        });

    }
    render() {
        return (
            <div>

                <div id="aa" className="content">
                    <div className="ui segment">
                        <div className="ui stackable grid">
                            <div className="four wide column">
                                <label>Kişi Sayısı  </label>
                                <div className="ui input">
                                    <input type="text" name={'peopleCount' + this.props.nameVariable} onChange={this.onPeopleChange} required />
                                </div>
                            </div>
                            <div className="four wide column">
                                <label>Toplam Ay  </label>
                                <div className="ui input">
                                    <input type="text" name={'totalMonth' + this.props.nameVariable} onChange={this.onTotalMonthChange} required />
                                </div>
                            </div>
                            <div className="four wide column">
                                <label>Metodology</label>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name={'methodology' + this.props.nameVariable} onChange={this.onMethodologyChange} value='Waterfall' required />
                                        <label>Waterfall</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name={'methodology' + this.props.nameVariable} onChange={this.onMethodologyChange} value='Agile' required />
                                        <label>Agile</label>
                                    </div>
                                </div>
                            </div>
                            <div className="four wide column">
                                <label>Başarı Durum</label>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name={'status' + this.props.nameVariable} onChange={this.onStatusChange} value='Başarısız' required />
                                        <label>Başarısız</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name={'status' + this.props.nameVariable} onChange={this.onStatusChange} value='Sorunlu' required />
                                        <label>Sorunlu</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name={'status' + this.props.nameVariable} onChange={this.onStatusChange} value='Başarılı' required />
                                        <label>Başarılı</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui divider"></div>
            </div >
        )
    }
}

export default ProjectQuestion;