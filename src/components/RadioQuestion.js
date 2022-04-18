import React from 'react';

class RadioQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
        }
    }

    answers = this.props.answerList.map((answer, index) => {
        return (
            <div className="field">
                <div className="ui radio checkbox">
                    <input type="radio" key={index} name={this.props.answerName} value={answer} onChange={this.onAnswerChange.bind(this)} required />
                    <label>{answer}</label>
                </div>
            </div>
        )
    })
    onAnswerChange(answer, question) {
        this.setState({ answer: answer.target.value, question: answer.target.name }, () => {
            this.props.onAnswerChange(this.state.answer, this.state.question,);
        });

    }
    render() {
        return (
            <div>
                <div className="ui container">
                    <div className="ui segment">
                        <div className="ui form">
                            <div className="grouped fields">
                                <div className="author">
                                    <h4>{this.props.question} <span style={{ color: 'red' }}>*</span></h4>
                                </div>
                                <div className="ui divider"></div>
                                <div className="content">
                                    {this.answers}
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
                <div className="ui divider"></div>
            </div >
        )
    }
}
export default RadioQuestion;