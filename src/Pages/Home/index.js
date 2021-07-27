import React from "react";
import "./styles.css";

// COMPONENTES
import { Button } from "../../Components/Button/index";
import Form from "../../Components/Form/index";

// ROUTE COMPONENT
// componente de rota que direciona para outra página
import DinaPredictLi from "../../RouteComponents/DinaPredictLi/index";

// IMAGENS
// section 1
import deskmob from "../../Images/Home/Section-1/desktop-and-mobile.png";
import dynapredict from "../../Images/Home/Section-1/logo-dynapredict.png";
// section 2
import yellowbox from "../../Images/Home/Section-2/sensor-tca.png";
import whitebox from "../../Images/Home/Section-2/sensor-af.png";
import bluebox from "../../Images/Home/Section-2/sensor-hf.png";



function Home() {
    return (
        <>
            <section className="home_section1">
                <div className="home_section1_main_div">
                    <div className="home_section1_text_div">
                        <h1>Solução<br />DynaPredict</h1>
                        <div>
                            <img src={dynapredict} />
                        </div>
                    </div>

                    <div className="home_section1_img">
                        <img src={deskmob} />
                    </div>
                </div>
            </section>










            <section className="home_section2">
                <div className="home_section2_text_div">
                    <h2>Sensores para Manutenção Preditiva</h2>
                    <p>Opções de sensores sem fio, ou DynaLoggers com sensores de vibração triaxial e temperatura embarcados, que comunicam por Bluetooth com o App mobile ou Gateway, registrando os dados monitorados em sua memória interna. Por conexão internet esses dados são centralizados na Plataforma DynaPredict Web para análise, prognóstico e tomada de decisão.</p>
                    <Button>
                        <DinaPredictLi name="VER MAIS" />
                    </Button>
                </div>
                
                <div className="home_section2_img_div">
                    <div className="home_section2_boxes_div">
                        <img src={yellowbox} alt="sensor-tca" />
                        <div>TcA+</div>
                    </div>
                    <div className="home_section2_boxes_div">
                        <img src={whitebox} alt="sensor-af" />
                        <div>AS</div>
                    </div>
                    <div className="home_section2_boxes_div">
                        <img src={bluebox} alt="sensor-hf" />
                        <div>HF</div>
                    </div>
                </div>
            </section>










            <section className="home_section3">
                <div>
                    <h3>Ficou com dúvida?<br />Nós entramos em contato com você</h3>
                </div>
                <Form />
            </section>
        </>
    )
}

export default Home
