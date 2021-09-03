import React from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

import "./App.css";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      aLouer: {
        typeLocation: "",
        dureeLocation: "",
        nombrePieces: "",
        superficie: "",
        capitalMobilier: "",
        dateDebutLocation: "",
        adresseLocation: "",
        codePostal: "",
        ville: "",
      },
      Proprietaire: {
        civilite: "",
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        adressePrincipale: "",
        CodePostal: "",
        ville: "",
      },
    };
    this.typeLocationChange = this.typeLocationChange.bind(this);
    this.nbrPiecesChange = this.nbrPiecesChange.bind(this);
    this.superficieChange = this.superficieChange.bind(this);
    this.capitalMobilierChange = this.capitalMobilierChange.bind(this);
    this.dateLocationChange = this.dateLocationChange.bind(this);
    this.suivantClick = this.suivantClick.bind(this);
    this.precedentClick = this.precedentClick.bind(this);
    this.civiliteChange = this.civiliteChange.bind(this);
    this.nomChange = this.nomChange.bind(this);
    this.prenomChange = this.prenomChange.bind(this);
    this.telephoneChange = this.telephoneChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.adresseChange = this.adresseChange.bind(this);
    this.codePostalChange = this.codePostalChange.bind(this);
    this.villeChange = this.villeChange.bind(this);
    this.adresseLocationChange = this.adresseLocationChange.bind(this);
    this.codePostalLocationChange = this.codePostalLocationChange.bind(this);
    this.villeLocationChange = this.villeLocationChange.bind(this);
  }
  typeLocationChange(e) {
    const value = e.target.innerText;
    this.setState((state) => ((state.aLouer.typeLocation = value), state));
  }
  nbrPiecesChange(e) {
    e.preventDefault();
    const value = e.target.innerText;
    this.setState((state) => ((state.aLouer.nombrePieces = value), state));
  }
  superficieChange(e) {
    const value = e.target.value;
    this.setState((state) => ((state.aLouer.superficie = value), state));
    console.log(this.state.aLouer);
  }
  capitalMobilierChange(e) {
    const value = e.target.innerText;
    this.setState((state) => ((state.aLouer.capitalMobilier = value), state));
    console.log(this.state.aLouer);
  }
  dateLocationChange(e) {
    const value = e.target.value;
    this.setState((state) => ((state.aLouer.dateDebutLocation = value), state));
    console.log(this.state.aLouer);
  }
  precedentClick() {
    this.setState({ page: 1 });
    console.log(this.state);
  }
  suivantClick() {
    this.setState({ page: 2 });
    console.log(this.state);
  }
  civiliteChange(e) {
    const value = e.target.innerText;
    this.setState((state) => ((state.Proprietaire.civilite = value), state));
  }
  nomChange(e) {
    const value = e.target.value;
    this.setState((state) => ((state.Proprietaire.nom = value), state));
  }
  prenomChange(e) {
    const value = e.target.value;
    this.setState((state) => ((state.Proprietaire.prenom = value), state));
  }
  telephoneChange(e) {
    const value = e.target.value;
    this.setState((state) => ((state.Proprietaire.telephone = value), state));
  }
  emailChange(e) {
    const value = e.target.value;
    this.setState((state) => ((state.Proprietaire.email = value), state));
  }
  adresseChange(e) {
    const value = e.target.value;
    this.setState(
      (state) => ((state.Proprietaire.adressePrincipale = value), state)
    );
  }
  codePostalChange(e) {
    const value = e.target.value;
    this.setState({ ...this.state.Proprietaire, codePostal: value });
  }
  villeChange(e) {
    const value = e.target.value;
    this.setState((state) => ((state.Proprietaire.ville = value), state));
  }
  adresseLocationChange(e) {
    const value = e.target.value;
    this.setState((state) => ((state.aLouer.adresseLocation = value), state));
  }
  codePostalLocationChange(e) {
    const value = e.target.value;
    this.setState((state) => ((state.aLouer.codePostal = value), state));
  }
  villeLocationChange(e) {
    const value = e.target.value;
    this.setState((state) => ((state.aLouer.ville = value), state));
  }
  render() {
    return (
      <div className="container">
        {this.state.page === 1 && (
          <PageOne
            typeLocation={this.state.aLouer.typeLocation}
            typeLocationChange={this.typeLocationChange}
            nbrPiecesChange={this.nbrPiecesChange}
            superficie={this.state.aLouer.superficie}
            superficieChange={this.superficieChange}
            capitalMobilierChange={this.capitalMobilierChange}
            dateDebutLocation={this.state.aLouer.dateDebutLocation}
            dateLocationChange={this.dateLocationChange}
            selected={this.state.aLouer.nombrePieces}
          ></PageOne>
        )}
        {this.state.page === 2 && (
          <PageTwo
            civilite={this.state.Proprietaire.civilite}
            civiliteChange={this.civiliteChange}
            nom={this.state.Proprietaire.nom}
            nomChange={this.nomChange}
            prenom={this.state.Proprietaire.prenom}
            prenomChange={this.prenomChange}
            telephone={this.state.Proprietaire.telephone}
            telephoneChange={this.telephoneChange}
            email={this.state.Proprietaire.email}
            emailChange={this.emailChange}
            adresse={this.state.Proprietaire.adressePrincipale}
            adresseChange={this.adresseChange}
            codePostal={this.state.Proprietaire.codePostal}
            codePostalChange={this.codePostalChange}
            ville={this.state.Proprietaire.ville}
            villeChange={this.villeChange}
            adresseLocation={this.state.aLouer.adresseLocation}
            adresseLocationChange={this.adresseLocationChange}
            codePostalLocation={this.state.aLouer.CodePostal}
            codePostalLocationChange={this.codePostalLocationChange}
            villeLocation={this.state.aLouer.ville}
            villeLocationChange={this.villeLocationChange}
          ></PageTwo>
        )}
        <div className="mt-5">
          <button
            type="submit"
            onClick={this.precedentClick}
            className="float-left btn btn-primary "
          >
            Précédent
          </button>
          <button
            type="submit"
            onClick={this.suivantClick}
            className="float-right btn btn-danger"
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }
}
export default App;
