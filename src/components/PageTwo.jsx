import React from "react";

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
    <form className="mt-5 row">
      <div className="col-7">
        <div className="form-group row mx-auto">
          <div
            className="btn-group btn-group-toggle col p-0"
            data-toggle="buttons"
          >
            <label
              className="btn btn-outline-success mr-1"
              onClick={civiliteChange}
            >
              <input
                className=""
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                checked
                onChange={civiliteChange}
              />
              Madame
            </label>
            <label
              className="btn btn-outline-success mr-1"
              onClick={civiliteChange}
            >
              <input
                className=""
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                checked
                onChange={civiliteChange}
              />
              Monsieur
            </label>
            <label
              className="btn btn-outline-success mr-1"
              onClick={civiliteChange}
            >
              <input
                className=""
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                checked
                onChange={civiliteChange}
              />
              Société
            </label>
          </div>
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
      </div>
      <hr />
      <div className="col-5">
        {/* <form> */}
        <h4>Informations de votre bien en location</h4>
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
      </div>
    </form>
  );
}

export default PageTwo;
