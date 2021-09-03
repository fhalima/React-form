import React from "react";

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
        <label
          className="col-5 col-form-label plr-15"
          onClick={typeLocationChange}
        >
          Votre maison est louer:
        </label>

        <div
          className="btn-group btn-group-toggle col-7 p-0"
          data-toggle="buttons"
        >
          <label
            className="btn btn-outline-success mr-1"
            onClick={typeLocationChange}
          >
            <input
              className=""
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              checked
              onChange={typeLocationChange}
            />
            <img
              className="img-responsive col"
              src="/annee.png"
              alt="Grapefruit slice atop a pile of other slices"
            />
            <p className="col">
              A l'année au titre de la résidence principale du locataire ou des
              locataires (365 jours)
            </p>
          </label>
          <label
            className="btn btn-outline-success ml-1"
            onClick={typeLocationChange}
          >
            <input
              type="radio"
              name="options"
              id="option2"
              autoComplete="off"
              onChange={typeLocationChange}
            />

            <img
              className="col"
              src="/mois.png"
              alt="Grapefruit slice atop a pile of other slices"
            />
            <p className="col p-0">
              En courte durée (location saisonnière avec renonciation à recours
              contre le locataire ())
            </p>
          </label>
        </div>
      </div>

      <div className="form-group row mx-auto">
        <label className="col-5 align-items-right m-0">Nombre de pièces</label>
        <Pieces nbr={9} click={nbrPiecesChange} selected={selected}></Pieces>
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

        <div
          className="btn-group btn-group-toggle col-7 p-0"
          data-toggle="buttons"
        >
          <label
            className="btn btn-outline-success mr-1"
            onClick={capitalMobilierChange}
          >
            <input
              className=""
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              checked
              onChange={capitalMobilierChange}
            />
            10000
          </label>

          <label
            className="btn btn-outline-success ml-1 "
            onClick={capitalMobilierChange}
          >
            <input
              className=""
              type="radio"
              name="options"
              id="option1"
              autoComplete="off"
              checked
              onChange={capitalMobilierChange}
            />{" "}
            20000
          </label>

          {/* <div className="row">
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
          </div> */}
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

function Pieces({ nbr, click, selected }) {
  const buttons = [];
  for (var n = 1; n <= nbr; n++) {
    buttons.push(
      <label
        className="btn btn-outline-success mr-1 col-auto"
        key={n}
        onClick={click}
      >
        <input
          type="radio"
          name="options"
          id="option2"
          value={n}
          autoComplete="off"
          onChange={click}
        />{" "}
        {n}
      </label>
    );
  }

  return (
    <div className="btn-group btn-group-toggle  " data-toggle="buttons">
      {buttons}
    </div>
    // </div>
  );
}

export default PageOne;
