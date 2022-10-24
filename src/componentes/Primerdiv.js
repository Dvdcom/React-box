import { useState } from "react";

function Primerdiv() {
    const [wi, setWi] = useState('');
    const [ei, setEi] = useState('');
    const [co, setCo] = useState('');

    const crearCuadraditos = (w, h, c) => {

        if (document.querySelector('.form-control-sm').value !== "") {
            const cuadradito = `<div class="cuadradito m-2" style="width: ${w.wi}px;height: ${h.ei}px;background-color:${c.co}"></div>`
            document.querySelector('.ccuadraditos').innerHTML += cuadradito;
            let inputs = document.querySelectorAll('.form-control-sm');
            inputs.forEach(element => {
                element.value = "";
            });
        } else {
            alert('Debe de configurar un cuadradito');
        }

    };

    return (
        <div className="container">
            <h2>Hola Mundo</h2>
            <form onSubmit={ev => {
                ev.preventDefault();
            }} className="form-control">
                <div className="mb-3 grupo">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-light">Width:</label>
                    <input type="text" className="form-control-sm" name="width" id="exampleFormControlInput1" placeholder="0px" value={wi} onChange={ev => setWi(ev.target.value)} />
                </div>
                <div className="mb-3 grupo">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-light">Heigth:</label>
                    <input type="text" className="form-control-sm" name="heigth" id="exampleFormControlInput1" placeholder="0px" value={ei} onChange={ev => setEi(ev.target.value)} />
                </div>
                <div className="mb-3 grupo">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-light">Color:</label>
                    <div className="grupo checks">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="blue" onChange={ev => setCo(ev.target.value)} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Azul</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="red" onChange={ev => setCo(ev.target.value)} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Rojo</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="green" onChange={ev => setCo(ev.target.value)} />
                            <label className="form-check-label" htmlFor="inlineRadio3">Verde</label>
                        </div>
                    </div>
                </div>
                <div><button type="button" onClick={() => {
                    crearCuadraditos({ wi }, { ei }, { co });
                }} className="btn btn-sm btn-info">Crear</button></div>
            </form>
        </div>
    );
};

export default Primerdiv;

