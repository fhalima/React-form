import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { render } from "@testing-library/react";
function PageOne({
  typeLocationChange,
  typeLocation,
  nbrPiecesChange,
  superficie,
  superficieChange,
  capitalMobilierChange,
  dateDebutLocation,
  dateLocationChange,
  selected,
}) {
  return (
    <form className="mt-5">
      <div className="form-group row mx-auto">
        <label className="col-5 col-form-label plr-15">
          Votre maison est louer:
        </label>

        <div className="col">
          <div className="row">
            <button
              className="btn col mr-5 btn-light"
              type="button"
              value="L'année"
              onClick={typeLocationChange}
            >
              L'année
            </button>
            <button
              className="btn col btn-light ml-5 "
              type="button"
              value="En courte"
              onClick={typeLocationChange}
            >
              En courte
            </button>
          </div>
        </div>
      </div>

      <div className="form-group row mx-auto">
        <label className="col-5 align-items-right m-0">Nombre de pièces</label>
        <Pieces nbr={9} click={nbrPiecesChange} selected={selected}></Pieces>
        {/* {pieces(9)} */}
      </div>

      <div className="form-group row mx-auto">
        <label className="col-5 align-items-right m-0" htmlFor="metreCube">
          Indiquer le nombre de nombre de m2:
        </label>
        <input
          className="form-control col-7"
          type="number"
          id="metreCube"
          value={superficie}
          onChange={superficieChange}
          placeholder="m2"
        />
      </div>

      <div className="form-group row mx-auto">
        <label className="col-5 col-form-label plr-15">
          Choisissez le capital mobilier
        </label>

        <div className="col mx-auto">
          <div className="row">
            <button
              className="btn btn-light col mr-5"
              type="button"
              value={10000}
              onClick={capitalMobilierChange}
            >
              10 000€
            </button>
            <button
              className="btn btn-light col ml-5 "
              type="button"
              value={20000}
              onClick={capitalMobilierChange}
            >
              20 000€
            </button>
          </div>
        </div>
      </div>

      <div className="form-group row mx-auto">
        <label className="col-5 align-items-right m-0" htmlFor="metreCube">
          Date à laquelle vous souhaitez débuter votre assurance :
        </label>
        <input
          className="form-control col-7"
          type="date"
          id="metreCube"
          value={dateDebutLocation}
          onChange={dateLocationChange}
          placeholder="jj/mm/aaaa"
        />
      </div>
    </form>
  );
}

