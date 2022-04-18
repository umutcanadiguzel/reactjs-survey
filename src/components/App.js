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
                        <RadioQuestion key="question1" question='Cinsiyetiniz?' answerList={['Erkek', 'Kadın']} answerName='question1' onAnswerChange={this.onAnswerChange} />
                        <RadioQuestion key="question2" question='Eğitim Durumunuz?' answerList={['Lise', 'Önlisans', 'Lisans', 'Yüksek Lisans', 'Doktora']} answerName='question2' onAnswerChange={this.onAnswerChange} />
                        <RadioQuestion key="question3" question='Yaşınız?' answerList={['19-24', '25-29', '30-35', '35-39', '40 ve üzeri']} answerName='question3' onAnswerChange={this.onAnswerChange} />
                        <RadioQuestion key="question4" question='Hangi pozisyonda çalışıyorsunuz? (En yakın seçenek seçilebilir)' answerList={['Junior Software Developer', 'Mid-level Software Developer', 'Senior Software Developer', 'Team Leader']} answerName='question4' onAnswerChange={this.onAnswerChange} />
                        <RadioQuestion key="question5" question='Yazılım geliştirme alanında toplam tecrübeniz' answerList={['1-2 yıl', '3-5 yıl', '6-8 yıl', '8 yıl ve üzeri']} answerName='question5' onAnswerChange={this.onAnswerChange} />
                        <div className='projectQuestionList'>
                            <div className="ui container">
                                <div className="ui segment">

                                    <div className="ui form">
                                        <div className="grouped fields">
                                            <div className="author">
                                                <h4>Daha önce çalıştığınız projeler, tamamlanma süreleri ve proje başarı durumu? <span style={{ color: 'red' }}>*</span></h4>
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
                            Gönder
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default App;