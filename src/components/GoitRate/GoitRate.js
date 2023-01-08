import React, { Component } from 'react';
import css from './GoitRate.module.css';

class StudentNameInput extends Component {
  render() {
    return (
      <input
        className={css.StudentName_Input}
        name="studentName"
        onChange={e => this.props.onStudentNameChange(e.target.value)}
        value={this.props.studentName}
      />
    );
  }
}

class FavouriteSubjectInput extends Component {
  render() {
    //оголошуємо метод рендер
    return (
      <input
        name="favourireSubject"
        className={css.FavourireSubject_Input}
        onChange={e => this.props.onFavouriteSubjectChange(e.target.value)}
        value={this.props.favouriteSubject}
      />
    );
  }
}

class DisplayResults extends Component {
  // буде приймати в себе результат попередніх двох компонентів
  render() {
    return (
      <p className={css.Display_Results_Style}>
        Hello {this.props.studentName}. So good, so far in GoIT with{' '}
        {this.props.favouriteSubject}!
      </p>
    );
  }
}

class GoitRate extends Component {
  constructor() {
    super();

    this.state = {
      studentName: 'Sasha',
      favouriteSubject: 'React',
    };
  }

  //оголошуємо метод, який буде змінювати імя студента і додаємо його нижче в рендер в комп студентінпут
  setStudentName = studentName => {
    this.setState({ ...this.state, studentName });
  };

  // ... - коли є кілька проперті, треба створити новий обєкт і деструктуризувати його

  setFavouriteSubject = favouriteSubject => {
    this.setState({ ...this.state, favouriteSubject });
  };

  render() {
    return (
      <>
        <StudentNameInput
          className="StudentName_Input"
          studentName={this.state.studentName}
          onStudentNameChange={this.setStudentName}
        />
        <FavouriteSubjectInput
          favouriteSubject={this.state.favouriteSubject}
          onFavouriteSubjectChange={this.setFavouriteSubject}
        />
        <DisplayResults
          studentName={this.state.studentName}
          favouriteSubject={this.state.favouriteSubject}
        />
      </>
    );
  }
}

export default GoitRate;