function PageTwo({
  civilite,
  civiliteChange,
  nomChange,
  nom,
  prenom,
  prenomChange,
  telephone,
  telephoneChange,
  email,
  emailChange,
  adresse,
  adresseChange,
  codePostal,
  codePostalChange,
  ville,
  villeChange,
  adresseLocation,
  adresseLocationChange,
  codePostalLocation,
  codePostalLocationChange,
  villeLocation,
  villeLocationChange,
}) {
  return (
    <div>
      <form className="mt-5">
        <div className="form-group row mx-auto">
          <button
            className="btn btn-light col mr-5 "
            type="button"
            value="Madame"
            onClick={civiliteChange}
            id="civilite"
          >
            Madame
          </button>

          <button
            className="btn col btn-light ml-5 "
            type="button"
            value="Monsieur"
            onClick={civiliteChange}
            id="civilite"
          >
            Monsieur
          </button>
          <button
            className="btn col ml-5 btn-light"
            type="button"
            value="Société"
            onClick={civiliteChange}
            id="civilite"
          >
            Société
          </button>
        </div>

        <div className="form-group row mx-auto">
          <label className="col-5 align-items-right m-0" htmlFor="nom">
            Nom
          </label>
          <input
            className="form-control col-7"
            type="text"
            id="nom"
            value={nom}
            onChange={nomChange}
            placeholder=""
          />
        </div>

        <div className="form-group row mx-auto">
          <label className="col-5 align-items-right m-0" htmlFor="prenom">
            Prénom
          </label>
          <input
            className="form-control col-7"
            type="text"
            id="prenom"
            value={prenom}
            onChange={prenomChange}
            placeholder=""
          />
        </div>

        <div className="form-group row mx-auto">
          <label className="col-5 align-items-right m-0" htmlFor="telephone">
            Téléphone
          </label>
          <input
            className="form-control col-7"
            type="number"
            id="telephone"
            value={telephone}
            onChange={telephoneChange}
            placeholder=""
          />
        </div>
        <div className="form-group row mx-auto">
          <label className="col-5 align-items-right m-0" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-7"
            type="email"
            id="email"
            value={email}
            onChange={emailChange}
            placeholder=""
          />
        </div>
        <div className="form-group row mx-auto">
          <label className="col-5 align-items-right m-0" htmlFor="adresse">
            Adresse
          </label>
          <input
            className="form-control col-7"
            type="adresse"
            id="adresse"
            value={adresse}
            onChange={adresseChange}
            placeholder=""
          />
        </div>

        <div className="form-group row mx-auto">
          <label className="col-5 align-items-right m-0" htmlFor="cp">
            Code Postal
          </label>
          <input
            className="form-control col-7"
            type="text"
            id="cp"
            value={codePostal}
            onChange={codePostalChange}
            placeholder=""
          />
        </div>

        <div className="form-group row mx-auto">
          <label className="col-5 align-items-right m-0" htmlFor="ville">
            Ville
          </label>
          <input
            className="form-control col-7"
            type="text"
            id="ville"
            value={ville}
            onChange={villeChange}
            placeholder=""
          />
        </div>
      </form>

      <div>
        <form>
          <h2>Informations de votre bien en location</h2>
          <div className="form-group row mx-auto">
            <label
              className="col-5 align-items-right m-0"
              htmlFor="adresseLocation"
            >
              Adresse de location
            </label>
            <input
              className="form-control col-7"
              type="text"
              id="adresseLocation"
              value={adresseLocation}
              onChange={adresseLocationChange}
              placeholder=""
            />
          </div>
          <div className="form-group row mx-auto">
            <label className="col-5 align-items-right m-0" htmlFor="cpLocation">
              Code Postal
            </label>
            <input
              className="form-control col-7"
              type="text"
              id="cpLocation"
              value={codePostalLocation}
              onChange={codePostalLocationChange}
              placeholder=""
            />
          </div>

          <div className="form-group row mx-auto">
            <label
              className="col-5 align-items-right m-0"
              htmlFor="villeLocation"
            >
              Ville
            </label>
            <input
              className="form-control col-7"
              type="text"
              id="villeLocation"
              value={villeLocation}
              onChange={villeLocationChange}
              placeholder=""
            />
          </div>
        </form>
      </div>
    </div>
  );
}
function Pieces({ nbr, click, selected }) {
  const buttons = [];
  for (var n = 1; n <= nbr; n++) {
    buttons.push(
      <button
        className="btn btn-light mr-1 col-auto"
        value={n}
        key={n}
        onClick={click}
      >
        {n}
      </button>
    );
  }

  return (
    <div className="col-auto">
      <div className="row">{buttons}</div>
    </div>
  );
}

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
    const value = e.target.value;
    this.setState((state) => ((state.aLouer.typeLocation = value), state));
    console.log(this.state.aLouer);
  }
  nbrPiecesChange(e) {
    e.preventDefault();
    const value = e.target.value;
    console.log(e.target.value);
    this.setState((state) => ((state.aLouer.nombrePieces = value), state));
  }
  superficieChange(e) {
    const value = e.target.value;
    this.setState((state) => ((state.aLouer.superficie = value), state));
    console.log(this.state.aLouer);
  }
  capitalMobilierChange(e) {
    const value = e.target.value;
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
    const el = e.target;
    this.setState((state) => ((state.Proprietaire.civilite = el.value), state));
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
    this.setState((state) => ((state.Proprietaire.codePostal = value), state));
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
