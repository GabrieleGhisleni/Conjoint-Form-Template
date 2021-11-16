export const SETTINGS = {
    jsonbin: "https://api.jsonbin.io/b/618d6486763da443125f8109/",
    product_profiles:3,
    n_attributes:6,
    n_questions:15 ,

    it: {
        attributes: {
            0: "Dispositivo",
            1: "Dashboard",
            2: "Max Categorie",
            3: "Max Subcategorie",
            4: "Transazioni Ricorrenti",
            5: "Prezzo",
        },
        mask:{
            0: {0:'Web App', 1:'Mobile App'},
            1: {0:'Grafiche avanzate', 1:'Grafiche base'},
            2: {0:'Categorie 5 ', 1:'Categorie 10', 2:'Categorie 20'},
            3: {0:'Sottocategorie 10', 1:'Sottocategorie  20', 2:'Sottocategorie  50'},
            4: {0: "Transazioni ricorrenti", 1:"No transazioni ricorrenti"},
            5: {0:'1$/mese', 1:'2$/mese', 2:'5$/mese'}
        }
    },

    // ENGLISH
    en: {
        attributes: {
            0: "Device",
            1: "Dashboard",
            2: "Max Categorie",
            3: "Max Subcategorie",
            4: "Recurring transaction",
            5: "Price",
        },
        mask:{
            0: {0:'Web App', 1:'Mobile App'},
            1: {0:'Advanced graphics', 1:'Basic graphics'},
            2: {0:'Categories 5', 1:'Categories 10', 2:'Categories 20'},
            3: {0:'Subcategories 10', 1:'Subcategories 20', 2:'Subcategories 50'},
            4: {0: "Recurring transaction", 1:"No recurring transaction"},
            5:{0:'1$/month', 1:'2$/month', 2:'5$/month'},

        }
    },
};
