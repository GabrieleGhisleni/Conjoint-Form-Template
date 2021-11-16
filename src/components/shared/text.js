
export const TEXT = {
    en: {
        title: <span>Economies</span>,
        description: (
            <span>
                Hi, thank you to be here.
                <br />
                
                The following questions are thought to understand the more important
                features for 'Economies' which is an application made for handle the
                domestic economies. Below you can find the main features that you are 
                going to rate and also a video (highly recommended, ~ 2m) showing off them.
                <br/><br/>
                Otherwhise you can have a look by yourself here: &nbsp;
                <a 
                target='_blank'
                href='https://smart-economies.herokuapp.com/home' 
                style={{color:"purple", fontWeight:"bold", fontStyle:"italic"}}>
                    Economies</a> 
                
                <br />
                These features are:
                    <br/><br/>&#8226; Device
                        <ol> 
                            <li> Web Application (mobile friendly, but have to browse on google) </li>
                            <li> Smartphone application (installed in your device)  </li>
                        </ol>
                    <br/>
                    &#8226; Analytical Dashboard
                        <ol> 
                            <li> Advanced Graphics (All the graphics shown in "Dashboard" during the video) </li>
                            <div className='text-center'>
                                <img className='img-fluid' 
                                src={process.env.PUBLIC_URL+"/adv.png"} 
                                style={{borderRadius: "30px", padding: "10px", maxHeight: "400px"}}
                                alt='dashboard'/>
                        </div>
                            <li> Basic graphics (Only the month summary pie chart in "Summary")  </li>
                            <div className='text-center'>
                                <img className='img-fluid' 
                                src={process.env.PUBLIC_URL+"/bs.png"} 
                                style={{borderRadius: "30px", padding: "10px", maxHeight: "400px"}}
                                alt='dashboard'/>
                        </div>

                        </ol>
                    <br/>
                    &#8226; Number of Categories that can be created.
                        <ol> 
                            <li> Custom categories  5</li>
                            <li> Custom categories 10 </li>
                            <li> Custom categories 15</li>
                        </ol>
                    <br/>
                    <li> Number of SubCategories that can be created.
                        <ol> 
                            <li> Custom subcategories  10</li>
                            <li> Custom subcategories 20 </li>
                            <li> Custom subcategories 50</li>
                        </ol>
                    </li><br/>
                    &#8226; Recurrent Transaction
                        <ol> 
                            <li> Possibility to insert transaction as recurrent, so the app will upload  automatically the 
                                cost at each expiration time, like each first of month register the rent cost.  </li>
                            <li> No Recurrent Transaction. </li>
                        </ol>
                    <br/>
                    &#8226; Price
                        <ol>
                        <li> 1$/month. </li>
                            <li> 2$/month.</li>
                            <li> 5$/month.</li>
                        </ol>
                    <br/>
                
                The time to complete the form is estimated ~ 9 m.<br/><br/>
                PS: Try when answering to assume that you are interested in a similar product even if you are not :D
            </span>
        ),
        h2: <span>Video Tutorial</span>,
        url: "https://www.youtube.com/embed/9jusKbecLaQ",
    },

    // /////////////////////////////////////////////////////////// IT
    it: {
        title: <span>Economies</span>,
        description: (
            <span>
                Ciao, grazie per essere qui.
                <br />
                Le seguenti domande sono pensate per comprendere quali possano essere 
                le features più importanti per un applicazione finalizzata alla gestione 
                delle finanze domestiche. Di seguito sono illustrate quelle che sono
                state identificate come tali (è inoltre presente un video illustrativo
                raccomandato dalla durata di circa 2 minuti).
                <br/><br/>
                Oppure puoi dare un'occhiata tu stesso all'app qui: &nbsp;
                <a 
                href='https://smart-economies.herokuapp.com/home' 
                target='_blank'
                style={{color:"purple", fontWeight:"bold", fontStyle:"italic"}}>
                    Economies</a> 
                <br /> <br />
                Le features sono:
                
                &#8226; Piattaforma
                        <ol> 
                            <li> Applicazione Web (mobile friendly, ma necessità di aprire il browser). </li>
                            <li> Applicazione installabile su smartphone.  </li>
                        </ol>
                    <br/>
                    &#8226; Analytical Dashboard
                        <ol> 
                            <li> Grafiche avanzate (Tutte le grafiche mostrate nel video di sotto, incluse quelle base). </li>
                        <div className='text-center'>
                                <img className='img-fluid' 
                                src={process.env.PUBLIC_URL+"/adv.png"} 
                                style={{borderRadius: "30px", padding: "10px", maxHeight: "400px"}}
                                alt='dashboard'/>
                        </div>
                            <li> Grafiche base (Solamente il grafico nella sezione "Summary").  </li>
                        <div className='text-center'>
                                <img className='img-fluid' 
                                src={process.env.PUBLIC_URL+"/bs.png"} 
                                style={{borderRadius: "30px", padding: "10px", maxHeight: "400px"}}
                                alt='dashboard'/>
                        </div>
                        </ol>
                    <br/>
                    &#8226;  Numero massimo di categorie creabili.
                        <ol>
                            <li> Categorie personali consentite  5.</li>
                            <li>  Categorie personali consentite 10. </li>
                            <li>  Categorie personali consentite 15.</li>
                        </ol>
                    <br/>
                    &#8226;  Numero massimo di sottocategorie creabili.
                        <ol> 
                            <li> SottoCategorie personali consentite  10.</li>
                            <li> SottoCategorie personali consentite 20. </li>
                            <li> SottoCategorie personali consentite 50.</li>
                        </ol>
                    <br/>
                    &#8226;  Transazioni Ricorrenti
                        <ol> 
                            <li> Gestione automatica delle transazioni ricorrenti (come affitto etc.), 
                                una volta specificate come tali in fase di inserimento, l'app provvederà a registrare il pagamento ad ogni scadenza.  </li>
                            <li> No transazioni ricorrenti. </li>
                        </ol>
                    <br/>
                    &#8226;  Prezzo
                        <ol> 
                            <li> 1$/mese. </li>
                            <li> 2$/mese.</li>
                            <li> 5$/mese.</li>
                        </ol>
                    <br/>
                
               Il tempo di completamento del form è di circa 9 minuti + 2 di video.
               <br/><br/>
               PS: Mentre rispondi cerca di metterti nei panni di un consumatore il quale è interessato a un prodotto simile, anche se non lo sei :D
            </span>
        ),
        h2: <span>Video Tutorial</span>,
        url: "https://www.youtube.com/embed/9jusKbecLaQ",
    },
};
