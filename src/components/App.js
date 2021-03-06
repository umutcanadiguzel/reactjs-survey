import React from 'react';
import RadioQuestion from './RadioQuestion'
import ProjectQuestion from './ProjectQuestion'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projectQuestionList: [],
            question1: "",
            question2: "",
            question3: "",
            question4: "",
            question5: "",
            peopleCount: [],
            totalMonth: [],
            projectMethodology: [],
            projectStatus: [],
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onPeopleChange = this.onPeopleChange.bind(this);
        this.onTotalMonthChange = this.onTotalMonthChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
        this.onAnswerChange = this.onAnswerChange.bind(this);
        this.onMethodologyChange = this.onMethodologyChange.bind(this);
    }

    onFormSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
    onPeopleChange(peopleCountList) {
        this.setState({ peopleCount: peopleCountList }, () => {
            console.log(this.state.peopleCount)
        });

    }
    onTotalMonthChange(totalMonthList) {
        this.setState({ totalMonth: totalMonthList });
    }
    onStatusChange(statusList) {
        this.setState({ projectStatus: statusList });
    }
    onAnswerChange(answer, element) {
        this.setState({ [element]: answer });
    }
    onMethodologyChange(methodologyList) {
        this.setState({ projectMethodology: methodologyList });
    }

    addProject() {
        let list = this.state.projectQuestionList;
        list.push(
            <ProjectQuestion
                nameVariable={list.length + 1}
                key={'k' + list.length}
                onPeopleChange={this.onPeopleChange}
                onTotalMonthChange={this.onTotalMonthChange}
                onStatusChange={this.onStatusChange}
                onMethodologyChange={this.onMethodologyChange}
            />);
        this.setState({ projectQuestionList: list });
    }
    componentDidMount() {
        const addButton = document.querySelector('.addButton');
        addButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.addProject();
        });
        this.addProject();
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px', backgroundColor: 'pink' }}>
                <div className="ui segment">
                    <h3 style={{ textAlign: 'center' }}>Survey</h3>
                    <form action="" onSubmit={this.onFormSubmit}>
                        <RadioQuestion key="question1" question='Cinsiyetiniz?' answerList={['Erkek', 'Kad??n']} answerName='question1' onAnswerChange={this.onAnswerChange} />
                        <RadioQuestion key="question2" question='E??itim Durumunuz?' answerList={['Lise', '??nlisans', 'Lisans', 'Y??ksek Lisans', 'Doktora']} answerName='question2' onAnswerChange={this.onAnswerChange} />
                        <RadioQuestion key="question3" question='Ya????n??z?' answerList={['19-24', '25-29', '30-35', '35-39', '40 ve ??zeri']} answerName='question3' onAnswerChange={this.onAnswerChange} />
                        <RadioQuestion key="question4" question='Hangi pozisyonda ??al??????yorsunuz? (En yak??n se??enek se??ilebilir)' answerList={['Junior Software Developer', 'Mid-level Software Developer', 'Senior Software Developer', 'Team Leader']} answerName='question4' onAnswerChange={this.onAnswerChange} />
                        <RadioQuestion key="question5" question='Yaz??l??m geli??tirme alan??nda toplam tecr??beniz' answerList={['1-2 y??l', '3-5 y??l', '6-8 y??l', '8 y??l ve ??zeri']} answerName='question5' onAnswerChange={this.onAnswerChange} />
                        <div className='projectQuestionList'>
                            <div className="ui container">
                                <div className="ui segment">

                                    <div className="ui form">
                                        <div className="grouped fields">
                                            <div className="author">
                                                <h4>Daha ??nce ??al????t??????n??z projeler, tamamlanma s??releri ve proje ba??ar?? durumu? <span style={{ color: 'red' }}>*</span></h4>
                                            </div>
                                            <div className="ui divider"></div>

                                            {
                                                this.state.projectQuestionList?.map((item) => (
                                                    <div>{item}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <button className="ui primary button addButton ">Ekle</button>
                                </div>
                            </div>
                        </div>

                        <div className="ui divider"></div>
                        <button className="ui primary button">
                            G??nder
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default App;