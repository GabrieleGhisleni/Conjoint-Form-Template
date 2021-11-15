export const SETTINGS = {
    jsonbin: "<your_api_kei>",
    product_profiles:3,
    n_attributes:5,
    n_questions:1, 

    it: {
        attributes: {
            0: "Dispositivo",
            1: "Dashboard",
            2: "Max Categorie",
            3: "Max Subcategorie",
            4: "Prezzo",
        },
        mask:{
            0: {0:'Web App', 1:'Mobile App'},
            1: {0:'Grafiche avanzate', 1:'Grafiche base'},
            2: {0:'Categorie 5 ', 1:'Categorie 10', 2:'Categorie 15'},
            3: {0:'Sottocategorie 10', 1:'Sottocategorie  20', 2:'Sottocategorie  50'},
            4: {0:'Gratis', 1:'1$/month', 2:'Once 5$'},
        }
    },

    // ENGLISH
    en: {
        attributes: {
            0: "Device",
            1: "Dashboard",
            2: "Max Categorie",
            3: "Max Subcategorie",
            4: "Prezzo",
        },
        mask:{
            0: {0:'Web App', 1:'Mobile App'},
            1: {0:'Advanced graphics', 1:'Restricted graphics'},
            2: {0:'5 categories', 1:'10 categories', 2:'15 categories'},
            3: {0:'5 subcategories', 1:'10 subcategories', 2:'15 subcategories'},
            4: {0:'5$', 1:'10$', 2:'15$'},

        }
    },
};
